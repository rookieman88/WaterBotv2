const Discord = require("discord.js");
const superagent = require('superagent')

module.exports.run = async (bot, message, args) => {

     	 superagent.get("https://api.myjson.com/bins/c19z0").then((res) => {
let UserStocks = res.body;
         
         if (args[0] === '회사1') {
           
           if (!args[1]) { return message.channel.send('회사1 을 얼마나 매수할지 입력해주세요\n예) 워터야 매수 회사1 3') }
           
         }else if (args[0] === '회사2') {
           
         }else if (args[0] === '회사3') {
           
         }else if (args[0] === '회사4') {
           
         }else if (args[0] === '회사5') {
           
         }else { return message.channel.send('그런회사 없음') }
         
       });

}

module.exports.help = {
  name: "매수"
}
