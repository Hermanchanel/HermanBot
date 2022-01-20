let handler = m => m.reply('والسلام عليكم ورحمة الله وبركاته')

handler.customPrefix = /assalamualaikum|Assalamualaikumi
handler.command = new RegExp

handler.register = true

module.exports = handler
