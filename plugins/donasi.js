let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *INDOSAT:* [6283146208804]
┣➥ *Dana:* [6283146208804]
┣➥ *Gopay:* [6283146208804]
┣➥ *Ovo:* [6283146208804]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6283146208804*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
