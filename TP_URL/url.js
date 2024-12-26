var url = require('url');

const MyUrl = {
    protocol: 'http:',
    hostname: 'www.google.com',
    pathname: '/search',
    query: {q: 'nodejs'}
}

console.log(url.format(MyUrl));
