import apiFetch from '@wordpress/api-fetch';
import config from './config';

const { page, pageType, themes } = config;
const fetch = (options) => {
  let res = {};
  let item = {};

  switch (options.path) {
    case '/wp/v2/types?context=edit':
      res = { page: pageType };
      break;
    case '/wp/v2/types/page?context=edit':
      res = pageType;
      break;
    case '/wp/v2/themes?status=active':
      res = themes;
      break;
    case '/wp/v2/pages/1?context=edit':
      res = JSON.parse(localStorage.getItem('g-editor-page')) || page;
      break;
    case '/wp/v2/pages/1':
    case '/wp/v2/pages/1/autosaves':
      console.log('options.data:->', options.data);
      item = JSON.parse(localStorage.getItem('g-editor-page')) || page;
      if (options.data) {
        // window.save(options.data.content);
        item = {
          ...item,
          // update content
          content: {
            raw: options.data.content,
            rendered: options.data.content.replace(/(<!--.*?-->)/g, '')
          }
        };

        localStorage.setItem('g-editor-page', JSON.stringify(item));
      }

      res = item;
      break;
    case '/wp/v2/media':
      if (options.method === 'OPTIONS') {
        res = {
          headers: {
            get: (value) => {
              return 'allow' === value ? ['POST'] : [];
            }
          }
        };
      } else {
        console.log('upload:->', options.body.get('file'));
      }
      break;
  }

  return new Promise((resolve) => {
    resolve(res);
  });
};

apiFetch.use(fetch);
