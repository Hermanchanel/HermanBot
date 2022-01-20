let fetch = require('node-fetch');
let ftype = require('file-type');
let { getBuffer, succes } = require('/data/data/com.termux/files/home/kuhong/lib/functions.js');

let handler = async(m, { conn, text }) => {
let str = `
Kabur ada Hacker!!
`.trim()

    if (!text) return conn.reply(m.chat, 'Silahkan masukan parameter text1', m)

  await m.reply('Sedang membuat...')

            let buff = ('https://onlydevcity.xyz/HekerSerti/img.php?nama=' + text);
            let voss = await fetch(buff)
                        let vuss = await ftype.fromStream(voss.body)
                        if (vuss !== undefined) {

     conn.sendFile(m.chat, await getBuffer(buff), 'foto.jpg', str, m)
     }
}
handler.help = ['hackerserti <teks>']
handler.tags = ['sticker']
handler.command = /^(hackerserti)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
