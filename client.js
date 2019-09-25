const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.0.103',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log('connection successful');
    conn.write('Name: oli');
  });


  conn.on('data', () => {
    console.log('you ded cuz you idled')
  })

  return conn;
}

module.exports = connect;