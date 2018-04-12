declare const msCrypto: Crypto;

export function getRandomValuesWithMathRandom(bytes: Uint8Array): void {
  const max = Math.pow(2, 8 * bytes.byteLength / bytes.length);
  for (let i = 0, r; i < bytes.length; i++) {
    bytes[i] = Math.random() * max;
  }
}

export const getRandomValues = (() => {
  if (typeof crypto !== 'undefined') {
    return crypto.getRandomValues.bind(crypto);
  } else if (typeof msCrypto !== 'undefined') {
    return msCrypto.getRandomValues.bind(crypto);
  } else {
    return getRandomValuesWithMathRandom;
  }
})();

export function getRandomBytes(length: number): Uint8Array {
  const bytes = new Uint8Array(length);
  getRandomValues(bytes);
  return bytes;
};
