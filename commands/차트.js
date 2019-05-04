const Discord = require("discord.js");
const superagent = require('superagent');

module.exports.run = async (bot, message, args) => {

     	 superagent.get("https://api.myjson.com/bins/152s38").then((res) => {
let StocksPrice = res.body;

let OneP = StocksPrice["Stocks"].OneStock
let TwoP = StocksPrice["Stocks"].TwoStock
let ThrP = StocksPrice["Stocks"].ThrStock
let ForP = StocksPrice["Stocks"].ForStock
let FivP = StocksPrice["Stocks"].FivStock

let OnePs = StocksPrice["StocksB"].OneStockB
let TwoPs = StocksPrice["StocksB"].TwoStockB
let ThrPs = StocksPrice["StocksB"].ThrStockB
let ForPs = StocksPrice["StocksB"].ForStockB
let FivPs = StocksPrice["StocksB"].FivStockB

let CP1 = OneP - OnePs
let CP2 = TwoP - TwoPs
let CP3 = ThrP - ThrPs
let CP4 = ForP - ForPs
let CP5 = FivP - FivPs

if (OneP > OnePs) {
     CP1 = `+ 회사1 : ${OneP} (` + ` + ${CP1})`
} else if (OneP < OnePs) {
     CP1 = `- 회사1 : ${OneP} (` + ` ${CP1})`
} else { CP1 = `0 회사1 : ${OneP} ( - 0 )` }
                
if (TwoP > TwoPs) {
     CP2 = `+ 회사2 : ${TwoP} (` + ` + ${CP2})`
} else if (TwoP < TwoPs) {
     CP2 = `- 회사2 : ${TwoP} (` + ` ${CP2})`
} else { CP2 = `0 회사1 : ${TwoP} ( - 0 )` }
                
if (ThrP > ThrPs) {
     CP3 = `+ 회사3 : ${ThrP} (` + ` + ${CP3})`
} else if (ThrP < ThrPs) {
     CP3 = `- 회사3 : ${ThrP} (` + ` ${CP3})`
} else { CP3 = `0 회사3 : ${ThrP} ( - 0 )` }
                
if (ForP > ForPs) {
     CP4 = `+ 회사4 : ${ForP} (` + ` + ${CP4})`
} else if (ForP < ForPs) {
     CP4 = `- 회사4 : ${ForP} (` + ` ${CP4})`
} else { CP4 = `0 회사4 : ${ForP} ( - 0 )` }
                
if (FivP > FivPs) {
     CP5 = `+ 회사5 : ${FivP} (` + ` + ${CP5})`
} else if (FivP < FivPs) {
     CP5 = `- 회사5 : ${FivP} (` + ` ${CP5})`
} else { CP5 = `0 회사5 : ${FivP} ( - 0 )` }
     
 

message.channel.send("< 시즌 베타 1 주식 차트>\n(차트는 1분에 한번씩 업데이트됩니다.)" + `

\`\`\`diff
${CP1}
${CP2}
${CP3}
${CP4}
${CP5}
\`\`\`

 ` +
"버그를 발견하신 분은 ~문의 로 버그제보좀"
)
});
}

module.exports.help = {
  name: "차트"
}
