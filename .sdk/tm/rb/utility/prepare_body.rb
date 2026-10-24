# FinalSpace SDK utility: prepare_body
require_relative 'media'
module FinalSpaceUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return FinalSpaceUtilities.raw_body(ctx.reqdata) if FinalSpaceUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
