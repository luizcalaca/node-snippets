console.log(process.argv)

/**
 * 
 * luizcalaca@Luizs-MacBook-Air node-snippets % node ./command_line_arg.js nome=Luiz
[
  '/usr/local/bin/node',
  '/Users/luizcalaca/node-snippets/command_line_arg.js',
  'nome=Luiz'
]
 */

const args = process.argv.slice(2)

console.log(args)

/**
 * [ 'nome=Luiz' ]
 */

const [property, value] = args[0].split("=") // 0 get the first position (nome=Luiz)
//and 1 get the second positio (idade=31)

console.log(property, value)

/***
 * nome Luiz
 */