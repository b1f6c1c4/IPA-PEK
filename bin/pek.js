#!/usr/bin/env node

/* Copyright (C) 2022 b1f6c1c4
 *
 * This file is part of IPA-PEK.
 *
 * IPA-PEK is free software: you can redistribute it and/or modify it under the
 * terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3.
 *
 * IPA-PEK is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for
 * more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with IPA-PEK.  If not, see <https://www.gnu.org/licenses/>.
 */

const yargs = require('yargs');
const pek = require('..');

const { argv } = yargs
  .scriptName('pek')
  .usage('$0 [<options>] <word>')
  .strict()
  .help('h')
  .alias('h', 'help')
  .showHelpOnFail(false, 'Hint: You may need this: findbug --help.')
  .version()
  .option('unicode', {
    describe: 'Output UTF-8 encoded IPA in unicode.',
    type: 'boolean',
  })
  .option('html', {
    describe: 'Output HTML entities of IPA in unicode.',
    type: 'boolean',
  })
  .option('latex', {
    describe: 'Output LaTeX script for the TIPA package.',
    type: 'boolean',
  })
  .check((argv) => {
    const v = +!!argv.unicode + +!!argv.html + +!!argv.latex;
    if (v > 1)
      throw new Error('Error: Only one of --unicode, --html, --latex may be specified.');
    if (v === 0)
      argv.unicode = true;
    return true;
  });

if (!argv._.length) {
  console.error('Error: Missing the <pinyin> you want to translate. See pek --help for help.');
  process.exit(1);
}

const [pinyin] = argv._.splice(0, 1);

const phss = pinyin.split(/\s+/g);
const irs = phss.map((phs) => pek.process(phs));

let res;
if (argv.unicode) {
  res = irs.map(pek.unicode);
} else if (argv.html) {
  res = irs.map(pek.html);
} else { // if (argv.latex) {
  res = irs.map(pek.latex);
}

res.forEach((r) => { console.log(r); });
