//npm
//npm --version

//local dependency - use it only in this particular project
//npm i <packageName>

//global dependency - use it in any project
// npm install -g <packageName>
//sudo install -g <packageName> (mac)

//package.json - manifest file (stores important ifo about project/package)
//manual approach create package.json in the root, create properties etc)
//or npm init (step by step, press enter to skip)
//or npm init -y (everything default)

const _ = require('lodash')
//lodash has a method 'flattenDeep', 
//now that we installed 'lodash' program as a dependency, so now we have access to its methods

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)