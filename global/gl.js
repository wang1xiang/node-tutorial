'use strict'

console.log(process.version);

process.nextTick(() => {
  console.log('nextTick');
})

console.log('first');

process.on('exit', (code) => {
  console.log('exit code' + code);
})