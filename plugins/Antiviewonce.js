const Turbo = require("../events");
const { MessageType } = require("@adiwajshing/baileys");

Turbo.addCommand(
  { pattern: "vv", fromMe: true, desc: "Anti viewOnce" },
  async (message, match) => {
    if (message.reply_message.image || message.reply_message.video) {
      return await message.sendMessage(
        await message.reply_message.downloadMediaMessage(),
        { quoted: message.quoted },
        message.reply_message.image ? MessageType.image : MessageType.video
      )
    }
  }
)
