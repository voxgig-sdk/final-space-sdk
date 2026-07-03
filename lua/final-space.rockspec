package = "voxgig-sdk-final-space"
version = "0.0.1-1"
source = {
  -- git+https (GitHub dropped git:// in 2022); pin the install to the release
  -- tag pushed by `make publish`, and point at the lua/ subdir of the monorepo.
  url = "git+https://github.com/voxgig-sdk/final-space-sdk.git",
  tag = "lua/v0.0.1",
  dir = "final-space-sdk/lua"
}
description = {
  summary = "Unofficial generated Lua SDK for the Final Space public API. Not affiliated with or endorsed by the upstream API provider.",
  homepage = "https://github.com/voxgig-sdk/final-space-sdk",
  issues_url = "https://github.com/voxgig-sdk/final-space-sdk/issues",
  license = "MIT",
  labels = { "voxgig", "sdk", "generated-sdk", "openapi", "api-client", "final-space" }
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["final-space_sdk"] = "final-space_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
