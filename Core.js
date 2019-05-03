
const Discord = require('discord.js');
const bot = new Discord.Client();
const superagent = require('superagent');
const fs = require('fs');
bot.commands = new Discord.Collection();
const DF = require('./ai/dialogflow.js')
const df = new DF('df2water', './ai/df2water-a97ea32b09f9.json')
let TheToken = process.env.BotToken
bot.login(TheToken);

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("음 인식이 안됨;;");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    let filenames = f.split(".");
    let filename = filenames[0];
    console.log(`${f} 로딩됨!`);
	bot.commands.set(props.help.name, props);
  });

});


bot.on('guildMemberAdd', member => {
superagent.get("https://api.myjson.com/bins/z6qiw").then((res) => {
let welcomechannel = res.body;
if(!welcomechannel[member.guild.id]){
	return
}
	
	let cha = welcomechannel[member.guild.id].welcomechannel
	if (cha === 0) { return }
	
        let Ch = member.guild.channels.find('id', cha)

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
		let args = msgAr.slice(2);
	
	if (!message.content.startsWith('워터야 ')) { return; } 
        console.log(`${message.author.username.toString()} (${message.author.id.toString()})> ${message.content.toString()}`);
	
               let cmd = msgAr[1]
	       
  	let commandfile = bot.commands.get(cmd.slice(prefix.length));
	if(message.content === "워터야") {
		message.channel.send("?")
	} else {
        if(commandfile) {
		commandfile.run(bot,message,args);
	} else {
		df.sendToDialogflow(msgc, message.author.id).then(result => {

      let text = result[0].queryResult.fulfillmentText

      message.channel.send(`${text}`)

         }).catch(er => {
            console.log(er)
         })
		
	   }
	}



	
});
