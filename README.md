# @bitjourney/uuid-v4

[![npm version](https://badge.fury.io/js/%40bitjourney%2Fuuid-v4.svg)](https://badge.fury.io/js/%40bitjourney%2Fuuid-v4)

This is a UUID v4 (randomly-generted UUID) implementation in TypeScript,
based on `crypto.getRandomValues()` if Web Crypto API is available.

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


## Copyright and Licenses

The license is ISC: https://opensource.org/licenses/ISC

Copyright (c) 2018, Bit Journey, Inc.

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
