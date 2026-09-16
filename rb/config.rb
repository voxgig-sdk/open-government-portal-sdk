# OpenGovernmentPortal SDK configuration

module OpenGovernmentPortalConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "OpenGovernmentPortal",
        "slug" => "open-government-portal",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://search.open.canada.ca",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "dataset" => {},
        },
      },
      "entity" => {
        "dataset" => {
          "fields" => [
            {
              "name" => "description",
              "short" => "Detailed description of the dataset",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "download_url",
              "short" => "URL to download the dataset",
              "type" => "`$STRING`",
            },
            {
              "name" => "formats",
              "short" => "Available formats for the dataset",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "id",
              "short" => "Unique identifier for the dataset",
              "type" => "`$STRING`",
            },
            {
              "name" => "jurisdiction",
              "short" => "Jurisdiction level of the dataset",
              "type" => "`$STRING`",
            },
            {
              "name" => "keywords",
              "short" => "Keywords associated with the dataset",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "publisher",
              "short" => "Organization that published the dataset",
              "type" => "`$STRING`",
            },
            {
              "format" => "date",
              "name" => "record_modified",
              "short" => "Date when the dataset was last modified",
              "type" => "`$STRING`",
            },
            {
              "format" => "date",
              "name" => "record_released",
              "short" => "Date when the dataset was first released",
              "type" => "`$STRING`",
            },
            {
              "name" => "resources",
              "short" => "List of resources associated with the dataset",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "title",
              "short" => "Title of the dataset",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "dataset",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "keyword",
                        "orig" => "keyword",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 10,
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "organization",
                        "orig" => "organization",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "q",
                        "orig" => "q",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "relevance",
                        "kind" => "query",
                        "name" => "sort",
                        "orig" => "sort",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/opendata/",
                  "segments" => [
                    {
                      "lit" => "opendata",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "format",
                      "keyword",
                      "limit",
                      "organization",
                      "page",
                      "q",
                      "sort",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.results`",
                  },
                  "parts" => [
                    "opendata",
                  ],
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "dataset_id",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/opendata/dataset/{datasetId}",
                  "rename" => {
                    "param" => {
                      "datasetId" => "id",
                    },
                  },
                  "segments" => [
                    {
                      "lit" => "opendata",
                    },
                    {
                      "lit" => "dataset",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "opendata",
                    "dataset",
                    "{id}",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    OpenGovernmentPortalFeatures.make_feature(name)
  end
end
