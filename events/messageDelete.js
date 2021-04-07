const config = require('../config')
const commands = require('../commands')

const Discord = require('discord.js')
const db = require('../database/database')


module.exports =  (client,  message) => {
    console.log(`message has been deleted by ${message.author.username} -> ${message} de ${message.author.username} `);
}