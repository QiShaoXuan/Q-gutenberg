import React from 'react';
import {
  applyFormat,
  removeFormat,
  getActiveFormat
} from '@wordpress/rich-text';
import { select } from '@wordpress/data';

import { typePrefix } from '../../formats.js';
import IconButton from '../icon-button/index.js';
import { BrushIcon, Cursor } from '../icons/index.js';

const formatType = 'brush';
const type = `${typePrefix}/${formatType}`;
const styleID = 'tss-brush-style';
const cursorUrl = 'https://tsscdn.finxos.com/cloud/image/cursor-brush.svg';
let storage = {
  active: false,
  onChange: null,
  value: null,
  formats: []
};

document.addEventListener('mouseup', function(e) {
  const isContentitable = checkIsContentitable(e.target);

  if (!isContentitable) {
    removeBrushFormat();
    removeBrushCursor();
    return;
  }

  const isAll = window.getSelection().toString().length ? false : true;
  const selectedBlock = select('core/block-editor').getSelectedBlock();

  if (selectedBlock && storage.active) {
    setBrushFormat(storage.onChange, storage.value, isAll);
  }
});

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 27) {
    removeBrushFormat();
    removeBrushCursor();
  }
});

const isBrush = () => {
  return storage.active;
};

const checkIsContentitable = (dom) => {
  if (dom.getAttribute('contenteditable') == 'true') {
    return true;
  }

  if (dom.tagName == 'BODY') {
    return false;
  }

  if (dom.parentNode) {
    return checkIsContentitable(dom.parentNode);
  }
};

const setBrushFormat = (onChange, value, isAll) => {
  const formats = JSON.parse(JSON.stringify(storage.formats));
  let handledValue = clearFormat(
    isAll ? 0 : value.start,
    isAll ? value.formats.length : value.end,
    value
  );

  removeBrushFormat();
  removeBrushCursor();

  if (isAll) {
    value.start = 0;
    value.end = value.formats.length;
  }

  const brushformat = formats.reduce(
    (accumulator, currentValue) =>
      applyFormat(accumulator, {
        type: currentValue.type,
        attributes: currentValue.attributes
      }),
    handledValue
  );

  onChange(brushformat);
};

const clearFormat = (start, end, value) => {
  value.formats.forEach((format, key) => {
    if (format && key < end && key >= start) {
      delete value.formats[key];
    }
  });
  return value;
};

const removeBrushFormat = () => {
  storage.active = false;
  storage.formats = [];
};

const removeBrushCursor = () => {
  const head = document.querySelector('head');
  const style = head.querySelector(`#${styleID}`);
  if (style) {
    head.removeChild(style);
  }
};

class BrushRender extends React.Component {
  // state = {
  //   active: false
  // };

  handleBtnClick = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isBrush()) {
      // removeBrushFormat();
      // removeBrushCursor();
    } else {
      this.saveBrushFormat();
      this.setBrushCursor();
    }

    // this.setState({
    //   active: isBrush()
    // });
    this.dispear();
  };

  dispear = () => {
    const { onChange, value } = this.props;
    value.start = 0;
    value.end = 0;
    onChange(
      applyFormat(value, {
        type: 'tss-popup'
      })
    );
  };

  saveBrushFormat = () => {
    const { value } = this.props;
    const activeFormats = value.formats.find(
      (v, index) =>
        index >= value.start && index <= value.end && Array.isArray(v)
    );

    storage.active = true;
    storage.formats = activeFormats ? activeFormats : [];
  };

  setBrushCursor = () => {
    const head = document.querySelector('head');

    const styleTag = document.createElement('style');
    styleTag.setAttribute('id', styleID);
    styleTag.innerText = `[contenteditable]{
        cursor:  url(${cursorUrl}) , copy !important;
      }
      .edit-post-visual-editor .block-editor-writing-flow__click-redirect{
        cursor:  url(${cursorUrl}) , copy !important;
      }`;

    head.appendChild(styleTag);
  };

  setValue = () => {
    const { onChange, value } = this.props;
    (storage.onChange = onChange), (storage.value = value);
  };

  render() {
    // const { active } = this.state;
    this.setValue();
    return (
      <div className="hover-spread">
        <IconButton
          tip="格式刷"
          // className={active ? 'active' : ''}
          onClick={this.handleBtnClick}
          icon={<BrushIcon />}
        />
      </div>
    );
  }
}

export default {
  render(props) {
    return <BrushRender {...props} />;
  }
};
