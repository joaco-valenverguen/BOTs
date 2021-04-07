const Discord = require('discord.js');
const client = new Discord.Client();
const commands = require("../commands")
const db = require("../database/database")
const config = require('../config')
let startTime = Date.now();

module.exports = async (client, messages, ) => {
    console.log(`messages are deleted -> ${messages.size}`);

 
}