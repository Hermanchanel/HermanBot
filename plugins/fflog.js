let handler = async m => m.reply(`
*LIST FF VIA LOGIN GMAIL/FB/VK*
100💎 = 11.500
200💎 = 23.000
310💎 = 34.500
410💎 = 46.000
520💎 = 57.500
620💎 = 69.000
720💎 = 80.500
830💎 = 92.000
1060💎 = 115.000
1370💎 = 149.500
1580💎 = 172.500
1890💎 = 207.000
2180💎 = 230.000
2490💎 = 264.500
2700💎 = 287.500
3240💎 = 345.000
4360💎 = 460.000
5600💎 = 575.000
6660💎 = 690.000
7780💎 = 805.000
8840💎 = 920.000
11200💎 = 1.150.000
Membership Mingguan = 23.000
Membership Bulanan = 92.000
`.trim()) // Tambah sendiri kalo mau
handler.help = ['ffid']
handler.tags = ['bisnis']
handler.command = /^(ffid)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
