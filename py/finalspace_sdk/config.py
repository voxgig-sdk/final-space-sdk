# FinalSpace SDK configuration


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
            "name": "FinalSpace",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://finalspaceapi.com/api/v0",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "character": {},
                "episode": {},
                "get_endpoint": {},
                "location": {},
                "quote": {},
            },
        },
        "entity": {
      "character": {
        "fields": [
          {
            "name": "abilities",
            "type": "`$ARRAY`",
          },
          {
            "name": "alias",
            "type": "`$ARRAY`",
          },
          {
            "name": "gender",
            "type": "`$STRING`",
          },
          {
            "name": "hair",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "type": "`$INTEGER`",
          },
          {
            "name": "img_url",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "origin",
            "type": "`$STRING`",
          },
          {
            "name": "species",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "type": "`$STRING`",
          },
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
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/character",
                "parts": [
                  "character",
                ],
                "select": {
                  "exist": [
                    "sort",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
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
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/character/{id}",
                "parts": [
                  "character",
                  "{id}",
                ],
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
      "episode": {
        "fields": [
          {
            "name": "air_date",
            "type": "`$STRING`",
          },
          {
            "name": "characters",
            "type": "`$ARRAY`",
          },
          {
            "name": "director",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "type": "`$INTEGER`",
          },
          {
            "name": "img_url",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "writer",
            "type": "`$STRING`",
          },
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
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/episode",
                "parts": [
                  "episode",
                ],
                "select": {
                  "exist": [
                    "sort",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
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
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/episode/{id}",
                "parts": [
                  "episode",
                  "{id}",
                ],
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
      "get_endpoint": {
        "fields": [
          {
            "name": "fullUrl",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "path",
            "type": "`$STRING`",
          },
          {
            "name": "queryParams",
            "type": "`$ARRAY`",
          },
          {
            "name": "type",
            "type": "`$STRING`",
          },
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
      "location": {
        "fields": [
          {
            "name": "id",
            "type": "`$INTEGER`",
          },
          {
            "name": "img_url",
            "type": "`$STRING`",
          },
          {
            "name": "inhabitants",
            "type": "`$ARRAY`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "notable_residents",
            "type": "`$ARRAY`",
          },
          {
            "name": "type",
            "type": "`$STRING`",
          },
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
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/location",
                "parts": [
                  "location",
                ],
                "select": {
                  "exist": [
                    "sort",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
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
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/location/{id}",
                "parts": [
                  "location",
                  "{id}",
                ],
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
      "quote": {
        "fields": [
          {
            "name": "by",
            "type": "`$STRING`",
          },
          {
            "name": "character",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "type": "`$INTEGER`",
          },
          {
            "name": "image",
            "type": "`$STRING`",
          },
          {
            "name": "quote",
            "type": "`$STRING`",
          },
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
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/quote",
                "parts": [
                  "quote",
                ],
                "select": {
                  "exist": [
                    "sort",
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
