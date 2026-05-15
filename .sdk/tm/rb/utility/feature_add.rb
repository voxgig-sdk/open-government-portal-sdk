# OpenGovernmentPortal SDK utility: feature_add
module OpenGovernmentPortalUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
