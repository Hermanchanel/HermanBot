let handler = async function (m) {
let list = []
  for (let i of owner.map(v => v + '@s.whatsapp.net')) {
  list.push({
            "displayName": this.getName(i),
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${this.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
          })
  }
        test = await this.sendMessage(m.chat, {
        "displayName": `${list.length} Contact`,
        "contacts": list 
        }, 'contactsArrayMessage', { quoted: m })
        test.reply('Tuh Orang Gamteng>3')
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler