const connect = require('./client');

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key);
  })
  return stdin;
}

const handleUserInput = function(data) {
  let output = '';
  if (data === '\u0003') {
    process.exit();
  }
  if (data === 'w') {
    output = 'Move: up';
  } else if (data === 'a') {
    output = 'Move: left';
  } else if (data === 's') {
    output = 'Move: down';
  } else if (data === 'd') {
    output = 'Move: right';
  } else {
    output = `Say: ${data}`;
  }
  connection.write(output);
}

let exporting = {
  setupInput
};

console.log('Connecting ...')
module.exports = exporting;