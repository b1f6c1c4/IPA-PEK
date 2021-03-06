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

const parse = require('./parse');
const consonant = require('./consonant');
const vowel = require('./vowel');
const tone = require('./tone');
const display = require('./display');

module.exports = (ph) => {
  const phs = parse(ph);
  consonant(phs);
  vowel(phs);
  tone(phs);
  return phs;
};
module.exports.display = display;
module.exports.default = module.exports;
