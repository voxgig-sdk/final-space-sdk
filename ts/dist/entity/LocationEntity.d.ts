import { FinalSpaceEntityBase } from '../FinalSpaceEntityBase';
import type { FinalSpaceSDK } from '../FinalSpaceSDK';
import type { Control } from '../types';
import type { Location, LocationLoadMatch, LocationListMatch } from '../FinalSpaceTypes';
declare class LocationEntity extends FinalSpaceEntityBase<Location> {
    constructor(client: FinalSpaceSDK, entopts: any);
    make(this: LocationEntity): LocationEntity;
    load(this: any, reqmatch?: LocationLoadMatch, ctrl?: Control): Promise<LocationEntity>;
    list(this: any, reqmatch?: LocationListMatch, ctrl?: Control): Promise<LocationEntity[]>;
}
export { LocationEntity };
