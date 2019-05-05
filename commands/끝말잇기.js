const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
/*

message.channel.send('끝말잇기를 시작합니다. 1분안에 2명이 모이지 않으면 종료됩니다.').then((msg) => {
 msg.react('🎉')
const filter = (reaction, user) => reaction.emoji.name === '🎉' && user.id !== bot.user.id
      msg.awaitReactions(filter, {
        maxUsers: 2
}).then((collected) => {
        let p1 = collected.array()[0].users.array()[1].id
        let p2 = collected.array()[0].users.array()[2].id
        
        let thip = 0
        let endgame = 0
        let eln
        let win;
        
        msg.edit(`끝말잇기가 시작되었습니다. ${p1}님이 단어를 입력해주세요`)
        
        while (endgame === 0) {
        
        if (thip === 0) {
         const filter = (m) => m.author.id === p1;
message.channel.awaitMessages(filter, {
		max: 1
    }).then((collected) => {
let input = collected.first().content;
eln = input.charAt(fullStr.length-1);
msg.edit(`${p2}님! 단어를 입력해 주세요.`)
thip = 1

        })
        
        } else if (thip === 1) {
        
        
        
        } else if (thip === 2) {
        
        
        }
        
        }
        
        
        });
message.channel.send(`끝말잇기가 끝났습니다. ${win}님이 우승하셨습니다.`)

});
*/
};

module.exports.help = {
	name: "끝말잇기"
};
