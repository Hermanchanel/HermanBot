let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
    let __timers = (new Date - global.DATABASE.data.users[m.sender].as)
    let _timers = (360000 - __timers)
    let order = global.DATABASE.data.users[m.sender].ojek
    let timers = clockString(_timers) 
let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let user = global.DATABASE.data.users[m.sender]
    let buttons = [
{buttonId: 'id1', buttonText: {displayText: '.pekerjaan'}, type: 1}, 
]
const buttonMessage = {
    contentText: `\n*😴Sepertinya Anda Sudah Kecapekan Silahkan Istirahat Dulu sekitar* _${timers}_ *Untuk bisa melanjutkan Menebang*\n`,
    footerText: '©Herman Botz', 
    buttons: buttons,
    headerType: 1
}
    if (new Date - global.DATABASE.data.users[m.sender].as > 360000) {
let randomaku1 = `${Math.floor(Math.random() * 10)}`
let randomaku2 = `${Math.floor(Math.random() * 10)}`
let randomaku4 = `${Math.floor(Math.random() * 5)}`
let randomaku3 = `${Math.floor(Math.random() * 10)}`
let randomaku5 = `${Math.floor(Math.random() * 10)}`

.trim()

let rbrb1 = (randomaku1 * 2)
let rbrb2 = (randomaku2 * 10) 
let rbrb3 = (randomaku3 * 1)
let rbrb4 = (randomaku4 * 16149)
let rbrb5 = (randomaku5 * 145)


zero1 = `${rbrb1}`
zero2 = `${rbrb2}`
zero3 = `${rbrb3}`
zero4 = `${rbrb4}`
zero5 = `${rbrb5}`

herman = `
🌳🤺
🌳
🌳
🌳
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏫       🏢🏘️🏘️

Menebang pohon ....
`

herman2 = `

🌳🤺
🌳
🌳
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏫       🏢🏘️🏘️

Menebang pohon ke 2....
`

herman3 = `


🌳 🤺
🌳
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏫       🏢🏘️🏘️

Menebang pohon ke 3 ....
`

herman10 = `
🌳
🌳
🌳 
🌳
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏫       🏢🏘️🏘️         🤺

Sedang pergi ke wilayah pohon ....
`

herman4 = `
🌳🤺
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏫       🏢🏘️🏘️


Menebang pohon terakhir ....
`

hsl = `Hasil Nebang *${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}*
              🤺
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏫       🏢🏘️🏘️

╭[•Menebang pohon selesai ....
│💸 Uang = [ ${zero4} ]
│💠 Exp = [ ${zero5} ] 		 
│🐒 Monyet = +4
│⚡1 Limit Terpakai
╰─> _©Herman Botz_ 2022
`


global.DATABASE.data.users[m.sender].money += rbrb4
global.DATABASE.data.users[m.sender].exp += rbrb5
global.DATABASE.data.users[m.sender].monyet += 4
global.DATABASE.data.users[m.sender].limit -= 1

setTimeout(() => {
                     m.reply(`${hsl}`)
                     }, 27000) 
               
                     setTimeout(() => {
                     m.reply(`${herman4}`)
                      }, 25000)
                
                     setTimeout(() => {
                     m.reply(`${herman3}`)
                     }, 20000) 
                        
                     setTimeout(() => {
                     m.reply(`${herman2}`)
                     }, 15000) 
                    
                     setTimeout(() => {
                     m.reply(`${herman}`)
                     }, 10000) 
                     
                     setTimeout(() => {
                     m.reply(`${herman10}`)
                     }, 0) 
  user.as = new Date * 1
    } else conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage ,m )
}
handler.help = ['nebang']
handler.tags = ['rpg']
handler.command = /^(nebang|tebang|menebang|pohon)$/i
handler.register = true

module.exports = handler
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}