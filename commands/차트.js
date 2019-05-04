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

var cprice1 = OnePs - OneP
var cprice2 = TwoPs - TwoP
var cprice3 = ThrPs - ThrP
var cprice4 = ForPs - ForP
var cprice5 = FivPs - FivP

if (OneP < OnePs) {
     cprice1 = `- 회사1 : ${OneP} (` + ` - ${cprice1})`
} else if (OneP > OnePs) {
     cprice1 = cprice1.replace("-", "");
     cprice1 = `+ 회사1 : ${OneP} (` + ` + ${cprice1})`
} else { cprice1 = `0 회사1 : ${OneP} ( - 0 )` }
                
if (TwoP < TwoPs) {
     cprice2 = `- 회사2 : ${TwoP} (` + ` - ${cprice2})`
} else if (TwoP > TwoPs) {
     cprice2 = cprice2.replace("-", "");
     cprice2 = `+ 회사2 : ${TwoP} (` + ` + ${cprice2})`
} else { cprice2 = `0 회사1 : ${TwoP} ( - 0 )` }
                
if (ThrP < ThrPs) {
     cprice3 = `- 회사3 : ${ThrP} (` + ` - ${cprice3})`
} else if (ThrP > ThrPs) {
     cprice3 = cprice3.replace("-", "");
     cprice3 = `+ 회사3 : ${ThrP} (` + ` + ${cprice3})`
} else { cprice3 = `0 회사3 : ${ThrP} ( - 0 )` }
                
if (ForP < ForPs) {
     cprice4 = `- 회사4 : ${ForP} (` + ` - ${cprice4})`
} else if (ForP > ForPs) {
     cprice4 = cprice4.replace("-", "");
     cprice4 = `+ 회사4 : ${ForP} (` + ` + ${cprice4})`
} else { cprice4 = `0 회사4 : ${ForP} ( - 0 )` }
                
if (FivP < FivPs) {
     cprice5 = `- 회사5 : ${FivP} (` + ` - ${cprice5})`
} else if (FivP > FivPs) {
     cprice5 = cprice5.replace("-", "");
     cprice5 = `+ 회사5 : ${FivP} (` + ` + ${cprice5})`
} else { cprice5 = `0 회사5 : ${FivP} ( - 0 )` }
     
 

message.channel.send("< 시즌 베타 1 주식 차트>\n(차트는 1분에 한번씩 업데이트됩니다.)" + `

\`\`\`diff
${cprice1}
${cprice2}
${cprice3}
${cprice4}
${cprice5}
\`\`\`

 ` +
"버그를 발견하신 분은 ~문의 로 버그제보좀"
)
});
}

module.exports.help = {
  name: "차트"
}
