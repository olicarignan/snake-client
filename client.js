const net = require('net');
const { IP, PORT } = require('./constant');

const connect = function() {
  const conn = net.createConnection({ IP, PORT });
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log('connection successful');
    conn.write('Name: oli');
  });
  
  // conn.write('Move: up')
  
  


  conn.on('data', () => {
    console.log('you ded cuz you idled')
  })

  return conn;
}

let exportConnect = {
  connect
};

module.exports = exportConnect;