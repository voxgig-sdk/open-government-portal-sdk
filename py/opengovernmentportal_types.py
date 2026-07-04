# Typed models for the OpenGovernmentPortal SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Dataset(TypedDict, total=False):
    description: str
    download_url: str
    format: list
    id: str
    jurisdiction: str
    keyword: list
    publisher: str
    record_modified: str
    record_released: str
    resource: list
    title: str


class DatasetLoadMatch(TypedDict):
    id: str


class DatasetListMatch(TypedDict, total=False):
    description: str
    download_url: str
    format: list
    id: str
    jurisdiction: str
    keyword: list
    publisher: str
    record_modified: str
    record_released: str
    resource: list
    title: str
