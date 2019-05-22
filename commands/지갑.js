const Discord = require("discord.js");
const superagent = require('superagent')

module.exports.run = async (bot, message, args) => {

     	 superagent.get("https://api.myjson.com/bins/c19z0").then((res) => {
let UserStocks = res.body;
                
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
                          UserEigStock: 0
                     }
                }
         let UserCoins = UserStocks[message.author.id].WatCoin
         let UserOne = UserStocks[message.author.id].UserOneStock
         let UserTwo = UserStocks[message.author.id].UserTwoStock
         let UserThr = UserStocks[message.author.id].UserThrStock
         let UserFor = UserStocks[message.author.id].UserForStock
         let UserFiv = UserStocks[message.author.id].UserFivStock
         let UserSix = UserStocks[message.author.id].UserSixStock
         let UserSev = UserStocks[message.author.id].UserSevStock
         let UserEig = UserStocks[message.author.id].UserEigStock
         
         let StockWallet = ` `
         if(UserOne) {
         StockWallet += `회사1: ${UserOne}개\n`
         }
         if(UserTwo) {
         StockWallet += `회사2: ${UserTwo}개\n`
         }
         if(UserThr) {
         StockWallet += `회사3: ${UserThr}개\n`
         }
         if(UserFor) {
         StockWallet += `회사4: ${UserFor}개\n`
         }
         if(UserFiv) {
         StockWallet += `회사5: ${UserFiv}개\n`
         }
         if(UserSix) {
         StockWallet += `회사6: ${UserSix}개\n`
         }
         if(UserSev) {
         StockWallet += `회사7: ${UserSev}개\n`
         }
         if(UserEig) {
         StockWallet += `회사8: ${UserEig}개`
         }
         if(!StockWallet) {
         StockWallet = `이런, 주식이 없잖아! '워터야 매수' 로 주식을 매수해봐!`
         }
         
         
         
         
        message.channel.send(`${message.author.username} 님의 지갑입니다
\`\`\`
보유 금액: ${UserCoins}원
보유 주식:
${StockWallet}
\`\`\`   
        `)
         
       });

}

module.exports.help = {
  name: "지갑"
}
