import { FinalSpaceEntityBase } from '../FinalSpaceEntityBase';
import type { FinalSpaceSDK } from '../FinalSpaceSDK';
import type { Control } from '../types';
import type { Character, CharacterLoadMatch, CharacterListMatch } from '../FinalSpaceTypes';
declare class CharacterEntity extends FinalSpaceEntityBase<Character> {
    constructor(client: FinalSpaceSDK, entopts: any);
    make(this: CharacterEntity): CharacterEntity;
    load(this: any, reqmatch?: CharacterLoadMatch, ctrl?: Control): Promise<CharacterEntity>;
    list(this: any, reqmatch?: CharacterListMatch, ctrl?: Control): Promise<CharacterEntity[]>;
}
export { CharacterEntity };
