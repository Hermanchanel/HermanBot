let { getBuffer, succes } = require('/data/data/com.termux/files/home/kuhong/lib/functions.js')
let imgbb = require('imgbb-uploader')
let { MessageType, Presence, MimeType } = require('@adiwajshing/baileys')
let ffmpeg = require('fluent-ffmpeg')
let fetch = require('node-fetch')
let ftype = require('file-type')
let fs = require('fs')
let axios = require('axios')
let { exec } = require('child_process')

let handler = async(m, { conn, text, args, usedPrefix }) => {

  await m.reply('Searching...')
    let type = Object.keys(m.message)[0]
    let content = JSON.stringify(m.message)
    let isMedia = (type === 'imageMessage' || type === 'videoMessage')
    let isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
    let isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
    if ((isMedia && !m.message.videoMessage || !isQuotedImage || isQuotedImage) && args.length == 0) {
    let ger = isQuotedImage ? JSON.parse(JSON.stringify(m).replace('quotedM','m')).message.extendedTextMessage.contextInfo : m
        let owgi = await conn.downloadAndSaveMediaMessage(ger)
        let anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
        let teks = `${anu.display_url}`
        axios.get(`http://lolhuman.herokuapp.com/api/nsfwcheck?apikey=31caf10e4a64e86c1a92bcba&img=` + teks)
         .then((res) => {
            let hasil = `${res.data.result}`

         conn.reply(m.chat, hasil, m)
  })
     } else {
    m.reply(`Kirim perintah ${usedPrefix}nsfwcek dengan caption digambar atau reply gambar yang tersedia`)
     }
}
handler.help = ['nsfwcek (reply/caption)']
handler.tags = ['tools']
handler.command = /^(nsfwcek)$/i
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
