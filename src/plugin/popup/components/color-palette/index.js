import React from 'react';
import IconButton from '../icon-button/index.js';
import { Picker, Cancel, Arrow } from '../icons/index';
import { ColorPicker, Dropdown } from '@wordpress/components';

class Index extends React.Component {
  state = {
    expand: false
  };

  colorChange = (color, isFromPicker = false) => {
    const propsColor = this.props.value;
    if (propsColor != color) {
      this.props.onChange(color, isFromPicker);
    }
  };

  setColorBlock = (colors, value) => {
    return colors.map((color) => (
      <div
        data-color={color}
        className={`color-block ${value == color ? 'active' : ''}`}
        style={{ backgroundColor: color }}
        onClick={() => this.colorChange(color)}
      />
    ));
  };
  toggleMoreColors = () => {
    let { expand } = this.state;
    this.setState({
      expand: !expand
    });
  };

  render() {
    const { show, colors, value, manyColors, onCancel } = this.props;
    const { expand } = this.state;
    return show ? (
      <div className="color-palette">
        <div className="color-blocks-container">
          {this.setColorBlock(colors, value)}
          <Dropdown
            renderToggle={({ isOpen, onToggle }) => (
              <IconButton
                className="pallette-btn"
                aria-expanded={isOpen}
                onClick={onToggle}
                tip="自定义颜色"
                width={40}
                height={40}
                icon={<Picker />}
              />
            )}
            renderContent={() => (
              <ColorPicker
                color={value}
                onChangeComplete={(color) => this.colorChange(color.hex, true)}
                disableAlpha
              />
            )}
          />
          <IconButton
            className="pallette-btn"
            tip="清空颜色"
            onClick={() => onCancel && onCancel()}
            width={40}
            height={40}
            icon={<Cancel />}
          />
        </div>
        {manyColors ? (
          <div>
            <div
              className={`expand-more ${expand ? 'expaned' : ''}`}
              onClick={this.toggleMoreColors}>
              <Arrow />
            </div>
            <div
              style={{ display: expand ? 'block' : 'none' }}
              className="color-blocks-container many-color-container">
              {manyColors ? this.setColorBlock(manyColors, value) : null}
            </div>
          </div>
        ) : null}
      </div>
    ) : null;
  }
}

export default Index;
