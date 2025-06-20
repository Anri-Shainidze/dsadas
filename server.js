// const http = require('http');

// const server = http.createServer((req, res) => {
//   const { url } = req;

//   if (url === '/html') {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end(`
//       <!DOCTYPE html>
//       <html>
//       <head><title>Sample HTML</title></head>
//       <body>
//         <h1>Hello from /html!</h1>
//         <p>This is a sample HTML page.</p>
//       </body>
//       </html>
//     `);
//   } else if (url === '/api') {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     const users = [
//       { id: 1, name: 'Alice' },
//       { id: 2, name: 'Bob' },
//       { id: 3, name: 'Charlie' }
//     ];
//     res.end(JSON.stringify(users));
//   } else if (url === '/time') {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end(new Date().toISOString());
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('Not Found');
//   }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });




