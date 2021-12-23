const inquirer = require('inquirer')

inquirer.prompt([
    {
        name: 'p1',
        message: 'Qual a primeira nota?',
    }
]).then((answer) => {
    console.log(answer)
}).catch((error)=> {
    console.log(error)
})