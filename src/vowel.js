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

function categorize(phs) {
  phs.forEach((ph) => {
    ph.codaProperties = {
      bilabial: ['b', 'p', 'm'].includes(ph.coda),
      labiodental: ['f'].includes(ph.coda),
      alveolar: ['d', 't', 'n', 'l'].includes(ph.coda),
      avlor: ['d', 't', 'n', 'l'].includes(ph.coda),
      velar: ['g', 'k', 'h'].includes(ph.coda),
      postalveolar: ['j', 'q', 'x'].includes(ph.coda),
      retroflex: ['zh', 'ch', 'sh', 'r'].includes(ph.coda),
      advanced: ['z', 'c', 's'].includes(ph.coda),
    };
  });
}

const codaEncoding = {
  a: { 0: 'P\\"a', '': '\\"a' },
  ia: 'j\\"a',
  ua: { 0: 'V\\"a', '': 'w\\"a' },
  o: { 0: 'P\\super{w}\\|(o\\textroundcap{\\textsubrhalfring{\\|+2}}',
    '': '\\super{w}\\|(o\\textroundcap{\\textsubrhalfring{\\|+2}}' },
  io: '\\|)j\\|(o\\textroundcap{\\textsubrhalfring{\\|+2}}',
  uo: 'w\\|(o\\textroundcap{\\textsubrhalfring{\\|+2}}}',
  e: { 0: 'P\\|xW\\textroundcap{\\|+2}', '': '\\|xW\\textroundcap{\\|+2}' },
  ie: 'je\\textroundcap{\\=*E}',
  ve: '4\\|(\\o\\textroundcap{\\textsubrhalfring{\\=*E}}',
  i: { 0: 'i\\super{J}', '': 'i',
    retroflex: '\\textsubsquare{\\textvbaraccent{\\:R}}',
    advanced: '\\textsubplus{\\textvbaraccent{\\*r}}' },
  u: { 0: 'P\\|`u', '': '\\|`u', f: '\\textsubrhalfring{\\|`u}\\super{V}' },
  v: { 0: '\\=*y\\super{4}', '': '\\=*y' },
  ai: { 0: 'P\\|xa\\textsubarch{I}', '': '\\|xa\\textsubarch{I}' },
  uai: 'V\\|xa\\textsubarch{I}',
  ei: { 0: 'P\\|xe\\textsubarch{I}', '': '\\|xe\\textsubarch{I}' },
  ui: { 0: 'V\\|xe\\textsubarch{I}', '': 'u\\textroundcap{\\|)9}\\textsubarch{I}',
    velar: 'w\\=*e\\textsubarch{I}' },
  ao: { 0: 'P\\|xA\\textsubarch{U}', '': '\\|xA\\textsubarch{U}' },
  iao: 'j\\|xA\\textsubarch{U}',
  ou: { 0: 'P\\super{w}\\textsublhalfring{\\|xo}\\textsubarch{U}',
    '': '\\super{w}\\textsublhalfring{\\|xo}\\textsubarch{U}' },
  iu: { 0: 'P\\textsubrhalfring{j}\\textsublhalfring{\\|+o}\\textsubarch{U}',
    '': '\\textsubrhalfring{j}\\textsublhalfring{\\|+o}\\textsubarch{U}' },
  an: { 0: 'P\\|xan\\textcorner{}', '': '\\|xan\\textcorner{}' },
  ian: 'j\\|xEn\\textcorner{}',
  uan: { 0: 'V\\|xan\\textcorner{}', '': 'w\\|xan\\textcorner{}' },
  van: '4\\textsubarch{\\"Y}\\textsubrhalfring{\\=*E}n\\textcorner{}',
  en: { 0: 'P\\|xen\\textcorner{}', '': '\\|xen\\textcorner{}' },
  in: 'j\\|`in\\textcorner{}',
  un: { 0: 'V\\|xen\\textcorner{}', '': 'u\\textroundcap{\\|)9}n\\textcorner{}',
    velar: 'w@n\\textcorner{}' },
  vn: '4\\|`yn\\textcorner{}',
  ang: { 0: 'P\\|xAN\\textcorner{}\\super{Q}', '': '\\|xAN\\textcorner{}\\super{Q}' },
  iang: 'j\\|xAN\\textcorner{}\\super{Q}',
  uang: { 0: 'V\\|xAN\\textcorner{}\\super{Q}', '': 'w\\|+AN\\textcorner{}\\super{Q}' },
  eng: { 0: 'P\\|x7N\\textcorner{}\\super{Q}', '': '\\|x7N\\textcorner{}\\super{Q}' },
  ing: 'jIN\\textcorner{}\\super{Q}',
  ueng: 'V\\|x7N\\textcorner{}\\super{Q}',
  ong: '\\super{w}UN\\textcorner{}\\super{Q}\\super{w}',
  iong: '\\textsublhalfring{4}\\"UN\\textcorner{}\\super{Q}'
};

function encode(phs) {
  phs.forEach((ph) => {
    const enc = codaEncoding[ph.coda];
    if (!enc)
      throw new Error(`Unknown coda ${ph.coda} in`, ph);
    if (typeof enc === 'string') {
      ph.codaText = enc;
    } else if (!ph.onset) {
      ph.codaText = enc[0] || enc[''];
    } else {
      ph.codaText = enc[''];
      for (const prop of Object.keys(ph.codaProperties))
        if (enc[prop] && ph.codaProperties[prop])
          ph.codaText = enc[prop];
    }
  });
}

module.exports = (phs) => {
  categorize(phs);
  encode(phs);
};
module.exports.default = module.exports;
