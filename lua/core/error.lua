-- FinalSpace SDK error

local FinalSpaceError = {}
FinalSpaceError.__index = FinalSpaceError


function FinalSpaceError.new(code, msg, ctx)
  local self = setmetatable({}, FinalSpaceError)
  self.is_sdk_error = true
  self.sdk = "FinalSpace"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function FinalSpaceError:error()
  return self.msg
end


function FinalSpaceError:__tostring()
  return self.msg
end


return FinalSpaceError
