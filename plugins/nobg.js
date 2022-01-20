const { getBuffer } = require('../lib/functions')
const util = require('util')
const fs = require('fs')
const ffmpeg = require('fluent-ffmpeg')
const { MessageType } = require('@adiwajshing/baileys')
const { removeBackgroundFromImageFile } = require('remove.bg')
const { exec } = require('child_process')

let handler = async (m, { conn, text, args, usedPrefix, command }) => {

  try {
  await m.reply('Sedang Membuat...')
    const type = Object.keys(m.message)[0]
    const content = JSON.stringify(m.message)
    const isMedia = (type === 'imageMessage' || type === 'videoMessage')
    const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
    const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
    if ((isMedia && !m.message.videoMessage || isQuotedImage || !isQuotedImage) && args.length == 0) {
      const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(m).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : m
      const media = await conn.downloadAndSaveMediaMessage(encmedia)
      let ranp = getRandom('.png')
      await removeBackgroundFromImageFile({ path: media, apiKey: "HCVrssExQw8DuaWpj2vE5359", size: 'auto', type: 'auto', ranp }).then(res => {
        fs.unlinkSync(media)
        let buffer = Buffer.from(res.base64img, 'base64')
        fs.writeFileSync(ranp, buffer, (e) => {
          if (e) return m.reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
        })
           m.reply('Nihh')
          conn.sendFile(m.chat, buffer, 'nobg.png', '', m, false, { asDocument: true })
        fs.unlinkSync(ranp)
      })
    } else {
      m.reply(`Kirim Perintah ${usedPrefix + command} dengan caption atau reply media gambar yang tersedia.`)
    }
  } catch (e) {
 m.reply('Fotonya mana?')
  }
}
handler.help = ['nobg (reply/caption)']
handler.tags = ['editor']
handler.command = /^(nobg)$/i
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

const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`
}
