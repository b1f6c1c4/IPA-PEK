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
  b: ['b\u0325', '\\r*b'],
  p: ['p\u02b0', 'p\\super{h}'],
  d: ['d\u0325', '\\r*d'],
  t: ['t\u02b0', 't\\super{h}'],
  l: ['l\u0320', '\\textsubbar{l}'],
  g: ['g\u0325', '\\r*g'],
  k: ['k\u02b0', 'k\\super{h}'],
  x: ['x\u031e', '\\textlowering{x}'],
  j: ['d\u0325\u0361\u0325\u0291', '\\t{\\r*d\\r*\\textctz{}}'],
  q: ['t\u0361\u0255\u02b0', '\\t{t\\textctx\\super{h}}'],
  x: ['\u0255', '\\textctc{}'],
  zh: ['d\u0325\u0361\u0325\u0290\u033a', '\\t{\\r*d\\r{\\textinvsubbridge{\\:z}}}'],
  ch: ['t\u0361\u0282\u033a\u02b0', '\\t{t\\textinvsubbridge{\\:s}}\\super{h}'],
  sh: ['\u0282\u033a', '\\t{\\textinvsubbridge{\\:s}}'],
  r: ['\u027b\u033a', '\\t{\\textinvsubbridge{\\:R}}'],
  z: ['d\u0325\u0361z\u031f\u0291', '\\t{\\r*d\\r*{\\|+z}}'],
  c: ['t\u0361s\u031f\u02b0', '\\t{t\\|+s\\super{h}}'],
  s: ['s\u031f', '\\|+s'],
};

function utf8Encode(phs) {
}

function latexEncode(phs) {
}

module.exports = {
  utf8Encode,
  latexEncode,
};
module.exports.default = module.exports;
