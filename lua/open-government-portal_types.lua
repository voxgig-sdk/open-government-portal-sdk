-- Typed models for the OpenGovernmentPortal SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Dataset
---@field description? string
---@field download_url? string
---@field format? table
---@field id? string
---@field jurisdiction? string
---@field keyword? table
---@field publisher? string
---@field record_modified? string
---@field record_released? string
---@field resource? table
---@field title? string

---@class DatasetLoadMatch
---@field id string

---@class DatasetListMatch
---@field description? string
---@field download_url? string
---@field format? table
---@field id? string
---@field jurisdiction? string
---@field keyword? table
---@field publisher? string
---@field record_modified? string
---@field record_released? string
---@field resource? table
---@field title? string

local M = {}

return M
