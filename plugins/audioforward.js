 const turbo = require('../events');
 const { MessageType, Mimetype } = require('@adiwajshing/baileys');
 const fs = require('fs');
 const ffmpeg = require('fluent-ffmpeg');
 const { execFile } = require('child_process');
 const Config = require('../config');

          var mode = ''
if (Config.BOTSK == 'default') mode = 'ᴅᴇᴠᴇʟᴏᴘᴇʀ : ᴛᴏxɪᴄ ᴀʟᴇxᴀ'

else mode = 'ғᴏʀᴡᴀʀᴅᴇᴅ ʙʏ ' + Config.BOTSK

            const turbo = {

                  key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "TURBO SER", "caption": mode , 'jpegThumbnail': fs.readFileSync('./photo/Alexa.jpg')}}
             
             
            }

turbo.addCommand({pattern: 'z ?(.*)', fromMe: true, desc: 'its foraward replied audio'}, (async (message, match) => {   
  
    if (message.reply_message === false);
    
    
      
      
    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });
let id = match[1];
    ffmpeg(location)
        .format('mp3')
        .save('output.mp3')
        .on('end', async () => {
           await message.client.sendMessage(id, fs.readFileSync('output.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.SAID, quoted: message.data, ptt: true,quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { orderMessage: { itemCount: 9999999999, status: 200, thumbnail: fs.readFileSync('./photo/Alexa.jpg'), surface: 200, message: Config.BOTSK, orderTitle: Config.BOTSK, "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOT + '\n', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1080, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./photo/Alexa.jpg')}}}});
});
}));
