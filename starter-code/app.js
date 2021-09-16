const http = require('http');
const server = http.createServer((req, res) => {
    res.write('welcome to our first page')
    res.end()
})
server.listen('2000')