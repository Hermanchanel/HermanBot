let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "Klik Tombol dibawah\nMemulai cringe ff",
                        "description": "..............................",
                        "buttonText": "📜MENU EFEF",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `- Tutorial`,
                                        "description": "\nBy Dimas",
                                        "rowId": ".fflogo .fflogo (teks)"
                                    },{                                     
                                        "title": `- 😄FF Cringe1`,
                                        "description": "\nBy Dimas",
                                        "rowId": ".fflogo senggol donh"
                                    },{
                                        "title": `- 😄FF Cringe2`,
                                        "description": "\nBy Dimas",
                                        "rowId": ".fflogo adu skill banh"
                                    },{
                                        "title": "- 😄FF Cringe3",
                                        "description": "\nBy Dimas",
                                        "rowId": ".fflogo ff nih boss"                 
                                    },{
                                        "title": "- 😄FF Cringe4",
                                        "description": "\nBy Dimas",
                                        "rowId": ".fflogo gem kok haram"                 
                                    },{
                                        "title": "- 😄FF Cringe5",
                                        "description": "\nBy Dimas",
                                        "rowId": ".fflogo ml lOl"                 
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['freefire']
handler.register = true
module.exports = handler