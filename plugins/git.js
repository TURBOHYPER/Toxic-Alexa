const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://images.wallpapersden.com/image/download/pokemon-detective-pikachu-4k_a2lrZmWUmZqaraWkpJRsZ2WtbGdl.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Pikachu bot created by Turbo*
*Creator number : wa.me/916380260672?text=Hi%20Turbo%20Mods.%20*

*Githublink :    coming soon*

*Audio commads :   coming soon*

*Sticker commads : coming soon*

*My channel link : https://youtube.com/c/TamilTurboGamingYT* 

*For More Updates Subscribe The Channel ☝*
`}) 

}));
