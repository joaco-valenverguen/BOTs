const {
 Command
} = require('../../commands')
const config = require('../../config')

const ytdl = require('ytdl-core');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube(config.ytKey)

module.exports = class playCommand extends Command {
 constructor() {
  super({
   name: 'play',
   aliases: [],
   category: 'music',
   priority: 7,
   permLvl: 0
  })
 }
 async execute(msg, args, discord, client) {
  
 }
}
