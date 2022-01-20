let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, 'Selamat Anda Mendapatkan\n827 Rupiah', m)
}
handler.help = ['mining']
handler.tags = ['exp']
handler.command = /^mining/i


handler.fail = null
handler.limit = true
handler.exp = 734

module.exports = handler
