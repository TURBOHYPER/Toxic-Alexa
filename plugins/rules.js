onst asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const GM = "."

const GN = "."

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

asena.addCommand({pattern: 'rules', fromMe: true, deleteCommand: true, desc: GM,}, (async (message, match) => {

    var r_text = new Array ();

    r_text[1] = "1. Please don't spam bot commands          2. Don't send virtex, bug, trojan, etc to bot number          3. Insulting the owner will be picked up directly at their respective homes          4. The bot/owner is not responsible for what the user does to the command bot          5. Don't call / pm to bot numbers          6. If the bot doesn't respond, it means it's off/fixed a bug          8. Please report any bugs via *!report*";

    var i = Math.floor(2*Math.random())

    await message.client.sendMessage(

        message.jid,(r_text[i]), MessageType.text);

    }));

asena.addCommand({pattern: 'rules', fromMe: true, deleteCommand: true, desc: GN,}, (async (message, match) => {

        var r_text = new Array ();

        r_text[1] = "1. If you violate rule number 5 (calling / pm) you will be blocked          2. If you violate the rules number 1, 2, 3 then you can get banned from bots          3. If you violate rule number 3 (insulting) then you will be picked up at your respective homes";

        var i = Math.floor(2*Math.random())

        await message.client.sendMessage(

            message.jid,(r_text[i]), MessageType.text);

        }));    

    }

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'rules', fromMe: false, deleteCommand: true, desc: GM,}, (async (message, match) => {

            var r_text = new Array ();

            r_text[1] = "1. Please don't spam bot commands          2. Don't send virtex, bug, trojan, etc to bot number          3. Insulting the owner will be picked up directly at their respective homes          4. The bot/owner is not responsible for what the user does to the command bot          5. Don't call / pm to bot numbers          6. If the bot doesn't respond, it means it's off/fixed a bug          8. Please report any bugs via *!report*";

        var i = Math.floor(2*Math.random())

            await message.client.sendMessage(

                message.jid,(r_text[i]), MessageType.text);

            }));

        asena.addCommand({pattern: 'rules', fromMe: false, deleteCommand: true, desc: GN,}, (async (message, match) => {

                var r_text = new Array ();

                r_text[1] = "1. If you violate rule number 5 (calling / pm) you will be blocked          2. If you violate the rules number 1, 2, 3 then you can get banned from bots          3. If you violate rule number 3 (insulting) then you will be picked up at your respective homes";
          
                var i = Math.floor(2*Math.random())

                await message.client.sendMessage(

                    message.jid,(r_text[i]), MessageType.text);

                }));    


}
