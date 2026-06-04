# FinalSpace SDK

Query characters, episodes, locations, and quotes from the animated show Final Space, served as JSON

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Final Space API

The Final Space API is a community-built REST service that exposes structured data about the animated TV series *Final Space*. It is run independently and documented at [finalspaceapi.com](https://finalspaceapi.com/).

What you get from the API:

- Characters, episodes, locations, and memorable quotes from the show
- List endpoints (e.g. `/character`, `/episode`, `/location`, `/quote`) and per-item lookups by numeric id (e.g. `/character/1`)
- Optional `sort` query parameter on list endpoints accepting `asc` or `desc`
- A root endpoint listing the available endpoints

All requests are plain `GET` over HTTPS and responses are returned as JSON. The base URL used by this SDK is `https://finalspaceapi.com/api/v0`. The published docs do not specify authentication or rate limits.

## Try it

**TypeScript**
```bash
npm install final-space
```

**Python**
```bash
pip install final-space-sdk
```

**PHP**
```bash
composer require voxgig/final-space-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/final-space-sdk/go
```

**Ruby**
```bash
gem install final-space-sdk
```

**Lua**
```bash
luarocks install final-space-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { FinalSpaceSDK } from 'final-space'

const client = new FinalSpaceSDK({})

// List all characters
const characters = await client.Character().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o final-space-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "final-space": {
      "command": "/abs/path/to/final-space-mcp"
    }
  }
}
```

## Entities

The API exposes 5 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Character** | A character from the show, listed via `GET /character` and fetched individually via `GET /character/{id}`. | `/character` |
| **Episode** | An episode of the series, listed via `GET /episode` and fetched individually via `GET /episode/{id}`. | `/episode` |
| **GetEndpoint** | The API root (`GET /`) returning the list of available endpoints exposed by the service. | `/` |
| **Location** | A location featured in the show, listed via `GET /location` and fetched individually via `GET /location/{id}`. | `/location` |
| **Quote** | A memorable line from the show, listed via `GET /quote`. | `/quote` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from finalspace_sdk import FinalSpaceSDK

client = FinalSpaceSDK({})

# List all characters
characters, err = client.Character(None).list(None, None)

# Load a specific character
character, err = client.Character(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'finalspace_sdk.php';

$client = new FinalSpaceSDK([]);

// List all characters
[$characters, $err] = $client->Character(null)->list(null, null);

// Load a specific character
[$character, $err] = $client->Character(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/final-space-sdk/go"

client := sdk.NewFinalSpaceSDK(map[string]any{})

// List all characters
characters, err := client.Character(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "FinalSpace_sdk"

client = FinalSpaceSDK.new({})

# List all characters
characters, err = client.Character(nil).list(nil, nil)

# Load a specific character
character, err = client.Character(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("final-space_sdk")

local client = sdk.new({})

-- List all characters
local characters, err = client:Character(nil):list(nil, nil)

-- Load a specific character
local character, err = client:Character(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = FinalSpaceSDK.test()
const result = await client.Character().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = FinalSpaceSDK.test(None, None)
result, err = client.Character(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = FinalSpaceSDK::test(null, null);
[$result, $err] = $client->Character(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Character(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = FinalSpaceSDK.test(nil, nil)
result, err = client.Character(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Character(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Final Space API

- Upstream: [https://finalspaceapi.com/](https://finalspaceapi.com/)
- API docs: [https://finalspaceapi.com/docs/](https://finalspaceapi.com/docs/)

- Maintained as an open source project on GitHub by [lelouchB](https://github.com/lelouchB).
- Data is sourced from the Final Space wiki; consult the upstream project for any attribution requirements before redistribution.
- No formal terms or rate-limit policy are published with the API itself.

---

Generated from the Final Space API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
