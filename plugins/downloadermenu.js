let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let str = ` *DOWNLOADER MENU*
• *${usedPrefix}fb <url>*
• *${usedPrefix}ig <url> (Limit)*
• *${usedPrefix}ighighlight <username> (Limit)*
• *${usedPrefix}igstalk <username> (Limit)*
• *${usedPrefix}igstory <username> (Limit)*
• *${usedPrefix}mediafire <link> (Limit)*
• *${usedPrefix}tiktok <url> (Limit)*
• *${usedPrefix}twitter <link> (Limit)*
• *${usedPrefix}twt <link> (Limit)*
• *${usedPrefix}twitstalk <@user> (Limit)*
• *${usedPrefix}stalktwit <@user> (Limit)*
• *${usedPrefix}ytmp3 <url> (Limit)*
• *${usedPrefix}yta <url> (Limit)*
• *${usedPrefix}ytmp4 <url> (Limit)*
• *${usedPrefix}ytv <url> (Limit)*
• *${usedPrefix}yt <url> (Limit)*
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['downloadermenu']
handler.tags = ['smenu']
handler.command = /^(downloadermenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler