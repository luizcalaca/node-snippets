const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Contenty-Type', 'text/html')
    //res.write('Hi HTTP')
    res.end('Hi, one messagem from Node with HTML')
})

server.listen(port, () => {
    console.log("Server running on localhost 3000")
})