let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*[❗] Wait,Tunggu Bentar Kak Sedang Dalam Proses...*')
  let res = `https://videfikri.com/api/textmaker/burnpaper/?text=${response}`
  conn.sendFile(m.chat, res, 'nama.jpg', `Love is Blind!`, m, false)
}
handler.help = ['burnpaper'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(burnpaper)$/i
handler.limit = true
handler.register = true

module.exports = handler

