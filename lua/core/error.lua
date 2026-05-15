-- OpenGovernmentPortal SDK error

local OpenGovernmentPortalError = {}
OpenGovernmentPortalError.__index = OpenGovernmentPortalError


function OpenGovernmentPortalError.new(code, msg, ctx)
  local self = setmetatable({}, OpenGovernmentPortalError)
  self.is_sdk_error = true
  self.sdk = "OpenGovernmentPortal"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function OpenGovernmentPortalError:error()
  return self.msg
end


function OpenGovernmentPortalError:__tostring()
  return self.msg
end


return OpenGovernmentPortalError
