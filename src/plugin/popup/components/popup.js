const { registerFormatType, getActiveFormat, applyFormat } = window.wp.richText;

import ColorPalette from './color-palette';
import IconButton from './icon-btn';
import FontSizeMenu from './font-size-menu';
import { colors, manyColors } from './colors';
import { styleObjToStr } from '../untils';


export default class Popup extends React.Component {
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
      type: this.props.formatType,
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

    const fontsize = activeStyle['font-size'] ? activeStyle['font-size'].split('px')[0] : '20';

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
            text={fontsize}
          />
          {open === 'font-size' ?
            <FontSizeMenu
              value={fontsize}
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
