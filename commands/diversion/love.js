const { Command } = require('../../commands')
const Discord = require("discord.js")
module.exports = class LoveCommand extends Command {
constructor() {
 super({
name: 'love',
 aliases: [], 
 category: 'diversion',
priority: 9,
 permLvl: 0
 })
}
execute(message) {
      
    let users = message.mentions.users.map(m => m.username).join(' y ');
    if(!users) return message.channel.send('Mencione a dos usuarios para calcular');
const random = Math.floor(Math.random() * 100);
let heard = "";
 
    if(random < 50){
        heard=':broken_heart:';

    }else if(random < 80){
        heard=':sparkling_heart: '; // Un pequeÃ±o Match.Floor para hacerlo random y no de el mismo resultado!

    }else if(random < 101){
        heard=':heart:';

    }
  

let resp = [`El porcetanje de ${message.author.username} & ${users.username} son:`,`valla yo calculo que ${message.author.username} & ${users.username} da a:`]
  
  let msg = resp[Math.floor(Math.random() * resp.length)]    //Mensajes distintos si quieren ponerle diferentes mensajes!
  
  
  
  
  const embed = new Discord.MessageEmbed()
  .setAuthor('El porcentaje de amor de '+users+' es:')
  .setDescription(heard+' **'+random+' %**'+' '+heard)
  .setColor(0xff4d4d)
message.channel.send(embed)

}
}