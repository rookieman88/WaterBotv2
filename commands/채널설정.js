const Discord = require("discord.js");
const fs = require("fs");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
	 let owner = "417571990820618250"
	
	 if(message.member.hasPermission("MANAGE_MESSAGES") || message.author.id === owner) { 
	

if (args[0] === '인사') {


	superagent.get("https://api.myjson.com/bins/z6qiw").then((res) => {
		let welcomechannel = res.body;

  if(!welcomechannel[message.guild.id]){
        welcomechannel[message.guild.id] = {
      welcomechannel: 0
    };
  }
let msguild = welcomechannel[message.guild.id].welcomechannel		
if (msguild === 0) {
		

let chaid = message.channel.id

  welcomechannel[message.guild.id] = {
    welcomechannel: chaid
  };
  
  message.channel.send('인사 채널이 설정되었습니다.')


} else if (msguild > 0) {
	let chaid = message.channel.id
 welcomechannel[message.guild.id] = {
    welcomechannel: 0
  };
	
	message.channel.send("인사 채널이 초기화되었습니다")
	
}


 superagent.put("https://api.myjson.com/bins/z6qiw").send(welcomechannel).catch((err) => console.log(err));

  
  


});


} else if (args[0] === '공지') {
	
			superagent.get("https://api.myjson.com/bins/sztu0").then((res) => {
		let welcomechannel = res.body;

  if(!welcomechannel[message.guild.id]){
        welcomechannel[message.guild.id] = {
      welcomechannel: 0
    };
  }
let msguild = welcomechannel[message.guild.id].welcomechannel		
if (msguild === 0) {
		

let chaid = message.channel.id

  welcomechannel[message.guild.id] = {
    welcomechannel: chaid
  };
  
  message.channel.send('공지 채널이 설정되었습니다.')


} else if (msguild > 0) {
	let chaid = message.channel.id
 welcomechannel[message.guild.id] = {
    welcomechannel: 0
  };
	
	message.channel.send("공지 채널이 초기화되었습니다")
	
}


 superagent.put("https://api.myjson.com/bins/sztu0").send(welcomechannel).catch((err) => console.log(err));

  
  


});
	
	
} else { message.channel.send("그런거 없음") }
	 } else { message.channel.send("당신은 관리자가 아닙니다.") }
}

module.exports.help = {
  name: "채널설정"
}
