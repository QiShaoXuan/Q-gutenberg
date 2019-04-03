const fs = require('fs');
const path = require('path');
const glob = require('glob');
const sass = require( 'node-sass' );
const deasync = require( 'deasync' );


const entry = '../src/styles/style.scss';
const output = './aa.css'

function buildPackageScss(packagePath) {
  const srcDir = path.resolve(entry);
  const scssFile = glob.sync(srcDir)[0];

  buildScssFile(scssFile)
}

function buildScssFile(styleFile) {
  const builtSass = sass.renderSync( {
    file: styleFile,
  } );

  console.log(builtSass.css)

  // const result = deasync(postCSSSync)();
  fs.writeFileSync(output, builtSass.css);

}

buildPackageScss()
