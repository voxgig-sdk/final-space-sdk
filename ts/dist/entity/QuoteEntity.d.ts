import { FinalSpaceEntityBase } from '../FinalSpaceEntityBase';
import type { FinalSpaceSDK } from '../FinalSpaceSDK';
import type { Control } from '../types';
import type { Quote, QuoteListMatch } from '../FinalSpaceTypes';
declare class QuoteEntity extends FinalSpaceEntityBase<Quote> {
    constructor(client: FinalSpaceSDK, entopts: any);
    make(this: QuoteEntity): QuoteEntity;
    list(this: any, reqmatch?: QuoteListMatch, ctrl?: Control): Promise<QuoteEntity[]>;
}
export { QuoteEntity };
