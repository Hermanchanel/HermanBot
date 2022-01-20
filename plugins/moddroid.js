//masih pengembangan ngab
//By Raku Gans

let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {
	
	await m.reply('Searching...')
      axios.get('https://tobz-api.herokuapp.com/api/moddroid?q=' + body.slice(10)  + '&apikey=BotWeA')
                if (moddroid.data.error) return conn.reply(from, moddroid.data.error, id)
                let modo = moddroid.data.result[0]
                let resmod = `• *Title* : ${modo.title}\n• *Publisher* : ${modo.publisher}\n• *Size* : ${modo.size}\n• *MOD Info* : ${modo.mod_info}\n• *Version* : ${modo.latest_version}\n• *Genre* : ${modo.genre}\n• *Link* : ${modo.link}\n• *Download* : ${modo.download}`
                conn.sendFileFromUrl(from, modo.image, 'MODDROID.jpg', resmod, id)
            } catch (err) {
                console.log(err)
            }

handler.help = ['moddroid']
handler.tags = ['downloader']
handler.command = /^(moddroid)$/i

handler.limit = true

module.exports = handler