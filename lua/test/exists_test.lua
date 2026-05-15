-- ProjectName SDK exists test

local sdk = require("final-space_sdk")

describe("FinalSpaceSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
