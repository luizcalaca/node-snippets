const fs = require('fs')

if(!fs.existsSync('./mydir')){
    console.log('does not exists')
}

fs.mkdirSync('mydir')

if(fs.existsSync('mydir')){
    console.log('Exists!')   
}