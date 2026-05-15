
import { Context } from './Context'


class OpenGovernmentPortalError extends Error {

  isOpenGovernmentPortalError = true

  sdk = 'OpenGovernmentPortal'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  OpenGovernmentPortalError
}

