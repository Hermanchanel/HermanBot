let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "⛏️LIST PEKERJAAN⛏️",
                        "description": "_herman_",
                        "buttonText": "PILIH",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `- 🐅Berburu Hewan`,
                                        "description": "Berburu suatu hewan",
                                        "rowId": ".berburu"
                                    },{
                                      "title": "-🎣Mancing Di laut",
                                        "description": "Memancing ikan di laut",
                                        "rowId": ".mancing"                                              
                                    },{
         
                                      "title": "-⛏️Menambang",
                                        "description": "Menambang Batu & uang",
                                        "rowId": ".nambang"                                              
                                    },{
                                        "title": "- 🗺️Berpetualang",
                                        "description": "Mencari item di semua tempat",
                                        "rowId": ".adventure"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['pekerjaan']
handler.register = true
module.exports = handler