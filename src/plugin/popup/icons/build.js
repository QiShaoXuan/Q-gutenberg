const cheerio = require('cheerio');
const fs = require('fs');

// const MyIcon = () => (
//   <SVG
//     viewBox="0 0 24 24"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <Path fill="none" d="M0 0h24v24H0V0z" />
//     <G>
//       <Path d="M20 4v12H8V4h12m0-2H8L6 4v12l2 2h12l2-2V4l-2-2z" />
//       <Path d="M12 12l1 2 3-3 3 4H9z" />
//       <Path d="M2 6v14l2 2h14v-2H4V6H2z" />
//     </G>
//   </SVG>
// );
//
//
// fs.readFile('./', 'utf8', (err,data) => {
//   console.log(err,data)
//
//
// });

let JS = `import { G, Path, SVG } from '@wordpress/components';`;

fs.readdir('./', (err, files) => {
  const svgs = files.filter((filename) => (/svg$/.test(filename) ? filename : false));
  console.log();

  svgs.forEach((svg) => {});

  fs.readFile(`./A.svg`, 'utf8', (err, data) => {
    const $ = cheerio.load(data);
    $('desc').remove();
    $('title').remove();
    console.log($('body').html());
  });
});

// function setIcon() {
//   const MyIcon = () => (
//     <SVG
//       viewBox="0 0 24 24"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <Path fill="none" d="M0 0h24v24H0V0z" />
//       <G>
//         <Path d="M20 4v12H8V4h12m0-2H8L6 4v12l2 2h12l2-2V4l-2-2z" />
//         <Path d="M12 12l1 2 3-3 3 4H9z" />
//         <Path d="M2 6v14l2 2h14v-2H4V6H2z" />
//       </G>
//     </SVG>
//   );
// }
