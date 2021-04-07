require('dotenv').config()
var moodpossible  = ['activo' , 'de prueba'];
var activo = moodpossible[1];
var prueba = moodpossible[2];
var a = 'activo'
var b = 'prueba'
var modo = a
if(modo === 'activo'){
    var token =process.env.Token1
}
else if(modo === 'prueba'){
    var token = process.env.Token2
}
module.exports = {
    mode : modo,
    tokensito: token
   }