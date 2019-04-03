(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@wordpress/a11y"), require("@wordpress/api-fetch"), require("@wordpress/autop"), require("@wordpress/blob"), require("@wordpress/block-editor"), require("@wordpress/block-library"), require("@wordpress/block-serialization-default-parser"), require("@wordpress/blocks"), require("@wordpress/components"), require("@wordpress/compose"), require("@wordpress/core-data"), require("@wordpress/data"), require("@wordpress/date"), require("@wordpress/deprecated"), require("@wordpress/dom"), require("@wordpress/dom-ready"), require("@wordpress/edit-post"), require("@wordpress/edit-post/build/components/header/more-menu"), require("@wordpress/editor"), require("@wordpress/element"), require("@wordpress/escape-html"), require("@wordpress/format-library"), require("@wordpress/hooks"), require("@wordpress/html-entities"), require("@wordpress/i18n"), require("@wordpress/is-shallow-equal"), require("@wordpress/keycodes"), require("@wordpress/notices"), require("@wordpress/nux"), require("@wordpress/plugins"), require("@wordpress/redux-routine"), require("@wordpress/rich-text"), require("@wordpress/shortcode"), require("@wordpress/token-list"), require("@wordpress/url"), require("@wordpress/viewport"), require("@wordpress/wordcount"), require("noop"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["@wordpress/a11y", "@wordpress/api-fetch", "@wordpress/autop", "@wordpress/blob", "@wordpress/block-editor", "@wordpress/block-library", "@wordpress/block-serialization-default-parser", "@wordpress/blocks", "@wordpress/components", "@wordpress/compose", "@wordpress/core-data", "@wordpress/data", "@wordpress/date", "@wordpress/deprecated", "@wordpress/dom", "@wordpress/dom-ready", "@wordpress/edit-post", "@wordpress/edit-post/build/components/header/more-menu", "@wordpress/editor", "@wordpress/element", "@wordpress/escape-html", "@wordpress/format-library", "@wordpress/hooks", "@wordpress/html-entities", "@wordpress/i18n", "@wordpress/is-shallow-equal", "@wordpress/keycodes", "@wordpress/notices", "@wordpress/nux", "@wordpress/plugins", "@wordpress/redux-routine", "@wordpress/rich-text", "@wordpress/shortcode", "@wordpress/token-list", "@wordpress/url", "@wordpress/viewport", "@wordpress/wordcount", "noop", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["GutenbergEditor"] = factory(require("@wordpress/a11y"), require("@wordpress/api-fetch"), require("@wordpress/autop"), require("@wordpress/blob"), require("@wordpress/block-editor"), require("@wordpress/block-library"), require("@wordpress/block-serialization-default-parser"), require("@wordpress/blocks"), require("@wordpress/components"), require("@wordpress/compose"), require("@wordpress/core-data"), require("@wordpress/data"), require("@wordpress/date"), require("@wordpress/deprecated"), require("@wordpress/dom"), require("@wordpress/dom-ready"), require("@wordpress/edit-post"), require("@wordpress/edit-post/build/components/header/more-menu"), require("@wordpress/editor"), require("@wordpress/element"), require("@wordpress/escape-html"), require("@wordpress/format-library"), require("@wordpress/hooks"), require("@wordpress/html-entities"), require("@wordpress/i18n"), require("@wordpress/is-shallow-equal"), require("@wordpress/keycodes"), require("@wordpress/notices"), require("@wordpress/nux"), require("@wordpress/plugins"), require("@wordpress/redux-routine"), require("@wordpress/rich-text"), require("@wordpress/shortcode"), require("@wordpress/token-list"), require("@wordpress/url"), require("@wordpress/viewport"), require("@wordpress/wordcount"), require("noop"), require("prop-types"));
	else
		root["GutenbergEditor"] = factory(root["@wordpress/a11y"], root["@wordpress/api-fetch"], root["@wordpress/autop"], root["@wordpress/blob"], root["@wordpress/block-editor"], root["@wordpress/block-library"], root["@wordpress/block-serialization-default-parser"], root["@wordpress/blocks"], root["@wordpress/components"], root["@wordpress/compose"], root["@wordpress/core-data"], root["@wordpress/data"], root["@wordpress/date"], root["@wordpress/deprecated"], root["@wordpress/dom"], root["@wordpress/dom-ready"], root["@wordpress/edit-post"], root["@wordpress/edit-post/build/components/header/more-menu"], root["@wordpress/editor"], root["@wordpress/element"], root["@wordpress/escape-html"], root["@wordpress/format-library"], root["@wordpress/hooks"], root["@wordpress/html-entities"], root["@wordpress/i18n"], root["@wordpress/is-shallow-equal"], root["@wordpress/keycodes"], root["@wordpress/notices"], root["@wordpress/nux"], root["@wordpress/plugins"], root["@wordpress/redux-routine"], root["@wordpress/rich-text"], root["@wordpress/shortcode"], root["@wordpress/token-list"], root["@wordpress/url"], root["@wordpress/viewport"], root["@wordpress/wordcount"], root["noop"], root["prop-types"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__wordpress_a11y__, __WEBPACK_EXTERNAL_MODULE__wordpress_api_fetch__, __WEBPACK_EXTERNAL_MODULE__wordpress_autop__, __WEBPACK_EXTERNAL_MODULE__wordpress_blob__, __WEBPACK_EXTERNAL_MODULE__wordpress_block_editor__, __WEBPACK_EXTERNAL_MODULE__wordpress_block_library__, __WEBPACK_EXTERNAL_MODULE__wordpress_block_serialization_default_parser__, __WEBPACK_EXTERNAL_MODULE__wordpress_blocks__, __WEBPACK_EXTERNAL_MODULE__wordpress_components__, __WEBPACK_EXTERNAL_MODULE__wordpress_compose__, __WEBPACK_EXTERNAL_MODULE__wordpress_core_data__, __WEBPACK_EXTERNAL_MODULE__wordpress_data__, __WEBPACK_EXTERNAL_MODULE__wordpress_date__, __WEBPACK_EXTERNAL_MODULE__wordpress_deprecated__, __WEBPACK_EXTERNAL_MODULE__wordpress_dom__, __WEBPACK_EXTERNAL_MODULE__wordpress_dom_ready__, __WEBPACK_EXTERNAL_MODULE__wordpress_edit_post__, __WEBPACK_EXTERNAL_MODULE__wordpress_edit_post_build_components_header_more_menu__, __WEBPACK_EXTERNAL_MODULE__wordpress_editor__, __WEBPACK_EXTERNAL_MODULE__wordpress_element__, __WEBPACK_EXTERNAL_MODULE__wordpress_escape_html__, __WEBPACK_EXTERNAL_MODULE__wordpress_format_library__, __WEBPACK_EXTERNAL_MODULE__wordpress_hooks__, __WEBPACK_EXTERNAL_MODULE__wordpress_html_entities__, __WEBPACK_EXTERNAL_MODULE__wordpress_i18n__, __WEBPACK_EXTERNAL_MODULE__wordpress_is_shallow_equal__, __WEBPACK_EXTERNAL_MODULE__wordpress_keycodes__, __WEBPACK_EXTERNAL_MODULE__wordpress_notices__, __WEBPACK_EXTERNAL_MODULE__wordpress_nux__, __WEBPACK_EXTERNAL_MODULE__wordpress_plugins__, __WEBPACK_EXTERNAL_MODULE__wordpress_redux_routine__, __WEBPACK_EXTERNAL_MODULE__wordpress_rich_text__, __WEBPACK_EXTERNAL_MODULE__wordpress_shortcode__, __WEBPACK_EXTERNAL_MODULE__wordpress_token_list__, __WEBPACK_EXTERNAL_MODULE__wordpress_url__, __WEBPACK_EXTERNAL_MODULE__wordpress_viewport__, __WEBPACK_EXTERNAL_MODULE__wordpress_wordcount__, __WEBPACK_EXTERNAL_MODULE_noop__, __WEBPACK_EXTERNAL_MODULE_prop_types__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var _scripts_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/api-fetch */ \"./src/scripts/api-fetch.js\");\n/* harmony import */ var _scripts_inject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/inject */ \"./src/scripts/inject.js\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var noop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! noop */ \"noop\");\n/* harmony import */ var noop__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(noop__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _overrides_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./overrides/header */ \"./src/overrides/header.js\");\n/* harmony import */ var _scripts_blocks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/blocks */ \"./src/scripts/blocks.js\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// import './scripts/data';\n\n\n // extensions:\n\n\n\n\n\n\n\nvar _window$wp = window.wp,\n    editPost = _window$wp.editPost,\n    element = _window$wp.element;\nvar unmountComponentAtNode = element.unmountComponentAtNode;\n\nvar _default =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(_default, _React$Component);\n\n  function _default() {\n    _classCallCheck(this, _default);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));\n  }\n\n  _createClass(_default, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.attachEvents();\n      this.initValue(this.props);\n      this.initFilter();\n      this.initEditor();\n      this._lastTitle = this.title;\n      this._lastContent = this.title;\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      try {\n        this.detachEvents();\n        _scripts_blocks__WEBPACK_IMPORTED_MODULE_7__[\"default\"].unregisterAll();\n        var target = document.getElementById('editor');\n        target && unmountComponentAtNode(target);\n      } catch (e) {\n        console.info('ERROR in GTB_EDITOR', e);\n      }\n    }\n  }, {\n    key: \"componentWillReceiveProps\",\n    value: function componentWillReceiveProps(nextProps, nextContext) {\n      var _nextProps$value = nextProps.value,\n          title = _nextProps$value.title,\n          content = _nextProps$value.content;\n\n      if (this._lastTitle !== title || this._lastContent !== content) {\n        // this.initValue(nextProps);\n        var currentPost = wp.data.select('core/editor').getCurrentPost();\n        currentPost.title = title;\n        currentPost.content = content;\n        this.initValue(nextProps);\n        var initialBlocks = wp.blocks.parse(content);\n        wp.data.dispatch('core/editor').resetEditorBlocks(initialBlocks);\n      }\n    }\n  }, {\n    key: \"componentDidCatch\",\n    value: function componentDidCatch(error, errorInfo) {\n      console.info('[Editor Crash]:', error, errorInfo);\n    }\n  }, {\n    key: \"attachEvents\",\n    value: function attachEvents() {\n      var _this = this;\n\n      var initialPostStatus = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__[\"select\"])('core/editor').getEditedPostAttribute('status');\n      var onChange = this.props.onChange;\n\n      if ('publish' !== initialPostStatus) {\n        // Watch for the publish event.\n        this.unssubscribe = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__[\"subscribe\"])(function () {\n          var content = _this.content;\n          var title = _this.title;\n\n          if (_this._lastTitle !== title || _this._lastContent !== content) {\n            var value = {\n              title: title,\n              content: content\n            };\n\n            if (title && content) {\n              onChange({\n                target: {\n                  value: value\n                }\n              }); // update to latest:\n\n              _this._lastTitle = _this.title;\n              _this._lastContent = _this.content;\n            }\n          }\n        });\n      }\n    }\n  }, {\n    key: \"detachEvents\",\n    value: function detachEvents() {\n      this.unssubscribe();\n    }\n  }, {\n    key: \"initValue\",\n    value: function initValue(inProps) {\n      var value = inProps.value;\n      localStorage.setItem('g-editor-page', JSON.stringify({\n        id: 1,\n        status: 'draft',\n        title: {\n          raw: value.title\n        },\n        content: {\n          raw: value.content\n        },\n        type: 'page'\n      }));\n    }\n  }, {\n    key: \"initFilter\",\n    value: function initFilter() {\n      Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__[\"removeFilter\"])('editor.MediaUpload', 'core/edit-post/components/media-upload/replace-media-upload');\n    }\n  }, {\n    key: \"initEditor\",\n    value: function initEditor() {\n      var settings = {\n        alignWide: true,\n        availableTemplates: [],\n        allowedBlockTypes: true,\n        disableCustomColors: false,\n        disablePostFormats: true,\n        titlePlaceholder: 'Add title',\n        bodyPlaceholder: '',\n        isRTL: false,\n        autosaveInterval: 10,\n        postLock: {\n          isLocked: false\n        },\n        canPublish: false,\n        canSave: true,\n        canAutosave: true,\n        mediaLibrary: false\n      }; // unmount before register:\n      // domReady(() => {\n\n      console.log('dom ready');\n      editPost.initializeEditor('editor', 'page', 1, settings, {});\n      _scripts_blocks__WEBPACK_IMPORTED_MODULE_7__[\"default\"].unregisterUnused(); // });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", {\n        className: \"gutenberg-editor-wrapper\"\n      }, React.createElement(_overrides_header__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null), React.createElement(\"div\", {\n        id: \"editor\",\n        className: \"gutenberg__editor\"\n      }));\n    }\n  }, {\n    key: \"title\",\n    get: function get() {\n      var staticTitle = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__[\"select\"])('core/editor').getCurrentPost().title;\n      var dynamicTitle = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__[\"select\"])('core/editor').getPostEdits().title;\n      return dynamicTitle || staticTitle;\n    }\n  }, {\n    key: \"content\",\n    get: function get() {\n      return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__[\"select\"])('core/editor').getEditedPostContent();\n    }\n  }]);\n\n  return _default;\n}(React.Component);\n\n_defineProperty(_default, \"propTypes\", {\n  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,\n  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,\n  onFetch: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func\n});\n\n_defineProperty(_default, \"defaultProps\", {\n  value: {\n    title: '',\n    content: ''\n  },\n  onChange: noop__WEBPACK_IMPORTED_MODULE_4___default.a,\n  onFetch: noop__WEBPACK_IMPORTED_MODULE_4___default.a\n});\n\n\n\n//# sourceURL=webpack://GutenbergEditor/./src/main.js?");

/***/ }),

/***/ "./src/overrides/header.js":
/*!*********************************!*\
  !*** ./src/overrides/header.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/editor */ \"@wordpress/editor\");\n/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ \"@wordpress/compose\");\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _wordpress_edit_post_build_components_header_more_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/edit-post/build/components/header/more-menu */ \"@wordpress/edit-post/build/components/header/more-menu\");\n/* harmony import */ var _wordpress_edit_post_build_components_header_more_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post_build_components_header_more_menu__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\n\n\nfunction Header(_ref) {\n  var closeGeneralSidebar = _ref.closeGeneralSidebar,\n      hasActiveMetaboxes = _ref.hasActiveMetaboxes,\n      isEditorSidebarOpened = _ref.isEditorSidebarOpened,\n      isPublishSidebarOpened = _ref.isPublishSidebarOpened,\n      isSaving = _ref.isSaving,\n      openGeneralSidebar = _ref.openGeneralSidebar;\n  var toggleGeneralSidebar = isEditorSidebarOpened ? closeGeneralSidebar : openGeneralSidebar;\n  return React.createElement(\"header\", {\n    role: \"region\"\n    /* translators: accessibility text for the top bar landmark region. */\n    ,\n    className: \"edit-post-header gutenberg-editor-header\",\n    tabIndex: \"-1\"\n  }, React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__[\"NavigableToolbar\"], {\n    className: \"edit-post-header-toolbar\"\n  }, React.createElement(\"img\", {\n    alt: 'logo',\n    width: '32',\n    style: {\n      margin: '0 10px'\n    },\n    src: 'https://s26793.pcdn.co/wp-content/uploads/2018/05/logo.png'\n  }), React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__[\"Inserter\"], {\n    position: \"bottom right\"\n  }), React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__[\"EditorHistoryUndo\"], null), React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__[\"EditorHistoryRedo\"], null), React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__[\"TableOfContents\"], {\n    hasOutlineItemsDisabled: true\n  }), React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__[\"BlockNavigationDropdown\"], {\n    isDisabled: false\n  }), React.createElement(\"div\", {\n    className: \"edit-post-header-toolbar__block-toolbar\"\n  }, React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__[\"BlockToolbar\"], null))), React.createElement(\"div\", {\n    className: \"edit-post-header__settings\"\n  }, !isPublishSidebarOpened && // This button isn't completely hidden by the publish sidebar.\n  // We can't hide the whole toolbar when the publish sidebar is open because\n  // we want to prevent mounting/unmounting the PostPublishButtonOrToggle DOM node.\n  // We track that DOM node to return focus to the PostPublishButtonOrToggle\n  // when the publish sidebar has been closed.\n  React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__[\"PostSavedState\"], {\n    forceIsDirty: hasActiveMetaboxes,\n    forceIsSaving: isSaving\n  }), React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__[\"IconButton\"], {\n    icon: \"admin-generic\",\n    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__[\"__\"])('Settings'),\n    onClick: toggleGeneralSidebar,\n    isToggled: isEditorSidebarOpened\n  }), React.createElement(_wordpress_edit_post_build_components_header_more_menu__WEBPACK_IMPORTED_MODULE_5___default.a, null)));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__[\"compose\"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__[\"withSelect\"])(function (select) {\n  return {\n    hasActiveMetaboxes: select('core/edit-post').hasMetaBoxes(),\n    isEditorSidebarOpened: select('core/edit-post').isEditorSidebarOpened(),\n    isPublishSidebarOpened: select('core/edit-post').isPublishSidebarOpened(),\n    isSaving: select('core/edit-post').isSavingMetaBoxes()\n  };\n}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__[\"withDispatch\"])(function (dispatch, ownProps, _ref2) {\n  var select = _ref2.select;\n\n  var _select = select('core/block-editor'),\n      getBlockSelectionStart = _select.getBlockSelectionStart;\n\n  var _dispatch = dispatch('core/edit-post'),\n      _openGeneralSidebar = _dispatch.openGeneralSidebar,\n      closeGeneralSidebar = _dispatch.closeGeneralSidebar;\n\n  return {\n    openGeneralSidebar: function openGeneralSidebar() {\n      return _openGeneralSidebar(getBlockSelectionStart() ? 'edit-post/block' : 'edit-post/document');\n    },\n    closeGeneralSidebar: closeGeneralSidebar\n  };\n}))(Header));\n\n//# sourceURL=webpack://GutenbergEditor/./src/overrides/header.js?");

/***/ }),

/***/ "./src/scripts/api-fetch.js":
/*!**********************************!*\
  !*** ./src/scripts/api-fetch.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ \"@wordpress/api-fetch\");\n/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/scripts/config.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar page = _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].page,\n    pageType = _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].pageType,\n    themes = _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].themes;\n\nvar fetch = function fetch(options) {\n  var res = {};\n  var item = {};\n\n  switch (options.path) {\n    case '/wp/v2/types?context=edit':\n      res = {\n        page: pageType\n      };\n      break;\n\n    case '/wp/v2/types/page?context=edit':\n      res = pageType;\n      break;\n\n    case '/wp/v2/themes?status=active':\n      res = themes;\n      break;\n\n    case '/wp/v2/pages/1?context=edit':\n      res = JSON.parse(localStorage.getItem('g-editor-page')) || page;\n      break;\n\n    case '/wp/v2/pages/1':\n    case '/wp/v2/pages/1/autosaves':\n      console.log('options.data:->', options.data);\n      item = JSON.parse(localStorage.getItem('g-editor-page')) || page;\n\n      if (options.data) {\n        // window.save(options.data.content);\n        item = _objectSpread({}, item, {\n          // update content\n          content: {\n            raw: options.data.content,\n            rendered: options.data.content.replace(/(<!--.*?-->)/g, '')\n          }\n        });\n        localStorage.setItem('g-editor-page', JSON.stringify(item));\n      }\n\n      res = item;\n      break;\n\n    case '/wp/v2/media':\n      if (options.method === 'OPTIONS') {\n        res = {\n          headers: {\n            get: function get(value) {\n              return 'allow' === value ? ['POST'] : [];\n            }\n          }\n        };\n      } else {\n        console.log('upload:->', options.body.get('file'));\n      }\n\n      break;\n  }\n\n  return new Promise(function (resolve) {\n    resolve(res);\n  });\n};\n\n_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default.a.use(fetch);\n\n//# sourceURL=webpack://GutenbergEditor/./src/scripts/api-fetch.js?");

/***/ }),

/***/ "./src/scripts/blocks.js":
/*!*******************************!*\
  !*** ./src/scripts/blocks.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar allowedBlocks = ['core/paragraph', 'core/image', 'core/heading', 'core/list', 'core/quote', 'core/code', 'core/columns', 'core/column', 'core/cover', 'core/media-text', 'core/separator', 'core/block', 'core/spacer', 'core/subhead', 'core/table', 'core/template', 'core/text-columns', 'core/verse']; // https://wordpress.org/gutenberg/handbook/designers-developers/developers/filters/block-filters/\n// https://wordpress.org/gutenberg/handbook/designers-developers/developers/filters/editor-filters/\n// add_filter( 'allowed_block_types', 'my_plugin_allowed_block_types', 10, 2 );\n\nvar _default =\n/*#__PURE__*/\nfunction () {\n  function _default() {\n    _classCallCheck(this, _default);\n  }\n\n  _createClass(_default, null, [{\n    key: \"unregisterUnused\",\n    value: function unregisterUnused() {\n      Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__[\"getBlockTypes\"])().forEach(function (item) {\n        if (allowedBlocks.indexOf(item.name) === -1) {\n          Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__[\"unregisterBlockType\"])(item.name);\n        }\n      });\n    }\n  }, {\n    key: \"unregisterAll\",\n    value: function unregisterAll() {\n      Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__[\"getBlockTypes\"])().forEach(function (item) {\n        Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__[\"unregisterBlockType\"])(item.name);\n      });\n    }\n  }]);\n\n  return _default;\n}();\n\n\n\n//# sourceURL=webpack://GutenbergEditor/./src/scripts/blocks.js?");

/***/ }),

/***/ "./src/scripts/config.js":
/*!*******************************!*\
  !*** ./src/scripts/config.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  pageType: {\n    id: 1,\n    rest_base: 'pages',\n    slug: 'page',\n    supports: {\n      title: true\n    }\n  },\n  page: {\n    id: 1,\n    status: 'draft',\n    title: {\n      raw: '未名命标题'\n    },\n    content: {\n      raw: ''\n    },\n    type: 'page'\n  },\n  themes: [{\n    theme_supports: {}\n  }]\n});\n\n//# sourceURL=webpack://GutenbergEditor/./src/scripts/config.js?");

/***/ }),

/***/ "./src/scripts/inject.js":
/*!*******************************!*\
  !*** ./src/scripts/inject.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_autop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/autop */ \"@wordpress/autop\");\n/* harmony import */ var _wordpress_autop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_autop__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blob */ \"@wordpress/blob\");\n/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_block_serialization_default_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-serialization-default-parser */ \"@wordpress/block-serialization-default-parser\");\n/* harmony import */ var _wordpress_block_serialization_default_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_serialization_default_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wordpress_escape_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/escape-html */ \"@wordpress/escape-html\");\n/* harmony import */ var _wordpress_escape_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_escape_html__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/is-shallow-equal */ \"@wordpress/is-shallow-equal\");\n/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/compose */ \"@wordpress/compose\");\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _wordpress_redux_routine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/redux-routine */ \"@wordpress/redux-routine\");\n/* harmony import */ var _wordpress_redux_routine__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_redux_routine__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _wordpress_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/dom */ \"@wordpress/dom\");\n/* harmony import */ var _wordpress_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/html-entities */ \"@wordpress/html-entities\");\n/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _wordpress_shortcode__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/shortcode */ \"@wordpress/shortcode\");\n/* harmony import */ var _wordpress_shortcode__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_shortcode__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @wordpress/editor */ \"@wordpress/editor\");\n/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @wordpress/dom-ready */ \"@wordpress/dom-ready\");\n/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @wordpress/a11y */ \"@wordpress/a11y\");\n/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @wordpress/url */ \"@wordpress/url\");\n/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @wordpress/api-fetch */ \"@wordpress/api-fetch\");\n/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @wordpress/deprecated */ \"@wordpress/deprecated\");\n/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @wordpress/keycodes */ \"@wordpress/keycodes\");\n/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @wordpress/rich-text */ \"@wordpress/rich-text\");\n/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_22__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_23__);\n/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @wordpress/core-data */ \"@wordpress/core-data\");\n/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_24__);\n/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @wordpress/date */ \"@wordpress/date\");\n/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_25__);\n/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @wordpress/notices */ \"@wordpress/notices\");\n/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_26__);\n/* harmony import */ var _wordpress_nux__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @wordpress/nux */ \"@wordpress/nux\");\n/* harmony import */ var _wordpress_nux__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_wordpress_nux__WEBPACK_IMPORTED_MODULE_27__);\n/* harmony import */ var _wordpress_token_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @wordpress/token-list */ \"@wordpress/token-list\");\n/* harmony import */ var _wordpress_token_list__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_wordpress_token_list__WEBPACK_IMPORTED_MODULE_28__);\n/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @wordpress/viewport */ \"@wordpress/viewport\");\n/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_29__);\n/* harmony import */ var _wordpress_wordcount__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @wordpress/wordcount */ \"@wordpress/wordcount\");\n/* harmony import */ var _wordpress_wordcount__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_wordpress_wordcount__WEBPACK_IMPORTED_MODULE_30__);\n/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @wordpress/plugins */ \"@wordpress/plugins\");\n/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_31__);\n/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @wordpress/block-library */ \"@wordpress/block-library\");\n/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_library__WEBPACK_IMPORTED_MODULE_32__);\n/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @wordpress/edit-post */ \"@wordpress/edit-post\");\n/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_33__);\n/* harmony import */ var _wordpress_format_library__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @wordpress/format-library */ \"@wordpress/format-library\");\n/* harmony import */ var _wordpress_format_library__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_wordpress_format_library__WEBPACK_IMPORTED_MODULE_34__);\n/**\n * WordPress dependencies\n */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n // Set global wp\n\nwindow.wp = {\n  a11y: _wordpress_a11y__WEBPACK_IMPORTED_MODULE_17__,\n  apiFetch: _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_19___default.a,\n  autop: _wordpress_autop__WEBPACK_IMPORTED_MODULE_1__,\n  blob: _wordpress_blob__WEBPACK_IMPORTED_MODULE_2__,\n  blockLibrary: _wordpress_block_library__WEBPACK_IMPORTED_MODULE_32__,\n  blockSerializationDefaultParser: _wordpress_block_serialization_default_parser__WEBPACK_IMPORTED_MODULE_3__,\n  blocks: _wordpress_blocks__WEBPACK_IMPORTED_MODULE_14__,\n  components: _wordpress_components__WEBPACK_IMPORTED_MODULE_23__,\n  compose: _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__,\n  coreData: _wordpress_core_data__WEBPACK_IMPORTED_MODULE_24__,\n  data: _wordpress_data__WEBPACK_IMPORTED_MODULE_9__,\n  date: _wordpress_date__WEBPACK_IMPORTED_MODULE_25__,\n  editor: _wordpress_editor__WEBPACK_IMPORTED_MODULE_15__,\n  deprecated: _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_20___default.a,\n  dom: _wordpress_dom__WEBPACK_IMPORTED_MODULE_10__,\n  domReady: _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_16___default.a,\n  editPost: _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_33__,\n  element: _wordpress_element__WEBPACK_IMPORTED_MODULE_5__,\n  escapeHtml: _wordpress_escape_html__WEBPACK_IMPORTED_MODULE_4__,\n  formatLibrary: _wordpress_format_library__WEBPACK_IMPORTED_MODULE_34__,\n  hooks: _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__,\n  htmlEntities: _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_11__,\n  i18n: _wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__,\n  isShallowEqual: _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_6__,\n  keycodes: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_21__,\n  notices: _wordpress_notices__WEBPACK_IMPORTED_MODULE_26__,\n  nux: _wordpress_nux__WEBPACK_IMPORTED_MODULE_27__,\n  plugins: _wordpress_plugins__WEBPACK_IMPORTED_MODULE_31__,\n  reduxRoutine: _wordpress_redux_routine__WEBPACK_IMPORTED_MODULE_8__,\n  richText: _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_22__,\n  shortcode: _wordpress_shortcode__WEBPACK_IMPORTED_MODULE_13__,\n  tokenList: _wordpress_token_list__WEBPACK_IMPORTED_MODULE_28__,\n  url: _wordpress_url__WEBPACK_IMPORTED_MODULE_18__,\n  viewport: _wordpress_viewport__WEBPACK_IMPORTED_MODULE_29__,\n  wordcount: _wordpress_wordcount__WEBPACK_IMPORTED_MODULE_30__\n};\n\n//# sourceURL=webpack://GutenbergEditor/./src/scripts/inject.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack://GutenbergEditor/./src/styles/style.scss?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack://GutenbergEditor/multi_./src/main.js?");

/***/ }),

/***/ "@wordpress/a11y":
/*!**********************************!*\
  !*** external "@wordpress/a11y" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_a11y__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/a11y%22?");

/***/ }),

/***/ "@wordpress/api-fetch":
/*!***************************************!*\
  !*** external "@wordpress/api-fetch" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_api_fetch__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/api-fetch%22?");

/***/ }),

/***/ "@wordpress/autop":
/*!***********************************!*\
  !*** external "@wordpress/autop" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_autop__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/autop%22?");

/***/ }),

/***/ "@wordpress/blob":
/*!**********************************!*\
  !*** external "@wordpress/blob" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_blob__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/blob%22?");

/***/ }),

/***/ "@wordpress/block-editor":
/*!******************************************!*\
  !*** external "@wordpress/block-editor" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_block_editor__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/block-editor%22?");

/***/ }),

/***/ "@wordpress/block-library":
/*!*******************************************!*\
  !*** external "@wordpress/block-library" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_block_library__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/block-library%22?");

/***/ }),

/***/ "@wordpress/block-serialization-default-parser":
/*!****************************************************************!*\
  !*** external "@wordpress/block-serialization-default-parser" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_block_serialization_default_parser__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/block-serialization-default-parser%22?");

/***/ }),

/***/ "@wordpress/blocks":
/*!************************************!*\
  !*** external "@wordpress/blocks" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_blocks__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/blocks%22?");

/***/ }),

/***/ "@wordpress/components":
/*!****************************************!*\
  !*** external "@wordpress/components" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_components__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/components%22?");

/***/ }),

/***/ "@wordpress/compose":
/*!*************************************!*\
  !*** external "@wordpress/compose" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_compose__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/compose%22?");

/***/ }),

/***/ "@wordpress/core-data":
/*!***************************************!*\
  !*** external "@wordpress/core-data" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_core_data__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/core-data%22?");

/***/ }),

/***/ "@wordpress/data":
/*!**********************************!*\
  !*** external "@wordpress/data" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_data__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/data%22?");

/***/ }),

/***/ "@wordpress/date":
/*!**********************************!*\
  !*** external "@wordpress/date" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_date__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/date%22?");

/***/ }),

/***/ "@wordpress/deprecated":
/*!****************************************!*\
  !*** external "@wordpress/deprecated" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_deprecated__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/deprecated%22?");

/***/ }),

/***/ "@wordpress/dom":
/*!*********************************!*\
  !*** external "@wordpress/dom" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_dom__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/dom%22?");

/***/ }),

/***/ "@wordpress/dom-ready":
/*!***************************************!*\
  !*** external "@wordpress/dom-ready" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_dom_ready__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/dom-ready%22?");

/***/ }),

/***/ "@wordpress/edit-post":
/*!***************************************!*\
  !*** external "@wordpress/edit-post" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_edit_post__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/edit-post%22?");

/***/ }),

/***/ "@wordpress/edit-post/build/components/header/more-menu":
/*!*************************************************************************!*\
  !*** external "@wordpress/edit-post/build/components/header/more-menu" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_edit_post_build_components_header_more_menu__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/edit-post/build/components/header/more-menu%22?");

/***/ }),

/***/ "@wordpress/editor":
/*!************************************!*\
  !*** external "@wordpress/editor" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_editor__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/editor%22?");

/***/ }),

/***/ "@wordpress/element":
/*!*************************************!*\
  !*** external "@wordpress/element" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_element__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/element%22?");

/***/ }),

/***/ "@wordpress/escape-html":
/*!*****************************************!*\
  !*** external "@wordpress/escape-html" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_escape_html__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/escape-html%22?");

/***/ }),

/***/ "@wordpress/format-library":
/*!********************************************!*\
  !*** external "@wordpress/format-library" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_format_library__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/format-library%22?");

/***/ }),

/***/ "@wordpress/hooks":
/*!***********************************!*\
  !*** external "@wordpress/hooks" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_hooks__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/hooks%22?");

/***/ }),

/***/ "@wordpress/html-entities":
/*!*******************************************!*\
  !*** external "@wordpress/html-entities" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_html_entities__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/html-entities%22?");

/***/ }),

/***/ "@wordpress/i18n":
/*!**********************************!*\
  !*** external "@wordpress/i18n" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_i18n__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/i18n%22?");

/***/ }),

/***/ "@wordpress/is-shallow-equal":
/*!**********************************************!*\
  !*** external "@wordpress/is-shallow-equal" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_is_shallow_equal__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/is-shallow-equal%22?");

/***/ }),

/***/ "@wordpress/keycodes":
/*!**************************************!*\
  !*** external "@wordpress/keycodes" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_keycodes__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/keycodes%22?");

/***/ }),

/***/ "@wordpress/notices":
/*!*************************************!*\
  !*** external "@wordpress/notices" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_notices__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/notices%22?");

/***/ }),

/***/ "@wordpress/nux":
/*!*********************************!*\
  !*** external "@wordpress/nux" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_nux__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/nux%22?");

/***/ }),

/***/ "@wordpress/plugins":
/*!*************************************!*\
  !*** external "@wordpress/plugins" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_plugins__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/plugins%22?");

/***/ }),

/***/ "@wordpress/redux-routine":
/*!*******************************************!*\
  !*** external "@wordpress/redux-routine" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_redux_routine__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/redux-routine%22?");

/***/ }),

/***/ "@wordpress/rich-text":
/*!***************************************!*\
  !*** external "@wordpress/rich-text" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_rich_text__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/rich-text%22?");

/***/ }),

/***/ "@wordpress/shortcode":
/*!***************************************!*\
  !*** external "@wordpress/shortcode" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_shortcode__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/shortcode%22?");

/***/ }),

/***/ "@wordpress/token-list":
/*!****************************************!*\
  !*** external "@wordpress/token-list" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_token_list__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/token-list%22?");

/***/ }),

/***/ "@wordpress/url":
/*!*********************************!*\
  !*** external "@wordpress/url" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_url__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/url%22?");

/***/ }),

/***/ "@wordpress/viewport":
/*!**************************************!*\
  !*** external "@wordpress/viewport" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_viewport__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/viewport%22?");

/***/ }),

/***/ "@wordpress/wordcount":
/*!***************************************!*\
  !*** external "@wordpress/wordcount" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_wordcount__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22@wordpress/wordcount%22?");

/***/ }),

/***/ "noop":
/*!***********************!*\
  !*** external "noop" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_noop__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22noop%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;\n\n//# sourceURL=webpack://GutenbergEditor/external_%22prop-types%22?");

/***/ })

/******/ });
});