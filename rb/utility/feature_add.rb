# FinalSpace SDK utility: feature_add
module FinalSpaceUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
