let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `*𝗔𝗰𝘁𝗶𝘃𝗲𝗻𝘀𝗲 𝗽𝗹𝗲𝗯𝗲𝘀🤍:* ${pesan}`
  let teks = `*✨ʙᴇᴄᴀᴜsᴇ ᴛᴏᴍᴏʀʀᴏᴡ ☀ᴡɪʟʟ ʙᴇ ɴɪᴄᴇ🩵*\n\n ${oi}\n\n➥ _*𝗟𝗶𝘀𝘁𝗮 𝗱𝗲 𝗶𝗻𝘁𝗲𝗴𝗿𝗮𝗻𝘁𝗲𝘀✨:*_\n`
  for (let mem of participants) {
  teks += `🩵 ⇝ @${mem.id.split('@')[0]}\n`}
  teks += `└ *JᴏssɪBᴏᴛ ⇝ @𝒃𝒚𝒋𝒐𝒔𝒔𝒊*`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten|putos|animales)$/i
  handler.admin = true
  handler.group = true
  export default handler