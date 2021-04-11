//.sep
const path = require('path')
console.log(path.sep)

//.join
const filePath = path.join('/content', 'subfolder','test.txt')
console.log(filePath)

//.basename
const base = path.basename(filePath)
console.log(base)

//.resolve (this time using global: __dirname)
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)