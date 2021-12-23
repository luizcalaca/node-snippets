const fs = require('fs')

console.log('Início')

fs.writeFile('arquivo2.txt', 'oi', function() {
    setTimeout(() => {
        console.log('Arquivo criado!')
    }, 1000);
})

console.log('Fim')