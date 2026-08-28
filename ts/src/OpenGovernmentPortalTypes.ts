// Typed models for the OpenGovernmentPortal SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Dataset {
  description?: string
  download_url?: string
  formats?: any[]
  id?: string
  jurisdiction?: string
  keywords?: any[]
  publisher?: string
  record_modified?: string
  record_released?: string
  resources?: any[]
  title?: string
}

export interface DatasetLoadMatch {
  id: string
}

export interface DatasetListMatch {
  format?: string
  keyword?: string
  limit?: number
  organization?: string
  page?: number
  q?: string
  sort?: string
}

