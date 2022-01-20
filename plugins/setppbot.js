let { getBuffer, succes } = require('/data/data/com.termux/files/home/kuhong/lib/functions.js')
let imgbb = require('imgbb-uploader')
let { MessageType, Presence, GroupSettingChange, mentionedJid } = require('@adiwajshing/baileys')
let ffmpeg = require('fluent-ffmpeg')
let fetch = require('node-fetch')
let ftype = require('file-type')
let fs = require('fs')

let handler = async(m, { conn, text, args, usedPrefix }) => {

    let botNumber = conn.user.jid
    let type = Object.keys(m.message)[0]
    let content = JSON.stringify(m.message)
    let isMedia = (type === 'imageMessage' || type === 'videoMessage')
    let isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
    let isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
    if (!isQuotedImage) return m.reply('Tag Fotonya!')
    if ((isMedia && m.message.imageMessage || isQuotedImage) && args.length == 0) {
    let ger = isQuotedImage ? JSON.parse(JSON.stringify(m).replace('quotedM','m')).message.extendedTextMessage.contextInfo : m
	let owgi = await conn.downloadAndSaveMediaMessage(ger)
     await conn.updateProfilePicture(botNumber, owgi)

    conn.reply(m.chat, 'Makasih PP Barunya :)', m)
     } else {
    m.reply(`Kirim perintah di grup ${usedPrefix}setppbot dengan caption digambar atau reply gambar yang tersedia`)
     }
}
handler.help = ['setppbot','seticonbot']
handler.tags = ['owner']
handler.command = /^set(icon|pp)bot$/i
handler.owner = true
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
