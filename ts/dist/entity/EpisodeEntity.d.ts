import { FinalSpaceEntityBase } from '../FinalSpaceEntityBase';
import type { FinalSpaceSDK } from '../FinalSpaceSDK';
import type { Control } from '../types';
import type { Episode, EpisodeLoadMatch, EpisodeListMatch } from '../FinalSpaceTypes';
declare class EpisodeEntity extends FinalSpaceEntityBase<Episode> {
    constructor(client: FinalSpaceSDK, entopts: any);
    make(this: EpisodeEntity): EpisodeEntity;
    load(this: any, reqmatch?: EpisodeLoadMatch, ctrl?: Control): Promise<EpisodeEntity>;
    list(this: any, reqmatch?: EpisodeListMatch, ctrl?: Control): Promise<EpisodeEntity[]>;
}
export { EpisodeEntity };
