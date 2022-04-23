
const http = require("http");
const fs = require("fs");
const host = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    const urlPath = req.url;

    if (urlPath === "/") {
        
        fs.readFile("./pages/index.html", "UTF-8", (err, html) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(html);

        });
        
    } else if (urlPath === "/about") {

        fs.readFile("./pages/about.html", "UTF-8", (err, html) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(html);

        });

    } else if (urlPath === "/sys") {
        
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 201;
        res.end("Your OS info has been saved successfully!");
        console.log("Hostname: " + os.hostname());
        console.log("Platform: " + os.platform());
        console.log("Architecture: " + os.arch());
        console.log("NumberofCPUS: " + os.cpus());
        console.log("Networkinterface: " + os.networkInterfaces());
        console.log("Uptime: " + os.uptime());
        
    } else {
        
        fs.readFile("./pages/404.html", "UTF-8", (err, html) => {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end(html);

        });

    }

});

server.listen(port, host, () => {
    console.log("Running at ${host}:${port}");
});
