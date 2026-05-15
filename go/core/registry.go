package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewCharacterEntityFunc func(client *FinalSpaceSDK, entopts map[string]any) FinalSpaceEntity

var NewEpisodeEntityFunc func(client *FinalSpaceSDK, entopts map[string]any) FinalSpaceEntity

var NewGetEndpointEntityFunc func(client *FinalSpaceSDK, entopts map[string]any) FinalSpaceEntity

var NewLocationEntityFunc func(client *FinalSpaceSDK, entopts map[string]any) FinalSpaceEntity

var NewQuoteEntityFunc func(client *FinalSpaceSDK, entopts map[string]any) FinalSpaceEntity

