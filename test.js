const fs = require('fs');
let str = ''
fs.readdir('./src/styles/packages', (err, files) => {
  files.forEach(file => {
    if(file.indexOf('rtl') === -1){
      str += `@import "./packages/${file}";\n`
    }
  });
  
  console.log(str)
  
})
