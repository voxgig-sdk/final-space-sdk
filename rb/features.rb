# FinalSpace SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module FinalSpaceFeatures
  def self.make_feature(name)
    case name
    when "base"
      FinalSpaceBaseFeature.new
    when "test"
      FinalSpaceTestFeature.new
    else
      FinalSpaceBaseFeature.new
    end
  end
end
