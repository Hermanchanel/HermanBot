let fetch = require('node-fetch');
let ftype = require('file-type');
let { getBuffer, succes } = require('/data/data/com.termux/files/home/kuhong/lib/functions.js');

let handler = async(m, { conn, text }) => {
    let str = `
Nihh,, Baguskan Buatan w mah :'v
`.trim()

    if (!text) return conn.reply(m.chat, 'Silahkan masukan teksnya', m)

  await m.reply('Sedang membuat...')

  let hasil = await (await fetch('https://api.zeks.xyz/api/barcode?apikey=apivinz&text=' + text)).buffer()

     conn.sendFile(m.chat, hasil, 'foto.jpg', str, m)
}
handler.help = ['barcode <teks>']
handler.tags = ['tools']
handler.command = /^(barcode)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
