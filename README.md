# IPA-PEK

> IPA narrow transcription of Chinese Mandarin words in Beijing accent

## Online Demo Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/6cc76b39-d72c-4d05-9959-0d57d6b8b6e4/deploy-status)](https://app.netlify.com/sites/ipa-pek/deploys)

You can lookup pinyin on our hassle-free **[Demo Website](https://pek.b1f6c1c4.info/)**!

## Prerequisites

- Node.js 17.x+
- npm
- [Parcel](https://parceljs.org/) (for demo and deployment usage)

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

```bash
npm i
```
```bash
npm run demo
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

    > Pinyin are translated into allophones using a fixed set of [rules](https://phesoca.com/aws/268/).

- I don't understand the complex syntax!

    > Go back and learn IPA. The *real* [IPA](https://en.wikipedia.org/wiki/International_Phonetic_Alphabet), not simplified ones. Including [diacritics](https://en.wikipedia.org/wiki/International_Phonetic_Alphabet#Diacritics).

- I live in Beijing and this is not my accent.

    > You may open an issue here, but we are unlikely to change the rules.

## License

This project is licensed under GNU AGPL v3.0 only. (AGPL-3.0-only).

