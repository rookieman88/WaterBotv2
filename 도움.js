const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(`사실상 테스트 [ ${sayMessage} ]`);

}

module.exports.help = {
  name: "도움"
}
