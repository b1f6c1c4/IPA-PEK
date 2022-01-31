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

const tipa2unicode = require('tipa2unicode');

function utf8Encode(phs) {
  const latex = latexEncode(phs);
  try {
    return tipa2unicode(latex);
  } catch (e) {
    throw new Error(`Error during tipa2unicode ${latex}`, { cause: e });
  }
}

function latexEncode(phs) {
  return phs.map((ph) => {
    return ph.onsetText + ph.codaText + ph.toneText;
  }).join(' ');
}

module.exports = {
  utf8Encode,
  latexEncode,
};
module.exports.default = module.exports;
