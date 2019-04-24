import './scripts/data';
// import './scripts/inject';
import './overrides/js/index';
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
import * as data from '@wordpress/data';

import './plugin/format-bubble/index'
import './plugin/color/index'
// import './plugin/sub-sup/index';
import {overrideCoreBlock} from './untils'

if (data.select('core/edit-post').isFeatureActive('focusMode') === false) {
  data.dispatch('core/edit-post').toggleFeature('focusMode');
}
// setLocaleData(cn);
// -------------------- END - i18n ----------------------

// -------------------- content ----------------------
import spring from './content';

// -------------------- END - content ----------------------

// -------------------- toolbar ----------------------
import AlignmentToolbar from './toolbar/alignment';

// -------------------- END - toolbar ----------------------
// -------------------- paragraph ----------------------
import { ParagraphSettings } from './plugin/paragraph/index';

// -------------------- END - paragraph ----------------------
// -------------------- advanced ----------------------
const { registerFormatType, applyFormat, removeFormat, getActiveFormat, toggleFormat } = window.wp.richText;
const { RichTextToolbarButton, RichTextShortcut } = window.wp.editor;

const { createElement, Fragment } = window.wp.element;
// -------------------- END - advanced ----------------------
import Blocks from './scripts/blocks';
import { removeFilter } from '@wordpress/hooks';
import './styles/style.scss';
import Header from './overrides/header';
import {
  subscribe,
  select,
  dispatch
} from '@wordpress/data';

const { editPost, element, domReady } = window.wp;
const { unmountComponentAtNode } = element;


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
      disablePostFormats: false,
      titlePlaceholder: 'Add title',
      bodyPlaceholder: 'Insert your custom block',
      isRTL: false,
      autosaveInterval: 0,
      postLock: {
        isLocked: false
      },
      canPublish: false,
      canSave: true,
      canAutosave: true,
      mediaLibrary: true
    };

    // unmount before register:
    domReady(() => {
      editPost.initializeEditor('editor', 'page', 1, settings, {});

      // -------------------- icon ----------------------
      var el = wp.element.createElement;
      var img = el('img',{
        src:'https://qishaoxuan.github.io/css_tricks/images/favicon.png',
        width: 20,
        height: 20,
      })
      overrideCoreBlock('core/paragraph','icon',img)
      overrideCoreBlock('core/paragraph','edit',(params) => {

      })
      // -------------------- END - icon ----------------------
// -------------------- override ----------------------

// -------------------- END - override ----------------------

      // -------------------- toolbar ----------------------
      var MyCustomButton = function(props) {
        return wp.element.createElement(
          wp.editor.RichTextToolbarButton, {
            icon: 'editor-code',
            title: 'Sample output',
            onClick: function() {
              props.onChange(wp.richText.toggleFormat(
                props.value,
                { type: 'my-custom-format/sample-output' }
              ));
            },
            isActive: props.isActive
          }
        );
      };
      wp.richText.registerFormatType(
        'toolbar-controls/sample-output', {
          title: 'Sample output',
          tagName: 'samp',
          className: null,
          edit: MyCustomButton
        }
      );


      // -------------------- END - toolbar ----------------------

      // Blocks.unregisterUnused();
    });
  }

  render() {
    console.log('render update 3:29');

    return (
      <div className="gutenberg-editor-wrapper">
        <Header/>
        <div id="editor" className="gutenberg__editor"/>
      </div>
    );
  }
}
