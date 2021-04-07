const { Command } = require('../../commands')
const Discord = require('discord.js');

module.exports = class AvatarCommand extends Command {
 constructor() {
  super({
   name: 'avatar',
   aliases: [],
   category: 'general',
   priority: 9,
   permLvl: 0
  })
 }
 execute(message, args) {
  let member;
    if (message.mentions.users.first()) {
        member = message.mentions.users.first().id; 
      } else if (args[0]) {
        member = args[0]; 
      } else {
        member = message.author.id; 
      }  
  let member = message.mentions.members.first() //mencion
  || message.guild.members.resolve(args[0]) //id
  || message.member //autor
      
const embed = new Discord.MessageEmbed()
  .setImage(member.user.displayAvatarURL())
  .setColor(member.displayHexColor)
  .setFooter(
    (member.id === message.member.id)?`Tu avatar ${member.displayName}`:`Avatar de ${member.displayName}`
  );
  
message.channel.send({embed: embed});
 }
}