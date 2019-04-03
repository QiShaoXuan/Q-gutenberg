/**
 * WordPress dependencies
 */
import * as hooks from '@wordpress/hooks';
import * as autop from '@wordpress/autop';
import * as blob from '@wordpress/blob';
import * as blockSerializationDefaultParser from '@wordpress/block-serialization-default-parser';

import * as escapeHtml from '@wordpress/escape-html';
import * as element from '@wordpress/element';
import * as isShallowEqual from '@wordpress/is-shallow-equal';
import * as compose from '@wordpress/compose';
import * as reduxRoutine from '@wordpress/redux-routine';
import * as data from '@wordpress/data';

import * as dom from '@wordpress/dom';
import * as htmlEntities from '@wordpress/html-entities';
import * as i18n from '@wordpress/i18n';
import * as shortcode from '@wordpress/shortcode';
import * as blocks from '@wordpress/blocks';
import * as editor from '@wordpress/editor';

import domReady from '@wordpress/dom-ready';
import * as a11y from '@wordpress/a11y';
import * as url from '@wordpress/url';
import apiFetch from '@wordpress/api-fetch';

import deprecated from '@wordpress/deprecated';
import * as keycodes from '@wordpress/keycodes';
import * as richText from '@wordpress/rich-text';
import * as components from '@wordpress/components';
import * as coreData from '@wordpress/core-data';
import * as date from '@wordpress/date';
import * as notices from '@wordpress/notices';
import * as nux from '@wordpress/nux';
import * as tokenList from '@wordpress/token-list';
import * as viewport from '@wordpress/viewport';
import * as wordcount from '@wordpress/wordcount';
import * as plugins from '@wordpress/plugins';
import * as blockLibrary from '@wordpress/block-library';
import * as editPost from '@wordpress/edit-post';
import * as formatLibrary from '@wordpress/format-library';

// Set global wp
window.wp = {
  a11y,
  apiFetch,
  autop,
  blob,
  blockLibrary,
  blockSerializationDefaultParser,
  blocks,
  components,
  compose,
  coreData,
  data,
  date,
  editor,
  deprecated,
  dom,
  domReady,
  editPost,
  element,
  escapeHtml,
  formatLibrary,
  hooks,
  htmlEntities,
  i18n,
  isShallowEqual,
  keycodes,
  notices,
  nux,
  plugins,
  reduxRoutine,
  richText,
  shortcode,
  tokenList,
  url,
  viewport,
  wordcount
};
