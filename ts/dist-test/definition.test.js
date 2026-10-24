"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "dataset",
        "accessor": "Dataset",
        "op": "list",
        "method": "GET",
        "path": "/opendata/",
        "args": [],
        "select": {
            "format": "v1",
            "keyword": "v1",
            "limit": 10,
            "organization": "v1",
            "page": 1,
            "q": "v1",
            "sort": "relevance"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "q",
            "sort",
            "organization",
            "format",
            "keyword",
            "page",
            "limit"
        ],
        "queryArgs": [
            {
                "name": "format",
                "wire": "format"
            },
            {
                "name": "keyword",
                "wire": "keyword"
            },
            {
                "name": "limit",
                "wire": "limit"
            },
            {
                "name": "organization",
                "wire": "organization"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "q",
                "wire": "q"
            },
            {
                "name": "sort",
                "wire": "sort"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "total_records": 46261,
            "page": 1,
            "results": [
                {
                    "id": "x",
                    "title": "Proactive Disclosure - Travel Expenses",
                    "description": "x",
                    "publisher": "Treasury Board of Canada Secretariat",
                    "record_modified": "2026-02-16",
                    "record_released": "2017-02-20",
                    "formats": [
                        "JSON",
                        "XLSX",
                        "HTML"
                    ],
                    "keywords": [
                        "Proactive Disclosure",
                        "PD",
                        "Travel Expenses"
                    ],
                    "jurisdiction": "Federal",
                    "download_url": "x",
                    "resources": [
                        {
                            "id": "x",
                            "name": "x",
                            "format": "CSV",
                            "url": "x",
                            "size": 1,
                            "last_modified": "2026-01-01T00:00:00Z"
                        }
                    ]
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "dataset",
        "accessor": "Dataset",
        "op": "load",
        "method": "GET",
        "path": "/opendata/dataset/{datasetId}",
        "args": [
            {
                "name": "id",
                "wire": "datasetId",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "id": "x",
            "title": "Proactive Disclosure - Travel Expenses",
            "description": "x",
            "publisher": "Treasury Board of Canada Secretariat",
            "record_modified": "2026-02-16",
            "record_released": "2017-02-20",
            "formats": [
                "JSON",
                "XLSX",
                "HTML"
            ],
            "keywords": [
                "Proactive Disclosure",
                "PD",
                "Travel Expenses"
            ],
            "jurisdiction": "Federal",
            "download_url": "x",
            "resources": [
                {
                    "id": "x",
                    "name": "x",
                    "format": "CSV",
                    "url": "x",
                    "size": 1,
                    "last_modified": "2026-01-01T00:00:00Z"
                }
            ]
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map