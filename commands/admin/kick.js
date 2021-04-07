const {Command} = require('../../commands')
const {MessageEmbed } = require('discord.js');
module.exports = class kickCommand extends Command {
    constructor() {
     super({
      name: 'kick',
      aliases: [''],
      category: 'admin',
      priority: 5,
      permLvl: 3
     })
    }
    async execute( message, args) {

        let user = message.mentions.users.first();
        let razon = args.slice(1).join(' ');
        
        var perms = message.member.hasPermission("KICK_MEMBERS");
        
        if(!perms) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
        if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
        
        if (!razon) return message.channel.send('Escriba una razón, `-kick @username [razón]`');
        if (!message.guild.member(user).kickable) return message.reply('No puedo patear al usuario mencionado.');
             
        message.guild.member(user).kick(razon);
        const embedkick = new MessageEmbed() //crea el embed
        .setTitle("**Alguien ha sido kickeado!**")
        .setDescription(`**${user.username} ha sido kickeado del servidor.**\n` +
        `**Razón = ${razon}**\n` +
        `**Moderador responsable = ${message.author.username}\n**`)
        .setColor("RED")
        .setTimestamp()
        .setFooter("Bot desarrollado por (TUNOMBRE)")//en TUNOMBRE pones tu nombre, esto es opcional.
        
        message.channel.send({embed:embedkick})//envia el embed al canal anteriormente especificado con la id.
        console.log(user.username + " fue expulsado por " + message.author.username) //envia a la consola quien fue kickeado, y por quien.
        
      
      }
      
}