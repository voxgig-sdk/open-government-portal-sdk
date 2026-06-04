# OpenGovernmentPortal SDK

Search and retrieve datasets published on Canada's national open government data portal

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Open Government Portal

The [Open Government Portal](https://search.open.canada.ca) is the Government of Canada's central catalogue of open data, open information, and proactive disclosure records. It is operated by the Treasury Board of Canada Secretariat and aggregates publications from federal departments and agencies, as well as participating provincial, territorial, and municipal partners.

The catalogue holds tens of thousands of records spanning subject areas such as environment, science and technology, economics, health, transport, agriculture, and labour. Major publishers include Statistics Canada, Natural Resources Canada, Health Canada, and the Government of Yukon.

This SDK targets the dataset search and retrieval endpoints exposed by the portal, letting you look up dataset packages and their associated metadata, resources, and download links.

All content is provided under the Open Government Licence – Canada, which permits free reuse with attribution. Individual datasets may include extra notes about update frequency, geographic scope, or format.

## Try it

**TypeScript**
```bash
npm install open-government-portal
```

**Python**
```bash
pip install open-government-portal-sdk
```

**PHP**
```bash
composer require voxgig/open-government-portal-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/open-government-portal-sdk/go
```

**Ruby**
```bash
gem install open-government-portal-sdk
```

**Lua**
```bash
luarocks install open-government-portal-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { OpenGovernmentPortalSDK } from 'open-government-portal'

const client = new OpenGovernmentPortalSDK({})

// List all datasets
const datasets = await client.Dataset().list()
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
cd go-mcp && go build -o open-government-portal-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "open-government-portal": {
      "command": "/abs/path/to/open-government-portal-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Dataset** | A catalogued open data package — title, publisher, description, tags, and the list of downloadable resources (CSV, JSON, geospatial files, etc.) attached to it. | `/opendata/` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from opengovernmentportal_sdk import OpenGovernmentPortalSDK

client = OpenGovernmentPortalSDK({})

# List all datasets
datasets, err = client.Dataset(None).list(None, None)

# Load a specific dataset
dataset, err = client.Dataset(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'opengovernmentportal_sdk.php';

$client = new OpenGovernmentPortalSDK([]);

// List all datasets
[$datasets, $err] = $client->Dataset(null)->list(null, null);

// Load a specific dataset
[$dataset, $err] = $client->Dataset(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/open-government-portal-sdk/go"

client := sdk.NewOpenGovernmentPortalSDK(map[string]any{})

// List all datasets
datasets, err := client.Dataset(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "OpenGovernmentPortal_sdk"

client = OpenGovernmentPortalSDK.new({})

# List all datasets
datasets, err = client.Dataset(nil).list(nil, nil)

# Load a specific dataset
dataset, err = client.Dataset(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("open-government-portal_sdk")

local client = sdk.new({})

-- List all datasets
local datasets, err = client:Dataset(nil):list(nil, nil)

-- Load a specific dataset
local dataset, err = client:Dataset(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = OpenGovernmentPortalSDK.test()
const result = await client.Dataset().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = OpenGovernmentPortalSDK.test(None, None)
result, err = client.Dataset(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = OpenGovernmentPortalSDK::test(null, null);
[$result, $err] = $client->Dataset(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Dataset(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = OpenGovernmentPortalSDK.test(nil, nil)
result, err = client.Dataset(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Dataset(nil):load(
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

## Using the Open Government Portal

- Upstream: [https://search.open.canada.ca](https://search.open.canada.ca)
- API docs: [https://open.canada.ca/en/open-government-licence-canada](https://open.canada.ca/en/open-government-licence-canada)

- Data is published under the [Open Government Licence – Canada](https://open.canada.ca/en/open-government-licence-canada).
- Free to copy, modify, publish, translate, adapt, distribute, or otherwise use the information for any lawful purpose.
- Attribution to the source (the relevant Government of Canada department or agency) is required.
- Individual datasets may carry additional terms — check the record before redistributing.

---

Generated from the Open Government Portal OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
