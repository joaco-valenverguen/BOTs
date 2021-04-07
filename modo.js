var moodpossible  = ['activo' , 'de prueba'];
var activo = moodpossible[1];
var prueba = moodpossible[2];
var a = 'activo'
var b = 'prueba'
var modo = a
if(modo === 'activo'){
    var token ='NzU5MTUzNjgxMzYxNzk3MTQw.X25W9g.x7JPcl6T80KCz8UkRR6CuMektr0'
}
else if(modo === 'prueba'){
    var token = 'NzY1OTY2MTAwNzU2MTY4NzA2.X4cfhQ.lIpAn1dKee3oVossu4loiPNmHwE'
}
module.exports = {
    mode : modo,
    tokensito: token
   }