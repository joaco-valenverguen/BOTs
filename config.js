const modos = require('./modo')
module.exports = {
 modo : modos.mode, 
 dirBase : './database/base_1.db',
 superusers: [707672397808926820], //Puedes añadir ID
 token: `${modos.tokensito}`,
 ytKey: 'AIzaSyDE87WnP3ErjLm3aISDkHcTn2nm-eb3jVA',
 prefix: '?',
 statusBOT: `Estoy listo!`,
 categories: [
  {name: "general", priority: 5},
  {name: "admin", priority: 8},
  {name: "music", priority: 7},
  {name: "diversion", priority: 6}
 ],
 groups: [
  {name: "User", permlvl: 0},
  {name: "Member", permlvl: 1},
  {name: "Mod", permlvl: 2},
  {name: "Admin", permlvl: 3}
 ]
 

}
