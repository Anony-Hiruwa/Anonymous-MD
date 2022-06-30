require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const nexusnw = require('xfarr-api')

//rpg function\\
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('./storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./storage/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡']   

//rpg database\\
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

//Database\\
let setik = JSON.parse(fs.readFileSync('./database/setik.json'));
let vien = JSON.parse(fs.readFileSync('./database/vien.json'));
let imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
let videox = JSON.parse(fs.readFileSync('./database/video.json'))

//read database\\
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = Anony= async (Anony, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await Anony.decodeJid(Anony.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)

        //group\\
        const groupMetadata = m.isGroup ? await Anony.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	    
        //member\\
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	
	//group target \\
const reply = (teks) => {
            Anony.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": ` 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ 🔐`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./Anony/anony.jpg`),"sourceUrl": "https://telegra.ph/file/6852aab70c51bf2797244.jpg"}}}, { quoted: m})
        }
        
        const replay = (teks) => {
            Anony.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": ` 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ 🔐`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./Anony/anony.jpg`),"sourceUrl": "https://telegra.ph/file/6852aab70c51bf2797244.jpg"}}}, { quoted: m})
        }
	
        //Public & Self\\
        if (!Anony.public) {
            if (!m.key.fromMe) return
        }

        //Push Message To Console && Auto Read\\
        if (m.message) {
            Anony.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	//reset limit every 12 hours\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Reseted')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
        
	//auto set bio\\
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await Anony.setStatus(`${Anony.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	
	  //antilink\\
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        reply(`「 ANTI LINK 」\n\nYou have been detected sending a group link, sorry you will be kicked !`)
        if (!isBotAdmins) return reply(`I Am Not An Admin, How Could I Kick Somebody Who Send Link 😒`)
        let gclink = (`https://chat.whatsapp.com/`+await Anony.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Sent This Group Link❤️`)
        if (isAdmins) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are An Admin Of The Group❤️`)
        if (isCreator) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are My Owner 😘`)
        Anony.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }

 

      //Mute Chat\\
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
        
        //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //Respon Cmd with media\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: Anony.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, Anony.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        Anony.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer The Following Questions :\n${room.soal}\n\n\nThere Is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Surrender!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            Anony.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Anony.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Anony.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Anony.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Anony.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Anony.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Anony.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Anony.sendButtonText(m.chat, [{ buttonId: 'guess blank', buttonText: { displayText: 'Guess The Blank' }, type: 1 }], `🎮 Guess The Blank 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant To Play Again? Press The Button Below`, Anony.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Anony.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Anony.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Anony.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Anony.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Anony.sendButtonText(m.chat, [{ buttonId: 'guess riddle', buttonText: { displayText: 'Guess The Riddle' }, type: 1 }], `🎮 Guess The Riddle 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Anony.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
        
 
switch(command) {
        case 'userlimit': 
{      
   let txt = `「 *ALL LIMIT USER* 」\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    reply(txt)       
  }
 break
 case 'react': {
                if (!isCreator) return replay(`${mess.owner}`)
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                Anony.sendMessage(m.chat, reactionMessage)
            }
break  
case 'group': case 'link': {
      
                const templateButtons = [
  {index: 1, urlButton: {displayText: 'Join Our First Group 🥺', url: 'https://chat.whatsapp.com/LGgfjIyijHA1zrtQv9OnJ0'}},
  {index: 2, callButton: {displayText: 'Developer ❤️', phoneNumber: '+94 77 103 9631'}},
  {index: 3, quickReplyButton: {displayText: 'How To Get Subtitles 😎', id: 'how'}},
]
		

const buttonMessage = {
	image: {url: 'https://telegra.ph/file/e874cd0a341d48280fbfa.jpg'},
	text: `*🔥𝙵𝙸𝚁𝙴 𝙼𝙾𝚅𝙸𝙴 𝙶𝚁𝙾𝚄𝙿🔥*

*Whatsapp හරහා film බල්ලන. එක්වන්න අප්ගේ film සමූහයට. අපෙගේ සමූහයේන් පමනක් ලබාගත හැකි විශෙශ්ෂ feature 2 ක් තියනවා.* 

*1. අපගේ group වල film upload කරන්නේ. rar file විදිහට නෙවෙයි. ඒක නිසා extract කරන්න මහන්සි වෙන්න ඕනේ නෑ 😎.* (❌𝙽𝙾 𝚁𝙰𝚁 𝙵𝙸𝙻𝙴𝚂)

*2. 𝚏𝚒𝚕𝚖 එකට 𝚜𝚞𝚋𝚝𝚒𝚝𝚒𝚕𝚎 𝚊𝚍𝚍 කරන්න දගලන්න ඕනේ නෑ 𝚟𝚒𝚍𝚎𝚘 𝚏𝚒𝚕𝚎 එකටම 𝚜𝚞𝚋𝚝𝚒𝚕𝚎 𝚊𝚍𝚍 කරලා තියෙන්නෙ. ඔයාලට පුලුවන් කැමතිනම් 𝚜𝚞𝚋𝚝𝚒𝚝𝚕𝚎 එක 𝙳𝚎𝚜𝚊𝚋𝚕𝚎 කරලා 𝚏𝚒𝚕𝚖 එක බලන්න.*

*මෙන්න අප්ගේ 𝚐𝚛𝚘𝚞𝚙 𝚕𝚒𝚗𝚔. (𝚐𝚛𝚘𝚞𝚙 සීමිත බැවින් ඉක්මනට 𝚓𝚒𝚘𝚗 වෙන්න) 👇*

*1 𝚐𝚛𝚘𝚞𝚙 👉* https://chat.whatsapp.com/DDABFCoorQiBsnnytDGOBs

*2 𝚐𝚛𝚘𝚞𝚙 👉 https://chat.whatsapp.com/DBFb2xv8CRa6Qc5trcTycy*

*3 𝚐𝚛𝚘𝚞𝚙 👉 https://chat.whatsapp.com/Busyp1CGswQDjzXji7Vm11*

*4 𝚐𝚛𝚘𝚞𝚙 👉 https://chat.whatsapp.com/F74XworDMNTDcm0jBka5XH*

*5 𝚐𝚛𝚘𝚞𝚙 👉 https://chat.whatsapp.com/LGgfjIyijHA1zrtQv9OnJ0*

*6 𝚐𝚛𝚘𝚞𝚙 👉 https://chat.whatsapp.com/FieIO5ePPaYKDhiP9WN1et*

*7 𝚐𝚛𝚘𝚞𝚙 👉 https://chat.whatsapp.com/Jfu32pSomwHC1gXu088t91*

*8 𝚐𝚛𝚘𝚞𝚙 👉 https://chat.whatsapp.com/JqeGkia4YpH1hEG3AdS8Eq*

*9 𝚐𝚛𝚘𝚞𝚙 👉 https://chat.whatsapp.com/E9HRTnX9e5P2UUREPj1p4e*

*⚠️එක 𝚐𝚛𝚘𝚞𝚙 එකකට විතරක් 𝚓𝚘𝚒𝚗 වෙන්න 𝚐𝚛𝚘𝚞𝚙 2,  3 ක ඉන්නවනම් 𝚕𝚎𝚏𝚝 වෙන්න නැත්තම් ඔක්කම 𝚐𝚛𝚘𝚞𝚙 වලින්  𝚛𝚎𝚖𝚘𝚟𝚎 කරනවා.⚠️*`,
    footer: 'Fire Films By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
    templateButtons: templateButtons,
    headerType: 4
}
Anony.sendMessage(m.chat, buttonMessage, { quoted: m})
}
break


case 'how' : {
	
	let how = `ඔබට අවශ්‍ය සබ්ටයිටල්ස් ලබා ගැනීමට නම් ප්‍රතමයෙන්ම Subtitle list එකේ ඔබට අව්ශ්‍ය චිත්‍රපටයේ නම තිබේදැයි බලන්න....පසුව ඔබට අවශ්‍ය චිත්‍රපටයේ නම ඉන්ග්‍රීසි සිම්පල් අකුරු මගින් ඔබගේ චිත්‍රපටයේ නම ටයිප් කර එවන්න එවිට සින්හල සබ්ටයිටල් ඔබ වෙත ලැබෙනු ඇත.... Ex:-   (  commando  )`
	
                let buttons = [
                    {buttonId: `list`, buttonText: {displayText: 'Subtitle List 🥵'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/e874cd0a341d48280fbfa.jpg' },
                    caption: how ,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break
		
case 'subtitle': case 'subtitles': case 'sub': {
                let buttons = [
                    {buttonId: `group`, buttonText: {displayText: 'How to Get Subtitles 😎'}, type: 1},
                    {buttonId: `list`, buttonText: {displayText: 'Subtitle List 🥵'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/e874cd0a341d48280fbfa.jpg' },
                    caption: `Select Your Option 🥵`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

		

            
            case 'list' : {
	
	let list = `${pushname} 😎 Welcome to Our Subtitle Bot

1 ice-age-the-great-egg-scapade-2016
2 ice-age-dawn-of-the-dinosaurs-2009
3 ice-age-the-meltdown-2006
4 ice-age-2002
5 Heropanti-2
6 heropanti-2014
7 transylvania-4
8 transylvania-3
9 transylvania-2
10 transylvania-2012
11 harry-potter-and-the-deathly-hallows-part-2-2011
12 harry-potter-and-the-deathly-hallows-part-1-2010
13 Harry-Potter-and-the-Half-Blood-Prince-2009
14 harry-potter-and-the-order-of-the-phoenix-2007
15 harry-potter-and-the-goblet-of-fire-2005
16 harry-potter-and-the-prisoner-of-azkaban-2004
17 harry-potter-and-the-chamber-of-secrets-2002
18 harry-potter-and-the-philosophers-stone-2001
19 ghost-rider-spirit-of-vengeance-2011
20 ghost-rider-2007
21 frozen-2-2019
22 frozen-2013
23 olafs-frozen-adventure-2017
24 gangubai-kathiawadi
25 everything-everywhere-all-at-once
26 free-guy-2021
27 dj-tillu
28 don-2022
29 deadpool-1
30 deadpool-2
31 bird-box
32 black-panther
33 bhool-bhulaiyaa
34 Bhool-Bhulaiyaa-2
35 bheeshma-2020
36 aquaman-2018
37 annabellecreation-2017
38 annabelle-comes-home-2019
39 annabelle-2014
40 ford-v-ferrari-2019
41 acharya-2022
42 army-of-the-dead-2021
43 12th-man
44 watcher-2022
45 war-2019
46 transformers-the-last-knight-2017
47 transformers-age-of-extinction-2014
48 transformers-dark-of-the-moon-2011
49 transformers-revenge-of-the-fallen-2009
50 transformers-2007
51 thor-ragnarok-2017
52 thor-the-dark-world-2013
53 the-conjuring-3
54 the-conjuring-2
55 the-conjuring
56 the-three-stooges-2012
57 avengers-endgame-2019
58 avengers-age-of-ultron-2015
59 avengers-infinity-war-2018
60 the-nun-2018
61 the-avengers-2012
62 shiddat
63 pushpa-the-rise
64 maleficent-mistress-of-evil-2019
65 maleficent-2014
66 commando-2013
67 doctor-strange-2016
68 attack-part-1
69 
70 
71 
72 
73 
74 
75 
76 
77 
78 
79 
80 
81 
82 

`

                let buttons = [
                    {buttonId: `how`, buttonText: {displayText: 'How to Get Subtitle 🥵'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/e874cd0a341d48280fbfa.jpg' },
                    caption: list ,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

case 'harrypotter': case 'harry-potter': case 'potter': {
                let buttons = [
                    {buttonId: `harrypotter1-4`, buttonText: {displayText: 'Harry Potter 1 - 4 ♠️'}, type: 1},
                    {buttonId: `harrypotter5-8`, buttonText: {displayText: 'Harry Potter 5 - 8 🔐'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/612bb7d836a303ff7b577.jpg' },
                    caption: `Select Your Subtitle ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

case 'conjuring': {
                let buttons = [
                    {buttonId: `the-conjuring`, buttonText: {displayText: 'The Conjuring 1 ♠️'}, type: 1},
                    {buttonId: `the-conjuring-2`, buttonText: {displayText: 'The Conjuring 2 ♠️'}, type: 1},
                    {buttonId: `the-conjuring-3`, buttonText: {displayText: 'The Conjuring 3 🔐'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://static.wikia.nocookie.net/headhuntersholosuite/images/1/14/Conjuring_III%2C_The.jpg/revision/latest?cb=20200101165550' },
                    caption: `Select Your Subtitle ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

case 'commando': {
                let buttons = [
                    {buttonId: `commando-2013`, buttonText: {displayText: 'Commando 1 ♠️'}, type: 1},
                    {buttonId: `commando-2`, buttonText: {displayText: 'Commando 2 🔐'}, type: 1},
                    {buttonId: `commando-3`, buttonText: {displayText: 'Commando 3 ♠️'}, type: 1},
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://i.pinimg.com/564x/39/eb/f2/39ebf25c55a844d5e94968169ec40940.jpg' },
                    caption: `Select Your Subtitle ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

case 'harrypotter1-4': {
	
            let harry1 = 'https://www.baiscopelk.com/Downloads/harry_potter_and_the_philosophers_stone_2001-zip/'
            let harry2 = 'https://www.baiscopelk.com/Downloads/harry-potter-and_-the_-chamber-of_-secrets-2002-zip/'
            let harry3 = 'https://www.baiscopelk.com/Downloads/harry-potter-and_-the_-prisoner-of_-azkaban-2004-zip/'
            let harry4 = 'https://www.baiscopelk.com/Downloads/harry-potter-and-the-goblet-of-fire-2005-zip/'
            
                Anony.sendMessage(m.chat, { document: { url: harry1 }, mimetype: 'application/octet-stream', fileName: `Harrypotter-1-Fire-Anony-Sub.zip`}, { quoted: m })
                Anony.sendMessage(m.chat, { document: { url: harry2 }, mimetype: 'application/octet-stream', fileName: `Harrypotter-2-Fire-Anony-Sub.zip`}, { quoted: m })
                Anony.sendMessage(m.chat, { document: { url: harry3 }, mimetype: 'application/octet-stream', fileName: `Harrypotter-3-Fire-Anony-Sub.zip`}, { quoted: m })
                Anony.sendMessage(m.chat, { document: { url: harry4 }, mimetype: 'application/octet-stream', fileName: `Harrypotter-4-Fire-Anony-Sub.zip`}, { quoted: m })
             }
             break
             
case 'harrypotter5-8': {
	
            let harry5 = 'https://www.baiscopelk.com/Downloads/harry-potter-and_-the_-order_-of_-the_-phoenix-2007-zip/'
            let harry6 = 'https://www.baiscopelk.com/wp-content/uploads/2017/02/Harry_Potter_and_the_Half_Blood_Prince_2009.si_.srt'
            let harry7 = 'https://www.baiscopelk.com/Downloads/harry-potter-and_-the_-deathly-hallows-part_-1-2010-zip/'
            let harry8 = 'https://www.baiscopelk.com/Downloads/harry-potter-and_-the_-deathly-hallows-part_-2-2011-sinhala-sub_-zip/'
             
                Anony.sendMessage(m.chat, { document: { url: harry5 }, mimetype: 'application/octet-stream', fileName: `Harrypotter-5-Fire-Anony-Sub.zip`}, { quoted: m })
                Anony.sendMessage(m.chat, { document: { url: harry6 }, mimetype: 'application/octet-stream', fileName: `Harrypotter-6-Fire-Anony-Sub.zip`}, { quoted: m })
                Anony.sendMessage(m.chat, { document: { url: harry7 }, mimetype: 'application/octet-stream', fileName: `Harrypotter-7-Fire-Anony-Sub.zip`}, { quoted: m })
                Anony.sendMessage(m.chat, { document: { url: harry8 }, mimetype: 'application/octet-stream', fileName: `Harrypotter-8-Fire-Anony-Sub.zip`}, { quoted: m })
             }
             break
             
            //Film List
            
            case 'attack-part-1': case 'commando-2013': case 'commando-2': case 'commando-3': case 'ice-age-the-great-egg-scapade-2016': case 'ice-age-dawn-of-the-dinosaurs-2009': case 'ice-age-the-meltdown-2006': case 'ice-age-2002': case 'heropanti-2': case 'heropanti-2014': case 'transylvania-4': case 'transylvania-3':
case 'transylvania-2': case 'transylvania-2012': case 'harry-potter-and-the-deathly-hallows-part-2-2011': case 'harry-potter-and-the-deathly-hallows-part-1-2010': case 'Harry-Potter-and-the-Half-Blood-Prince-2009': case 'harry-potter-and-the-order-of-the-phoenix-2007': case 'harry-potter-and-the-goblet-of-fire-2005': case 'harry-potter-and-the-prisoner-of-azkaban-2004': case 'harry-potter-and-the-chamber-of-secrets-2002': case 'harry-potter-and-the-philosophers-stone-2001': case 'ghost-rider-spirit-of-vengeance-2011': case 'ghost-rider-2007': 
case 'gangubai-kathiawadi': case 'frozen-2-2019': case 'olafs-frozen-adventure-2017': case 'frozen-2013': case 'free-guy-2021': case 'everything-everywhere-all-at-once': case 'don-2022': case 'dj-tillu': case 'deadpool-2': case 'deadpool-1': case 'black-panther': case 'bird-box': case 'Bhool-Bhulaiyaa-2': case 'bhool-bhulaiyaa': case 'bheeshma-2020': case 'aquaman-2018': case 'annabelle-comes-home-2019': case 'annabellecreation-2017': case 'annabelle-2014': case 'ford-v-ferrari-2019': case 'acharya-2022': case 'army-of-the-dead-2021': case '12th-man': case 'watcher-2022':
case 'war-2019': case 'transformers-the-last-knight-2017': case 'transformers-age-of-extinction-2014': case 'transformers-dark-of-the-moon-2011': case 'transformers-revenge-of-the-fallen-2009': case 'transformers-2007': case 'thor-ragnarok-2017': case 'thor-the-dark-world-2013': case 'thor-2011': case 'the-conjuring-3': case 'the-conjuring-2': case 'the-conjuring': case 'the-three-stooges-2012': case 'the-nun-2018': case 'avengers-endgame-2019': case 'avengers-infinity-war-2018': case 'avengers-age-of-ultron-2015': case 'the-avengers-2012': case 'shiddat': case 'pushpa-the-rise': case 'maleficent-mistress-of-evil-2019': case 'maleficent-2014': case 'doctor-strange-2016': {
             
             let link
             if (/attack-part-1/.test(command)) link = 'https://www.baiscopelk.com/Downloads/%e0%b6%87%e2%80%8d%e2%80%8d%e0%b6%a7%e0%b7%91%e0%b6%9a%e0%b7%8a-part-1-2022/'

             if (/commando-2013/.test(command)) link = 'https://www.baiscopelk.com/Downloads/commando-2013-2/'
             if (/commando-2/.test(command)) link = 'https://www.baiscopelk.com/Downloads/commando-2-2017-2/'
             if (/commando-3/.test(command)) link = 'https://www.baiscopelk.com/Downloads/commando-3-2019-zip/'

             if (/doctor-strange-2016/.test(command)) link = 'https://www.baiscopelk.com/Downloads/doctor-strange-2016-baiscopelk/'

             if (/maleficent-2014/.test(command)) link = 'https://www.baiscopelk.com/Downloads/maleficent-2014-br/'
             if (/maleficent-mistress-of-evil-2019/.test(command)) link = 'https://www.baiscopelk.com/Downloads/maleficent-mistress-of-evil-2019-blu-ray/'

             if (/pushpa-the-rise/.test(command)) link = 'https://www.baiscopelk.com/Downloads/pushpa-the-rise-2021-zip/'
             if (/shiddat/.test(command)) link = 'https://www.baiscopelk.com/Downloads/shiddat-2021/'

             if (/the-avengers-2012/.test(command)) link = 'https://www.baiscopelk.com/Downloads/the-avengers-2012-4/'
             if (/avengers-age-of-ultron-2015/.test(command)) link = 'https://www.baiscopelk.com/Downloads/avengers-age-of-ultron-2015-br-update/'
             if (/avengers-infinity-war-2018/.test(command)) link = 'https://www.baiscopelk.com/Downloads/201807310958-avengersinfinitywar2018-br/'
             if (/avengers-endgame-2019/.test(command)) link = 'https://www.baiscopelk.com/Downloads/avengers-endgame-2019-500-br-zip/'

             if (/the-nun-2018/.test(command)) link = 'https://www.baiscopelk.com/Downloads/the-nun-2018-br_-zip/'
             if (/the-three-stooges-2012/.test(command)) link = 'https://www.baiscopelk.com/Downloads/the-three-stooges-2012/'

             if (/the-conjuring/.test(command)) link = 'https://www.baiscopelk.com/Downloads/the-conjuring-2013-2/'
             if (/the-conjuring-2/.test(command)) link = 'https://www.baiscopelk.com/Downloads/the-conjuring-2-2016-br/'
             if (/the-conjuring-3/.test(command)) link = 'https://www.baiscopelk.com/Downloads/the-conjuring-3-the-devil-made-me-do-it-2021-blu-ray/'

             if (/thor-2011/.test(command)) link = 'https://www.baiscopelk.com/Downloads/thor2011-sinhala-sub_-new_-zip/'
             if (/thor-the-dark-world-2013/.test(command)) link = 'https://www.baiscopelk.com/Downloads/thor-the-dark-world-2013-br/'
             if (/thor-ragnarok-2017/.test(command)) link = 'https://www.baiscopelk.com/Downloads/thor-ragnarok-2017-br-2/'

             if (/transformers-2007/.test(command)) link = 'https://www.baiscopelk.com/Downloads/transformers-2007//'
             if (/transformers-revenge-of-the-fallen-2009/.test(command)) link = 'https://www.baiscopelk.com/Downloads/transformers-revenge-of-the-fallen-2009/'
             if (/transformers-dark-of-the-moon-2011/.test(command)) link = 'https://www.baiscopelk.com/Downloads/transformers-dark-of-the-moon-2011/'
             if (/transformers-age-of-extinction-2014/.test(command)) link = 'https://www.baiscopelk.com/Downloads/transformers-age-of-extinction-2014-br/'
             if (/transformers-the-last-knight-2017/.test(command)) link = 'https://www.baiscopelk.com/Downloads/transformers-the-last-knight-2017-br/'

             if (/war-2019/.test(command)) link = 'https://www.baiscopelk.com/Downloads/war-2019-br-zip/'
             if (/watcher-2022/.test(command)) link = 'https://www.baiscopelk.com/Downloads/watcher-2022-zip/'
             if (/12th-man/.test(command)) link = 'https://www.baiscopelk.com/Downloads/12th-%e0%b6%b8%e0%b7%91%e0%b6%b1%e0%b7%8a-2022-zip/'
             if (/army-of-the-dead-2021/.test(command)) link = 'https://www.baiscopelk.com/Downloads/army-of-the-dead-2021/'
             if (/acharya-2022/.test(command)) link = 'https://www.baiscopelk.com/Downloads/acharya-2022-zip/'
             if (/ford-v-ferrari-2019/.test(command)) link = 'https://www.baiscopelk.com/Downloads/ford-v-ferrari-2019-br/'

             if (/annabelle-2014/.test(command)) link = 'https://www.baiscopelk.com/Downloads/annabelle-2014-blu-ray/'
             if (/annabellecreation-2017/.test(command)) link = 'https://www.baiscopelk.com/Downloads/annabellecreation-2017-br-zip/'
             if (/annabelle-comes-home-2019/.test(command)) link = 'https://www.baiscopelk.com/Downloads/annabelle-comes-home-2019-br/'

             if (/aquaman-2018/.test(command)) link = 'https://www.baiscopelk.com/Downloads/aquaman-2018-br-zip/'
             if (/bheeshma-2020/.test(command)) link = 'https://www.baiscopelk.com/Downloads/bheeshma-2020-updated-zip/'

             if (/bhool-bhulaiyaa/.test(command)) link = 'https://www.baiscopelk.com/Downloads/bhool-bhulaiyaa-2007-baiscopelk/'
             if (/Bhool-Bhulaiyaa-2/.test(command)) link = 'https://cineru.lk/wp-content/uploads/2022/06/Bhool-Bhulaiyaa-2-2022-Sinhala-Subtitles.zip'

             if (/bird-box/.test(command)) link = 'https://www.baiscopelk.com/Downloads/bird-box-2018/'
             if (/black-panther/.test(command)) link = 'https://www.baiscopelk.com/Downloads/black-panther-2018-baiscopelk-com_-zip-2/'

             if (/deadpool-1/.test(command)) link = 'https://www.baiscopelk.com/Downloads/deadpool-2016-baiscopelkbr-update2-zip/'
             if (/deadpool-2/.test(command)) link = 'https://www.baiscopelk.com/Downloads/deadpool-2-2018-br-1-1-zip/'

             if (/dj-tillu/.test(command)) link = 'https://www.baiscopelk.com/Downloads/dj-tillu-2022-zip/'
             if (/don-2022/.test(command)) link = 'https://www.baiscopelk.com/Downloads/don-2022-updated-zip/'
             if (/everything-everywhere-all-at-once/.test(command)) link = 'https://www.baiscopelk.com/Downloads/everything-everywhere-all-at-once-2022-blu-ray/'
             if (/free-guy-2021/.test(command)) link = 'https://www.baiscopelk.com/Downloads/free-guy_-2021-zip/'

             if (/frozen-2013/.test(command)) link = 'https://www.baiscopelk.com/Downloads/frozen-2013-br/'
             if (/olafs-frozen-adventure-2017/.test(command)) link = 'https://www.baiscopelk.com/Downloads/olafs-frozen-adventure-2017/'
             if (/frozen-2-2019/.test(command)) link = 'https://www.baiscopelk.com/Downloads/frozen-ii-2019-br-zip/'

             if (/gangubai-kathiawadi/.test(command)) link = 'https://www.baiscopelk.com/Downloads/gk-2022/'

             if (/ghost-rider-2007/.test(command)) link = 'https://www.baiscopelk.com/Downloads/ghost-rider-2007-blu-ray/'
             if (/ghost-rider-spirit-of-vengeance-2011/.test(command)) link = 'https://www.baiscopelk.com/Downloads/ghost-rider-spirit-of-vengeance-2011-blu-ray/'

             if (/harry-potter-and-the-philosophers-stone-2001/.test(command)) link = 'https://www.baiscopelk.com/Downloads/harry_potter_and_the_philosophers_stone_2001-zip/'
             if (/harry-potter-and-the-chamber-of-secrets-2002/.test(command)) link = 'https://www.baiscopelk.com/Downloads/harry-potter-and_-the_-chamber-of_-secrets-2002-zip/'
             if (/harry-potter-and-the-prisoner-of-azkaban-2004/.test(command)) link = 'https://www.baiscopelk.com/Downloads/harry-potter-and_-the_-prisoner-of_-azkaban-2004-zip/'
             if (/harry-potter-and-the-goblet-of-fire-2005/.test(command)) link = 'https://www.baiscopelk.com/Downloads/harry-potter-and-the-goblet-of-fire-2005-zip/'
             if (/harry-potter-and-the-order-of-the-phoenix-2007/.test(command)) link = 'https://www.baiscopelk.com/Downloads/harry-potter-and_-the_-order_-of_-the_-phoenix-2007-zip/'
             if (/Harry-Potter-and-the-Half-Blood-Prince-2009/.test(command)) link = 'https://www.baiscopelk.com/wp-content/uploads/2017/02/Harry_Potter_and_the_Half_Blood_Prince_2009.si_.srt'
             if (/harry-potter-and-the-deathly-hallows-part-1-2010/.test(command)) link = 'https://www.baiscopelk.com/Downloads/harry-potter-and_-the_-deathly-hallows-part_-1-2010-zip/'
             if (/harry-potter-and-the-deathly-hallows-part-2-2011/.test(command)) link = 'https://www.baiscopelk.com/Downloads/harry-potter-and_-the_-deathly-hallows-part_-2-2011-sinhala-sub_-zip/'

             if (/transylvania-2012/.test(command)) link = 'https://www.baiscopelk.com/Downloads/hotel-transylvania-2012/'
             if (/transylvania-2/.test(command)) link = 'https://www.baiscopelk.com/Downloads/hotel-transylvania-2-br/'
             if (/transylvania-3/.test(command)) link = 'https://www.baiscopelk.com/Downloads/hotel-transylvania-3-a-monster-vacation-baiscopelk-com_-zip/'
             if (/transylvania-4/.test(command)) link = 'https://www.baiscopelk.com/Downloads/hotel-transylvania-4-transformania-2022-zip/'

             if (/heropanti-2014/.test(command)) link = 'https://www.baiscopelk.com/Downloads/heropanti-2014/'
             if (/Heropanti-2/.test(command)) link = 'https://cineru.lk/wp-content/uploads/2022/05/Heropanti-2-2022-Sinhala-Subtitles.zip'

             if (/ice-age-2002/.test(command)) link = 'https://www.baiscopelk.com/Downloads/ice-age-2002/'
             if (/ice-age-the-meltdown-2006/.test(command)) link = 'https://www.baiscopelk.com/Downloads/ice-age-the-meltdown-2006/'
             if (/ice-age-dawn-of-the-dinosaurs-2009/.test(command)) link = 'https://www.baiscopelk.com/Downloads/ice-age-dawn-of-the-dinosaurs-2009/'
             if (/ice-age-the-great-egg-scapade-2016/.test(command)) link = 'https://www.baiscopelk.com/Downloads/ice-age-the-great-egg-scapade-2016/'
             let anony = await(link)
                Anony.sendMessage(m.chat, { document: { url: anony }, mimetype: 'application/octet-stream', fileName: `Fire-Anony-Sub.zip`}, { quoted: m })
             }
             break
             
             
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    Anony.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
