const po2json = require('po2json');
const fs = require('fs');
// po2json.parseFile('./languages/aaa.pot', function(err, jsonData) {
//   // do something interesting ...
//   const json = JSON.stringify(jsonData)
//   fs.writeFile('cn.json', json, 'utf-8', (err) => {
//     if (err) throw err;
//     console.log('文件已被保存');
//   });
// });



fs.readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(data);
});
