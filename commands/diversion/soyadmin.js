const { Command } = require("../../commands");
const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = class SoyAdminCommand extends Command {
  constructor() {
    super({
      name: "soyadmin",
      aliases: ["sa"],
      category: "diversion",
      priority: 9,
      permLvl: 0,
    });
  }
  async execute(message, args) {
    const { MessageAttachment } = require("discord.js");
    const Canvas = require("canvas");

    let user =
      message.mentions.users.first() ||
      client.users.cache.get(args[0]) ||
      message.author; // necesitaremos un usuario para tener un avatar que poner

    let avatar = user.displayAvatarURL({
      dynamic: false,
      size: 128,
      format: "png",
    }); // sacamos el avatar

    const canvas = Canvas.createCanvas(468, 415); // el canvas que quede con la imagen
    const ctx = canvas.getContext("2d"); //el contexto

    let bg = await Canvas.loadImage(
      "https://cdn.discordapp.com/attachments/750461925099307129/752473603127377961/IMG_20200907_051913_014.JPG"
    );
    ctx.drawImage(bg, 0, 0); // dibujamos la imagen en todo el canvas

    ctx.beginPath(); // empezamos un path para hacer un circulo
    ctx.arc(canvas.width / 2, 70, 60, 0, Math.PI * 2); // se hace el circulo
    ctx.fillStyle = "#FF"; // rellenaremos el circulo de negro
    ctx.fill(); // se rellena
    ctx.stroke(); // se hace el circulo en si
    ctx.closePath(); // se cierra el path
    ctx.clip(); // y se hace un clip.

    let imagen = await Canvas.loadImage(avatar); // cargamos la imagen en Canvas
    ctx.drawImage(imagen, 169, 10.7); // y se dibuja en la zona del circulo

    let att = new MessageAttachment(canvas.toBuffer(), "admin.png"); // el attachment con el buffer
    message.channel.send(att); // y listo.
  }
};
