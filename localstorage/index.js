import * as http from 'http'
import * as store from './store.js';

const port = 3000

const server = http.createServer( async (req, res) => {
    res.statusCode = 200
    res.setHeader('Contenty-Type', 'text/html')
    res.end('LocalStorage')
})

server.listen(port, async () => {
    console.log("Server running on localhost 3000")
    store.setItem()
})

