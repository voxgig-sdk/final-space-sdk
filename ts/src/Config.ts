
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

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'FinalSpace',
        slug: "final-space",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://finalspaceapi.com/api/v0",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      character: {
      },

      episode: {
      },

      get_endpoint: {
      },

      location: {
      },

      quote: {
      },

    }
  }


  entity = {
    "character": {
      "fields": [
        {
          "name": "abilities",
          "short": "List of abilities the character has",
          "type": "`$ARRAY`"
        },
        {
          "name": "alias",
          "short": "Alternative names or aliases",
          "type": "`$ARRAY`"
        },
        {
          "name": "gender",
          "short": "The gender of the character",
          "type": "`$STRING`"
        },
        {
          "name": "hair",
          "short": "The hair color/type of the character",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "The unique identifier for the character",
          "type": "`$INTEGER`"
        },
        {
          "name": "img_url",
          "short": "URL to the character's image",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "short": "The name of the character",
          "type": "`$STRING`"
        },
        {
          "name": "origin",
          "short": "The origin of the character",
          "type": "`$STRING`"
        },
        {
          "name": "species",
          "short": "The species of the character",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "short": "The status of the character (e.g., Alive, Dead, Unknown)",
          "type": "`$STRING`"
        }
      ],
      "name": "character",
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
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/character",
              "parts": [
                "character"
              ],
              "select": {
                "exist": [
                  "sort"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
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
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/character/{id}",
              "parts": [
                "character",
                "{id}"
              ],
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
    },
    "episode": {
      "fields": [
        {
          "name": "air_date",
          "short": "The air date of the episode",
          "type": "`$STRING`"
        },
        {
          "name": "characters",
          "short": "URLs to characters appearing in this episode",
          "type": "`$ARRAY`"
        },
        {
          "name": "director",
          "short": "The director of the episode",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "The unique identifier for the episode",
          "type": "`$INTEGER`"
        },
        {
          "name": "img_url",
          "short": "URL to the episode's image",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "short": "The name of the episode",
          "type": "`$STRING`"
        },
        {
          "name": "writer",
          "short": "The writer of the episode",
          "type": "`$STRING`"
        }
      ],
      "name": "episode",
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
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/episode",
              "parts": [
                "episode"
              ],
              "select": {
                "exist": [
                  "sort"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
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
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/episode/{id}",
              "parts": [
                "episode",
                "{id}"
              ],
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
    },
    "get_endpoint": {
      "fields": [
        {
          "name": "fullUrl",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "type": "`$STRING`"
        },
        {
          "name": "path",
          "type": "`$STRING`"
        },
        {
          "name": "queryParams",
          "type": "`$ARRAY`"
        },
        {
          "name": "type",
          "type": "`$STRING`"
        }
      ],
      "name": "get_endpoint",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/",
              "parts": [],
              "select": {},
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
    },
    "location": {
      "fields": [
        {
          "name": "id",
          "short": "The unique identifier for the location",
          "type": "`$INTEGER`"
        },
        {
          "name": "img_url",
          "short": "URL to the location's image",
          "type": "`$STRING`"
        },
        {
          "name": "inhabitants",
          "short": "List of inhabitants of the location",
          "type": "`$ARRAY`"
        },
        {
          "name": "name",
          "short": "The name of the location",
          "type": "`$STRING`"
        },
        {
          "name": "notable_residents",
          "short": "URLs to notable residents",
          "type": "`$ARRAY`"
        },
        {
          "name": "type",
          "short": "The type of location",
          "type": "`$STRING`"
        }
      ],
      "name": "location",
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
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/location",
              "parts": [
                "location"
              ],
              "select": {
                "exist": [
                  "sort"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
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
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/location/{id}",
              "parts": [
                "location",
                "{id}"
              ],
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
    },
    "quote": {
      "fields": [
        {
          "name": "by",
          "short": "The character who said the quote",
          "type": "`$STRING`"
        },
        {
          "name": "character",
          "short": "URL to the character who said the quote",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "The unique identifier for the quote",
          "type": "`$INTEGER`"
        },
        {
          "name": "image",
          "short": "URL to an image related to the quote",
          "type": "`$STRING`"
        },
        {
          "name": "quote",
          "short": "The quote text",
          "type": "`$STRING`"
        }
      ],
      "name": "quote",
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
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/quote",
              "parts": [
                "quote"
              ],
              "select": {
                "exist": [
                  "sort"
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

