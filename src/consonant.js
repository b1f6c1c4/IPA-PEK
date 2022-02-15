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
  l: '\\=*l',
  g: '\\r*g',
  k: 'k\\super{h}',
  h: '\\|`x',
  j: '\\t{\\r*d\\r*\\textctz{}}',
  q: '\\t{tC\\super{h}}',
  x: 'C',
  zh: '\\t{\\r*d\\r{\\textinvsubbridge{\\:z}}}',
  ch: '\\t{t\\textinvsubbridge{\\:s}}\\super{h}',
  sh: '\\t{\\textinvsubbridge{\\:s}}',
  r: '\\t{\\textinvsubbridge{\\:R}}',
  z: '\\t{\\r*d\\r*{\\|+z}}',
  c: '\\t{t\\|+s\\super{h}}',
  s: '\\|+s',
};

function categorize(phs) {
  phs.forEach((ph) => {
    ph.onsetProperties = {
      bilabial: ['b', 'p', 'm'].includes(ph.onset),
      labiodental: ['f'].includes(ph.onset),
      alveolar: ['d', 't', 'n', 'l'].includes(ph.onset),
      avlor: ['d', 't', 'n', 'l'].includes(ph.onset),
      velar: ['g', 'k', 'h'].includes(ph.onset),
      postalveolar: ['j', 'q', 'x'].includes(ph.onset),
      retroflex: ['zh', 'ch', 'sh', 'r'].includes(ph.onset),
      advanced: ['z', 'c', 's'].includes(ph.onset),
    };
  });
}

module.exports = (phs) => {
  categorize(phs);
  phs.forEach((ph) => {
    if (ph.onset)
      ph.onsetText = onsetEncoding[ph.onset];
    else
      ph.onsetText = '';
  });
};
module.exports.default = module.exports;
