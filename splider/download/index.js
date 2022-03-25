const download = require('download')
const axios = require('axios')

let headers = {
  'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
}

function sleep(time) {
  return new Promise((reslove) => setTimeout(reslove, time))
}

async function load(skip = 0) {
  const data = await axios
    .get(
      'http://service.picasso.adesk.com/v1/vertical/category/4e4d610cdf714d2966000000/vertical',
      {
        headers,
        params: {
          limit: 30, // 每页固定返回30条
          skip: skip,
          first: 0,
          order: 'hot',
        },
      }
    )
    .then((res) => {
      return res.data.res.vertical
    })
    .catch((err) => {
      console.log(err)
    })
  await downloadFile(data)
  await sleep(3000)
  if (skip < 1000) {
    load(skip + 30)
  } else {
    console.log('下载完成')
  }
}

async function downloadFile(data) {
  for (let index = 0; index < data.length; index++) {
    const item = data[index]

    // Path at which image will get downloaded
    const filePath = `${__dirname}/images`

    // 使用nodeJS下载文件
    /* 1.使用内置模块https和fs
       const fs = require('fs')
       const https = require('https')

       const url = 'GEG.jpeg'

       https.get(url, (res) => {
         const path = `${__dirname}/files/img.jpeg`
         const filePath = fs.createWriteStream(path)
         res.pipe(filePath)

         filePath.on('finish', () => {
           filePath.close()
           console.log('completed)
         })
       })
       2.使用download模块
    */
    await download(item.wp, filePath, {
      filename: item.id + '.jpeg',
      headers,
    }).then(() => {
      console.log(`Download ${item.id} Completed`)
      return
    })
  }
}

load()