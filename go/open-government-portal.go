package voxgigopengovernmentportalsdk

import (
	"github.com/voxgig-sdk/open-government-portal-sdk/core"
	"github.com/voxgig-sdk/open-government-portal-sdk/entity"
	"github.com/voxgig-sdk/open-government-portal-sdk/feature"
	_ "github.com/voxgig-sdk/open-government-portal-sdk/utility"
)

// Type aliases preserve external API.
type OpenGovernmentPortalSDK = core.OpenGovernmentPortalSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type OpenGovernmentPortalEntity = core.OpenGovernmentPortalEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type OpenGovernmentPortalError = core.OpenGovernmentPortalError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewDatasetEntityFunc = func(client *core.OpenGovernmentPortalSDK, entopts map[string]any) core.OpenGovernmentPortalEntity {
		return entity.NewDatasetEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewOpenGovernmentPortalSDK = core.NewOpenGovernmentPortalSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
