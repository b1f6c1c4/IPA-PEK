# IPA-PEK

> IPA narrow transcription of Chinese Mandarin words in Beijing accent

## Prerequisites

- Node.js 12.18.3 or 14.x+
- npm or yarn
- [Parcel](https://v2.parceljs.org/) (for demo and deployment usage; NOT the DEPRECATED `parcel-bundler`!!!)

## Install CLI

```bash
# For cli or global usage:
npm i -g ipa-pek
# or:
yarn global add ipa-pek

# For local usage:
npm i ipa-pek
# or:
yarn add ipa-pek
```

## Local Demo

Additional instruction for Windows users: Remember to amend `scripts.prepare` and `scripts.start` fields in `package.json` prior to running:

> "prepare": "node ./scripts/download.js"  
> ...  
> "start": "node ./bin/pek.js"

```bash
npm i
# or:
yarn install
```
```bash
npm run demo
# or:
yarn demo
# A server will be running at http://localhost:1234
```

## CLI Usage

```bash
pek [--unicode|--html|--latex] <word>
```

- Output format:
    - `--unicode`: *(default)* UTF-8 encoded [IPA in unicode](https://en.wikipedia.org/wiki/Phonetic_symbols_in_Unicode).
    - `--html`: HTML entities of IPA in unicode.
    - `--latex`: LaTeX script for the [TIPA package](https://ctan.org/pkg/tipa).
- `<pinyin>`: Which word to translate.

## Library Usage

```js
const pek = require('ipa-pek');

// Get phonetics
// The third parameter is phonemic/phonetic switch.
const ir = pek.process('<pinyin>', false);

// Output
console.log(pek.unicode(ir));
console.log(pek.html(ir));
console.log(pek.latex(ir));
```

## FAQ

- How do you get these?

    > Pinyin are translated into allophones using a fixed set of rules.

- I don't understand the complex syntax!

    > Go back and learn IPA. The *real* [IPA](https://en.wikipedia.org/wiki/International_Phonetic_Alphabet), not simplified ones. Including [diacritics](https://en.wikipedia.org/wiki/International_Phonetic_Alphabet#Diacritics).

- I live in Beijing and this is not my accent.

    > You may open an issue here, but we are unlikely to change the rules.

## License

This project is licensed under GNU AGPL v3.0 only. (AGPL-3.0-only).

