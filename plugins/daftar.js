const { createHash } = require('crypto')
let PhoneNumber = require('awesome-phonenumber')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let totalreg = Object.keys(global.DATABASE._data.users).length
let handler = async function (m, { text, usedPrefix }) {
  let user = global.DATABASE.data.users[m.sender]
  if (user.registered === true) throw `Anda sudah terdaftar\nDaftar ulang? ${usedPrefix}unreg <SN|SERIAL NUMBER>\nContoh: .unreg fe780ea218d7f2be067272a862aa5b34`
  if (!Reg.test(text)) throw `Format salah\n*${usedPrefix}daftar nama|umur*\nContoh : ${usedPrefix}daftar Herman|20`
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 120) throw 'Maxsimal 120'
  if (age < 5) throw 'Minimal 5 Tahun'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`


*Akun Berhasil Terdaftar*
➛ *Nama* : ${name}
➛ *Nomor* : ${who.split`@`[0]}
➛ *Umur* : ${age} Tahun
➛ *SN* : ${sn}
➛ *FreeGift* : km3IpW93frlM
➛ *Total Reg* : ${totalreg} Orang
➛ *Status :* ☑️ Terverifikasi
*Gunakan .menu untuk membuka akses*

`.trim())
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler
