"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenGovernmentPortalError = void 0;
class OpenGovernmentPortalError extends Error {
    isOpenGovernmentPortalError = true;
    sdk = 'OpenGovernmentPortal';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.OpenGovernmentPortalError = OpenGovernmentPortalError;
//# sourceMappingURL=OpenGovernmentPortalError.js.map