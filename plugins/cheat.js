//
let fs = require('fs')
let delay = require('delay')
let handler = async (m, { conn, text }) => {
let total = Math.floor(Math.random() * 999999999999999999999999999999);
let json = { exp: total }
conn.mining = conn.mining ? conn.mining : {}
 if (conn.mining[m.chat]) throw '*Jangan Spam!!!!*'
  conn.reply(m.chat, `Cheat Telah Berhasil`, m)
  conn.mining[m.chat] = true 
   global.DATABASE._data.users[m.sender].exp += json.exp * 1
   global.DATABASE._data.users[m.sender].money += json.exp * 1
   global.DATABASE._data.users[m.sender].limit += json.exp * 1
   setTimeout(() => { 
   delete conn.mining[m.chat]
  }, 0 * 1000)
}
handler.help = ['cheat']
handler.tags = ['xp']
handler.command = /^cheat/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler