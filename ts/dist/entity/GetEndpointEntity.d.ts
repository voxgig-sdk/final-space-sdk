import { FinalSpaceEntityBase } from '../FinalSpaceEntityBase';
import type { FinalSpaceSDK } from '../FinalSpaceSDK';
import type { Control } from '../types';
import type { GetEndpoint, GetEndpointListMatch } from '../FinalSpaceTypes';
declare class GetEndpointEntity extends FinalSpaceEntityBase<GetEndpoint> {
    constructor(client: FinalSpaceSDK, entopts: any);
    make(this: GetEndpointEntity): GetEndpointEntity;
    list(this: any, reqmatch?: GetEndpointListMatch, ctrl?: Control): Promise<GetEndpointEntity[]>;
}
export { GetEndpointEntity };
