/* Copyright (C) 2021 ameer-kallumthodi   &   Turbo.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/
const fs = require('fs')
const Asena = require('../events');
const {MessageType, Mimetype } = require('@adiwajshing/baileys');
const FilterDb = require('./sql/filters');
const Config = require('../config')
const jid = Config.DISBGM != false ? Config.DISBGM.split(',') : [];
const Language = require('../language');
const Lang = Language.getString('filters');

if (Config.WORKTYPE == 'private') {

Asena.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));
Asena.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));
Asena.addCommand({on: 'text', fromMe: false }, (async (message, match) => {
    if(Config.BGMFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '916380260672@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/Turbo.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
const array = ['Akhil','alive','Aliya','Aliyo','alone','Althaf','Ameer','ano','ara','Ardra','ayilla','ayn','aysheri','Ayyo','baby','Back','bad boy','Bad','bgm','Bgm','Bhasi','bie','big fan','Blackzue','Boss','bot','Bot','broken','brokenlove','Bye','care','Chathi','chatho','Chathy','Chetta','Chiri','Chunk','chunke','chunks','comedy','cr7','Cr7','Cristiano','Cry','da','Dai','DD','die','Dora','Eda','ee','ekk','Ellarum ede','ennitt','enth','Entha cheyya','entha','Enthada','evde','Fasil','Fan','fd','Feel aayi','Fek','ff','free','fresh','Frnd','Fsq','Gd mng','gd n8','Gd ngt','gdmng','gdngt','good bye','group','grp','Ha','hate','Haters','Hbd','Hbday','He','Hello','Hi','Hlo','Hloo','Hoi','Hy','i am back','ijathi','jd','kadhal','kali','Kanapi','Kanaran','Kanjan','Kanjav','kar98','Kemam','kenzo','Kenzoo','kerivaa','Kevin','Kgf','killadi','king','kiss','Kk','Koi','kozhi','Kukku','kundan','Kundan','Kunju','kunna','Kurup','Kutty','La be','Lala','left','Legend','Leopucha','life','line','Lo','Loo','Love tune','love u','Love','lover','Loveu','Lub u','lucifer','machan','Mad','Malang','mindalle','mindathe','Mohanlal','Mood','moodesh','moonji','Music pranthan','music','Muth','muthe','my area','My god','My love','mybos','mylove','myr','myre','Nalla kutty','Nallakutti','nallath','Name entha','Name','nanban','Nanbiye','Nanni','neymar','Neymar','Neymer','Nirthada','nirthada','Nirtheda','Nishal','njan','Njn vera','njn','Njr','noob','Oh no','Oh','ok bei','Ok bye','ok da','ok','oombi','oompi','over','Paat','paatt','Paavam','padicho','pani','Panni','parayatte','patti','perfect ok','Pever','pewer','photo','Pikachu','Pinnallah','Place','Poda','Podai','Poli','polika','Pooda','poora','Poote','Pora','Potta','Potte','Power varate','power','Poweresh','Poyeda','Pranayam','Psycho','Ramos','rascal','rashmika','rasool','return','Rose','sad','Sad','Sahva','saji','Sayip','scene','Sed aayi','Messi','messi','sed bgm','Sed tune','sed','Senior','Serious','set aano','Set','Seth po','Singapenne','single','sis','sketched','Smile','sneham','Soldier','song','sorry','Sry','Subscribe','Suhail','sulthan','Super','T','Tentacion','Thalapathy','thall','thamasha','Thantha','thayoli','theri','thot','thottu','thug','Thyr','Town','Track maat','trance','Uff','Umbi','umma','uyir','Va','Vaa','vada','Vava','Veeran','venda','verithanam','Vidhi','Wait','waiting','welcome','why','wow','Yaar','Z aayi','2','aara','Aarulle','adi','adima','Adipoli','breakup','Chunks','Clg','dance','Di','don','Ee','enjoy','Fen','Gd','Hacker','help','I love you','Kali','Kenzo','Kk gaming','KL LUTTAP 007','Kl luttapi 007','kozhi','lair','love','Men','Mm','myr','Myre','Nanbaa','nanban','Nirth','Njan vannu','Njan','No love','paatt','Penn','Pinnalla','poda','Pooda','prandh','putt','Rashmika','Rashu fans','Rashu','Ringtone','rip','Sarassu','Sarasu','Sed','Set aaka','Sfi','shibil','Single','sopnam','Tholvi','Uyr','Waiting','wcm','@917592997310','Araa','junaid','junu','morning','Junaid','Bajwa','funny','hi','Malik','Rizwan','Sad','Shabi','Shahzaib','Sho','Welcome','turbo','Turbo','kozhi','img','ohh','kundan','jifi','Jifi','Alexa','alexa']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/' + a + '.mp3'), MessageType.audio,{ mimetype: Mimetype.mp4Audio,duration: Config.SAID, ptt: true,quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./photo/Alexa.jpg'), surface: 200, message: Config.BOTSK, orderTitle: Config.BOTSK, "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOTSK + '\n', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./photo/Alexa.jpg')}}}});
}
});
    }
    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
else if (Config.WORKTYPE == 'public') {

Asena.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));
Asena.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
        if(Config.BGMFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '919995801023@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/jifi.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.SAID, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == '916380260672@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/Turbo.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.SAID, quoted : message.data, ptt: true})
        }           
const array = ['aara','Achan','Adi','alive','Ambadi','bgm','chill','Enth','Good night','Good morning','Group','How','Jishnu','Kanjav','Killadi','king','Line','Music','New','Poda','pwoli','scene','single','thanne','vaa','vere bot','Wait''Akhil','alive','Aliya','Aliyo','alone','Althaf','Ameer','ano','ara','Ardra','ayilla','ayn','aysheri','Ayyo','baby','Back','bad boy','Bad','bgm','Bgm','Bhasi','bie','big fan','Blackzue','Boss','bot','Bot','broken','brokenlove','Bye','care','Chathi','chatho','Chathy','Chetta','Chiri','Chunk','chunke','chunks','comedy','cr7','Cr7','Cristiano','Cry','da','Dai','DD','die','Dora','Eda','ee','ekk','Ellarum ede','ennitt','enth','Entha cheyya','entha','Enthada','evde','Fasil','Fan','fd','Feel aayi','Fek','ff','free','fresh','Frnd','Fsq','Gd mng','gd n8','Gd ngt','gdmng','gdngt','good bye','group','grp','Ha','hate','Haters','Hbd','Hbday','He','Hello','Hi','Hlo','Hloo','Hoi','Hy','i am back','ijathi','jd','kadhal','kali','Kanapi','Kanaran','Kanjan','Kanjav','kar98','Kemam','kenzo','Kenzoo','kerivaa','Kevin','Kgf','killadi','king','kiss','Kk','Koi','kozhi','Kukku','kundan','Kundan','Kunju','kunna','Kurup','Kutty','La be','Lala','left','Legend','Leopucha','life','line','Lo','Loo','Love tune','love u','Love','lover','Loveu','Lub u','lucifer','machan','Mad','Malang','mindalle','mindathe','Mohanlal','Mood','moodesh','moonji','Music pranthan','music','Muth','muthe','my area','My god','My love','mybos','mylove','myr','myre','Nalla kutty','Nallakutti','nallath','Name entha','Name','nanban','Nanbiye','Nanni','neymar','Neymar','Neymer','Nirthada','nirthada','Nirtheda','Nishal','njan','Njn vera','njn','Njr','noob','Oh no','Oh','ok bei','Ok bye','ok da','ok','oombi','oompi','over','Paat','paatt','Paavam','padicho','pani','Panni','parayatte','patti','perfect ok','Pever','pewer','photo','Pikachu','Pinnallah','Place','Poda','Podai','Poli','polika','Pooda','poora','Poote','Pora','Potta','Potte','Power varate','power','Poweresh','Poyeda','Pranayam','Psycho','Ramos','rascal','rashmika','rasool','return','Rose','sad','Sad','Sahva','saji','Sayip','scene','Sed aayi','Messi','messi','sed bgm','Sed tune','sed','Senior','Serious','set aano','Set','Seth po','Singapenne','single','sis','sketched','Smile','sneham','Soldier','song','sorry','Sry','Subscribe','Suhail','sulthan','Super','T','Tentacion','Thalapathy','thall','thamasha','Thantha','thayoli','theri','thot','thottu','thug','Thyr','Town','Track maat','trance','Uff','Umbi','umma','uyir','Va','Vaa','vada','Vava','Veeran','venda','verithanam','Vidhi','Wait','waiting','welcome','why','wow','Yaar','Z aayi','2','aara','Aarulle','adi','adima','Adipoli','breakup','Chunks','Clg','dance','Di','don','Ee','enjoy','Fen','Gd','Hacker','help','I love you','Kali','Kenzo','Kk gaming','KL LUTTAP 007','Kl luttapi 007','kozhi','lair','love','Men','Mm','myr','Myre','Nanbaa','nanban','Nirth','Njan vannu','Njan','No love','paatt','Penn','Pinnalla','poda','Pooda','prandh','putt','Rashmika','Rashu fans','Rashu','Ringtone','rip','Sarassu','Sarasu','Sed','Set aaka','Sfi','shibil','Single','sopnam','Tholvi','Uyr','Waiting','wcm','@917592997310','Araa','junaid','junu','morning','Junaid','Bajwa','funny','hi','Malik','Rizwan','Sad','Shabi','Shahzaib','Sho','Welcome','turbo','Turbo','kozhi','img','ohh','kundan','kichu','Kichu','jifi','Jifi','Alexa','alexa']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/' + a + '.mp3'), MessageType.audio,{ mimetype: Mimetype.mp4Audio,duration: Config.SAID, ptt: true,quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./photo/Alexa.jpg'), surface: 200, message: Config.BOTSK, orderTitle: Config.BOTSK, "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOTSK + '\n', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./photo/Alexa.jpg')}}}});
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
    if(Config.AUTOSTICKER){
    let banned = jid.find( Jid => Jid === message.jid);
    if(banned !== undefined) return
    if (!!message.mention && message.mention[0] == '916380260672@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./sticker/Turbo.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted : message.data, ptt: false})
    }
const array = ['Pikachu','Msd','Vijay','Rashmika','song','Sry','Line','Aarulle','achodaa','ayin','Aysheri','Ayye','Ayyo','broken','bye','chattho','cute','Da','Eee','engane und','Entha','Enthada','Girls','Good morning','Good night','Hi','Hy','ithokke enth','ivan','Kurippe','Kurumb','Love','Mm','naanam','nadakkatte','Ok','paavam','Pattumo','pikachu','Pm','poda','Pova','Save','setth','sho','Shoo','Smile','tag','Udayipp','umma','Vaa','Vannu','yo','ys','Bye','Muthe','Police','Teach','Thech','Z','aayo','alla','anthas','aysheri','bie','bye','chathu','cheyalle','chunk','committed','mama','marichu','mention','mood','muthe','myre','njan','number','ok','oombi','ooo','pedicho','pidi','poweresh','sad','saved','sed','shaad','shut','teach','test','thech','think','thund','umma','uyir','vannu','vibe','z','dead','JulieMwol','Like','pever','sry','night','indo','uff','eh','poyi','scene','killadi','nee alle','sheri','vada','poocha','morning','pm','thund','remove','Sed','araa','madthu','Hlo','air','Bomb','Julie','myr','fan','charge']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
   await message.client.sendMessage(message.jid, fs.readFileSync('./sticker/' + a + '.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted: message.data, ptt: false,quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./photo/Alexa.jpg'), surface: 200, message: Config.BOTSK, orderTitle: Config.BOTSK, "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOTSK + '\n', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./photo/Alexa.jpg')}}}});
}
});
}

var filtreler = await FilterDb.getFilter(message.jid);
if (!filtreler) return; 
filtreler.map(
    async (filter) => {
        pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
        if (pattern.test(message.message)) {
            await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
        }
    }
);
}));
}
