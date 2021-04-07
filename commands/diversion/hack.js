const { Command } = require('../../commands')
const Discord = require('discord.js');//Discord.js
module.exports = class HackCommand extends Command {
constructor() {
 super({
name: 'hack',
 aliases: [], 
 category: 'diversion',
priority: 9,
 permLvl: 0
 })
}
execute(message) {
    {//Command handler
  
   let usuarioh = message.mentions.users.first();
   if(!usuarioh) return message.channel.send('<@'+message.author.id+'>' + 'Menciona a alguien para hackear')
   
   let contras = [//Creamos las Contraeñas
     'EllaNoMeAma',
     'EllaMeDice',
     'MeQuieroMorir91',
     'MeAmaONo',
     'JajaCMamo',
     'HolaQueTalTodoBien',
     'BuenasTardesPadrin',
     'osueslavidabruh',
     'Comoteva',
     'xdddddd',
     'soyuwu',
     'komolozupo',
     'uwuvivaeluwu'
   ]
   let gmails = [//cremos los Gmails
      'EllaMeAma@gmail.com',
      'MeDejoPorOtro@hotmail.com',
      'steve.roc@gmx.de',
      'HolaQueTal@gmail.com',
      'JSAD@hotmail.com',
      'Buenassssssssssss@gmail.com',
      'Adiosjasdjasd@gmail.com',
      'MeMame10313@hotmail.com',
      'MeMori133838@hotmail.com',
   'PatroxWarexfake@gmail.com',
   'Hola:D@gmail.com',
   'uwu@hotmail.com'
   ]
   let ips = [ //Creamos las Ips (son falsas por cierto, comprobe cada una de ellas xd)
   '191.168.2.1',
   '131.168.1.4',
   '156.156.7.0',
   '101.151.1.9',
   '133.134.9.8',
   '082.334.134',
   '027.746.674',
   '937.577.385',
   '999.777.888',
   '846.238.836'
   ]
   let wifi = [//Creamos EL wifi
     'HOLAAAASSS',
     'NOPRESTOWIFI',
     'JAJAJATUSSA',
     'TUSSSSSSSSSSA1003',
     'BUENASNOVOYADARMICONTRA',
     'JASDJASJDASJD',
     '123',
     '321',
     'quieroamimami',
     'QUeonda',
     'wifigratis'
   ]
      var Num = contras[Math.floor(contras.length * Math.random())]//Usamos para que salga una de las contraseñas que creamos
      var Num1 = gmails[Math.floor(gmails.length * Math.random())]//Usamos para que salga uno de los gmails
      var Num3 = ips[Math.floor(ips.length * Math.random())]//Usamos para que salga una de las ips
      var Num4 = wifi[Math.floor(wifi.length * Math.random())]//Usamos para que salga uno de los wifis
   message.channel.send('___**Conectando al Wi-Fi...**___').then(m => {
   setTimeout(function(){
                        m.edit('___**Conectando al Wi-Fi..**___').then(m => {
                        })
   }, 5000)
   setTimeout(function(){
                        m.edit('___**Conectando al Wi-Fi.**___').then(m => {//opcional. pero aca hacemos para que salga el mensaje com osi nos conetamos el wifi aca volvemos a editar el msg, y ponemos otro "."
                        })
   }, 6000)
   setTimeout(function(){
                        m.edit('___**Conectando al Wi-Fi.**___').then(m => {
                        })
   }, 7000)
   setTimeout(function(){
                        m.edit('___**Conectando al Wi-Fi.**___').then(m => {
                        })
   }, 8000)
   setTimeout(function(){
                        m.edit('___**Conectado exitosamente <:VERIFY:696120129821343754>**___').then(m => {
                        })//opcional. pero aca hacemos para que salga el mensaje que ya se conecto al wifi
   }, 9000)
   
                        
   
   setTimeout(function(){
               m.edit('___**Conectado exitosamente <:VERIFY:696120129821343754>**___').then(m => {
               })
   }, 10000)
   
   setTimeout(function(){
                 m.edit('___**Obteniendo sus datos...**___').then(m => {  //opcional. pero aca hacemos para que salga el mensaje com osi nos conetamos a los datos                
                   })
   }, 11000)
   setTimeout(function(){
                 m.edit('___**Obteniendo sus datos..**___').then(m => {  //opcional. pero aca hacemos para que salga el mensaje com osi nos conetamos a los datos y editamos el msg, y ponemos un "."                
                   })
   }, 12000)
   setTimeout(function(){
                 m.edit('___**Obteniendo sus datos..**___').then(m => {//opcional. pero aca hacemos para que salga el mensaje com osi nos conetamos a los datos y editamos el msg, y ponemos un "."                   
                   })
   }, 13000)
   setTimeout(function(){
                 m.edit('___**Obteniendo sus datos...**___').then(m => {                  
                   })
   }, 11000)
   setTimeout(function(){
                 m.edit('___**Obteniendo sus datos..**___').then(m => {                  
                   })
   }, 12000)
   setTimeout(function(){
                 m.edit('___**Obteniendo sus datos..**___').then(m => {                  
                   })
   }, 13000)
   setTimeout(function(){
             m.edit('___**Wi-Fi Conectado <:VERIFY:696120129821343754>\nDatos Obtenidos <:VERIFY:696120129821343754>**___').then(m => {  //opcional. pero aca hacemos para que salga el mensaje com osi nos conetamos a los datos                 
                   })
   }, 14000)
   setTimeout(function(){
   
     let embed = new Discord.MessageEmbed()
    .setTitle(''+message.author.tag+' hackeo a:'+usuarioh+'')
     .setDescription('📃 | Su Gmail: ' + Num1 + ' \n💬 | Su Contraseña:  ' + Num + ' \n🌎 | Su IP:  ' + Num3 + ' \n🌐 | Su Wi-fi: '+Num4+'')
    .setColor("RANDOM")
     return message.channel.send(embed)//Mandamos embed
   }, 14000)
   });
   };
   };
}