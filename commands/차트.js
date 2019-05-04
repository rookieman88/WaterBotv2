const Discord = require("discord.js");
const superagent = require('superagent');

module.exports.run = async (bot, message, args) => {

     	 superagent.get("https://api.myjson.com/bins/15in2s").then((res) => {
let StocksPrice = res.body;

let OneP = StocksPrice["Stocks"].OneStock
let TwoP = StocksPrice["Stocks"].TwoStock
let ThrP = StocksPrice["Stocks"].ThrStock
let ForP = StocksPrice["Stocks"].ForStock
let FivP = StocksPrice["Stocks"].FivStock
 

message.channel.send("< 시즌 베타 1 주식 차트>\n(차트는 1분에 한번씩 업데이트됩니다.)" + `

`\`\`
회사1 : ${OneP}원
회사2 : ${TwoP}원
회사3 : ${ThrP}원
회사4 : ${ForP}원
회사5 : ${FivP}원
`\`\`

 ` +
"버그를 발견하신 분은 ~문의 로 버그제보좀"
)
});
}

module.exports.help = {
  name: "차트"
}
