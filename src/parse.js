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

module.exports = (phst) => phst && phst.trim().split(/\s+/).map((ph) => {
  const special = ph.match(/^(er|m|n|ng)([1-5])?$/);
  if (special) {
    return {
      onset: null,
      coda: special[1],
      tone: special[2] ? +special[2] : undefined,
    };
  }
  if (ph.match(/^yi/)) {
    ph = ph.replace(/^y/, '');
  }
  if (ph.match(/^yu/)) {
    ph = ph.replace(/^yu/, 'v');
  }
  if (ph.match(/^you/)) {
    ph = ph.replace(/^you/, 'iu');
  }
  if (ph.match(/^y/)) {
    ph = ph.replace(/^y/, 'i');
  }
  ph = ph.replace(/^w/, 'u');
  ph = ph.replace(/^uei/, 'ui');
  let [, onset, coda, t] = ph.match(/^([bpmfdtnlgkhjqxrzcs]|[zcs]h)?([aoeêiuüv]{1,3}n?g?r?)([1-5])?$/);
  if (['j', 'q', 'x'].includes(onset) && coda && coda[0] === 'u') {
    coda = coda.replace(/^u/, 'v');
  }
  coda = coda.replace('ê', 'ee');
  coda = coda.replace('ü', 'v');
  if (coda == 'uen') coda = 'un';
  if (coda == 'ven') coda = 'vn';
  const o = {
    onset,
    coda,
    tone: t ? +t : undefined,
  };
  return o;
});
module.exports.default = module.exports;
