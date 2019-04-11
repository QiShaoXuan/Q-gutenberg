const { createElement } = window.wp.element;
const { registerFormatType, applyFormat, removeFormat, getActiveFormat } = window.wp.richText;
const { InspectorControls, PanelColorSettings } = window.wp.editor;
// import PositionedAtSelection from '../position-at-selection/index'
const { PositionedAtSelection, IconButton } = wp.components;
const { withState } = wp.compose;
import React from 'react';

var timeout = null;

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

const fontColors = [
  '#000000',
  '#333333',
  '#666666',
  '#999999',
  '#CCCCCC',
  '#FFFFFF',
  '#330000',
  '#333300',
  '#FF0000',
  '#FF6600',
  '#FEFF00',
  '#66FF99',
  '#34CC00',
  '#00C4CC',
  '#3300FF',
  '#6600FF'
];

class ColorPalette extends React.Component {
  constructor(props) {
    super(props);
  }

  colorChange = (color) => {
    const propsColor = this.props.value;
    if (propsColor != color) {
      this.props.onChange(color);
    }
  };

  render() {
    const { show, colors, value } = this.props;
    return show ? (
      <div className="color-palette">
        {colors.map((color) => <div
          className={`color-block ${value == color ? 'active' : ''}`}
          style={{ backgroundColor: color }}
          onClick={() => this.colorChange(color)}
        ></div>)}
      </div>
    ) : null;
  }
}

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

    this.props.onChange(applyFormat(this.props.value, {
      type,
      attributes: {
        style: styleObjToStr(styles)
      }
    }));
  };

  handleBold = () => {
    const weight = this.props.activeStyle['font-weight'] === 'bold' ? 'normal' : 'bold';
    this.styleChange('font-weight', weight);
  };
  handleItalic = () => {
    // font-style:italic;
    const fontStyle = this.props.activeStyle['font-style'] === 'italic' ? 'normal' : 'italic';
    this.styleChange('font-style', fontStyle);
  };
  handleUnderline = () => {
    const underline = this.props.activeStyle['text-decoration'] === 'underline' ? 'none' : 'underline';
    this.styleChange('text-decoration', underline);
  }

  render() {
    const { activeStyle } = this.props;
    const { show, open } = this.state;
    console.log('activeStyle', activeStyle);

    return (
      <div className="Tss-font-style"
        style={{ opacity: show ? 1 : 0 }}>
        {/* ---------- 字体加粗 ----------*/}
        <div
          className={`hover-spread ${activeStyle['font-weight'] === 'bold' ? 'active' : ''}`}>
          <div className="tss-popup-btn"
            onClick={() => this.handleBold()}>
            <img
              src="https://i.loli.net/2019/04/11/5caeca7d4f017.png"
              alt="format-bold-on.png"
              title="format-bold-on.png"/>
          </div>
        </div>
        {/* ---------- 斜体 ----------*/}
        <div
          className={`hover-spread ${activeStyle['font-style'] === 'italic' ? 'active' : ''}`}>
          <div className="tss-popup-btn"
            onClick={() => this.handleItalic()}>
            <img
              src="https://i.loli.net/2019/04/11/5caeca7d504b7.png"
              alt="format-italic-on.png"
              title="format-italic-on.png"/>
          </div>
        </div>
        {/* ---------- 下划线 ----------*/}
        <div
          className={`hover-spread ${activeStyle['text-decoration'] === 'underline' ? 'active' : ''}`}>
          <div className="tss-popup-btn"
            onClick={() => this.handleUnderline()}>
            <img src="https://i.loli.net/2019/04/11/5caeca7d4eb7c.png" alt="format-underlined-on.png" title="format-underlined-on.png" />
          </div>
        </div>

        {/* ---------- 字体颜色 ----------*/}
        <div
          className={`hover-spread ${open === 'color' ? 'active' : ''}`}>
          <div className="tss-popup-btn"
            onClick={() => this.btnClick('color')}>
            <img
              src="https://i.loli.net/2019/04/11/5caeca7d4eb88.png"
              alt="format-color-on.png"
              title="format-color-on.png"/>
          </div>
          <ColorPalette
            show={open === 'color' ? true : false}
            colors={fontColors}
            value={activeStyle.color ? activeStyle.color : ''}
            onChange={(color) => this.styleChange('color', color)}
          />
        </div>
        {/* ---------- 背景颜色 ----------*/}
        <div className="hover-spread"
          className={`hover-spread ${open === 'bg' ? 'active' : ''}`}>
          <div className="tss-popup-btn"
            onClick={() => this.btnClick('bg')}>
            <img
              src="https://i.loli.net/2019/04/11/5caecf869903e.png"
              alt="format-bgcolor-on.png"
              title="format-bgcolor-on.png"/>
          </div>

          <ColorPalette
            show={open === 'background' ? true : false}
            colors={fontColors}
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
