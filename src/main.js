const inputNama = document.getElementById('inputNama')
const hasilText = document.getElementById('hasilText')
const tombolCopy = document.getElementById('tombolCopy')

const copyText = (str) => {
  let el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style = { position: 'absolute', left: '-9999px' };
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

const generateText = (waifu) => {
  if(waifu == '') {
    alert('Silahkan masukkan nama waifu kamu!')
  } else {
      let wangy = `${waifu}❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${waifu} wangi aku mau nyiumin aroma wanginya ${waifu} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${waifu} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${waifu} AAAAA LUCCUUUUUUUUUUUUUUU............ AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${waifu} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${waifu} gw ... di laptop ngeliatin gw, ${waifu} .. kamu percaya sama aku ? aaaaaaaaaaah syukur aku gak mau merelakan ${waifu} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${waifu} AAAAAAAAAAAAH`
      hasilText.textContent = wangy
      tombolCopy.addEventListener('click', (e) => {
      copyText(wangy)
      alert('Text berhasil di copy!')
      })
  }
}

inputNama.addEventListener('keyup', (e) => {
  if(e.keyCode == 13) {
    e.preventDefault()
    
    generateText(inputNama.value.toUpperCase())
  }
})
