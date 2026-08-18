# OpenGovernmentPortal SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "OpenGovernmentPortal",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://search.open.canada.ca",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "dataset": {},
            },
        },
        "entity": {
      "dataset": {
        "fields": [
          {
            "name": "description",
            "type": "`$STRING`",
          },
          {
            "name": "download_url",
            "type": "`$STRING`",
          },
          {
            "name": "formats",
            "type": "`$ARRAY`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "jurisdiction",
            "type": "`$STRING`",
          },
          {
            "name": "keywords",
            "type": "`$ARRAY`",
          },
          {
            "name": "publisher",
            "type": "`$STRING`",
          },
          {
            "name": "record_modified",
            "type": "`$STRING`",
          },
          {
            "name": "record_released",
            "type": "`$STRING`",
          },
          {
            "name": "resources",
            "type": "`$ARRAY`",
          },
          {
            "name": "title",
            "type": "`$STRING`",
          },
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
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "keyword",
                      "orig": "keyword",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 10,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "organization",
                      "orig": "organization",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "q",
                      "orig": "q",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "relevance",
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/opendata/",
                "parts": [
                  "opendata",
                ],
                "select": {
                  "exist": [
                    "format",
                    "keyword",
                    "limit",
                    "organization",
                    "page",
                    "q",
                    "sort",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.results`",
                },
              },
            ],
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/opendata/dataset/{datasetId}",
                "parts": [
                  "opendata",
                  "dataset",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "datasetId": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
