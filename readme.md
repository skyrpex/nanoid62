# nanoid62

A tiny and fast [nanoid](https://github.com/ai/nanoid) that uses the [base62 alphabet](https://en.wikipedia.org/wiki/Base62), which has the following benefits:

- **URL friendly**: doesn't need escaping
- **Copyable**: double click selects the whole ID
- **Expandable**: easy to prefix (e.g. `user_${nanoid62()}`)

## Installation

```sh
npm install nanoid62
```

## Usage

```ts
import { nanoid62 } from "nanoid62";

const id = nanoid62();
```
