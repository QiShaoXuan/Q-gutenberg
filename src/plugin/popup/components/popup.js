const { applyFormat, removeFormat } = window.wp.richText;

import Index from './color-palette/color-palette';
import IconButton from './icon-button/icon-btn';
import FontSizeMenu from './fontsize/font-size-menu';
import { index, manyColors, bgColors } from './colors/colors';
import { styleObjToStr, handleFormat } from '../untils';
import * as Icons from '../icons/index';
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
      open: this.state.open === open ? '' : open
    });
  };

  styleChange = (key, value) => {
    const styles = this.props.activeStyle;
    styles[key] = value;

    if (value === '') {
      delete styles[key];
    }

    const type = this.props.formatType;
    const style = styleObjToStr(styles);

    this.props.onChange(
      applyFormat(this.props.value, {
        type: 'tss-strong/strong',
        attributes: {
          style: style
        }
      })
    );

    this.setState({
      open: ''
    });
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
      <div
        className="Tss-font-style"
        style={{ opacity: show ? 1 : 0 }}
        onMouseMove={(e) => e.stopPropagation()}>
        {/* ---------- 字体大小 ----------*/}
        <div className={`hover-spread ${open === 'font-size' ? 'active' : ''}`}>
          <IconButton
            className="font-size-btn"
            tip="字号与微信编辑器相同"
            icon={<Icons.Two_arrow_on />}
            onClick={() => this.btnClick('font-size')}
            text={fontsize}
          />
          {open === 'font-size' ? (
            <FontSizeMenu
              value={fontsize}
              onChange={(fontsize) => this.setStyle('font-size', `${fontsize}px`)}
            />
          ) : null}
        </div>
        {/* ---------- 字体加粗 ----------*/}
        <div className={`hover-spread ${activeStyle['font-weight'] === 'bold' ? 'active' : ''}`}>
          <IconButton
            tip="加粗"
            onClick={() => this.toggleStyle('font-weight', 'bold', 'normal')}
            icon={<Icons.B_on />}
          />
        </div>
        {/* ---------- 斜体 ----------*/}
        <div className={`hover-spread ${activeStyle['font-style'] === 'italic' ? 'active' : ''}`}>
          <IconButton
            tip="斜体"
            onClick={() => this.toggleStyle('font-style', 'italic', 'normal')}
            icon={<Icons.I_on />}
          />
        </div>
        {/* ---------- 下划线 ----------*/}
        <div
          className={`hover-spread ${
            activeStyle['text-decoration'] === 'underline' ? 'active' : ''
          }`}>
          <IconButton
            tip="下划线"
            onClick={() => this.toggleStyle('text-decoration', 'underline', 'none')}
            icon={<Icons.U_on />}
          />
        </div>

        {/* ---------- 字体颜色 ----------*/}
        <div className={`hover-spread ${open === 'color' ? 'active' : ''}`}>
          <IconButton tip="字体颜色" onClick={() => this.btnClick('color')} icon={<Icons.A_on />} />
          <Index
            show={open === 'color' ? true : false}
            colors={index}
            manyColors={manyColors}
            value={activeStyle.color ? activeStyle.color : ''}
            onChange={(color) => this.styleChange('color', color)}
          />
        </div>
        {/* ---------- 背景颜色 ----------*/}
        <div
          className="hover-spread"
          className={`hover-spread ${open === 'background' ? 'active' : ''}`}>
          <IconButton
            tip="背景颜色"
            onClick={() => this.btnClick('background')}
            icon={<Icons.T_on />}
          />

          <Index
            show={open === 'background' ? true : false}
            colors={bgColors}
            value={activeStyle.background ? activeStyle.background : ''}
            onChange={(color) => this.styleChange('background', color)}
          />
        </div>
      </div>
    );
  }
}
