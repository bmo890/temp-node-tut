//const fs = require('fs')
//or, vv
const { readFileSync, writeFileSync } = require('fs')

//readFileSync:
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
console.log(first, second)

//writeFileSync:
//will create and write a new file. if file already exists, node will overwrite
// writeFileSync('./content/result-sync.txt', 
// `Here is the result : ${first}, ${second}`, 
// )

//adding property {flag: 'a'} will append the new file and just add a new line. whereas without flag, it is completely re-written
writeFileSync('./content/result-sync.txt', 
`Here is the result : ${first}, ${second}`, 
{flag: 'a'}
)




