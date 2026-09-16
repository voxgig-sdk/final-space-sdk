# FinalSpace SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module FinalSpaceFeatures
  def self.make_feature(name)
    case name
    when "base"
      FinalSpaceBaseFeature.new
    when "ratelimit"
      FinalSpaceRatelimitFeature.new
    when "retry"
      FinalSpaceRetryFeature.new
    when "test"
      FinalSpaceTestFeature.new
    when "timeout"
      FinalSpaceTimeoutFeature.new
    else
      FinalSpaceBaseFeature.new
    end
  end
end
