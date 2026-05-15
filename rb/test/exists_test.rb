# FinalSpace SDK exists test

require "minitest/autorun"
require_relative "../FinalSpace_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = FinalSpaceSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
