<?php
declare(strict_types=1);

// Typed models for the OpenGovernmentPortal SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Dataset entity data model. */
class Dataset
{
    public ?string $description = null;
    public ?string $download_url = null;
    public ?array $format = null;
    public ?string $id = null;
    public ?string $jurisdiction = null;
    public ?array $keyword = null;
    public ?string $publisher = null;
    public ?string $record_modified = null;
    public ?string $record_released = null;
    public ?array $resource = null;
    public ?string $title = null;
}

/** Request payload for Dataset#load. */
class DatasetLoadMatch
{
    public string $id;
}

/** Match filter for Dataset#list (any subset of Dataset fields). */
class DatasetListMatch
{
    public ?string $description = null;
    public ?string $download_url = null;
    public ?array $format = null;
    public ?string $id = null;
    public ?string $jurisdiction = null;
    public ?array $keyword = null;
    public ?string $publisher = null;
    public ?string $record_modified = null;
    public ?string $record_released = null;
    public ?array $resource = null;
    public ?string $title = null;
}

