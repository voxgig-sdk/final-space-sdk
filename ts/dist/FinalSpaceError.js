"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinalSpaceError = void 0;
class FinalSpaceError extends Error {
    isFinalSpaceError = true;
    sdk = 'FinalSpace';
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
exports.FinalSpaceError = FinalSpaceError;
//# sourceMappingURL=FinalSpaceError.js.map