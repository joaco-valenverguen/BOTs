const { Command } = require("../../commands");
const Discord = require("discord.js");
const Canvas = require("canvas");
module.exports = class SayCommand extends Command {
  constructor() {
    super({
      name: "say",
      aliases: [],
      category: "diversion",
      priority: 9,
      permLvl: 0,
    });
  }
  async execute(message, args, client) {
    if (args[0] == "embed") {
      //Si la primera args es embed pasa esto...
      let texto = args.slice(1).join(" "); //Defines texto a partir de la 2da args
      if (!texto) return message.channel.send("No has escrito un mensaje"); //Si no has puesto texto te lo dice
      const embed = new Discord.MessageEmbed() //Defines embed
        .setDescription(texto) //Pones el texto
        .setColor("RANDOM") //Color random
        .setFooter(
          message.member.displayName,
          message.author.displayAvatarURL()
        );
      message.channel.send(embed); //Mandas el embed
      message.delete({ timeout: 0 }); //Borras el mensaje del autor
    } else if (args[0] == "normal") {
      //Si la primera args es normal pasa esto...
      let texto = args.slice(1).join(" ");
      if (!texto) return message.channel.send("No has escrito un mensaje");
      message.channel.send(texto); //Mandas el mensaje
      message.delete({ timeout: 0 });
    } else if (args[0] == "canvas") {
      const miembro = message.mentions.members.first();
      if (!miembro)
        return message.channel.send(
          ":x: | ¡Debes mencionar a alguien antes del mensaje!"
        );
      const mensaje = args.slice(2).join(" ");
      if (!mensaje)
        return message.channel.send(":x: | ¡Debes escribir un mensaje!");

      const canvas = Canvas.createCanvas(400, 69); //nice
      const ctx = canvas.getContext("2d");

      if (miembro.roles.color) {
        //Fondo
        ctx.fillStyle = "#36393f";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        //Circulo para cortar el avatar
        const x = 11,
          y = 13,
          radius = 20;
        ctx.save();
        ctx.beginPath();
        ctx.arc(x + radius, y + radius, radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();

        //Avatar
        const url = miembro.user.displayAvatarURL({
          format: "png",
          dynamic: false,
          size: 1024,
        });
        const image = await Canvas.loadImage(url);
        ctx.drawImage(image, x, y, radius * 2, radius * 2);

        ctx.restore();

        //Estas fueron las fuentes que probé
        //Whitney,Helvetica Neue,Helvetica,Arial o sans-serif

        //Nickname
        ctx.lineWidth = 0.3;
        ctx.font = "14px Sans Serif";
        ctx.fillStyle = miembro.roles.color.hexColor || "#000000";
        ctx.strokeStyle = miembro.roles.color.hexColor || "#000";
        ctx.strokeText(miembro.nickname || miembro.user.username, 66, 27);
        ctx.fillText(miembro.nickname || miembro.user.username, 66, 27);

        //Timestamp
        let largo = ctx.measureText(miembro.nickname || miembro.user.username)
          .width;
        ctx.font = "11.2px Sans Serif";
        ctx.fillStyle = "#72767d";

        let hour = Math.floor(Math.random() * 12);
        let min = Math.floor(Math.random() * 60);
        const t = ["AM", "PM"];
        const tt = t[Math.floor(Math.random() * t.length)];

        hour = (hour < 10 ? "0" : "") + hour;
        min = (min < 10 ? "0" : "") + min;

        ctx.fillText(`Today at ${hour}:${min} ${tt}`, 66 + largo + 8, 27);

        //Mensaje
        ctx.lineWidth = 0.1;
        ctx.font = "14.5px Helvetica";
        ctx.fillStyle = "#dcddde";
        ctx.strokeStyle = "#dcddde";
        let w =
          ctx.measureText(mensaje).width -
          Math.floor(ctx.measureText(mensaje).width * 0.08);
        ctx.strokeText(mensaje, 66, 50, w);
        ctx.fillText(mensaje, 66, 50, w);

        const attach = new Discord.MessageAttachment(
          canvas.toBuffer(),
          "isay.png"
        );
        message.channel.send(attach);
        message.delete({ timeout: 0 });
      } else if (!miembro.roles.color) {
        //Fondo
        ctx.fillStyle = "#36393f";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        //Circulo para cortar el avatar
        const x = 11,
          y = 13,
          radius = 20;
        ctx.save();
        ctx.beginPath();
        ctx.arc(x + radius, y + radius, radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();

        //Avatar
        const url = miembro.user.displayAvatarURL({
          format: "png",
          dynamic: false,
          size: 1024,
        });
        const image = await Canvas.loadImage(url);
        ctx.drawImage(image, x, y, radius * 2, radius * 2);

        ctx.restore();

        //Estas fueron las fuentes que probé
        //Whitney,Helvetica Neue,Helvetica,Arial o sans-serif

        //Nickname
        ctx.lineWidth = 0.3;
        ctx.font = "14px Sans Serif";
        ctx.fillStyle = /*miembro.roles.color.hexColor ||*/ "#000000";
        ctx.strokeStyle = /*miembro.roles.color.hexColor ||*/ "#000";
        ctx.strokeText(miembro.nickname || miembro.user.username, 66, 27);
        ctx.fillText(miembro.nickname || miembro.user.username, 66, 27);

        //Timestamp
        let largo = ctx.measureText(miembro.nickname || miembro.user.username)
          .width;
        ctx.font = "11.2px Sans Serif";
        ctx.fillStyle = "#72767d";

        let hour = Math.floor(Math.random() * 12);
        let min = Math.floor(Math.random() * 60);
        const t = ["AM", "PM"];
        const tt = t[Math.floor(Math.random() * t.length)];

        hour = (hour < 10 ? "0" : "") + hour;
        min = (min < 10 ? "0" : "") + min;

        ctx.fillText(`Today at ${hour}:${min} ${tt}`, 66 + largo + 8, 27);

        //Mensaje
        ctx.lineWidth = 0.1;
        ctx.font = "14.5px Whitney";
        ctx.fillStyle = "#dcddde";
        ctx.strokeStyle = "#dcddde";
        let w =
          ctx.measureText(mensaje).width -
          Math.floor(ctx.measureText(mensaje).width * 0.08);
        ctx.strokeText(mensaje, 66, 50, w);
        ctx.fillText(mensaje, 66, 50, w);

        const attach = new Discord.MessageAttachment(
          canvas.toBuffer(),
          "isay.png"
        );
        message.channel.send(attach);
        message.delete({ timeout: 0 });
      }
    }
  }
};
