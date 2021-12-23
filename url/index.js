const url = require('url')

const adress = 'https://www.luizcalaca.com.br/eventos?online=1'
const parsedURL = new url.URL(adress)

console.log(parsedURL.host)
console.log(parsedURL.pathname)
console.log(parsedURL.search)
console.log(parsedURL.searchParams)
console.log(parsedURL.searchParams.get('online'))