let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => { 
  let banteng = global.DATABASE.data.users[m.sender].banteng
  let harimau = global.DATABASE.data.users[m.sender].harimau
 let gajah = global.DATABASE.data.users[m.sender].gajah
let kambing = global.DATABASE.data.users[m.sender].kambing
let panda = global.DATABASE.data.users[m.sender].panda
 let buaya = global.DATABASE.data.users[m.sender].buaya
 let kerbau = global.DATABASE.data.users[m.sender].kerbau
let sapi = global.DATABASE.data.users[m.sender].sapi
 let monyet = global.DATABASE.data.users[m.sender].monyet
 let babihutan = global.DATABASE.data.users[m.sender].babihutan
 let babi = global.DATABASE.data.users[m.sender].babi
 let ayam = global.DATABASE.data.users[m.sender].ayam
let name = m.fromMe ? conn.user : conn.contacts[m.sender]
let zer = `╭❏ *kandang ${name.vnmae || name.notify || name.name}*
├ *🐂 = [ ${banteng} ] Ekor Banteng*
├ *🐅 = [ ${harimau} ] Ekor Harimau*
├ *🐘 = [ ${gajah} ] Ekor Gajah*
├ *🐐 = [ ${kambing} ] Ekor Kambing*
├ *🐼 = [ ${panda} ] Ekor Panda*
├ *🐊 = [ ${buaya} ] Ekor Buaya*
├ *🐃 = [ ${kerbau} ] Ekor Kerbau*
├ *🐮 = [ ${sapi} ] Ekor Sapi*
├ *🐒 = [ ${monyet} ] Ekor Monyet*
├ *🐗 = [ ${babihutan} ] Ekor Babi Hutan*
├ *🐖 = [ ${babi} ] Ekor Babi*
├ *🐓 = [ ${ayam} ] Ekor Ayam*
╰──> _Herman Botz_ ©2022
 `.trim()
     conn.reply(m.chat, zer, m)
} 
handler.help = ['kandang']
handler.customPrefix = ['kandang']
handler.command = new RegExp
handler.register = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)