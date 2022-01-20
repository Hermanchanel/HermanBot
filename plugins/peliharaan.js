let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "🏠KANDANG",
                        "description": ".....................................................",
                        "buttonText": "🔽LIHAT",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": "- 🌄KANDANG HEWAN",
                                        "description": "\nKandang hewan",
                                        "rowId": ".kandang"
                                    },{
                                      "title": "- 🌊KOLAM HEWAN",
                                        "description": "\nKolam Ikan",
                                        "rowId": ".kolam"                                              
                                    },{
                                    	
                                        "title": `- 💱JUAL PELIHARAAN`,
                                        "description": "\nUntuk menjual hewan",
                                        "rowId": ".jual"     
                                        
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['peliharaan']
handler.register = true
module.exports = handler