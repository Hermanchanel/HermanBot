//
let fs = require('fs')
let delay = require('delay')
let handler = async (m, { conn, text }) => {
let total = Math.floor(Math.random() * 5);
let json = { money: total }
conn.mining = conn.mining ? conn.mining : {}
 if (conn.mining[m.chat]) throw '*Jangan Spam, Coldown 5 detik!!!!*'
  conn.reply(m.chat, `Selamat Anda Mendapatkan\n*+${json.money}* money(money)`, m)
  conn.mining[m.chat] = true 
   global.DATABASE._data.users[m.sender].money += 5
   setTimeout(() => { 
   delete conn.mining[m.chat]
  }, 5 * 1)
}
handler.help = ['griding']
handler.tags = ['xp']
handler.command = /^griding|nguli/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler