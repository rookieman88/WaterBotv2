const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let help = new Discord.RichEmbed()
.addField('워터봇 OBT 도움말', '주 기능 : Ai, 미니게임')
.addField('주식투자', '워터야 차트, 워터야 매수, 워터야 매도, 워터야 지갑')
.addField('미니게임', '워터야 슬롯머신, 워터야 가위바위보, 워터야 주사위, 워터야 끝말잇기, 워터야 타자대결')
.setFooter('아직 개발중입니다. 커맨드는 더 추가되고 없는 커맨드가 있을 수 있습니다.')
.setColor('#00ff6c')

message.channel.send(help)

}

module.exports.help = {
  name: "도움"
}
