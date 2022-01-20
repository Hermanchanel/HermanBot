//dalam percobaan
//Recode aja klo bisa:v

let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {

  await m.reply('Searching...')
    axios.get ("https://mnazria.herokuapp.com/api/maps?search=" + teks) 
    .then((res) => {
      imageToBase64(res.data.gambar)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image) 
 
handler.help = ['map']
handler.tags = ['image']
handler.command = /^(map)$/i
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
