let handler  = async (m, { conn }) => {
	
	await m.reply('[❗] Tunggu Sebentar:v.')
  conn.reply(m.chat,`${pickRandom(global.bokep)}`, m)
}
handler.help = ['filebokep']
handler.tags = ['dewasa']
handler.command = /^(filebokep)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.bokep = [
'Tapi boong , wkwkw stay halal..',
]