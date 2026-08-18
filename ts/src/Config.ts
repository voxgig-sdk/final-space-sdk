
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
    name: 'FinalSpace',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
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
          "type": "`$ARRAY`"
        },
        {
          "name": "alias",
          "type": "`$ARRAY`"
        },
        {
          "name": "gender",
          "type": "`$STRING`"
        },
        {
          "name": "hair",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$INTEGER`"
        },
        {
          "name": "img_url",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "type": "`$STRING`"
        },
        {
          "name": "origin",
          "type": "`$STRING`"
        },
        {
          "name": "species",
          "type": "`$STRING`"
        },
        {
          "name": "status",
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
          "type": "`$STRING`"
        },
        {
          "name": "characters",
          "type": "`$ARRAY`"
        },
        {
          "name": "director",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$INTEGER`"
        },
        {
          "name": "img_url",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "type": "`$STRING`"
        },
        {
          "name": "writer",
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
          "type": "`$INTEGER`"
        },
        {
          "name": "img_url",
          "type": "`$STRING`"
        },
        {
          "name": "inhabitants",
          "type": "`$ARRAY`"
        },
        {
          "name": "name",
          "type": "`$STRING`"
        },
        {
          "name": "notable_residents",
          "type": "`$ARRAY`"
        },
        {
          "name": "type",
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
          "type": "`$STRING`"
        },
        {
          "name": "character",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$INTEGER`"
        },
        {
          "name": "image",
          "type": "`$STRING`"
        },
        {
          "name": "quote",
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

