
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        const readline = require('readline');
        const fs = require('fs');
        let dict = fs.readFileSync('./commands/dict.txt').toString().replace(/\r/g,"").split('\n')
        let p1 = 0
        let p2 = 0
        
        class Game { 
                constructor(){
                        this.word = null;
                        this.wordList = [];
                }
                start1(){
                        message.channel.send('끝말잇기를 시작합니다. 1분안에 2명이 모이지 않으면 종료됩니다.').then((msg) => {
                                msg.react('🎉')
                               const filterr = (reaction, user) => reaction.emoji.name === '🎉' && user.id !== bot.user.id
                                     msg.awaitReactions(filterr, {
                                       maxUsers: 2
                               }).then((collected) => {
                                p1 = collected.array()[0].users.array()[1].id
                                p2 = collected.array()[0].users.array()[2].id
                                return this.start2(msg);
                               });
                        });
                }
                start2(){
                        const filterr = (m) => m.author.id === p1			
                        message.channel.send(`끝말잇기 시작! \n<@${p1}> ㄱㄱ`)
                        message.channel.awaitMessages(filterr, {
                                max: 1,
                                time: 20000
                    }).then((collected) => {
                        if (!collected.first()) {return message.channel.send(`게임 끝! <@${p2}>의 승리!`)}
                        let word = collected.first().content
                        this.word = word;
                        if (this.validationS(word)) {
                                this.word = word;
                                this.wordList.push(word);
                                return this.user2(word);
                        } else {                                 
                                 return this.start2(word); }
                        });
                }
                user1(word){
                        const filterr = (m) => m.author.id === p1	
                        if (!word) { word = this.word }					
                        message.channel.send(`<@${p1}> ㄱㄱ ( ${word} => ? )`)
                        message.channel.awaitMessages(filterr, {
                                max: 1,
                                time: 20000
                    }).then((collected) => {
                            if (!collected.first()) {return message.channel.send(`게임 끝! <@${p2}>의 승리!`)}
                            let word = collected.first().content
                        if (this.validation(word)) {
                                        this.word = word;
                                        this.wordList.push(word);
                                        this.user2(word);
                        } else { 
                                return this.user1(word); }
                        });
                }
                user2(word){
                        const filterr = (m) => m.author.id === p2	
                        if (!word) { word = this.word }			
                        message.channel.send(` <@${p2}> ㄱㄱ (${word} => ?)`)
                        message.channel.awaitMessages(filterr, {
                                max: 1,
                                time: 20000
                    }).then((collected) => {
                        if (!collected.first()) {return message.channel.send(`게임 끝! <@${p1}>의 승리!`)}
                         let word = collected.first().content
                        if (this.validation(word)) {
                                        this.word = word;
                                        this.wordList.push(word);
                                        this.user1(word);
                        } else { 
                                return this.user2(); }
                
                        });
                }
                validation(word){
                        if(!this.wordList.includes(word) && word.charAt(0) === this.word.slice(-1) &&  word.length>=2) {
                                let answer = dict.filter(v => {
                                        return v.charAt(0) === word.charAt(0).slice(-1) && v.length >= 2
                                });
                                if(!answer.includes(word)){	
                                        message.channel.send('응~ 그딴거 없어~')		
                                        return false;			
                                } else { return true; }
                        } else {
                                if (this.wordList.includes(word)) {
                                        message.channel.send('응 이미 했어~')
                                        return false;
                                }
                                message.channel.send('응 그걸로 시작 안해~')
                                        return false;
                        }
                }
                validationS(word){
                        if(word.length>=2) {
                                let answer = dict.filter(v=>{
                                        return v.charAt(0) === this.word.charAt(0).slice(-1) && v.length >= 2
                                });
                                if(!answer.includes(word)){	
                                        message.channel.send('응~ 그딴거 없어~')		
                                        return false;			
                                } else { return true; }
                        } else {
                                message.channel.send('응 한글자 안되~')
                                        return false;
                        }
                }
        }
        
        let game = new Game();
        game.start1();


}


module.exports.help = {
  name: "끝말잇기"
}
