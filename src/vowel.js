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

const codaEncoding = {
  a: { 0: 'P\\"a', '': '\\"a' },
  ar: { 0: 'P\\"a\\textrhoticity\\textsubarch{5}\\textrhoticity',
    '': '\\"a\\textrhoticity\\textsubarch{5}\\textrhoticity' },
  ia: 'j\\"a',
  iar: 'j\\"a\\textrhoticity\\textsubarch{5}\\textrhoticity',
  ua: { 0: 'V\\"a', '': '\\super{w}w\\"a' },
  uar: { 0: 'V\\"a\\textrhoticity\\textsubarch{5}\\textrhoticity',
    '': '\\super{w}w\\"a\\textrhoticity\\textsubarch{5}\\textrhoticity' },
  o: { 0: 'P\\super{w}\\|(o\\textroundcap{\\textsubrhalfring{\\|+2}}',
    '': '\\super{w}\\|(o\\textroundcap{\\textsubrhalfring{\\|+2}}' },
  or: { 0: 'P\\super{w}\\textsublhalfring{\\|xo}\\textrhoticity',
    '': '\\super{w}\\textsublhalfring{\\|xo}\\textrhoticity' },
  io: '\\|)j\\|(o\\textroundcap{\\textsubrhalfring{\\|+2}}',
  uo: '\\super{w}w\\|(o\\textroundcap{\\textsubrhalfring{\\|+2}}',
  uor: '\\super{w}w\\textsublhalfring{\\|xo}\\textrhoticity',
  e: { 0: 'P\\|xW\\textroundcap{\\|+2}', '': '\\|xW\\textroundcap{\\|+2}' },
  er: { 0: 'P\\|x7\\textrhoticity', '': '\\|x7\\textrhoticity' },
  ee: 'P\\=*E',
  ie: 'je\\textroundcap{\\=*E}',
  ier: 'j@\\textrhoticity',
  ve: '4\\|(\\o\\textroundcap{\\textsubrhalfring{\\=*E}}',
  ver: '4\\|){@}\\textrhoticity',
  i: { 0: 'i\\super{J}', '': 'i',
    retroflex: '\\textsubsquare{\\textvbaraccent{\\:R}}',
    advanced: '\\textsubplus{\\textvbaraccent{\\*r}}' },
  ir: { '': 'j\\|`i\\textsubarch{@}\\textlowering{\\:R}',
    retroflex: '\\=*@\\textlowering{\\:R}',
    advanced: '\\=*@\\textlowering{\\:R}' },
  u: { 0: 'P\\|`u', '': '\\|`u', f: '\\textsubrhalfring{\\|`u}\\super{V}' },
  ur: { 0: 'PU\\textrhoticity', '': 'U\\textrhoticity', f: '\\|(U\\textrhoticity\\super{V}' },
  v: { 0: '\\=*y\\super{4}', '': '\\super{w}\\=*y' },
  ai: { 0: 'P\\|xa\\textsubarch{I}', '': '\\|xa\\textsubarch{I}' },
  uai: { 0: 'V\\|xa\\textsubarch{I}', '': '\\super{w}V\\|xa\\textsubarch{I}' },
  ei: { 0: 'P\\|xe\\textsubarch{I}', '': '\\|xe\\textsubarch{I}' },
  ui: { 0: 'V\\|xe\\textsubarch{I}', '': '\\super{w}u\\textroundcap{\\|)9}\\textsubarch{I}',
    velar: '\\super{w}w\\=*e\\textsubarch{I}' },
  ao: { 0: 'P\\|xA\\textsubarch{U}', '': '\\|xA\\textsubarch{U}' },
  aor: { 0: 'P\\textsubrhalfring{\\|xA}\\textrhoticity\\textsubarch{U}\\textrhoticity',
    '': '\\textsubrhalfring{\\|xA}\\textrhoticity\\textsubarch{U}\\textrhoticity' },
  iao: 'j\\|xA\\textsubarch{U}',
  iaor: 'j\\textsubrhalfring{\\|xA}\\textrhoticity\\textsubarch{U}\\textrhoticity',
  ou: { 0: 'P\\super{w}\\textsublhalfring{\\|xo}\\textsubarch{U}',
    '': '\\super{w}\\textsublhalfring{\\|xo}\\textsubarch{U}' },
  our: { 0: 'P\\super{w}\\textsublhalfring{\\|xo}\\textrhoticity\\textsubarch{U}\\textrhoticity',
    '': '\\super{w}\\textsublhalfring{\\|xo}\\textrhoticity\\textsubarch{U}\\textrhoticity' },
  iu: { 0: 'P\\textsubrhalfring{j}\\textsublhalfring{\\|+o}\\textsubarch{U}',
    '': '\\textsubrhalfring{j}\\textsublhalfring{\\|+o}\\textsubarch{U}' },
  iur: { 0: 'P\\textsubrhalfring{j}\\textsublhalfring{\\|+o}\\textrhoticity\\textsubarch{U}\\textrhoticity',
    '': '\\textsubrhalfring{j}\\textsublhalfring{\\|+o}\\textrhoticity\\textsubarch{U}\\textrhoticity' },
  an: { 0: 'P\\|xan\\textcorner{}', '': '\\|xan\\textcorner{}' },
  anr: { 0: 'P5\\textlowering{\\:R}', '': '5\\textlowering{\\:R}' },
  ian: 'j\\|xEn\\textcorner{}',
  ianr: 'j\\|+5\\textlowering{\\:R}',
  uan: { 0: 'V\\|xan\\textcorner{}', '': '\\super{w}w\\|xan\\textcorner{}' },
  uanr: { 0: 'Pw5\\textlowering{\\:R}', '': 'w5\\textlowering{\\:R}' },
  van: { 0: '4\\textsubarch{\\"Y}\\textsubrhalfring{\\=*E}n\\textcorner{}',
    '': '\\super{w}4\\textsubarch{\\"Y}\\textsubrhalfring{\\=*E}n\\textcorner{}' },
  vanr: { 0: '4\\textsubarch{\\"Y}\\|)5\\textlowering{\\:R}',
    '': '\\super{w}4\\textsubarch{\\"Y}\\|)5\\textlowering{\\:R}' },
  en: { 0: 'P\\|xen\\textcorner{}', '': '\\|xen\\textcorner{}' },
  enr: { 0: 'P\\=*@\\textlowering{\\:R}', '': '\\=*@\\textlowering{\\:R}' },
  in: 'j\\|`in\\textcorner{}',
  inr: 'j\\|`i\\textsubarch{@}\\textlowering{\\:R}',
  un: { 0: 'V\\|xen\\textcorner{}', '': '\\super{w}u\\textroundcap{\\|)9}n\\textcorner{}',
    velar: '\\super{w}w@n\\textcorner{}' },
  unr: { 0: 'V\\=*@\\textlowering{\\:R}', '': '\\super{w}u\\textroundcap{\\textsubbar{\\|)9}}\\textlowering{\\:R}',
    velar: '\\super{w}w\\textsubarch{@}\\textlowering{\\:R}' },
  vn: { 0: '4\\|`yn\\textcorner{}', '': '\\super{w}4\\|`yn\\textcorner{}' },
  vnr: { 0: '4\\|`Y\\textroundcap{\\textsubbar{\\|)9}}\\textlowering{\\:R}',
    '': '4\\|`Y\\textroundcap{\\textsubbar{\\|)9}}\\textlowering{\\:R}' },
  ang: { 0: 'P\\|xAN\\textcorner{}\\super{Q}', '': '\\|xAN\\textcorner{}\\super{Q}' },
  angr: { 0: 'P\\textovercross{\\~A}\\textrhoticity\\super{Q}', '': '\\textovercross{\\~A}\\textrhoticity\\super{Q}' },
  iang: 'j\\|xAN\\textcorner{}\\super{Q}',
  iangr: 'j\\textovercross{\\~A}\\textrhoticity\\super{Q}',
  uang: { 0: 'V\\|xAN\\textcorner{}\\super{Q}', '': '\\super{w}w\\|+AN\\textcorner{}\\super{Q}' },
  uangr: { 0: 'V\\textovercross{\\~A}\\textrhoticity\\super{Q}', '': '\\super{w}w\\textovercross{\\~A}\\textrhoticity\\super{Q}' },
  eng: { 0: 'P\\|x7N\\textcorner{}\\super{Q}', '': '\\|x7N\\textcorner{}\\super{Q}' },
  engr: { 0: 'P\\textovercross{\\~7}\\textrhoticity\\super{Q}', '': '\\super{w}\\textovercross{\\~7}\\textrhoticity\\super{Q}' },
  ing: 'jIN\\textcorner{}\\super{Q}',
  ingr: 'j\\~9\\textrhoticity\\super{Q}',
  ueng: 'V\\|x7N\\textcorner{}\\super{Q}',
  uengr: 'V\\textovercross{\\~7}\\textrhoticity\\super{Q}',
  ong: '\\super{w}UN\\textcorner{}\\super{Q}\\super{w}',
  ongr: '\\super{w}\\~U\\textrhoticity\\super{Q}',
  iong: '\\textsublhalfring{4}\\"UN\\textcorner{}\\super{Q}',
  iongr: '\\textsublhalfring{4}\\textsubplus{\\~U}\\textrhoticity\\super{Q}',
};

const aliasEncoding = {
  air: 'anr',
  uair: 'uanr',
  eir: 'enr',
  uir: 'unr',
  vr: 'vnr',
};

const specialEncoding = {
  er: { 4: '3\\|`\\textturnrrtail{}', '': '\\|x7\\|`\\textturnrrtail{}' },
  m: '\\s{m}\\textcorner{}',
  n: '\\s{n}\\textcorner{}',
  ng: '\\s{N}\\textcorner{}\\super{Q}',
};

function encode(phs) {
  phs.forEach((ph) => {
    if (!ph.onset) {
      const senc = specialEncoding[ph.coda];
      if (typeof senc === 'string') {
        ph.codaText = senc;
        return;
      } else if (senc) {
        ph.codaText = senc[ph.tone] || senc[''];
        return;
      }
    }
    const enc = codaEncoding[aliasEncoding[ph.coda] || ph.coda];
    if (!enc)
      throw new Error(`Unknown coda ${ph.coda}`);
    if (typeof enc === 'string') {
      ph.codaText = enc;
    } else if (!ph.onset) {
      ph.codaText = enc[0] || enc[''];
    } else if (ph.onset in enc) {
      ph.codaText = enc[ph.onset];
    } else {
      ph.codaText = enc[''];
      for (const prop of Object.keys(ph.onsetProperties))
        if (enc[prop] && ph.onsetProperties[prop])
          ph.codaText = enc[prop];
    }
  });
}

module.exports = (phs) => {
  encode(phs);
};
module.exports.default = module.exports;
