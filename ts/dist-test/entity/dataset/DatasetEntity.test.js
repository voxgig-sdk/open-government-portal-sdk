"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('DatasetEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when OPEN_GOVERNMENT_PORTAL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('OPEN_GOVERNMENT_PORTAL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.OpenGovernmentPortalSDK.test();
        const ent = testsdk.Dataset();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.OPEN_GOVERNMENT_PORTAL_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'dataset.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "description", "req": false, "short": "Detailed description of the dataset", "type": "`$STRING`", "index$": 0 }, { "active": true, "format": "uri", "name": "download_url", "req": false, "short": "URL to download the dataset", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "formats", "req": false, "short": "Available formats for the dataset", "type": "`$ARRAY`", "index$": 2 }, { "active": true, "name": "id", "req": false, "short": "Unique identifier for the dataset", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "jurisdiction", "req": false, "short": "Jurisdiction level of the dataset", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "keywords", "req": false, "short": "Keywords associated with the dataset", "type": "`$ARRAY`", "index$": 5 }, { "active": true, "name": "publisher", "req": false, "short": "Organization that published the dataset", "type": "`$STRING`", "index$": 6 }, { "active": true, "format": "date", "name": "record_modified", "req": false, "short": "Date when the dataset was last modified", "type": "`$STRING`", "index$": 7 }, { "active": true, "format": "date", "name": "record_released", "req": false, "short": "Date when the dataset was first released", "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "resources", "req": false, "short": "List of resources associated with the dataset", "type": "`$ARRAY`", "index$": 9 }, { "active": true, "name": "title", "req": false, "short": "Title of the dataset", "type": "`$STRING`", "index$": 10 }], "id": { "field": "id", "name": "id" }, "name": "dataset", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "format", "orig": "format", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "query", "name": "keyword", "orig": "keyword", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "example": 10, "kind": "query", "name": "limit", "orig": "limit", "reqd": false, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "kind": "query", "name": "organization", "orig": "organization", "reqd": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "example": 1, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 4 }, { "active": true, "kind": "query", "name": "q", "orig": "q", "reqd": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "example": "relevance", "kind": "query", "name": "sort", "orig": "sort", "reqd": false, "type": "`$STRING`", "index$": 6 }] }, "contract": { "id": "GET /opendata/", "json": "{\"operationId\":\"searchDatasets\",\"parameters\":[{\"description\":\"Search query term to filter datasets\",\"in\":\"query\",\"name\":\"q\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Sort order for results\",\"in\":\"query\",\"name\":\"sort\",\"required\":false,\"schema\":{\"default\":\"relevance\",\"enum\":[\"relevance\",\"modified\",\"created\",\"title_asc\",\"title_desc\"],\"type\":\"string\"}},{\"description\":\"Filter by organization/publisher name\",\"in\":\"query\",\"name\":\"organization\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by dataset format\",\"in\":\"query\",\"name\":\"format\",\"required\":false,\"schema\":{\"enum\":[\"JSON\",\"CSV\",\"XLSX\",\"HTML\",\"XML\",\"ZIP\",\"JSONL\",\"PNG\",\"SQL\"],\"type\":\"string\"}},{\"description\":\"Filter by keyword tags\",\"in\":\"query\",\"name\":\"keyword\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Number of results per page\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":10,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"page\":{\"description\":\"Current page number\",\"type\":\"integer\"},\"results\":{\"items\":{\"properties\":{\"description\":{\"description\":\"Detailed description of the dataset\",\"type\":\"string\"},\"download_url\":{\"description\":\"URL to download the dataset\",\"format\":\"uri\",\"type\":\"string\"},\"formats\":{\"description\":\"Available formats for the dataset\",\"example\":[\"JSON\",\"XLSX\",\"HTML\",\"CSV\"],\"items\":{\"enum\":[\"JSON\",\"CSV\",\"XLSX\",\"HTML\",\"XML\",\"ZIP\",\"JSONL\",\"PNG\",\"SQL\"],\"type\":\"string\"},\"type\":\"array\"},\"id\":{\"description\":\"Unique identifier for the dataset\",\"type\":\"string\"},\"jurisdiction\":{\"description\":\"Jurisdiction level of the dataset\",\"enum\":[\"Federal\",\"Provincial\",\"Municipal\"],\"example\":\"Federal\",\"type\":\"string\"},\"keywords\":{\"description\":\"Keywords associated with the dataset\",\"example\":[\"Proactive Disclosure\",\"PD\",\"Travel Expenses\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"publisher\":{\"description\":\"Organization that published the dataset\",\"example\":\"Treasury Board of Canada Secretariat\",\"type\":\"string\"},\"record_modified\":{\"description\":\"Date when the dataset was last modified\",\"example\":\"2026-02-16\",\"format\":\"date\",\"type\":\"string\"},\"record_released\":{\"description\":\"Date when the dataset was first released\",\"example\":\"2017-02-20\",\"format\":\"date\",\"type\":\"string\"},\"resources\":{\"description\":\"List of resources associated with the dataset\",\"items\":{\"properties\":{\"format\":{\"description\":\"Format of the resource\",\"example\":\"CSV\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the resource\",\"type\":\"string\"},\"last_modified\":{\"description\":\"Date and time when the resource was last modified\",\"format\":\"date-time\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the resource\",\"type\":\"string\"},\"size\":{\"description\":\"Size of the resource in bytes\",\"type\":\"integer\"},\"url\":{\"description\":\"URL to access the resource\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"title\":{\"description\":\"Title of the dataset\",\"example\":\"Proactive Disclosure - Travel Expenses\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"total_records\":{\"description\":\"Total number of datasets matching the search criteria\",\"example\":46261,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response with dataset results\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"details\":{\"description\":\"Additional error details\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"required\":[\"error\",\"status\"],\"type\":\"object\"}}},\"description\":\"Bad request - Invalid parameters\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"details\":{\"description\":\"Additional error details\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"required\":[\"error\",\"status\"],\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/opendata/", "segments": [{ "lit": "opendata" }], "select": { "exist": ["format", "keyword", "limit", "organization", "page", "q", "sort"] }, "transform": { "req": "`reqdata`", "res": "`body.results`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "dataset_id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /opendata/dataset/{datasetId}", "json": "{\"operationId\":\"getDatasetById\",\"parameters\":[{\"description\":\"Unique identifier of the dataset\",\"in\":\"path\",\"name\":\"datasetId\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"description\":{\"description\":\"Detailed description of the dataset\",\"type\":\"string\"},\"download_url\":{\"description\":\"URL to download the dataset\",\"format\":\"uri\",\"type\":\"string\"},\"formats\":{\"description\":\"Available formats for the dataset\",\"example\":[\"JSON\",\"XLSX\",\"HTML\",\"CSV\"],\"items\":{\"enum\":[\"JSON\",\"CSV\",\"XLSX\",\"HTML\",\"XML\",\"ZIP\",\"JSONL\",\"PNG\",\"SQL\"],\"type\":\"string\"},\"type\":\"array\"},\"id\":{\"description\":\"Unique identifier for the dataset\",\"type\":\"string\"},\"jurisdiction\":{\"description\":\"Jurisdiction level of the dataset\",\"enum\":[\"Federal\",\"Provincial\",\"Municipal\"],\"example\":\"Federal\",\"type\":\"string\"},\"keywords\":{\"description\":\"Keywords associated with the dataset\",\"example\":[\"Proactive Disclosure\",\"PD\",\"Travel Expenses\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"publisher\":{\"description\":\"Organization that published the dataset\",\"example\":\"Treasury Board of Canada Secretariat\",\"type\":\"string\"},\"record_modified\":{\"description\":\"Date when the dataset was last modified\",\"example\":\"2026-02-16\",\"format\":\"date\",\"type\":\"string\"},\"record_released\":{\"description\":\"Date when the dataset was first released\",\"example\":\"2017-02-20\",\"format\":\"date\",\"type\":\"string\"},\"resources\":{\"description\":\"List of resources associated with the dataset\",\"items\":{\"properties\":{\"format\":{\"description\":\"Format of the resource\",\"example\":\"CSV\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the resource\",\"type\":\"string\"},\"last_modified\":{\"description\":\"Date and time when the resource was last modified\",\"format\":\"date-time\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the resource\",\"type\":\"string\"},\"size\":{\"description\":\"Size of the resource in bytes\",\"type\":\"integer\"},\"url\":{\"description\":\"URL to access the resource\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"title\":{\"description\":\"Title of the dataset\",\"example\":\"Proactive Disclosure - Travel Expenses\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Dataset details retrieved successfully\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"details\":{\"description\":\"Additional error details\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"required\":[\"error\",\"status\"],\"type\":\"object\"}}},\"description\":\"Dataset not found\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"details\":{\"description\":\"Additional error details\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"required\":[\"error\",\"status\"],\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/opendata/dataset/{datasetId}", "rename": { "param": { "datasetId": "id" } }, "segments": [{ "lit": "opendata" }, { "lit": "dataset" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "dataset", "name__orig": "dataset", "Name": "Dataset", "name_": "dataset", "name-": "dataset", "NAME": "DATASET", "index$": 0 }, { "active": true, "entity": "dataset", "key$": "BasicDatasetFlow", "kind": "basic", "name": "BasicDatasetFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "dataset_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "dataset_ref01", "srcdatavar": "dataset_ref01_data", "suffix": "_dt0" }, "match": { "id": "dataset01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-dataset_ref01" } }], "index$": 1 }] }, 'Dataset');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let dataset_ref01_data = Object.values(setup.data.existing.dataset)[0];
        // LIST
        const dataset_ref01_ent = client.Dataset();
        const dataset_ref01_match = {};
        const dataset_ref01_list = (await dataset_ref01_ent.list(dataset_ref01_match)).map((e) => e.data());
        // LOAD
        const dataset_ref01_match_dt0 = {};
        dataset_ref01_match_dt0.id = dataset_ref01_data.id;
        const dataset_ref01_data_dt0 = (await dataset_ref01_ent.load(dataset_ref01_match_dt0)).data();
        (0, node_assert_1.default)(dataset_ref01_data_dt0.id === dataset_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/dataset/DatasetTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.OpenGovernmentPortalSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['dataset01', 'dataset02', 'dataset03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'OPEN_GOVERNMENT_PORTAL_TEST_DATASET_ENTID': idmap,
        'OPEN_GOVERNMENT_PORTAL_TEST_LIVE': 'FALSE',
        'OPEN_GOVERNMENT_PORTAL_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['OPEN_GOVERNMENT_PORTAL_TEST_DATASET_ENTID'];
    const live = 'TRUE' === env.OPEN_GOVERNMENT_PORTAL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['OPEN_GOVERNMENT_PORTAL_TEST_DATASET_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.OpenGovernmentPortalSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.OPEN_GOVERNMENT_PORTAL_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=DatasetEntity.test.js.map