import { getRandomBytes } from "./rng";

function hex(bytes: Uint8Array): string {
  let s = "";
  for (let i = 0; i < bytes.length; i++) {
    s += bytes[i].toString(16).padStart(2, '0');
  }
  return s;
}

// https://tools.ietf.org/html/rfc4122
export function generateUUIDv4() {
  const bytes = getRandomBytes(16);

    // 4.1.1. Variant
    const VARIANT = 2; // "The variant specified in this document"

    // 4.1.3. Version
    const VERSION = 4; // "The randomly or pseudo-randomly generated version specified in this document"

    bytes[6] = (bytes[6] & 0x0f) | 0x40; // version
    bytes[8] = (bytes[8] & 0xbf) | 0x80; // variant

    return hex(bytes.subarray(0, 4))
        + "-" + hex(bytes.subarray(4, 6))
        + "-" + hex(bytes.subarray(6, 8))
        + "-" + hex(bytes.subarray(8, 10))
        + "-" + hex(bytes.subarray(10, 16));
}

