
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'OpenGovernmentPortal',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://search.open.canada.ca",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      dataset: {
      },

    }
  }


  entity = {
    "dataset": {
      "fields": [
        {
          "name": "description",
          "type": "`$STRING`"
        },
        {
          "name": "download_url",
          "type": "`$STRING`"
        },
        {
          "name": "formats",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "jurisdiction",
          "type": "`$STRING`"
        },
        {
          "name": "keywords",
          "type": "`$ARRAY`"
        },
        {
          "name": "publisher",
          "type": "`$STRING`"
        },
        {
          "name": "record_modified",
          "type": "`$STRING`"
        },
        {
          "name": "record_released",
          "type": "`$STRING`"
        },
        {
          "name": "resources",
          "type": "`$ARRAY`"
        },
        {
          "name": "title",
          "type": "`$STRING`"
        }
      ],
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
              "parts": [
                "opendata"
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
              }
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
              "parts": [
                "opendata",
                "dataset",
                "{id}"
              ],
              "rename": {
                "param": {
                  "datasetId": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

