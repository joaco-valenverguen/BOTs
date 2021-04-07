const Discord = require('discord.js');
const client = new Discord.Client();
const commands = require("../commands")
const db = require("../database/database")
const config = require('../config')
let startTime = Date.now();

module.exports = async client => {
 commands.registerCategories(config.categories);
 commands.registerCommands();

 await db.check.createTables();

 client.user.setActivity(config.statusBOT);

 let time = Date.now() - startTime;
 console.log(`${config.statusBOT}, tomo ${time}ms , en modo: ${config.modo} y soy ${client.user.username} `);
 console.log(client._events)

}