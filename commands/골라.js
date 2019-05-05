const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if (!args[1]) { return message.channel.send('2개 이상 입력해야 선택이 가능합니다!') }
    let say = args.join(" ").slice(0);
    let choses = say.split(" ");
    let ranChose = Math.floor(Math.random() * (choses.length) + 0);
    message.channel.send(`"${choses[ranChose]}"`)
};

module.exports.help = {
	name: "골라"
};
