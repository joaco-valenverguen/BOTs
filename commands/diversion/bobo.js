const { Command } = require('../../commands')
module.exports = class BoboCommand extends Command {
 constructor() {
  super({
   name: 'bobo',
   aliases: [], 
   category: 'diversion',
   priority: 9,
   permLvl: 0
  })
 }
 execute(message,args) {

	let texto = args.join(" ");
	if (!texto) message.channel.send('Debe escribir un mensaje.');
    else(message.channel.send(`${message.author.username}   tu eres el  ${args}`));

 }
}