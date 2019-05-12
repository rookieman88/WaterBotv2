const Discord = require("discord.js");
const bot = new Discord.Client();
const superagent = require('superagent');

 module.exports.run = async (bot, message, args) => {
 
		

let filter = (reaction, user) => (reaction.emoji.name === '❌' || reaction.emoji.name === '⭕') && user.id === message.author.id

		
 let owner = "417571990820618250"
 let owners = process.env.owners
 

 
 if (owners.includes(message.author.id)) {
	 
	 if(args[0] === '에브리원') {
		 
 let reason1 = message.content.replace(`워터야 공지 에브리원 `, "")
 message.channel.send(`${bot.guilds.size}개의 서버에 공지가 발신됩니다. 공지 내용은 다음과 같습니다\n${reason1}`).then((th) => {
      th.react('❌')
      th.react('⭕')
		 
th.awaitReactions(filter, {
        time: 30000,
        max: 1
}).then((collected) => {
 if (collected.array()[0].emoji.name === '⭕') {

	 superagent.get("https://api.myjson.com/bins/sztu0").then((res) => {
let welcomechannel = res.body;

bot.guilds.forEach(g => {
	 let reason = message.content.replace(`워터야 공지 에브리원 `, "")
	 
	   if(!welcomechannel[g.id]){
return
}
	let msguild = welcomechannel[g.id].welcomechannel	
	if (msguild === 0) { return }

	 
	let cha = msguild
	let ann = new Discord.RichEmbed()
	.addField(`워터봇 공지`, `${reason}`)
	.setColor(`#00ffc1`)
	.setFooter(`${message.member.user.tag} 가 발신한 공지입니다.`)
let Ch = bot.channels.get(cha)
	Ch.sendEmbed(ann)
	Ch.send("[ @everyone ]")

})
	 	 let reason = message.content.replace(`워터야 공지 에브리원 `, "")
	 	message.channel.send(`
발신이 완료되었습니다!
공지 내용은 [ ${reason} + everyone ] 입니다.
`)
	 });
	  } else { message.channel.send('공지 발신이 취소되었습니다.') }
	 });
 });
	 } else {
		  let reason1 = message.content.replace(`워터야 공지 에브리원 `, "")
 message.channel.send(`${bot.guilds.size}개의 서버에 공지가 발신됩니다. 공지 내용은 다음과 같습니다\n${reason1}`).then((th) => {
      th.react('❌')
      th.react('⭕')
		 
th.awaitReactions(filter, {
        time: 30000,
        max: 1
}).then((collected) => {
 if (collected.array()[0].emoji.name === '⭕') {
	
	 superagent.get("https://api.myjson.com/bins/sztu0").then((res) => {
let welcomechannel = res.body;

bot.guilds.forEach(g => {
	 let reason = message.content.replace(`워터야 공지 `, "")
	 
	   if(!welcomechannel[g.id]){
return
}
	let msguild = welcomechannel[g.id].welcomechannel	
	if (msguild === 0) { return }

	 
	let cha = msguild
	let ann = new Discord.RichEmbed()
	.addField(`워터봇 공지`, `${reason}`)
	.setColor(`#00ffc1`)
	.setFooter(`${message.member.user.tag} 가 발신한 공지입니다.`)
let Ch = bot.channels.get(cha)
	Ch.sendEmbed(ann)

})
	 	 let reason = message.content.replace(`워터야 공지 `, "")
	 	message.channel.send(`
발신이 완료되었습니다!
공지 내용은 [ ${reason} ] 입니다.
`)
	 });
 } else { message.channel.send('공지 발신이 취소되었습니다.') }
 });
		 
	 }
 } else {
	 message.channel.send('당신은 봇 관리자로 등록되어있지 않습니다.')
 }
	};
	
module.exports.help = {
	name: "공지",
}
