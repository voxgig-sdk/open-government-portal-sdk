import { Context } from './Context';
declare class OpenGovernmentPortalError extends Error {
    isOpenGovernmentPortalError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { OpenGovernmentPortalError };
