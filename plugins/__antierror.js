let handler = m => m

handler.all = async function (m) {
    let user = global.DATABASE._data.users[m.sender]
    if ((user.money * 1) > 999999999999999999999) {
        user.money = 9999999999999999999
    } else if ((user.money * 1) < 0) {
        user.money = 0
    }
    if ((user.healt * 1) > 99999999999) {
        user.healt = 99999999999
    } else if ((user.money * 1) < 0) {
        user.healt = 0
    }
}

module.exports = handler
