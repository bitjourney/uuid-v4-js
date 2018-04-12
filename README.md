# @bitjourney/uuid-v4

This is a UUID v4 (randomly-generted UUID) implementation in TypeScript.

This library uses `crypto.getRandomValues()` if possible.

## Install

```
npm install @bitjourney/uuid-v4
```

## Usage

```typescript
import { generateUUIDv4 } from "@bitjourney/uuid-v4";

// to test it
import isUUID from "is-uuid";

console.log(isUUID.v4(generateUUIDv4())); // => true
```

## See Also

* [Crypto\.getRandomValues\(\) \- Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues)
* [Can I use crypt.getRandomValues()?](https://caniuse.com/#feat=getrandomvalues)
