# frozen_string_literal: true

# Typed models for the OpenGovernmentPortal SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Dataset entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] download_url
#   @return [String, nil]
#
# @!attribute [rw] format
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] jurisdiction
#   @return [String, nil]
#
# @!attribute [rw] keyword
#   @return [Array, nil]
#
# @!attribute [rw] publisher
#   @return [String, nil]
#
# @!attribute [rw] record_modified
#   @return [String, nil]
#
# @!attribute [rw] record_released
#   @return [String, nil]
#
# @!attribute [rw] resource
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
Dataset = Struct.new(
  :description,
  :download_url,
  :format,
  :id,
  :jurisdiction,
  :keyword,
  :publisher,
  :record_modified,
  :record_released,
  :resource,
  :title,
  keyword_init: true
)

# Request payload for Dataset#load.
#
# @!attribute [rw] id
#   @return [String]
DatasetLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Match filter for Dataset#list (any subset of Dataset fields).
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] download_url
#   @return [String, nil]
#
# @!attribute [rw] format
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] jurisdiction
#   @return [String, nil]
#
# @!attribute [rw] keyword
#   @return [Array, nil]
#
# @!attribute [rw] publisher
#   @return [String, nil]
#
# @!attribute [rw] record_modified
#   @return [String, nil]
#
# @!attribute [rw] record_released
#   @return [String, nil]
#
# @!attribute [rw] resource
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
DatasetListMatch = Struct.new(
  :description,
  :download_url,
  :format,
  :id,
  :jurisdiction,
  :keyword,
  :publisher,
  :record_modified,
  :record_released,
  :resource,
  :title,
  keyword_init: true
)

