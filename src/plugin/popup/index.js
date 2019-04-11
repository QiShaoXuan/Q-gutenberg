const { createElement } = window.wp.element;
const { registerFormatType, applyFormat, removeFormat, getActiveFormat } = window.wp.richText;
const { InspectorControls, PanelColorSettings } = window.wp.editor;
// import PositionedAtSelection from '../position-at-selection/index'
const { PositionedAtSelection, IconButton } = wp.components;
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


class Popup extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      formatStyle: {
        'color': '',
        background: ''
      }
    };


    setTimeout(() => {
      this.setState({
        show: true
      });

    }, 400);
  }

  changeStyle = (key, value) => {
    const style = this.state.formatStyle;
    style[key] = value;
    this.setState({
      formatStyle: style
    });
  };

  render() {
    const { onChange, isActive, value, activeStyle } = this.props;
    const { show, formatStyle } = this.state;
    return (
      <div className="Tss-font-style"
        style={{ opacity: show ? 1 : 0 }}>
        <IconButton
          className=""
          icon="wordpress"
          label="改变选中字体颜色"
          onClick={() => {
            this.changeStyle('color', 'red');

            onChange(applyFormat(value, {
              type,
              attributes: {
                style: styleObjToStr(formatStyle)
              }
            }));
          }}
        />
        <IconButton
          className=""
          icon="products"
          label="改变选中区域背景色"
          onClick={() => {
            this.changeStyle('background', 'green');

            onChange(applyFormat(value, {
              type,
              attributes: {
                style: styleObjToStr(formatStyle)
              }
            }));
          }}
        />
        <IconButton
          className=""
          icon="no-alt"
          label="改变字体颜色"
          onClick={() => {
            onChange(removeFormat(value, type));
          }}
        />
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
    console.log('--------------');

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
