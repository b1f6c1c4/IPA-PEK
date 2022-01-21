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

const vowels = ['AE', 'AY', 'AW', 'AA', 'AH', 'EY', 'EH', 'ER', 'AH', 'IY', 'IH', 'OW', 'OY', 'AO', 'UW', 'UH'];

module.exports = (ph) => {
  const special = ph.match(/^(er|m|n|ng)([1-5])$/);
  if (special) {
    return {
      onset: null,
      coda: special[1],
      tone: +special[2],
    };
  }
  if (ph.match(/^yi/)) {
    ph = ph.replace(/^y/, ''),
  }
  if (ph.match(/^y/)) {
    ph = ph.replace(/^y/, 'i'),
  }
  if (ph.match(/^w/)) {
    ph = ph.replace(/^u/, ''),
  }
  const [, onset, coda, t] = ph.match(/^([bpmfdtnlgkhjqxrzcs]|[zcs]h)?([aoeiuv]{1,3}n?g?)([1-5])$/);
  const o = {
    onset,
    coda,
    tone: +t,
  };
  return o;
};
module.exports.default = module.exports;
