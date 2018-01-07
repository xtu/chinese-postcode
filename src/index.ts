import { postcode as map } from "./map";

/**
 * This type represents the address that identifies a postcode.
 */
export interface Address {
    province: string,
    city: string,
    county: string
}

/**
 * @param postcode  The postcode to be searched for.
 * @returns         Returns the addresses that use this postcode. Note it might return more than one address. Returns undefined if not found.
 */
export function getAddress(postcode: string): Address[] {
    const results = map.filter(entry => entry.postcode === postcode);

    if (results.length === 0) {
        return undefined;
    }

    return results;
}

/**
 * @param address   The address to be searched for.
 * @returns         Returns the postcode of this address. Returns undefined if not found.
 */
export function getPostcode(address: Address): string {
    const results = map.filter(entry => 
        entry.province === address.province
        && entry.city === address.city
        && entry.county === address.county);

    if (results.length === 0) {
        return undefined;
    }

    return results[0].postcode;
}