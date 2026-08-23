# FinalSpace Ruby SDK Reference

Complete API reference for the FinalSpace Ruby SDK.


## FinalSpaceSDK

### Constructor

```ruby
require_relative 'FinalSpace_sdk'

client = FinalSpaceSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `FinalSpaceSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = FinalSpaceSDK.test
```


### Instance Methods

#### `Character(data = nil)`

Create a new `Character` entity instance. Pass `nil` for no initial data.

#### `Episode(data = nil)`

Create a new `Episode` entity instance. Pass `nil` for no initial data.

#### `GetEndpoint(data = nil)`

Create a new `GetEndpoint` entity instance. Pass `nil` for no initial data.

#### `Location(data = nil)`

Create a new `Location` entity instance. Pass `nil` for no initial data.

#### `Quote(data = nil)`

Create a new `Quote` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## CharacterEntity

```ruby
character = client.Character
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abilities` | `Array` | No | List of abilities the character has |
| `alias` | `Array` | No | Alternative names or aliases |
| `gender` | `String` | No | The gender of the character |
| `hair` | `String` | No | The hair color/type of the character |
| `id` | `Integer` | No | The unique identifier for the character |
| `img_url` | `String` | No | URL to the character's image |
| `name` | `String` | No | The name of the character |
| `origin` | `String` | No | The origin of the character |
| `species` | `String` | No | The species of the character |
| `status` | `String` | No | The status of the character (e.g., Alive, Dead, Unknown) |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Character.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Character.load({ "id" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CharacterEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EpisodeEntity

```ruby
episode = client.Episode
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `air_date` | `String` | No | The air date of the episode |
| `characters` | `Array` | No | URLs to characters appearing in this episode |
| `director` | `String` | No | The director of the episode |
| `id` | `Integer` | No | The unique identifier for the episode |
| `img_url` | `String` | No | URL to the episode's image |
| `name` | `String` | No | The name of the episode |
| `writer` | `String` | No | The writer of the episode |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Episode.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Episode.load({ "id" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EpisodeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GetEndpointEntity

```ruby
get_endpoint = client.GetEndpoint
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fullUrl` | `String` | No |  |
| `name` | `String` | No |  |
| `path` | `String` | No |  |
| `queryParams` | `Array` | No |  |
| `type` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.GetEndpoint.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GetEndpointEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LocationEntity

```ruby
location = client.Location
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `Integer` | No | The unique identifier for the location |
| `img_url` | `String` | No | URL to the location's image |
| `inhabitants` | `Array` | No | List of inhabitants of the location |
| `name` | `String` | No | The name of the location |
| `notable_residents` | `Array` | No | URLs to notable residents |
| `type` | `String` | No | The type of location |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Location.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Location.load({ "id" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LocationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## QuoteEntity

```ruby
quote = client.Quote
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `by` | `String` | No | The character who said the quote |
| `character` | `String` | No | URL to the character who said the quote |
| `id` | `Integer` | No | The unique identifier for the quote |
| `image` | `String` | No | URL to an image related to the quote |
| `quote` | `String` | No | The quote text |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Quote.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `QuoteEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = FinalSpaceSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

