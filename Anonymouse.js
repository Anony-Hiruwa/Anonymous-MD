require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const config = require('./config')
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
	
	//check
	

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
		
	case 'update' :{
                const simpleGit = require('simple-git')
                const git = simpleGit();
                    await git.fetch();
                        var commits = await git.log(['master' + '..origin/' + 'master']);
                    if (commits.total === 0) {
                        await Anony.sendMessage(m.chat,{text:'*You have the Latest Version Installed*'})    
                    } else {
                        var availupdate = '*ᴜᴘᴅᴀᴛᴇs ᴀᴠᴀɪʟᴀʙʟᴇ* \n\n'+'```';
                        commits['all'].map(
                        (commit) => { 
                        availupdate += '🏓  '+ commit.message +'\n'});
                        let buttons = [
                            { buttonId: 'update now', buttonText: { displayText: 'UPDATE NOW' }, type: 1 },
                        ]
                        await Anony.sendMessage(m.chat, buttons, availupdate + '```', ${pushname})
                        
                    }}                       
                    
            
            break
            case 'update now':{
                const Heroku = require('heroku-client');
                const heroku = new Heroku({ token: config.HEROKU.API_KEY })
                const simpleGit = require('simple-git')
                const git = simpleGit();
                await git.fetch();
                        var commits = await git.log([config.BRANCH + '..origin/' + config.BRANCH]);
                        if (commits.total === 0) {
                            return await Anony.sendMessage(m.chat,{text:'*You have the latest Version Installed*'})   
                        } else {
                               

                                    var app = await heroku.get('/apps/' + HEROKU.NAME)
                                    await Anony.sendMessage(m.chat,{text:'*UPDATING...*'})
                                
                                    /*await conn.sendMessage(m.chat,{text:'```Invalid Heroku Credentials```'})
                                    await new Promise(r => setTimeout(r, 1000));
                                    return await Anony.sendMessage(m.chat,{text:'```Please give correct credentials```'})*/
                                
                    
                                git.fetch('upstream', config.BRANCH);
                                git.reset('hard', ['FETCH_HEAD']);
                    
                                var git_url = app.git_url.replace(
                                    "https://", "https://api:" + config.HEROKU.API_KEY + "@"
                                )
                                
                                try {
                                    await git.addRemote('heroku', git_url);
                                } catch { console.log('heroku remote ekli'); }
                                await git.push('heroku', config.BRANCH);
                    
                                await Anony.sendMessage(m.chat,{text:'*UPDATED...*'})
                    
                                await Anony.sendMessage(m.chat,{text:'*RESTARTING...*'})
                                
                         
                        }}
            
           break	
 
 case 'owner': {
 	const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:'+config.OWNER+'\n' 
            + 'ORG:Anonymous Team 🔐;\n' 
            + 'TEL;type=CELL;type=VOICE;waid='+config.OWNERNUM+':'+config.OWNERNUM+'\n' 
            + 'END:VCARD'
Anony.sendMessage(m.chat,
    { 
        contacts: { 
            displayName: config.OWNER, 
            contacts: [{ vcard }] 
        }
    }
)
 
 
 }
 break
 
 case 'react': {
                if (!isCreator) return replay(`${mess.owner}`)
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: false, id: quoted.id }
                    }
                }
                Anony.sendMessage(m.chat, reactionMessage)
            }
break  

//TikTok
case 'tiktok': {
                if (!text) return reply(`Give me a tik tok link`)
                reply(mess.wait)
                await axios
          .get(`https://anony-vip-edition.herokuapp.com/api/download/tiktok?url=${text}&apikey=hiruwa`)
          .then(async (response) => {
            const {
              nowatermark,watermark,audio,Avatar,botname,type,
            } = response.data.result
            
                let buttons = [
                    {buttonId: `wm ${text}`, buttonText: {displayText: 'With Watermark 🔐'}, type: 1},
                    {buttonId: `nwm ${text}`, buttonText: {displayText: 'Without Watermark ♠️'}, type: 1},
                    {buttonId: `aud ${text}`, buttonText: {displayText: 'Audio 🔐'}, type: 1}
                   
                ]
                let buttonMessage = {
                    image: { url: Avatar },
                    caption: `${type}

Select Your Type Of Video Or Audio`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
         
         
         })
          }
	    break
	
	case 'wm': {
                if (!text) return reply(`Give me a tik tok link`)
                reply(mess.wait)
                await axios
          .get(`https://anony-vip-edition.herokuapp.com/api/download/tiktok?url=${text}&apikey=hiruwa`)
          .then(async (response) => {
            const {
              nowatermark,watermark,audio,Avatar,botname,type,
            } = response.data.result
            
                let buttons = [
                    {buttonId: `nwm ${text}`, buttonText: {displayText: 'Without Watermark ♠️'}, type: 1},
                    {buttonId: `aud ${text}`, buttonText: {displayText: 'Audio 🔐'}, type: 1}
                   
                ]
                let buttonMessage = {
                    video: { url: watermark },
                    caption: `${type}

Select Your Type Of Video Or Audio`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
         
         
         })
          }
	    break
	
	case 'nwm': {
                if (!text) return reply(`Give me a tik tok link`)
                reply(mess.wait)
                await axios
          .get(`https://anony-vip-edition.herokuapp.com/api/download/tiktok?url=${text}&apikey=hiruwa`)
          .then(async (response) => {
            const {
              nowatermark,watermark,audio,Avatar,botname,type,
            } = response.data.result
            
                let buttons = [
                    {buttonId: `wm ${text}`, buttonText: {displayText: 'With Watermark 🔐'}, type: 1},
                    {buttonId: `aud ${text}`, buttonText: {displayText: 'Audio 🔐'}, type: 1}
                   
                ]
                let buttonMessage = {
                    video: { url: nowatermark },
                    caption: `${type}

Select Your Type Of Video Or Audio`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
         
         
         })
          }
	    break
	
	case 'aud': {
                if (!text) return reply(`Give me a tik tok link`)
                reply(mess.wait)
                await axios
          .get(`https://anony-vip-edition.herokuapp.com/api/download/tiktok?url=${text}&apikey=hiruwa`)
          .then(async (response) => {
            const {
              nowatermark,watermark,audio,Avatar,botname,type,
            } = response.data.result
            
                let buttons = [
                    {buttonId: `wm ${text}`, buttonText: {displayText: 'With Watermark 🔐'}, type: 1},
                    {buttonId: `nwm ${text}`, buttonText: {displayText: 'Without Watermark ♠️'}, type: 1},
                    
                ]
                let buttonMessage = {
                    image: { url: Avatar },
                    caption: `${type}

Select Your Type Of Video Or Audio`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, { audio: { url: audio }, mimetype: 'audio/mpeg', fileName: `Anony-Tik-tok-Downloader.mp3` }, { quoted: m })
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
         
         
         })
          }
	    break
	
	//youtube
	
	case 'play': case 'song': case 'video': {
                if (!text) return reply(`Example : ${prefix + command} Stay`)
                let yts = require("yt-search")
                let sre= await yts(text)
                let anony = (sre.all)
                let buttons = [
                    {buttonId: `ytmp3 ${sre.all[0].url}`, buttonText: {displayText: 'Audio 🔐'}, type: 1},
                    {buttonId: `ytmp4 ${sre.all[0].url}`, buttonText: {displayText: 'Video 🔐'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: sre.all[0].thumbnail },
                    caption: `
🔐 Title : ${sre.all[0].title}

🔐 Duration : ${sre.all[0].timestamp}

🔐 Viewes : ${sre.all[0].views}

🔐 Uploaded On : ${sre.all[0].ago}

🔐 Author : ${sre.all[0].author.name}

🔐 Channel : ${sre.all[0].author.url}

🔐 Description : ${sre.all[0].description}`,
                    footer: '🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	
            
            case 'ytmp4': {
                let buttons = [
                    {buttonId: `highqua ${text}`, buttonText: {displayText: '480p 🔐'}, type: 1},
                    {buttonId: `mediumqua ${text}`, buttonText: {displayText: '360p ♠️'}, type: 1},
                    {buttonId: `lowqua ${text}`, buttonText: {displayText: '240p 🔐'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/6852aab70c51bf2797244.jpg' },
                    caption: `Select Your Quality ❤️

Some Qualities Are Not Available 😢`,
                    footer: '🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break
            
	    case 'ytmp3': {
                let { yta } = require('./lib/y2mate')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
                let quality = args[1] ? args[1] : '320kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                Anony.sendImage(m.chat, media.thumb, `🔐 Title : ${media.title}\n🔐 File Size : ${media.filesizeF}\n🔐 Url : ${isUrl(text)}\n🔐 Resolution : ${args[1] || '320kbps'}`, m)
                Anony.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'highqua': {
                let { ytv } = require('./lib/y2mate')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                let quality = args[1] ? args[1] : '480p'
                let media = await ytv(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                let buttons = [
                    {buttonId: `mediumqua ${text}`, buttonText: {displayText: '360p ♠️'}, type: 1},
                    {buttonId: `lowqua ${text}`, buttonText: {displayText: '240p 🔐'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: media.dl_link },
                    caption: `🔐 Title : ${media.title}

🔐 File Size : ${media.filesizeF}

🔐 Url : ${isUrl(text)}

🔐 Ext : MP3

🔐 Resolution : ${args[1] || '480p'}

Select Your Quality ❤️

Some Qualities Are Not Available 😢`,
                    footer: '🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
          
                 }
            break
            case 'mediumqua': {
                let { ytv } = require('./lib/y2mate')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                let buttons = [
                    {buttonId: `highqua ${text}`, buttonText: {displayText: '480p ♠️'}, type: 1},
                    {buttonId: `lowqua ${text}`, buttonText: {displayText: '240p 🔐'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: media.dl_link },
                    caption: `🔐 Title : ${media.title}

🔐 File Size : ${media.filesizeF}

🔐 Url : ${isUrl(text)}

🔐 Ext : MP3

🔐 Resolution : ${args[1] || '480p'}

Select Your Quality ❤️

Some Qualities Are Not Available 😢`,
                    footer: '🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
          
                   }
            break
            case 'lowqua': {
                let { ytv } = require('./lib/y2mate')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                let quality = args[1] ? args[1] : '240p'
                let media = await ytv(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                let buttons = [
                    {buttonId: `mediumqua ${text}`, buttonText: {displayText: '360p ♠️'}, type: 1},
                    {buttonId: `highqua ${text}`, buttonText: {displayText: '480p 🔐'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: media.dl_link },
                    caption: `🔐 Title : ${media.title}

🔐 File Size : ${media.filesizeF}

🔐 Url : ${isUrl(text)}

🔐 Ext : MP3

🔐 Resolution : ${args[1] || '240p'}

Select Your Quality ❤️

Some Qualities Are Not Available 😢`,
                    footer: '🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
          
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
