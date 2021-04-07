const { Command } = require("../../commands");
const Discord = require("discord.js");
module.exports = class IconCommand extends Command {
  constructor() {
    super({
      name: "icon",
      aliases: ["serverIcon", "servericon"],
      category: "general",
      priority: 9,
      permLvl: 0,
    });
  }
  execute(message, args, discord, client) {
    var server = message.guild;
    message.channel.send(server.icon);
  }
};
