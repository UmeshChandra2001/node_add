const http = require("http");

const PORT = process.env.PORT || 3000;

const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Node Frontend App</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 100px;
            background-color: #f4f4f4;
        }
        h1 {
            color: #0078d7;
        }
    </style>
</head>
<body>
    <h1>Welcome to My Node.js Frontend App</h1>
    <p>Application is running successfully.</p>
</body>
</html>
`;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
});

server.listen(80);
