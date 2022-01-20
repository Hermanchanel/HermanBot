let axios = require("axios");
let handler = async(m, { conn, text }) => { 

  await m.reply('*[❗] WAIT, Tunggu Sebentar*') 
    axios.get(`https://mhankbarbar.herokuapp.com/api/nekopoi?url=${teks}&apiKey=N2Ws9kp3KTDYtry5Jjyz`).then((res) =>{ 
    let hasil = `*Nekopoi Link Tersedia* : ${res.data.judul}\n*Result* : ${res.data.result}\n*Dilihat* : ${res.data.dilihat}\n*Thumbnail* : ${res.data.tumbnail}`
    
    conn.sendMessage(id, hasil, MessageType.text)
    
  