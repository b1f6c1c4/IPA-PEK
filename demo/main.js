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

const pek = require('..');

function update() {
  document.getElementById('results').innerHTML = '';
  try {
    const word = document.getElementById('word').value || '';
    const ir = pek.process(word);
    const li = document.createElement('li');
    if (document.getElementById('unicode').checked) {
      li.innerText = pek.unicode(ir)
    } else {
      const pre = document.createElement('pre');
      pre.innerText = pek.latex(ir);
      li.appendChild(pre);
    }
    document.getElementById('results').appendChild(li);
  } catch (e) {
    console.error(e);
    if (e.cause)
      console.error(e.cause);
  }
}

document.getElementById('word').onkeyup = update;
document.getElementById('unicode').onchange = update;
document.getElementById('latex').onchange = update;
if (window.location.hash.substr(1)) {
  document.getElementById('word').value = window.location.hash.substr(1).trim();
  update();
}
window.onhashchange = () => {
  document.getElementById('word').value = window.location.hash.substr(1).trim();
  update();
}
