const Ktb = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
Ktb.addCommand({ pattern: 'jifi ?(.*)', fromMe: false, desc: 'owner number' }, (async (message, match) => {

//coded by Turbo
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:Jifi\n' // full name
            + 'ORG:Jifi;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=919995801023:+91 9995801023\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "Jifi", vcard: vcard}, MessageType.contact)
}))
