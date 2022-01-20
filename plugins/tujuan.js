let handler = (m, { text }) => {
  
  m.reply(`
*「 BANTUAN BOT 」*


😁Selamat datang di bot herman, mari saya jelaskan penggunaan fitur adventure bot ini!!


⏹️ Adventure Bantuan Commands:

➕ #inv , #tas = melihat semua item
➕ #shop = tempat jual item
➕ #toko = tempat jual hewan
➕ #buy <item> <total> = beli item
➕ #sell <item> <total> = jual item
➕ #use , #pakai = memakai item

➕ #peliharaan
➕ #kolam
➕ #kandang
➕ #dompet

➕ #pekerjaan
➕ #mancing
➕ #adventure
➕ #nambang
➕ #berburu

Dan masih banyak lagi... nantikan saja update nya di bot ini!!
akan ada fitur menarik di bot ini!!



`)
}
handler.help = ['ahelp']
handler.tags = ['info']
handler.command = ['ahelp']

module.exports = handler
