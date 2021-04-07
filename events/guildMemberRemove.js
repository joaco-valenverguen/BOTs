const config = require('../config')
const commands = require('../commands')
const Discord = require('discord.js')
const db = require('../database/database')
module.exports =  (client, member) => {
    console.log(`a member leaves a guild, or is kicked: ${member.user}`);

}