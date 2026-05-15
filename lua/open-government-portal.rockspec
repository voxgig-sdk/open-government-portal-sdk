package = "voxgig-sdk-open-government-portal"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/open-government-portal-sdk.git"
}
description = {
  summary = "OpenGovernmentPortal SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["open-government-portal_sdk"] = "open-government-portal_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
