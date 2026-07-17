-- OpenGovernmentPortal SDK exists test

local sdk = require("open-government-portal_sdk")

describe("OpenGovernmentPortalSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
