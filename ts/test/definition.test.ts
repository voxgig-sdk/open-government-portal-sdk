import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
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
      "limit": "v1",
      "organization": "v1",
      "page": "v1",
      "q": "v1",
      "sort": "v1"
    },
    "headers": [],
    "query": [
      "q",
      "sort",
      "organization",
      "format",
      "keyword",
      "page",
      "limit"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "total_records": 46261,
      "page": 1,
      "results": [
        {
          "description": "x",
          "download_url": "x",
          "formats": [
            "JSON",
            "XLSX",
            "HTML"
          ],
          "id": "x",
          "jurisdiction": "Federal",
          "keywords": [
            "Proactive Disclosure",
            "PD",
            "Travel Expenses"
          ],
          "publisher": "Treasury Board of Canada Secretariat",
          "record_modified": "2026-02-16",
          "record_released": "2017-02-20",
          "resources": [
            {
              "format": "CSV",
              "id": "x",
              "last_modified": "2026-01-01T00:00:00Z",
              "name": "x",
              "size": 1,
              "url": "x"
            }
          ],
          "title": "Proactive Disclosure - Travel Expenses"
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
    "query": [],
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
          "format": "CSV",
          "id": "x",
          "last_modified": "2026-01-01T00:00:00Z",
          "name": "x",
          "size": 1,
          "url": "x"
        }
      ]
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
