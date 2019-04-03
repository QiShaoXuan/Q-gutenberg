Wordpress-gutenberg editor just run by JavaScript

## run in local
```bash
npm install
npm run dev
```

### record changes from 'gutenberg-js'

#### override scss variables

1. `npm i chalk mkdirp node-sass postcss deasync @wordpress/postcss-themes rtlcss -D`
2. add `"build-scss": "node ./build/packages/build.js"` in `package.json`
3. `npm run build-scss`

scss variables is in `/src/overrides/stylesheets`, it will build all scss file in gutenberg into `styles/packages`

#### i18n

1. `npm run build` or `npm run dev`
2. find the `gutenberg.pot` in `./languages`, and put it in `/i18n/translate`
3. translate in `/i18n`
4. put the translated json to `/src/i18n`

TODO:
- some word has not translate, may cause the js load, must not json file
