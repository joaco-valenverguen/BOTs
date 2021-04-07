const { Command } = require('../../commands')
module.exports = class Ball8Command extends Command {
 constructor() {
  super({
   name: '8ball',
   aliases: [], 
   category: 'diversion',
   priority: 9,
   permLvl: 0
  })
 }
 execute(message,args) {

	let rpts = ["Sí", "No", "Tal vez", "No sé", "¡Claro!"]
    let usuario = message.member.user

//if (!args) {return message.reply(`Escriba una pregunta.`)}
let texto = args.join(" ");
	if (!texto) return message.reply('Deja la marikera y pon una pregunta')
else if(texto) {message.channel.send(`${usuario}` +' a su pregunta `'+args+'` mi respuesta es: `'+ rpts[Math.floor(Math.random() * rpts.length)]+'`');

 }}
}