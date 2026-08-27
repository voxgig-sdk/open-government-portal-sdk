<?php
declare(strict_types=1);

// OpenGovernmentPortal SDK configuration

class OpenGovernmentPortalConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "OpenGovernmentPortal",
                "slug" => "open-government-portal",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://search.open.canada.ca",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "dataset" => [],
                ],
            ],
            "entity" => [
        'dataset' => [
          'fields' => [
            [
              'name' => 'description',
              'short' => 'Detailed description of the dataset',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'download_url',
              'short' => 'URL to download the dataset',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'formats',
              'short' => 'Available formats for the dataset',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the dataset',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'jurisdiction',
              'short' => 'Jurisdiction level of the dataset',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'keywords',
              'short' => 'Keywords associated with the dataset',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'publisher',
              'short' => 'Organization that published the dataset',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'record_modified',
              'short' => 'Date when the dataset was last modified',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'record_released',
              'short' => 'Date when the dataset was first released',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'resources',
              'short' => 'List of resources associated with the dataset',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'title',
              'short' => 'Title of the dataset',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'dataset',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'keyword',
                        'orig' => 'keyword',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 10,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'organization',
                        'orig' => 'organization',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'q',
                        'orig' => 'q',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'relevance',
                        'kind' => 'query',
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/opendata/',
                  'parts' => [
                    'opendata',
                  ],
                  'select' => [
                    'exist' => [
                      'format',
                      'keyword',
                      'limit',
                      'organization',
                      'page',
                      'q',
                      'sort',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.results`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'dataset_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/opendata/dataset/{datasetId}',
                  'parts' => [
                    'opendata',
                    'dataset',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'datasetId' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return OpenGovernmentPortalFeatures::make_feature($name);
    }
}
