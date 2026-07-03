package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/open-government-portal-sdk/go"
	"github.com/voxgig-sdk/open-government-portal-sdk/go/core"

	vs "github.com/voxgig-sdk/open-government-portal-sdk/go/utility/struct"
)

func TestDatasetEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Dataset(nil)
		if ent == nil {
			t.Fatal("expected non-nil DatasetEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := datasetBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "dataset." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set OPENGOVERNMENTPORTAL_TEST_DATASET_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		datasetRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.dataset", setup.data)))
		var datasetRef01Data map[string]any
		if len(datasetRef01DataRaw) > 0 {
			datasetRef01Data = core.ToMapAny(datasetRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = datasetRef01Data

		// LIST
		datasetRef01Ent := client.Dataset(nil)
		datasetRef01Match := map[string]any{}

		datasetRef01ListResult, err := datasetRef01Ent.List(datasetRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, datasetRef01ListOk := datasetRef01ListResult.([]any)
		if !datasetRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", datasetRef01ListResult)
		}

		// LOAD
		datasetRef01MatchDt0 := map[string]any{
			"id": datasetRef01Data["id"],
		}
		datasetRef01DataDt0Loaded, err := datasetRef01Ent.Load(datasetRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		datasetRef01DataDt0LoadResult := core.ToMapAny(datasetRef01DataDt0Loaded)
		if datasetRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if datasetRef01DataDt0LoadResult["id"] != datasetRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func datasetBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "dataset", "DatasetTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read dataset test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse dataset test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"dataset01", "dataset02", "dataset03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("OPENGOVERNMENTPORTAL_TEST_DATASET_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"OPENGOVERNMENTPORTAL_TEST_DATASET_ENTID": idmap,
		"OPENGOVERNMENTPORTAL_TEST_LIVE":      "FALSE",
		"OPENGOVERNMENTPORTAL_TEST_EXPLAIN":   "FALSE",
		"OPENGOVERNMENTPORTAL_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["OPENGOVERNMENTPORTAL_TEST_DATASET_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["OPENGOVERNMENTPORTAL_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["OPENGOVERNMENTPORTAL_APIKEY"],
			},
			extra,
		})
		client = sdk.NewOpenGovernmentPortalSDK(core.ToMapAny(mergedOpts))
	}

	live := env["OPENGOVERNMENTPORTAL_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["OPENGOVERNMENTPORTAL_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
