# FinalSpace TypeScript SDK Reference

Complete API reference for the FinalSpace TypeScript SDK.


## FinalSpaceSDK

### Constructor

```ts
new FinalSpaceSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `FinalSpaceSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = FinalSpaceSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `FinalSpaceSDK` instance in test mode.


### Instance Methods

#### `Character(data?: object)`

Create a new `Character` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CharacterEntity` instance.

#### `Episode(data?: object)`

Create a new `Episode` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EpisodeEntity` instance.

#### `GetEndpoint(data?: object)`

Create a new `GetEndpoint` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GetEndpointEntity` instance.

#### `Location(data?: object)`

Create a new `Location` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LocationEntity` instance.

#### `Quote(data?: object)`

Create a new `Quote` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `QuoteEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `FinalSpaceSDK.test()`.

**Returns:** `FinalSpaceSDK` instance in test mode.


---

## CharacterEntity

```ts
const character = client.Character()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abilities` | `any[]` | No | List of abilities the character has |
| `alias` | `any[]` | No | Alternative names or aliases |
| `gender` | `string` | No | The gender of the character |
| `hair` | `string` | No | The hair color/type of the character |
| `id` | `number` | No | The unique identifier for the character |
| `img_url` | `string` | No | URL to the character's image |
| `name` | `string` | No | The name of the character |
| `origin` | `string` | No | The origin of the character |
| `species` | `string` | No | The species of the character |
| `status` | `string` | No | The status of the character (e.g., Alive, Dead, Unknown) |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Character().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Character().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CharacterEntity` instance with the same client and
options.

#### `client()`

Return the parent `FinalSpaceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EpisodeEntity

```ts
const episode = client.Episode()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `air_date` | `string` | No | The air date of the episode |
| `characters` | `any[]` | No | URLs to characters appearing in this episode |
| `director` | `string` | No | The director of the episode |
| `id` | `number` | No | The unique identifier for the episode |
| `img_url` | `string` | No | URL to the episode's image |
| `name` | `string` | No | The name of the episode |
| `writer` | `string` | No | The writer of the episode |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Episode().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Episode().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EpisodeEntity` instance with the same client and
options.

#### `client()`

Return the parent `FinalSpaceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GetEndpointEntity

```ts
const get_endpoint = client.GetEndpoint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fullUrl` | `string` | No |  |
| `name` | `string` | No |  |
| `path` | `string` | No |  |
| `queryParams` | `any[]` | No |  |
| `type` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.GetEndpoint().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GetEndpointEntity` instance with the same client and
options.

#### `client()`

Return the parent `FinalSpaceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LocationEntity

```ts
const location = client.Location()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | No | The unique identifier for the location |
| `img_url` | `string` | No | URL to the location's image |
| `inhabitants` | `any[]` | No | List of inhabitants of the location |
| `name` | `string` | No | The name of the location |
| `notable_residents` | `any[]` | No | URLs to notable residents |
| `type` | `string` | No | The type of location |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Location().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Location().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LocationEntity` instance with the same client and
options.

#### `client()`

Return the parent `FinalSpaceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## QuoteEntity

```ts
const quote = client.Quote()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `by` | `string` | No | The character who said the quote |
| `character` | `string` | No | URL to the character who said the quote |
| `id` | `number` | No | The unique identifier for the quote |
| `image` | `string` | No | URL to an image related to the quote |
| `quote` | `string` | No | The quote text |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Quote().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `QuoteEntity` instance with the same client and
options.

#### `client()`

Return the parent `FinalSpaceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new FinalSpaceSDK({
  feature: {
    test: { active: true },
  }
})
```

