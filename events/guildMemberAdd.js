const Discord = require('discord.js');
const commands = require("../commands")
const db = require("../database/database")
const config = require('../config')
let startTime = Date.now();

module.exports = async ( client, member) => {
     const welcome = new Discord.MessageEmbed()


  .setTitle(`Bienvenido al server ${member.guild.name}`)
  .setDescription(`Hola ${member.user}, disfruta del server`)
  .setColor("RANDOM")
  .setFooter(client.user.username, client.user.avatarURL())
  .setThumbnail(client.user.displayAvatarURL());
  member.send(welcome);
 
}