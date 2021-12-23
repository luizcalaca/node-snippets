const path = require('path')

console.log(path.resolve('test.txt'))

const midFolder = 'reports'
const fileName = 'louis.txt'

const finalPath = path.join("/", 'arquivos', midFolder, fileName)

console.log(finalPath)