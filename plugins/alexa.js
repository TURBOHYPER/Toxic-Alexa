const Asena = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'QWxleGE=', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true

Asena.addCommand({pattern: 'bot', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!
    var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var plk_here = new Date().toLocaleDateString(get_localized_date)
var afnplk = '```⏱ Time :' + plk_say + '```\n\n ```📅 Date :' + plk_here + '```'
	const buttons = [

        {buttonId: 'id1', buttonText: {displayText: 'PODI😏'}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: 'NJAN MANDAN ONNUMALLA😝'}, type: 1},
        {buttonId: 'id3', buttonText: {displayText: '💝OWNER💝 \n\n```creater Turbo and Jifi```\n\n```owner number wa.me/916380260672```\n\n```owner number wa.me/919995801023```\n\n```whatsapp group : https://chat.whatsapp.com/LWjJ4tu2qe9BWQZ1JzRZgp```\n\n\n'  }, type: 1},

      ]
      
      const buttonMessage = {
          contentText: 'Hey I Am Alexa A Whatsapp Bot Made By Turbo And Jifi And They Are The Leaders Of Team Toxic',
          footerText: '©ꪶ͢Turbo ÂÑD Jifiꫂ™',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
