let handler = async (m, { conn, args }) => {
  let sortedExp = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].exp - a[1].exp)
  let sortedLim = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].limit - a[1].limit)
  let sortedOr = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].money - a[1].money)
  let usersExp = sortedExp.map(v => v[0])
  let usersLim = sortedLim.map(v => v[0])
  let userOr = sortedOr.map(v => v[0])
  let len = args[0] && args[0].length > 0 ? Math.min(1000, Math.max(parseInt(args[0]), 5)) : Math.min(20, sortedExp.length)
  let text = `
🔥Exp Leaderboard Top ${len}
Kamu: *${usersExp.indexOf(m.sender) + 1}* dari *${usersExp.length}*

${sortedExp.slice(0, len).map(([user, data], i) => (i + 1) + '. @' + user.split`@`[0] + ': *' + data.exp + ' Exp*').join`\n`}

📊Limit Leaderboard Top ${len}
Kamu: *${usersLim.indexOf(m.sender) + 1}* dari *${usersLim.length}*

${sortedLim.slice(0, len).map(([user, data], i) => (i + 1) + '.@' + user.split`@`[0] + ': *' + data.limit + ' Limit*').join`\n`}

💰Uang Leaderboard Top ${len}
Kamu: *${userOr.indexOf(m.sender) + 1}* dari *${userOr.length}*

${sortedOr.slice(0, len).map(([user, data], i) => (i + 1) + '.@' + user.split`@`[0] + ': *' + data.money + ' Money*').join`\n`}


`.trim()
  conn.reply(m.chat, text, m, {
    contextInfo: {
      mentionedJid: [...usersExp.slice(0, len), ...usersLim.slice(0, len)]
    }
  })
}
handler.help = ['leaderboard', 'lb']
handler.tags = ['xp']
handler.command = /^(leaderboard|lb|top)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

