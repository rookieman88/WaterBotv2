
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

var CoOne = 1000
var CoTwo = 1000
var CoThr = 1000
var CoFor = 1000
var CoFive = 1000
var CoSix = 1000
var CoSev = 1000
var CoEig = 1000


let BStock1;
let BStock2;
let BStock3;
let BStock4;
let BStock5;
let BStock6;
let BStock7;
let BStock8;


bot.on("ready", async() => {
	
    let totalSeconds = (bot.uptime / 1000)
    let days = Math.floor(totalSeconds / 86400)
    let hours = Math.floor(totalSeconds / 3600)
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60)
    let seconds = Math.floor(totalSeconds % 60)
    bot.user.setActivity(`업타임: ${days}:${hours}:${minutes}:${seconds} | 워터야 도움` { type: 'PLAYING' });
    

	console.log("started")
	
	superagent.get("http://api.myjson.com/bins/j4s9w").then((res) => {
        let StocksPrice = res.body;
                StocksPrice["Timer"] = {
                   left: 60
                };
		superagent.put("http://api.myjson.com/bins/j4s9w").send(StocksPrice).catch((err) => console.log(err));
});	

setInterval(() => {
	
	
		 superagent.get("http://api.myjson.com/bins/j4s9w").then((res) => {
let StocksPrice = res.body;
	        let timeleft = StocksPrice["Timer"].left
		StocksPrice["Timer"] = {
                   left: timeleft - 1
                };
			 
			 if (timeleft === 0) {

let ProbOne = Math.floor(Math.random() * (3)) + 0;
let ProbTwo = Math.floor(Math.random() * (3)) + 0;
let ProbThr = Math.floor(Math.random() * (3)) + 0;
let ProbFor = Math.floor(Math.random() * (3)) + 0;
let ProbFive = Math.floor(Math.random() * (3)) + 0;
let ProbSix = Math.floor(Math.random() * (3)) + 0;
let ProbSev = Math.floor(Math.random() * (3)) + 0;
let ProbEig = Math.floor(Math.random() * (3)) + 0;

let CoOnePrice = Math.floor(Math.random() * (280)) + 0;
let CoTwoPrice = Math.floor(Math.random() * (280)) + 0;
let CoThreePrice = Math.floor(Math.random() * (280)) + 0;
let CoFourPrice = Math.floor(Math.random() * (280)) + 0;
let CoFivePrice = Math.floor(Math.random() * (280)) + 0;
let CoSixPrice = Math.floor(Math.random() * (280)) + 0;
let CoSevPrice = Math.floor(Math.random() * (280)) + 0;
let CoEigPrice = Math.floor(Math.random() * (280)) + 0;
			 
if (ProbOne === 1) {

CoOne = parseInt(CoOne) + parseInt(CoOnePrice)
	BStock1 = parseInt(CoOne) + parseInt(CoOnePrice)

} else if (ProbOne === 0) {
if (CoOnePrice > CoOne) {
	CoOne = parseInt(CoOne) + (CoOnePrice)
	BStock1 = parseInt(CoOne) + (CoOnePrice)
} else {
	CoOne = CoOne - CoOnePrice
	BStock1 = CoOne - CoOnePrice
}
} else {

CoOne = CoOne
	BStock1 = CoOne


 }

if (ProbTwo === 1) {

	CoTwo = parseInt(CoTwo) + parseInt(CoTwoPrice)
	BStock2 = parseInt(CoTwo) + parseInt(CoTwoPrice)

} else if (ProbTwo === 0) {
	if (CoTwoPrice > CoTwo) {
		CoTwo = parseInt(CoTwo) + parseInt(CoTwoPrice)
		BStock2 = parseInt(CoTwo) + parseInt(CoTwoPrice)
	} else {

	CoTwo = CoTwo - CoTwoPrice
		BStock2 = CoTwo - CoTwoPrice
	}

} else {

	CoTwo = CoTwo
	BStock2 = CoTwo
}

if (ProbThr === 1) {
	CoThr = parseInt(CoThr) + parseInt(CoThreePrice)
	BStock3 = parseInt(CoThr) + parseInt(CoThreePrice)
} else if (ProbThr === 0) {
	if (CoThreePrice > CoThr) {
		CoThr = parseInt(CoThr) + parseInt(CoThreePrice)
		BStock3 = parseInt(CoThr) + parseInt(CoThreePrice)
	} else {
	CoThr = CoThr - CoThreePrice
		BStock3 = CoThr - CoThreePrice
	}
} else {
	CoThr = CoThr
	BStock3 = CoThr
}

if (ProbFor === 1) {
	CoFor = parseInt(CoFor) + parseInt(CoFourPrice)
	BStock4 = parseInt(CoFor) + parseInt(CoFourPrice)
} else if (ProbFor === 0) {
	if (CoFourPrice > CoFor) {
		CoFor = parseInt(CoFor) + parseInt(CoFourPrice)
		BStock4 = parseInt(CoFor) + parseInt(CoFourPrice)
	} else {
	CoFor = CoFor - CoFourPrice
		BStock4 = CoFor - CoFourPrice
	}
} else {
	CoFor = CoFor
	BStock4 = CoFor
}

if (ProbFive === 1) {
	CoFive = parseInt(CoFive) + parseInt(CoFivePrice)
	BStock5 = parseInt(CoFive) + parseInt(CoFivePrice)
} else if (ProbFive === 0) {
	if (CoFivePrice > CoFive) {
		CoFive = parseInt(CoFive) + parseInt(CoFivePrice)
		BStock5 = parseInt(CoFive) + parseInt(CoFivePrice)
	} else {
	CoFive = CoFive - CoFivePrice
		BStock5 = CoFive - CoFivePrice
	}
} else {
	CoFive = CoFive
	BStock5 = CoFive
}
			 
if (ProbSix === 1) {
	CoSix = parseInt(CoSix) + parseInt(CoSixPrice)
	BStock6 = parseInt(CoSix) + parseInt(CoSixPrice)
} else if (ProbSix === 0) {
	if (CoSixPrice > CoSix) {
		CoSix = parseInt(CoSix) + parseInt(CoSixPrice)
		BStock6 = parseInt(CoSix) + parseInt(CoSixPrice)
	} else {
	CoSix = CoSix - CoSixPrice
		BStock6 = CoSix - CoSixPrice
	}
} else {
	CoSix = CoSix
	BStock6 = CoSix
}
			 
if (ProbSev === 1) {
	CoSev = parseInt(CoSev) + parseInt(CoSevPrice)
	BStock7 = parseInt(CoSev) + parseInt(CoSevPrice)
} else if (ProbSev === 0) {
	if (CoSevPrice > CoSev) {
		CoSev = parseInt(CoSev) + parseInt(CoSevPrice)
		BStock7 = parseInt(CoSev) + parseInt(CoSevPrice)
	} else {
	CoSev = CoSev - CoSevPrice
		BStock7 = CoSev - CoSevPrice
	}
} else {
	CoSev = CoSev
	BStock7 = CoSev
}
			 
if (ProbEig === 1) {
	CoEig = parseInt(CoEig) + parseInt(CoEigPrice)
	BStock8 = parseInt(CoEig) + parseInt(CoEigPrice)
} else if (ProbEig === 0) {
	if (CoEigPrice > CoEig) {
		CoEig = parseInt(CoEig) + parseInt(CoEigPrice)
		BStock8 = parseInt(CoEig) + parseInt(CoEigPrice)
	} else {
	CoEig = CoEig - CoEigPrice
		BStock8 = CoEig - CoEigPrice
	}
} else {
	CoEig = CoEig
	BStock8 = CoEig
}
			 
	
		 
 StocksPrice["Stocks"] = {
    OneStock: CoOne,
    TwoStock: CoTwo,
    ThrStock: CoThr,
    ForStock: CoFor,
    FivStock: CoFive,
    SixStock: CoSix,
    SevStock: CoSev,
    EigStock: CoEig
};
 StocksPrice["StocksB"] = {
    OneStockB: BStock1,
    TwoStockB: BStock2,
    ThrStockB: BStock3,
    ForStockB: BStock4,
    FivStockB: BStock5,
    SixStockB: BStock6,
    SevStockB: BStock7,
    EigStockB: BStock8
};
			 
StocksPrice["Timer"] = {
		 left: 60
};
	
console.log("re")
		 }
		superagent.put("http://api.myjson.com/bins/j4s9w").send(StocksPrice).catch((err) => console.log(err));

 });



}, 1000);
	
	


});

bot.on('guildMemberAdd', member => {
superagent.get("http://api.myjson.com/bins/z6qiw").then((res) => {
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
superagent.get("http://api.myjson.com/bins/z6qiw").then((res) => {
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
	
	if (!message.content.startsWith('워터야')) { return; } 
        console.log(`${message.author.username.toString()} (${message.author.id.toString()})> ${message.content.toString()}`);
	
               let cmd = msgAr[1]
	       
  	let commandfile = bot.commands.get(cmd);
	if ('워터야' === message.content) {
		message.channel.send('?')
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
