const Discord = require('discord.js');
//objects inside of parameters require {}
const bot = new Discord.Client();

bot.on('message', message => {

  if(message.content == '!ping') {
    message.channel.send("pong!");
  }
});

bot.login('NDE4MTU0Njk2MTA5MTk1Mjc0.DXdcbA.iZctTIhq7BlabEMs4mozgEPVzLc');
