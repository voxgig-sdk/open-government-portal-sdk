package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewDatasetEntityFunc func(client *OpenGovernmentPortalSDK, entopts map[string]any) OpenGovernmentPortalEntity

