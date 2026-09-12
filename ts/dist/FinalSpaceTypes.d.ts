export interface Character {
    abilities?: any[];
    alias?: any[];
    gender?: string;
    hair?: string;
    id?: number;
    img_url?: string;
    name?: string;
    origin?: string;
    species?: string;
    status?: string;
}
export interface CharacterLoadMatch {
    id: number;
}
export interface CharacterListMatch {
    sort?: string;
}
export interface Episode {
    air_date?: string;
    characters?: any[];
    director?: string;
    id?: number;
    img_url?: string;
    name?: string;
    writer?: string;
}
export interface EpisodeLoadMatch {
    id: number;
}
export interface EpisodeListMatch {
    sort?: string;
}
export interface GetEndpoint {
    fullUrl?: string;
    name?: string;
    path?: string;
    queryParams?: any[];
    type?: string;
}
export interface GetEndpointListMatch {
    fullUrl?: string;
    name?: string;
    path?: string;
    queryParams?: any[];
    type?: string;
}
export interface Location {
    id?: number;
    img_url?: string;
    inhabitants?: any[];
    name?: string;
    notable_residents?: any[];
    type?: string;
}
export interface LocationLoadMatch {
    id: number;
}
export interface LocationListMatch {
    sort?: string;
}
export interface Quote {
    by?: string;
    character?: string;
    id?: number;
    image?: string;
    quote?: string;
}
export interface QuoteListMatch {
    sort?: string;
}
