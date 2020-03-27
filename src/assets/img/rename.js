const fs = require('fs')
const path = require('path')
const readDirArry = fs.readdirSync('./')


console.log(readDirArry)


for (let i =0; i < readDirArry.length; i++) {
  let filename = readDirArry[i]
  let suffix = filename.substr(-4)
  if (suffix === '.jpg' || suffix === '.png') {
    let arr = filename.split('.') 
    if (arr.length === 3) {
      fs.renameSync(filename, arr[0] + '.' + arr[2])
    }
  }
}

console.log('重命名完成')


