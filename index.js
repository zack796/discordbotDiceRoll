const Discord = require('discord.js');
const commando = require('discord.js-commando');
const bot = new commando.Client({
  commandPrefix: '!',
  owner: '100607191337164800'
});

bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

/*
bot.on('message', (message)=> {

  if(message.content == '!ping') {
    message.channel.send("pong!");
  }
});
*/
bot.login('NDE4MTU0Njk2MTA5MTk1Mjc0.DXdcbA.iZctTIhq7BlabEMs4mozgEPVzLc');
