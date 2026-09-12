"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'OpenGovernmentPortal',
        slug: "open-government-portal",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
        },
    };
    options = {
        base: "https://search.open.canada.ca",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            dataset: {},
        }
    };
    entity = {
        "dataset": {
            "fields": [
                {
                    "name": "description",
                    "short": "Detailed description of the dataset",
                    "type": "`$STRING`"
                },
                {
                    "format": "uri",
                    "name": "download_url",
                    "short": "URL to download the dataset",
                    "type": "`$STRING`"
                },
                {
                    "name": "formats",
                    "short": "Available formats for the dataset",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "short": "Unique identifier for the dataset",
                    "type": "`$STRING`"
                },
                {
                    "name": "jurisdiction",
                    "short": "Jurisdiction level of the dataset",
                    "type": "`$STRING`"
                },
                {
                    "name": "keywords",
                    "short": "Keywords associated with the dataset",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "publisher",
                    "short": "Organization that published the dataset",
                    "type": "`$STRING`"
                },
                {
                    "format": "date",
                    "name": "record_modified",
                    "short": "Date when the dataset was last modified",
                    "type": "`$STRING`"
                },
                {
                    "format": "date",
                    "name": "record_released",
                    "short": "Date when the dataset was first released",
                    "type": "`$STRING`"
                },
                {
                    "name": "resources",
                    "short": "List of resources associated with the dataset",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "title",
                    "short": "Title of the dataset",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "dataset",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "keyword",
                                        "orig": "keyword",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 10,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "organization",
                                        "orig": "organization",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "q",
                                        "orig": "q",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "relevance",
                                        "kind": "query",
                                        "name": "sort",
                                        "orig": "sort",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/opendata/",
                            "segments": [
                                {
                                    "lit": "opendata"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "format",
                                    "keyword",
                                    "limit",
                                    "organization",
                                    "page",
                                    "q",
                                    "sort"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "parts": [
                                "opendata"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "dataset_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/opendata/dataset/{datasetId}",
                            "rename": {
                                "param": {
                                    "datasetId": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "opendata"
                                },
                                {
                                    "lit": "dataset"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "opendata",
                                "dataset",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map