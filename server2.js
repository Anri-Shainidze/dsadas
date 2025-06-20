// const http = require('http');

// const movies = [
//   { title: 'Inception', genre: 'Sci-Fi', director: 'Christopher Nolan', year: 2010 },
//   { title: 'The Godfather', genre: 'Crime', director: 'Francis Ford Coppola', year: 1972 },
//   { title: 'Parasite', genre: 'Thriller', director: 'Bong Joon-ho', year: 2019 },
//   { title: 'Spirited Away', genre: 'Animation', director: 'Hayao Miyazaki', year: 2001 },
//   { title: 'Pulp Fiction', genre: 'Crime', director: 'Quentin Tarantino', year: 1994 }
// ];

// function getRandomMovie() {
//   const index = Math.floor(Math.random() * movies.length);
//   return movies[index];
// }

// function isJackpotNumber(num) {
//   return [111, 222, 333, 444, 555, 666, 777, 888, 999].includes(num);
// }

// const server = http.createServer((req, res) => {
//   const { url } = req;

//   if (url === '/movie') {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     const movie = getRandomMovie();
//     res.end(JSON.stringify(movie));
//   } else if (url === '/number') {
//     const randomNum = Math.floor(Math.random() * 1000) + 1;
//     const response = {
//       number: randomNum,
//       message: isJackpotNumber(randomNum) ? '🎉 You win the jackpot! 🎉' : 'Try again!'
//     };

//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(response));
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('Not Found');
//   }
// });

// const PORT = 4000;
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
