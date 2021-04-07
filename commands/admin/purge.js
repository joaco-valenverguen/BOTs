const {
    Command
   } = require('../../commands')
module.exports = class PurgeCommand extends Command {
    constructor() {
     super({
      name: 'purge',
      aliases: [''],
      category: 'admin',
      priority: 5,
      permLvl: 3
     })
    }
    async execute( message, args) {




if(!message.guild.me.permissionsIn(message.channel).has('MANAGE_MESSAGES')){
  return message.channel.send('Perdon, pero no tengo permisos')
}

if(!message.member.permissionsIn(message.channel).has('MANAGE_MESSAGES')){
  return message.channel.send('Perdon, pero no tienes permisos')
}

if(!args) return message.channel.send('Escriba la cantidad de mensajes a eliminar');
let cantidad = parseInt(args[0])

if(!cantidad || isNaN(cantidad)) return message.reply('Introduce un numero por favor') 

if(cantidad > 100){
  message.channel.send('El maximo de mensajes que puedo borrar es 100, por lo tanto lo establecere automaticamente ahi')
  cantidad = 100
}
message.channel.messages.fetch({
  limit: cantidad
}).then(mensajes => {
  message.channel.bulkDelete(
    mensajes.filter(m => !m.pinned) //para no borrar los mensajes anclados
  ).then(() => {
    message.channel.send(`Listo, borre los ${cantidad} mensajes :ok_hand:`).then(m => m.delete({ timeout: 20000 }))
  }).catch(e => {
    message.channel.send('Ocurrio un error y no pude borrar los mensajes')
  })
})
      
      }
      
}