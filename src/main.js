import './scripts/data';
import './scripts/inject';
import './scripts/api-fetch';

// extensions:
import './extensions/sidebar';
import './extensions/notices';

import React from 'react';
import PropTypes from 'prop-types';
import noop from 'noop';
// -------------------- i18n ----------------------
import cn from './i18n/gutenberg-cn';
import { setLocaleData } from '@wordpress/i18n';

setLocaleData(cn);
// -------------------- END - i18n ----------------------

// -------------------- content ----------------------
import spring from './content';

// -------------------- END - content ----------------------
import Blocks from './scripts/blocks';
import { removeFilter } from '@wordpress/hooks';
import './styles/style.scss';
import Header from './overrides/header';
import {
  subscribe,
  select,
  dispatch
} from '@wordpress/data';
import addStyleNames from './scripts/addStyle';

const { editPost, element, domReady } = window.wp;
const { unmountComponentAtNode } = element;

wp.domReady(() => {
  // addStyleNames();
});

export default class extends React.Component {
  static propTypes = {
    value: PropTypes.object,
    onChange: PropTypes.func,
    onFetch: PropTypes.func
  };

  static defaultProps = {
    value: {
      title: '',
      content: ''
    },
    onChange: noop,
    onFetch: noop
  };

  get title() {
    const staticTitle = select('core/editor').getCurrentPost().title;
    const dynamicTitle = select('core/editor').getPostEdits().title;
    return dynamicTitle || staticTitle;
  }

  get content() {
    return select('core/editor').getEditedPostContent();
  }

  componentWillMount() {
    localStorage.setItem('WP_DATA_USER_1', JSON.stringify({
      'core/edit-post': {
        'preferences': {
          'isGeneralSidebarDismissed': false,
          'panels': { 'post-status': { 'opened': true } },
          'features': {
            'fixedToolbar': false,
            'focusMode': true
          },
          'editorMode': 'visual',
          'pinnedPluginItems': {},
          'hiddenBlockTypes': []
        }
      }
    }));
  }

  componentDidMount() {
    window.sss = this;
    this.attachEvents();
    this.initValue(this.props);
    this.initFilter();
    this.initEditor();
    this._lastTitle = this.title;
    this._lastContent = this.title;
  }

  componentWillUnmount() {
    try {
      this.detachEvents();
      Blocks.unregisterAll();
      const target = document.getElementById('editor');
      target && unmountComponentAtNode(target);
    } catch (e) {
      console.info('ERROR in GTB_EDITOR', e);
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const { title, content } = nextProps.value;
    if (this._lastTitle !== title || this._lastContent !== content) {
      // this.initValue(nextProps);
      const currentPost = wp.data.select('core/editor').getCurrentPost();
      currentPost.title = title;
      currentPost.content = content;
      this.initValue(nextProps);
      const initialBlocks = wp.blocks.parse(content);
      wp.data.dispatch('core/editor').resetEditorBlocks(initialBlocks);
    }
  }

  componentDidCatch(error, errorInfo) {
    console.info('[Editor Crash]:', error, errorInfo);
  }

  attachEvents() {
    const initialPostStatus = select('core/editor').getEditedPostAttribute('status');
    const { onChange } = this.props;
    if ('publish' !== initialPostStatus) {
      // Watch for the publish event.
      this.unssubscribe = subscribe(() => {
        const content = this.content;
        const title = this.title;
        if (this._lastTitle !== title || this._lastContent !== content) {
          const value = { title, content };
          if (title && content) {
            onChange({ target: { value } });
            // update to latest:
            this._lastTitle = this.title;
            this._lastContent = this.content;
          }
        }
      });
    }
  }

  detachEvents() {
    this.unssubscribe();
  }

  initValue(inProps) {
    const { value } = inProps;
    localStorage.setItem(
      'g-editor-page',
      JSON.stringify({
        id: 1,
        status: 'draft',
        title: { raw: value.title },
        content: {
          raw: spring
        },
        type: 'page'
      })
    );
  }

  initFilter() {
    removeFilter(
      'editor.MediaUpload',
      'core/edit-post/components/media-upload/replace-media-upload'
    );
  }

  initEditor() {
    const settings = {
      alignWide: true,
      availableTemplates: [],
      allowedBlockTypes: true,
      disableCustomColors: false,
      disablePostFormats: true,
      titlePlaceholder: 'Add title',
      bodyPlaceholder: '',
      isRTL: false,
      autosaveInterval: 10,
      postLock: {
        isLocked: false
      },
      canPublish: false,
      canSave: true,
      canAutosave: true,
      mediaLibrary: false,
      focusMode: true
    };

    // unmount before register:
    domReady(() => {
      console.log('dom ready');
      editPost.initializeEditor('editor', 'page', 1, settings, {});
      // Blocks.unregisterUnused();
    });
  }

  render() {
    console.log('update1');

    return (
      <div className="gutenberg-editor-wrapper">
        <Header/>
        <div id="editor" className="gutenberg__editor"/>
      </div>
    );
  }
}
