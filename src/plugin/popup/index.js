const { createElement } = window.wp.element;
const { registerFormatType, applyFormat, removeFormat, getActiveFormat } = window.wp.richText;
const { PositionedAtSelection } = wp.components;

import ColorPalette from './components/color-palette';
import IconButton from './components/icon-btn';
import FontSizeMenu from './components/font-size-menu';
import { colors, manyColors } from './components/colors';
import React from 'react';

const type = 'tss-popup/font';

const styleObjToStr = (styleObj) => {
  let styleStr = '';
  for (let key in styleObj) {
    styleStr += styleObj[key] ? `${key}:${styleObj[key]};` : '';
  }
  return styleStr;
};

const styleStrToObj = (styleStr) => {
  let styleObj = {};
  styleStr.split(';').forEach((style) => {
    let styleArr = style.split(':');
    if (styleArr[0] && styleArr[1]) {
      styleObj[styleArr[0]] = styleArr[1];
    }
  });
  return styleObj;
};

class Popup extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      open: ''
    };


    setTimeout(() => {
      this.setState({
        show: true
      });

    }, 400);
  }

  btnClick = (open) => {
    this.setState({
      open: open
    });
  };

  styleChange = (key, value) => {
    const styles = this.props.activeStyle;
    styles[key] = value;

    if (value === '') {
      delete styles[key];
    }

    this.props.onChange(applyFormat(this.props.value, {
      type,
      attributes: {
        style: styleObjToStr(styles)
      }
    }));
  };

  toggleStyle = (name, trueValue, falseValue) => {
    const style = this.props.activeStyle[name] === trueValue ? falseValue : trueValue;
    this.setStyle(name, style);
  };

  setStyle = (name, style) => {
    this.styleChange(name, style);
    this.btnClick(name);
  };

  render() {
    const { activeStyle } = this.props;
    const { show, open } = this.state;

    return (
      <div className="Tss-font-style"
        style={{ opacity: show ? 1 : 0 }}>
        {/* ---------- 字体大小 ----------*/}
        <div
          className={`hover-spread ${open === 'font-size' ? 'active' : ''}`}>
          <IconButton
            tip="字号大小可保留至微信平台"
            icon={<img
              src="https://i.loli.net/2019/04/11/5caf249ddb483.png"
              style={{ marginLeft: '3px' }}/>}
            onClick={() => this.btnClick('font-size')}
            text={activeStyle['font-size'] ? activeStyle['font-size'].split('px')[0] : '20'}
          />
          {open === 'font-size' ?
            <FontSizeMenu
              onChange={(fontsize) => this.setStyle('font-size', `${fontsize}px`)}/> : null}
        </div>
        {/* ---------- 字体加粗 ----------*/}
        <div
          className={`hover-spread ${activeStyle['font-weight'] === 'bold' ? 'active' : ''}`}>
          <IconButton
            tip="加粗"
            onClick={() => this.toggleStyle('font-weight', 'bold', 'normal')}
            icon="https://i.loli.net/2019/04/11/5caeca7d4f017.png"/>
        </div>
        {/* ---------- 斜体 ----------*/}
        <div
          className={`hover-spread ${activeStyle['font-style'] === 'italic' ? 'active' : ''}`}>
          <IconButton
            tip="斜体"
            onClick={() => this.toggleStyle('font-style', 'italic', 'normal')}
            icon="https://i.loli.net/2019/04/11/5caeca7d504b7.png"/>
        </div>
        {/* ---------- 下划线 ----------*/}
        <div
          className={`hover-spread ${activeStyle['text-decoration'] === 'underline' ? 'active' : ''}`}>
          <IconButton
            tip="下划线"
            onClick={() => this.toggleStyle('text-decoration', 'underline', 'none')}
            icon="https://i.loli.net/2019/04/11/5caeca7d4eb7c.png"
          />
        </div>

        {/* ---------- 字体颜色 ----------*/}
        <div
          className={`hover-spread ${open === 'color' ? 'active' : ''}`}>
          <IconButton
            tip="字体颜色"
            onClick={() => this.btnClick('color')}
            icon="https://i.loli.net/2019/04/11/5caeca7d4eb88.png"
          />
          <ColorPalette
            show={open === 'color' ? true : false}
            colors={colors}
            manyColors={manyColors}
            value={activeStyle.color ? activeStyle.color : ''}
            onChange={(color) => this.styleChange('color', color)}
          />
        </div>
        {/* ---------- 背景颜色 ----------*/}
        <div className="hover-spread"
          className={`hover-spread ${open === 'background' ? 'active' : ''}`}>
          <IconButton
            tip="背景颜色"
            onClick={() => this.btnClick('background')}
            icon="https://i.loli.net/2019/04/11/5caecf869903e.png"
          />

          <ColorPalette
            show={open === 'background' ? true : false}
            colors={colors}
            value={activeStyle.background ? activeStyle.background : ''}
            onChange={(color) => this.styleChange('background', color)}
          />

        </div>
      </div>
    );
  }
}


registerFormatType(type, {
  title: 'Inline Text Colour',
  tagName: 'span',
  className: 'color',
  attributes: {
    style: 'style'
  },
  isDefault: true,
  edit({ isActive, value, onChange }) {

    let activeStyle = {};
    if (isActive) {
      const activeFormat = getActiveFormat(value, type);
      activeStyle = styleStrToObj(activeFormat.attributes.style);
    }

    return (value.end - value.start > 0) ? (
      <PositionedAtSelection
        key={`${value.end }${  value.start }`}>
        <Popup onChange={onChange} isActive={isActive}
          value={value} activeStyle={activeStyle}/>
      </PositionedAtSelection>
    ) : null;
  }
});
// <img src="https://i.loli.net/2019/04/11/5caecf869757e.png" alt="format-bgcolor.png" title="format-bgcolor.png" />
// <img src="https://i.loli.net/2019/04/11/5caecf869903e.png" alt="format-bgcolor-on.png" title="format-bgcolor-on.png" />
// <img src="https://i.loli.net/2019/04/11/5caeca7d4eb88.png" alt="format-color-on.png" title="format-color-on.png" />
// <img src="https://i.loli.net/2019/04/11/5caeca7d4eb7c.png" alt="format-underlined-on.png" title="format-underlined-on.png" />
//   <img src="https://i.loli.net/2019/04/11/5caeca7d4ef7b.png" alt="format-bold.png" title="format-bold.png" />
//   <img src="https://i.loli.net/2019/04/11/5caeca7d4f017.png" alt="format-bold-on.png" title="format-bold-on.png" />
//   <img src="https://i.loli.net/2019/04/11/5caeca7d504b7.png" alt="format-italic-on.png" title="format-italic-on.png" />
//   <img src="https://i.loli.net/2019/04/11/5caeca7d505c5.png" alt="format-italic.png" title="format-italic.png" />
//   <img src="https://i.loli.net/2019/04/11/5caeca7d506aa.png" alt="format-color.png" title="format-color.png" />
//   <img src="https://i.loli.net/2019/04/11/5caeca7d61954.png" alt="format-underlined.png" title="format-underlined.png" />

// {/*<img src="https://i.loli.net/2019/04/11/5caf052657805.png" alt="picker.png" title="picker.png" />*/}
// {/*<img src="https://i.loli.net/2019/04/11/5caf052659229.png" alt="cancel.png" title="cancel.png" />*/}

// <img src="https://i.loli.net/2019/04/11/5caf0ecda2af7.png" alt="arrow.png" title="arrow.png" />
// <img src="https://i.loli.net/2019/04/11/5caf0ecda4477.png" alt="duigou.png" title="duigou.png" />
// <img src="https://i.loli.net/2019/04/11/5caf249ddb483.png" alt="two-arrow.png" title="two-arrow.png" />
