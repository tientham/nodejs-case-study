const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const start = Date.now();

// benchmark http request
function doRequest() {
  https
    .request('https://www.google.com', (res) => {
      res.on('data', () => {});
      res.on('end', () => {
        console.log(Date.now() - start);
      });
    })
    .end();
}

// benchmark hashing
function doHash() {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('Hash: ', new Date() - start);
  });
}

doRequest();

// benchmark fs
fs.readFile('multitask.js', 'utf8', () => {
  console.log('FS: ', Date.now() - start);
});

doHash();
doHash();
doHash();
// doHash();
