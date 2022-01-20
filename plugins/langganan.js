let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭─「 LANGGANAN BOT 」
│ 
│ > Keuntungan :
│• Limit Tidak Terbatas!
│• Fitur Premium bot (khusus pembeli)!
│• Dapat Menambahkan Bot Ke 1 Grup!
│• Menikmati Fitur update
│• Mendapatkan info bot
│• Mengakses setelan grup bot
│
│ > Bonus :
│• Diberi 5 Limit Setiap Hari
│
│ > Harga :
│• 20k / Bulan (4 Minguu) + Premium
│• 60k / Tahun (12 Bulan) + Premium
│• 100k / VIP (Permanen) +  Premium
│
│ > Pembayaran :
│• DANA : 089522590235
│• GOPAY : 089522590235
╰────
`.trim()


conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BOT TERVERIFIKASI*', 'status@broadcast')
} 
handler.help = ['langganan']
handler.tags = ['info']
handler.command = /^(langganan|sewabot)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.fail = null
handler.exp = 100

module.exports = handler