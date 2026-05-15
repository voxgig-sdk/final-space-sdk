# FinalSpace SDK utility: make_context
require_relative '../core/context'
module FinalSpaceUtilities
  MakeContext = ->(ctxmap, basectx) {
    FinalSpaceContext.new(ctxmap, basectx)
  }
end
