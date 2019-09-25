const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function(client) {
  const conn = net.createConnection({ 
    host: '192.168.0.103',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', () => {
    console.log('you ded cuz you idled')
  })

  return conn;
}

console.log('Connecting ...');
connect();