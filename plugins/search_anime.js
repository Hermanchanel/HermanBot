let vas = require('canvacord')
let handler = async (m, { text }) => {
if (!text) throw 'Tidak Ada Query'
axios = require('axios')
cheerio = require('cheerio')

const url = await axios.get(`https://myanimelist.net/character.php?cat=character&q=${encodeURI(text)}`)
let tot = cheerio.load(url.data)
let hasil = {}
let ling = tot('table > tbody > tr >td > a').eq(0).attr('href')
hasil.name = tot('table > tbody > tr >td > a').eq(0).text()
hasil.link = ling
let links = await axios.get(`${ling}`)
let $ = cheerio.load(links.data)
hasil.img = $('tbody > tr > td > div > a > img').attr('data-src')
hasil.anime = $('tbody > tr > td').eq(4).text().replace('\n\t\t\t\tadd Main', '') ? $('tbody > tr > td').eq(4).text().replace('\n\t\t\t\tadd Main', '') : 'NONE'
hasil.fullname = $('h2').text()
let caption = `
name : ${hasil.name}
fullname : ${hasil.fullname}
link : ${await bitly(hasil.link)}
anime : ${hasil.anime}
`.trim()
conn.sendFile(m.chat, hasil.img, 'ih wibu', caption, m)

}
handler.help = ['charanime <name>']
handler.tags = ['wibu']
handler.command = /^(charanime)$/i

module.exports = handler

async function bitly(urls) {
fet = require('axios')
heh = await fet.get(`http://tinyurl.com/api-create.php?url=${urls}`)

return heh.data
}