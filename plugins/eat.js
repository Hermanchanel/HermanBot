let { MessageType } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) =>  {
    let msgerror = (pickRandom(['ERROR', 'Astaga Error', 'Nice Error', 'Salah Format Sepertinya:v', 'Error Bro', 'Kocak Error:v', 'Wow Error :v', 'Ciaaa Error', 'Error Cuy', 'Dahlah ðŸ—¿ Error']))
    try {
    let msgkurang = (pickRandom(['Buahmu Tidak Cukup', 'Ciaa Gak Cukup Buahnya', 'Wow Gak Cukup :v', 'Tanem Buah Dulu, Buah mu Gak Cukup', 'Yahh Buah mu Gak Cukup', 'Maaf Buah mu Kurang', 'Tanam Buah Dulu Lah, Masa Mau Makan Tapi Ga Ada Buah, Mau Makan Sampah:v', 'Tanam Buah Dulu KAKA']))
    let msgpenuh = (pickRandom(['Kamu Sudah Kenyang', 'Coba Lihat *.inv* Mu, Energi Sudah 100 Karena Kenyang', 'Energi mu Sudah Penuh', 'Kamu Udah Kekenyangan', 'Energi Telah Full :v', 'Udah Yaa, Udah Kenyang, Nanti Muntah']))
    let apel = global.DATABASE._data.users[m.sender].apel
    let jeruk = global.DATABASE._data.users[m.sender].jeruk
    let mangga = global.DATABASE._data.users[m.sender].mangga
    let stroberi = global.DATABASE._data.users[m.sender].stroberi
    let semangka = global.DATABASE._data.users[m.sender].semangka
    let pisang = global.DATABASE._data.users[m.sender].pisang
    let eatap = (apel == 0 ? 40 : '' || apel == 1 ? 45 : '' || apel == 2 ? 50 : '' || apel == 3 ? 55 : '' || apel == 4 ? 60 : '' || apel == 5 ? 65 : '' || apel == 6 ? 70 : '' || apel == 7 ? 75 : '' || apel == 8 ? 80 : '' || apel == 9 ? 85 : '' || apel == 10 ? 90 : '')
    let eatma = (mangga == 0 ? 40 : '' || mangga == 1 ? 45 : '' || mangga == 2 ? 50 : '' || mangga == 3 ? 55 : '' || mangga == 4 ? 60 : '' || mangga == 5 ? 65 : '' || mangga == 6 ? 70 : '' || mangga == 7 ? 75 : '' || mangga == 8 ? 80 : '' || mangga == 9 ? 85 : '' || mangga == 10 ? 90 : '')
    let eatruk = (jeruk == 0 ? 40 : '' || jeruk == 1 ? 45 : '' || jeruk == 2 ? 50 : '' || jeruk == 3 ? 55 : '' || jeruk == 4 ? 60 : '' || jeruk == 5 ? 65 : '' || jeruk == 6 ? 70 : '' || jeruk == 7 ? 75 : '' || mangga == 8 ? 80 : '' || jeruk == 9 ? 85 : '' || jeruk == 10 ? 90 : '') 
    let eatstr = (stroberi == 0 ? 40 : '' || stroberi == 1 ? 45 : '' || stroberi == 2 ? 50 : '' || stroberi == 3 ? 55 : '' || stroberi == 4 ? 60 : '' || stroberi == 5 ? 65 : '' || stroberi == 6 ? 70 : '' || stroberi == 7 ? 75 : '' || stroberi == 8 ? 80 : '' || stroberi == 9 ? 85 : '' || stroberi == 10 ? 90 : '')
    let eatse = (semangka == 0 ? 40 : '' || semangka == 1 ? 45 : '' || semangka == 2 ? 50 : '' || semangka == 3 ? 55 : '' || semangka == 4 ? 60 : '' || semangka == 5 ? 65 : '' || semangka == 6 ? 70 : '' || semangka == 7 ? 75 : '' || semangka == 8 ? 80 : '' || semangka == 9 ? 85 : '' || semangka == 10 ? 90 : '')
    let eatpi = (pisang == 0 ? 40 : '' || pisang == 1 ? 45 : '' || pisang == 2 ? 50 : '' || pisang == 3 ? 55 : '' || pisang == 4 ? 60 : '' || pisang == 5 ? 65 : '' || pisang == 6 ? 70 : '' || pisang == 7 ? 75 : '' || pisang == 8 ? 80 : '' || pisang == 9 ? 85 : '' || pisang == 10 ? 90 : '')
        let healt = global.DATABASE._data.users[m.sender].healt
        if (/eat|makan/i.test(command)) {
            try {
            count = (/[0-9]/g.test(args[1])) ? !args[1] || args.length < 2 ? Math.max((Math.ceil((100 - global.DATABASE._data.users[m.sender].healt) / eatap)), 1) : Math.max(args[1], 1) : Math.max((Math.ceil((100 - global.DATABASE._data.users[m.sender].healt) / eatap)), 1)
                 let msgsucces = (pickRandom(['Sukses Memakan', 'Nice Sukses Memankan', 'Berhasil Memakan', 'Bagus Anda Memakan', 'Anda Memakan', 'Anda Memakan']) + ' *' + (count * 1) + '* Apel')
                                  if (args[0] === 'apel') {
                    if (global.DATABASE._data.users[m.sender].healt < 100) {
                        if (global.DATABASE._data.users[m.sender].apel >= count * 1) {
                            global.DATABASE._data.users[m.sender].apel -= count * 1
                            global.DATABASE._data.users[m.sender].healt += eatap * count
                            conn.reply(m.chat, msgsucces, m)
                        } else conn.reply(m.chat, msgkurang, m)
                    } else conn.reply(m.chat, msgpenuh, m)
                } else if (args.length > 2 && args[0] === !'apel') m.reply(pickRandom(['Yakin Memakan apel', 'Mau makan apa? Mau makan apel :v', 'Wih mau makan apa kamu, kan bisa apel', 'Aduhay, mau makan aja itu apel', 'lah, mau makan apa?, mau makan batu?']) + '\nContoh penggunaan: *' + usedPrefix + 'apel 1*')
            } catch (e) {
                console.log(e)
                m.reply(msgerror)
                if (DevMode) {
                    let file = require.resolve(__filename)
                    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                        conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)