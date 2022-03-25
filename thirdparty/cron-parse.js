var parser = require('cron-parser');

try {
  var interval = parser.parseExpression('0 15 0/1 * * ?');

  console.log('Date: ', new Date(interval.next())); // Sat Dec 29 2012 00:42:00 GMT+0200 (EET)
  console.log('Date: ', new Date(interval.next())); // Sat Dec 29 2012 00:44:00 GMT+0200 (EET)

  console.log('Date: ', new Date(interval.prev())); // Sat Dec 29 2012 00:42:00 GMT+0200 (EET)
  console.log('Date: ', new Date(interval.prev())); // Sat Dec 29 2012 00:40:00 GMT+0200 (EET)
} catch (err) {
  console.log('Error: ' + err.message);
}