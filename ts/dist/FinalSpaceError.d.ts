import { Context } from './Context';
declare class FinalSpaceError extends Error {
    isFinalSpaceError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { FinalSpaceError };
