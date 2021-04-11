// Modules
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative export')
//when you import a module, you invoke it
require('./7-mind-grenade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)