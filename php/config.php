<?php
declare(strict_types=1);

// FinalSpace SDK configuration

class FinalSpaceConfig
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
                "name" => "FinalSpace",
                "slug" => "final-space",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://finalspaceapi.com/api/v0",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "character" => [],
                    "episode" => [],
                    "get_endpoint" => [],
                    "location" => [],
                    "quote" => [],
                ],
            ],
            "entity" => [
        'character' => [
          'fields' => [
            [
              'name' => 'abilities',
              'title' => 'Abilities',
              'type' => '`$ARRAY`',
              'short' => 'List of abilities the character has',
            ],
            [
              'name' => 'alias',
              'title' => 'Alias',
              'type' => '`$ARRAY`',
              'short' => 'Alternative names or aliases',
            ],
            [
              'name' => 'gender',
              'title' => 'Gender',
              'type' => '`$STRING`',
              'short' => 'The gender of the character',
            ],
            [
              'name' => 'hair',
              'title' => 'Hair',
              'type' => '`$STRING`',
              'short' => 'The hair color/type of the character',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$INTEGER`',
              'short' => 'The unique identifier for the character',
            ],
            [
              'name' => 'img_url',
              'title' => 'Img Url',
              'type' => '`$STRING`',
              'short' => 'URL to the character\'s image',
              'format' => 'uri',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'short' => 'The name of the character',
            ],
            [
              'name' => 'origin',
              'title' => 'Origin',
              'type' => '`$STRING`',
              'short' => 'The origin of the character',
            ],
            [
              'name' => 'species',
              'title' => 'Species',
              'type' => '`$STRING`',
              'short' => 'The species of the character',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'short' => 'The status of the character (e.g., Alive, Dead, Unknown)',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'character',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/character',
                  'segments' => [
                    [
                      'lit' => 'character',
                    ],
                  ],
                  'parts' => [
                    'character',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'sort',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/character/{id}',
                  'segments' => [
                    [
                      'lit' => 'character',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'character',
                    '{id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'episode' => [
          'fields' => [
            [
              'name' => 'air_date',
              'title' => 'Air Date',
              'type' => '`$STRING`',
              'short' => 'The air date of the episode',
            ],
            [
              'name' => 'characters',
              'title' => 'Characters',
              'type' => '`$ARRAY`',
              'short' => 'URLs to characters appearing in this episode',
            ],
            [
              'name' => 'director',
              'title' => 'Director',
              'type' => '`$STRING`',
              'short' => 'The director of the episode',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$INTEGER`',
              'short' => 'The unique identifier for the episode',
            ],
            [
              'name' => 'img_url',
              'title' => 'Img Url',
              'type' => '`$STRING`',
              'short' => 'URL to the episode\'s image',
              'format' => 'uri',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'short' => 'The name of the episode',
            ],
            [
              'name' => 'writer',
              'title' => 'Writer',
              'type' => '`$STRING`',
              'short' => 'The writer of the episode',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'episode',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/episode',
                  'segments' => [
                    [
                      'lit' => 'episode',
                    ],
                  ],
                  'parts' => [
                    'episode',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'sort',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/episode/{id}',
                  'segments' => [
                    [
                      'lit' => 'episode',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'episode',
                    '{id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'get_endpoint' => [
          'fields' => [
            [
              'name' => 'fullUrl',
              'title' => 'Full Url',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'path',
              'title' => 'Path',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'queryParams',
              'title' => 'Query Params',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'type',
              'title' => 'Type',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'get_endpoint',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/',
                  'segments' => [],
                  'parts' => [],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'location' => [
          'fields' => [
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$INTEGER`',
              'short' => 'The unique identifier for the location',
            ],
            [
              'name' => 'img_url',
              'title' => 'Img Url',
              'type' => '`$STRING`',
              'short' => 'URL to the location\'s image',
              'format' => 'uri',
            ],
            [
              'name' => 'inhabitants',
              'title' => 'Inhabitants',
              'type' => '`$ARRAY`',
              'short' => 'List of inhabitants of the location',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'short' => 'The name of the location',
            ],
            [
              'name' => 'notable_residents',
              'title' => 'Notable Residents',
              'type' => '`$ARRAY`',
              'short' => 'URLs to notable residents',
            ],
            [
              'name' => 'type',
              'title' => 'Type',
              'type' => '`$STRING`',
              'short' => 'The type of location',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'location',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/location',
                  'segments' => [
                    [
                      'lit' => 'location',
                    ],
                  ],
                  'parts' => [
                    'location',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'sort',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/location/{id}',
                  'segments' => [
                    [
                      'lit' => 'location',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'location',
                    '{id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'quote' => [
          'fields' => [
            [
              'name' => 'by',
              'title' => 'By',
              'type' => '`$STRING`',
              'short' => 'The character who said the quote',
            ],
            [
              'name' => 'character',
              'title' => 'Character',
              'type' => '`$STRING`',
              'short' => 'URL to the character who said the quote',
              'format' => 'uri',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$INTEGER`',
              'short' => 'The unique identifier for the quote',
            ],
            [
              'name' => 'image',
              'title' => 'Image',
              'type' => '`$STRING`',
              'short' => 'URL to an image related to the quote',
              'format' => 'uri',
            ],
            [
              'name' => 'quote',
              'title' => 'Quote',
              'type' => '`$STRING`',
              'short' => 'The quote text',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'quote',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/quote',
                  'segments' => [
                    [
                      'lit' => 'quote',
                    ],
                  ],
                  'parts' => [
                    'quote',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'sort',
                    ],
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
        return FinalSpaceFeatures::make_feature($name);
    }
}
