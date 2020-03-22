'use strict'

// 加密解密
const crypto = require('crypto');
// const hash = crypto.createHash('sha1');
// const hash = crypto.createHash('md5');
// hash.update('Hello world')
// hash.update('Hello nodejs')
// console.log(hash.digest('hex'));
// 需要密钥
// const hmac = crypto.createHmac('sha256', 'secret-key');
// hmac.update('Hello world')
// hmac.update('Hello nodejs')
// console.log(hmac.digest('hex'));

// aes 对称加密
function aesEncrypt(data, key) {
  const cipher = crypto.createCipher('aes192', key);
  var crypted = cipher.update(data, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted
}

function aesDecrypt(encrypted, key) {
  const decipher = crypto.createDecipher('aes192', key);
  var decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

var data = 'hello, this is a secret message'
var key = 'password'
var encrypted = aesEncrypt(data, key)
var decrypted = aesDecrypt(encrypted, key)

console.log('Plain text: ' + data);
console.log('encrypted text: ' + encrypted);
console.log('decrypted text: ' + decrypted);