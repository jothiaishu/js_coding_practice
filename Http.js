const http = require('http');
const Server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Hello world")
})

const PORT = process.env.PORT || 3000;
Server.listen(PORT, () => console.log("server is running"))