let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
┏━━°❀❬ *INFO* ❭❀°━━┓
┃
┃> Bot Recoded By :
┃• ALAN BOTZ
┃
┃> Bot Dibuat Dengan :
┃• JavaScript via NodeJS
┃• FFmpeg
┃
┃> Thanks To :
┃• Nurutomo
┃• Alan Botz
┃• RC047/Kuhong
┃
┣━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *INDOSAT:* [085718366706]
┣➥ *Dana:* [085718366706]
┣➥ *Gopay:* [085718366706]
┣➥ *Ovo:* [085718366706]
┃ 「 *Chat OWNER* 」
┃ > *INGIN DOANSI ? https://wa.me/6285718366706*
┗━━━━━━━━━━━━━━━━
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*ALAN BOTZ TERVERIFIKASI*', 'status@broadcast')
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
