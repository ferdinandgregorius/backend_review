//Modules - encapsulated code
const names = require('./names');
const sayHi = require('./utils');
const data = require('./alternative');
require('./mind-grenade');

sayHi(names.name1)
sayHi(names.name2)
sayHi(names.name3)
sayHi(data.singlePerson.name)