
let axios = require("axios");
let handler = async(m, { conn, text }) => {
	
    await m.reply ('Searching')
       axios.get(`https://alfians-api.herokuapp.com/api/dewabatch?q=${teks}`).then((res) => {
    let hasil = `Anime Nya Nih :) \n\n${res.data.result}`
      conn.sendMessage(id, hasil ,MessageType.text) 
    
handler.help = ['dewabatch'].map(v => v + 'judul')
handler.tags = ['anime']
handler.command = /^(dewabatch)$/i
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