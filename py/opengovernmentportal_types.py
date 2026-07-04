# Typed models for the OpenGovernmentPortal SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Dataset:
    description: Optional[str] = None
    download_url: Optional[str] = None
    format: Optional[list] = None
    id: Optional[str] = None
    jurisdiction: Optional[str] = None
    keyword: Optional[list] = None
    publisher: Optional[str] = None
    record_modified: Optional[str] = None
    record_released: Optional[str] = None
    resource: Optional[list] = None
    title: Optional[str] = None


@dataclass
class DatasetLoadMatch:
    id: str


@dataclass
class DatasetListMatch:
    description: Optional[str] = None
    download_url: Optional[str] = None
    format: Optional[list] = None
    id: Optional[str] = None
    jurisdiction: Optional[str] = None
    keyword: Optional[list] = None
    publisher: Optional[str] = None
    record_modified: Optional[str] = None
    record_released: Optional[str] = None
    resource: Optional[list] = None
    title: Optional[str] = None

