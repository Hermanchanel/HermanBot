let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {

   await m.reply('Searching...')
     axios.get('https://tobz-api.herokuapp.com/api/happymod?q=' + body.slice(10)  + '&apikey=BotWeA')
     
                if (happymod.data.error) return conn.reply(from, happymod.data.error, id)
                
                const modo = happymod.data.result[0]
                const resmod = `• *Title* : ${modo.title}\n• *Purchase* : ${modo.purchase}\n• *Size* : ${modo.size}\n• *Root* : ${modo.root}\n• *Version* : ${modo.version}\n• *Price* : ${modo.price}\n• *Link* : ${modo.link}\n• *Download* : ${modo.download}`
                aruga.sendFileFromUrl(from, modo.image, 'HAPPYMOD.jpg', resmod, id)
            } catch (err) {
                console.log(err)
            }
           
handler.help = ['happymod']
handler.tags = ['downloader']
handler.command = /^(happymod)$/i

handler.limit = true

module.exports = handler