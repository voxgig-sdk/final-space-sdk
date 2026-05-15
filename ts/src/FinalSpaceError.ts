
import { Context } from './Context'


class FinalSpaceError extends Error {

  isFinalSpaceError = true

  sdk = 'FinalSpace'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  FinalSpaceError
}

