const po2json = require('po2json');
const fs = require('fs');

const referencePath = './asset/all.json'
const translatePath = './translate/gutenberg.pot'
const outputPath = './translate/gutenberg-cn.json'

function getTranslateJson(path) {
  return new Promise(((resolve, reject) => {
    po2json.parseFile(path, function (err, jsonData) {
      if (err) return reject(err)

      return resolve(jsonData)
    });
  }))
}

function getReferenceJson(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) throw reject();
      const referenceJson = JSON.parse(data)
      resolve(referenceJson)
    });
  })
}

Promise.all([getReferenceJson(referencePath), getTranslateJson(translatePath)]).then((res) => {
  const referenceJson = res[0]
  const translateJson = res[1]


  for (let key in translateJson) {
    if (key in referenceJson && translateJson[key][0] === null) {
      translateJson[key] = [referenceJson[key][1], null]
    }
  }
  fs.writeFile(outputPath, JSON.stringify(translateJson), 'utf-8', (err) => {
    if (err) throw err;
    console.log('文件已被保存');
  });
})
