const minimist = require('minimist')
const soma = require('./soma').soma

const args = minimist(process.argv.slice(2))

const name = args['name']
const age = args['age']

console.log(`The name is ${name} and age ${age} and sum is ${soma(2,3)}`)

//node index.js --name=Luiz --age=31