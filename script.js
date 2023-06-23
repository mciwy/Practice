const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(getFileContents('index.html'));
  } else if (req.url === '/search' && req.method === 'POST') {
    let requestBody = '';
    req.on('data', chunk => {
      requestBody += chunk.toString();
    });
    req.on('end', () => {
      const keyword = JSON.parse(requestBody).keyword;
      const dictionary = {
        'Ваше ключевое слово': ['Ответ']
      };
      const urls = dictionary[keyword] || [];

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(urls));
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('App started on port 3000');
});

function getFileContents(filename) {
  const fs = require('fs');
  try {
    return fs.readFileSync(filename, 'utf8');
  } catch (error) {
    console.error('Ошибка при чтении файла:', error);
    return 'Internal Server Error';
  }
}