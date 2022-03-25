const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');

https.get('https://movie.douban.com/top250', res => {
  let html = '';
  res.on('data', chunk => {
    html += chunk;
  })
  res.on('end', () => {
    const allFilms = [];
    const $ = cheerio.load(html);
    $('li .item').each(function () {
      const title = $('.title', this).text();
      const star = $('.rating_num', this).text();
      const pic = $('.pic img', this).attr('src');

      const str = $('.quote .inq', this).text();
      allFilms.push({
        title,
        star,
        pic,
        str
      })
    })
    downLoadImage(allFilms);
    fs.writeFile('./films.json', JSON.stringify(allFilms, null, '\t'), err => {
      if (!err) {
        console.log('文件写入成功');
      }
    })
  })
})

function downLoadImage (allFilms) {
  allFilms.forEach(film => {
    const { title, pic } = film;
    https.get(pic, res => {
      res.setEncoding('binary');
      let str = '';
      res.on('data', chunk => {
        str += chunk;
      })
      res.on('end', () => {
        fs.writeFile(`./images/${title.replace(/\//g, '')}.png`, str, 'binary', err => {
          if (!err) {
            console.log('图片下载成功')
          } else {
            console.log(err);
          }
        })
      })
    })
  })
}