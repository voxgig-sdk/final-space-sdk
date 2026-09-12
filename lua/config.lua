-- FinalSpace SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "FinalSpace",
      slug = "final-space",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://finalspaceapi.com/api/v0",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["character"] = {},
        ["episode"] = {},
        ["get_endpoint"] = {},
        ["location"] = {},
        ["quote"] = {},
      },
    },
    entity = {
      ["character"] = {
        ["fields"] = {
          {
            ["name"] = "abilities",
            ["short"] = "List of abilities the character has",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "alias",
            ["short"] = "Alternative names or aliases",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "gender",
            ["short"] = "The gender of the character",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "hair",
            ["short"] = "The hair color/type of the character",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["short"] = "The unique identifier for the character",
            ["type"] = "`$INTEGER`",
          },
          {
            ["format"] = "uri",
            ["name"] = "img_url",
            ["short"] = "URL to the character's image",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["short"] = "The name of the character",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "origin",
            ["short"] = "The origin of the character",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "species",
            ["short"] = "The species of the character",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status",
            ["short"] = "The status of the character (e.g., Alive, Dead, Unknown)",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "character",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "sort",
                      ["orig"] = "sort",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/character",
                ["segments"] = {
                  {
                    ["lit"] = "character",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "sort",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "character",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/character/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "character",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "character",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["episode"] = {
        ["fields"] = {
          {
            ["name"] = "air_date",
            ["short"] = "The air date of the episode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "characters",
            ["short"] = "URLs to characters appearing in this episode",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "director",
            ["short"] = "The director of the episode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["short"] = "The unique identifier for the episode",
            ["type"] = "`$INTEGER`",
          },
          {
            ["format"] = "uri",
            ["name"] = "img_url",
            ["short"] = "URL to the episode's image",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["short"] = "The name of the episode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "writer",
            ["short"] = "The writer of the episode",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "episode",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "sort",
                      ["orig"] = "sort",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/episode",
                ["segments"] = {
                  {
                    ["lit"] = "episode",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "sort",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "episode",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/episode/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "episode",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "episode",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["get_endpoint"] = {
        ["fields"] = {
          {
            ["name"] = "fullUrl",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "path",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "queryParams",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "type",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "get_endpoint",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/",
                ["segments"] = {},
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {},
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["location"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["short"] = "The unique identifier for the location",
            ["type"] = "`$INTEGER`",
          },
          {
            ["format"] = "uri",
            ["name"] = "img_url",
            ["short"] = "URL to the location's image",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "inhabitants",
            ["short"] = "List of inhabitants of the location",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "name",
            ["short"] = "The name of the location",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "notable_residents",
            ["short"] = "URLs to notable residents",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "type",
            ["short"] = "The type of location",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "location",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "sort",
                      ["orig"] = "sort",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/location",
                ["segments"] = {
                  {
                    ["lit"] = "location",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "sort",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "location",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/location/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "location",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "location",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["quote"] = {
        ["fields"] = {
          {
            ["name"] = "by",
            ["short"] = "The character who said the quote",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "uri",
            ["name"] = "character",
            ["short"] = "URL to the character who said the quote",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["short"] = "The unique identifier for the quote",
            ["type"] = "`$INTEGER`",
          },
          {
            ["format"] = "uri",
            ["name"] = "image",
            ["short"] = "URL to an image related to the quote",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "quote",
            ["short"] = "The quote text",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "quote",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "sort",
                      ["orig"] = "sort",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/quote",
                ["segments"] = {
                  {
                    ["lit"] = "quote",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "sort",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "quote",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
