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

const onsetEncoding = {
  b: '\\r*b',
  p: 'p\\super{h}',
  m: 'm',
  f: 'f',
  d: '\\r*d',
  t: 't\\super{h}',
  n: 'n',
  l: '\\textsubbar{l}',
  g: '\\r*g',
  k: 'k\\super{h}',
  x: '\\textlowering{x}',
  j: '\\t{\\r*d\\r*\\textctz{}}',
  q: '\\t{t\\textctx\\super{h}}',
  x: '\\textctc{}',
  zh: '\\t{\\r*d\\r{\\textinvsubbridge{\\:z}}}',
  ch: '\\t{t\\textinvsubbridge{\\:s}}\\super{h}',
  sh: '\\t{\\textinvsubbridge{\\:s}}',
  r: '\\t{\\textinvsubbridge{\\:R}}',
  z: '\\t{\\r*d\\r*{\\|+z}}',
  c: '\\t{t\\|+s\\super{h}}',
  s: '\\|+s',
};

module.exports = (phs) => {
  phs.forEach((ph) => {
    if (ph.onset)
      ph.onsetText = onsetEncoding[ph.onset];
    else
      ph.onsetText = '';
  });
};
module.exports.default = module.exports;
