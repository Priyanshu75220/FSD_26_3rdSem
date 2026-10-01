const http = require("http");
http.createServer((req,res)=>{
    res.writeHead(200,{
        "Content-Type": "text/html"
    });
    res.end(`<html>
                <head>
                    <tittle>My Google</tittle>
                </head>
                <body style="text-align:center; margin-top:150px; font-family:Arial;">
                    <h1 style="font-size:60px; color:blue;">My Google</h1>
                    <input type="text" placeholder="Search. Google..." style=" width:400px; padding:15px; border-radius:25px; border:1px solid gray;">
                    <br>
                    <br>
                    <button style="padding:10px 20px; border-radius:5px;">Google Search</button>

                </body>
    </html>`);
}).listen(3001);

console.log("Server running on port 3001");

