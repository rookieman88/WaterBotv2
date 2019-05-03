
const Discord = require('discord.js');
const bot = new Discord.Client();
const superagent = require('superagent');

bot.on('guildMemberAdd', member => {
superagent.get("https://api.myjson.com/bins/z6qiw").then((res) => {
let welcomechannel = res.body;
if(!welcomechannel[member.guild.id]){
	return
}
	
	let cha = welcomechannel[member.guild.id].welcomechannel
	if (cha === 0) { return }
	
let Ch = member.guild.channels.find('id', cha)
    let memberavatar = member.user.avatarURL
	
        let welcomembed = new Discord.RichEmbed()
        .setColor("#2E9AFE")
        .addField(":bust_in_silhouette: 누가 새로 왔네요 ", `${member.user.tag} ( ${member} ) 이분`)
	.setFooter(`ID : ${member.id}`)
		.setTimestamp()
		
		
        Ch.send(welcomembed);
		return;
});
});

bot.on('guildMemberRemove', member => {
superagent.get("https://api.myjson.com/bins/z6qiw").then((res) => {
let welcomechannel = res.body;
if(!welcomechannel[member.guild.id]){
	return
}
	let cha = welcomechannel[member.guild.id].welcomechannel
		if (cha === 0) { return }
	
	
let Ch = member.guild.channels.find('id', cha)
	
        let byembed = new Discord.RichEmbed()
        .setColor("#2E9AFE")
        .addField(":hand_splayed:  ㅂㅇㅂㅇ ", `${member.user.tag} ( ${member} ) `)
	.setFooter(`ID : ${member.id}`)
		.setTimestamp()
		
		
        Ch.send(byembed);
		return;
});
});


bot.on("message", async message => {
	

    let prefix = '워터야 '
		let msgAr = message.content.split(" ");
		let msgc = message.content.slice(prefix.length);
		let i = msgAr[0];
		let args = msgAr[2];
	
	if (!message.content.startsWith('워터야 ')) { return; } 
  console.log(`${message.author.username.toString()} (${message.author.id.toString()})> ${message.content.toString()}`);
  
  
if (message.content.startsWith('워터야 공지')) {
  
	 let owners = process.env.owners
 

 
 if (owners.includes(message.author.id)) {
	 
	 if(args[0] === '에브리원') {

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
	 	 let reason = message.content.replace(`워터야 공지 `, "")
	 	message.channel.send(`
발신이 완료되었습니다!
공지 내용은 [ ${reason} + everyone ] 입니다.
`)
	 });
		 
	 } else {
		 
	
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
	 	 let reason = message.content.replace(`~공지 `, "")
	 	message.channel.send(`
발신이 완료되었습니다!
공지 내용은 [ ${reason} ] 입니다.
`)
	 });	 
		 
	 }
 } else {
	 message.channel.send('당신은 봇 관리자로 등록되어있지 않습니다.')
 }
};
	
}


	
});
