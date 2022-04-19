
const http = require('http')
//console.log(http)

const port = process.env.PORT || 5000

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end(`Homepage`)
    } else if (req.url === '/node') {
        res.end(`This is a node page`)
    } else if (req.url === '/style') {
        res.end(`This is a style sheet`)
    } else {
        res.end(`
        <h1 style= "color: red">Oops!</h1>
        <p>we cant seem to find your page</p>
        <a href="/">back home</a>
        `)
    }
    //res.end(`Hello from my first Node App`)
})

server.listen(port, ()=> {
    console.log(`server listening on ${port}`)
})
