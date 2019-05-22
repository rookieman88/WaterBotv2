const Discord = require("discord.js");
const fs = require("fs");
const ms = require('parse-ms')
const superagent = require('superagent')

module.exports.run = async (bot, message, args) => {
  
superagent.get("http://api.myjson.com/bins/c19z0").then((res) => {
let UserStocks = res.body;

  let day = 86400000

	if(!UserStocks[message.author.id]) {
     UserStocks[message.author.id] = {
          WatCoin: 3000,
          UserOneStock: 0,
          UserTwoStock: 0,
          UserThrStock: 0,
          UserForStock: 0,
          UserFivStock: 0,
          UserSixStock: 0,
          UserSevStock: 0,
          UserEigStock: 0,
          CoolDown: 0
    };
}
let UserCoolDown = UserStocks[message.author.id].CoolDown

if (day - (Date.now() - UserCoolDown) > 0) {
let TimeLeft = ms(86400000 - (Date.now() - UserCoolDown))
message.channel.send(`ㅇㅇㄴㅇ, ${TimeLeft.hours}시간 ${TimeLeft.minutes}분 뒤에 와~`)
} else {
let UserCoins = UserStocks[message.author.id].WatCoin
let RanMoney = Math.floor(Math.random() * (150)) + 150;

        UserStocks[message.author.id] = {
          WatCoin: parseInt(UserCoins) + parseInt(RanMoney),
          UserOneStock: UserStocks[message.author.id].UserOneStock,
          UserTwoStock: UserStocks[message.author.id].UserTwoStock,
          UserThrStock: UserStocks[message.author.id].UserThrStock,
          UserForStock: UserStocks[message.author.id].UserForStock,
          UserFivStock: UserStocks[message.author.id].UserFivStock,
          UserSixStock: UserStocks[message.author.id].UserSixStock,
          UserSevStock: UserStocks[message.author.id].UserSevStock,
          UserEigStock: UserStocks[message.author.id].UserEigStock,
          CoolDown: Date.now()
    };   
   let ct = new Date()
    message.channel.send(`${ct.getFullYear()}년 ${ct.getMonth() + 1}월 ${ct.getDate()}일
${ct.getHours()}시 ${ct.getMinutes()}분 에 출첵하셨습니다.
보상: ${RanMoney}원`)
} 
		superagent.put("https://api.myjson.com/bins/c19z0").send(UserStocks).catch((err) => console.log(err));


});



}

module.exports.help = {
  name: "출첵"
}
