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

const toneEncoding = {
  1: '\\tone{55}',
  2: '\\tone{25}',
  3: '\\tone{213}', // TODO: breathy voice
  4: '\\tone{52}',
};

const tone5FirstEncoding = {
  1: '\\tone{41}',
  2: '\\tone{52}',
  3: '\\tone{33}',
  4: '\\tone{21}',
};

const tone5SecondEncoding = {
  1: '\\tone{21}',
  2: '\\tone{32}',
  3: '\\tone{32}',
  4: '\\tone{11}',
};

module.exports = (phs) => {
  let last = undefined;
  let fifth = 0;
  for (const ph of phs) {
    if (!ph.tone) {
      ph.toneText = '';
      last = undefined;
      fifth = 0;
      continue;
    }
    if (ph.tone < 5) {
      ph.toneText = toneEncoding[ph.tone];
      last = ph.tone;
      fifth = 0;
      continue;
    }
    if (!last) {
      ph.toneText = '';
    } else if (!(fifth++)) {
      ph.toneText = tone5FirstEncoding[last];
    } else {
      ph.toneText = tone5SecondEncoding[last];
    }
  }
};
module.exports.default = module.exports;
