const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const Ln = "*COMMANDS FOR SETTING HEROKU CONFIG VARS*"
 const code = "*SETVAR COMMANDS*\n\n👇👇👇👇👇👇👇\n\n*.setvar SUDO:91xxxxxxxxx,0 nigalude number sudo akkuvan*\n\n*.setvar ALIVE_MESSAGE:alive msg sett cheyyan*\n\n*.setvar ALL_CAPTION:all image/video caption mattan*\n\n*. setvar BAN_MESSAGE:ban msg sett cheyyan*\n\n*.setvar BOT_NAME:bot name sett cheyyan*\n\n*.setvar KICKME_MESSAGE:kick msg diloge sett akkan*\n\n*.setvar MUTE_MESSAGE:mute msg set akkan*\n\n*.setvar OWNER_NAME:owner name mattan*\n\n*.setvar PROMOTE_MESSAGE:admin akkumbol ulla msg sett akkuvan*\n\n*.setvar TAG_HEADER:mention tagil heading sett akkuvan*\n\n*.setvar TAG_REPLY:nigale mention vekkumbol audio/sticker varan ex 91xxxxxxxxxx@s.whatsapp.net*\n\n\n\n\n\n*true and false*\n\n\n\n*ture=on*\n\n*false=off*\n\n\n\n*.setvar ALL_LINK_BAN:*\n\n*.setvar ANTİ_LİNK:*\n\n*.setvar AUTO_BİO:*\n\n*.setvar BGM_FILTER:*\n\n*.setvar BLOCK_CHAT:*\n\n*.setvar DEBUG:*\n\n*.setvar FULL_EVA:*\n\n*.setvar NO_LOG:*\n\n*.setvar NO_ONLINE:*\n\n*.setvar SEND_READ:*\n\n*.setvar STICKER_REPLY:*\n\n*.setvar THERI_KICK:*\n\n\n\n *WORK TYPE CHANGE MEATHEAD*\n\n*.setvar WORK_TYPE:private*\n\n*.setvar WORK_TYPE:public*\n\n *എളുപ്പവഴി*\n\n*.mlink on/off*\n\n*.theri no/yes*\n\n*.fulleva on/off*\n\n\n\n\n\n\n\n*Turbo pikachu*\n\n*ALL CREADIT FROM TURBO AND TEAM TOXIC*" 
{
    
      Asena.addCommand({pattern: 'setvar', fromMe: true, desc: Ln,}, (async (message, match) => {

    await message.client.sendMessage(
  
      message.jid,code, MessageType.text);
  
  }));
  }

    
