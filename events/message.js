const config = require('../config')
const commands = require('../commands')

const Discord = require('discord.js')
const db = require('../database/database')


module.exports = async (client, message) => {
 if(message.author.bot) return;

 let existsPrefix = await db.admin.existsPrefix(message.guild.id)
 let prefix = config.prefix;

 if (existsPrefix) {
  let dataPrefix = await db.admin.getPrefix(message.guild.id)
  prefix = dataPrefix.prefix;
 }

 let cmd = message.content.slice(prefix.length)
 
 if(cmd != undefined) {
  cmd = cmd.split(' ')
  
 }

 let result = await commands.checkValidCmd(message, cmd, prefix);
 if(result) {
  commands.executeCmd(message, cmd, Discord, client)

 }
 /////////////////////////////////detector de palabras//////////////////////////
 let words = ["Eres", "gay"]

if (words.some(e => new RegExp(e, "gmi").test(message.content))){
    message.channel.send(`${message.author} con esa boquita le hablas a tu mama?`)
    .then(() => message.delete())
}
 /////////////////////////////////final//////////////////////////

}