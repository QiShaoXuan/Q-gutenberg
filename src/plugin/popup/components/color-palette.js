import React from 'react';
import IconButton from './icon-btn';

const { ColorPicker, Dropdown } = wp.components;

class ColorPalette extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false
    };
  }

  colorChange = (color) => {
    const propsColor = this.props.value;
    if (propsColor != color) {
      this.props.onChange(color);
    }
  };

  setColorBlock = (colors, value) => {
    return colors.map((color) => <div
      data-color={color}
      className={`color-block ${value == color ? 'active' : ''}`}
      style={{ backgroundColor: color }}
      onClick={() => this.colorChange(color)}
    ></div>);
  };
  toggleMoreColors = () => {
    let { expand } = this.state;
    this.setState({
      expand: !expand
    });
  };

  render() {
    const { show, colors, value, manyColors } = this.props;
    const { expand } = this.state;
    return show ? (
      <div className="color-palette">
        <div className="color-blocks-container">
          {this.setColorBlock(colors, value)}
          <Dropdown
            // className="components-color-palette__custom-color"
            // contentClassName="components-color-palette__picker"
            renderToggle={({ isOpen, onToggle }) => (
              <IconButton
                aria-expanded={isOpen}
                onClick={onToggle}
                tip="自定义颜色"
                width={40}
                height={40}
                icon="https://i.loli.net/2019/04/11/5caf052657805.png"
              />
            )}
            renderContent={() => (
              <ColorPicker
                color={value}
                onChangeComplete={(color) => this.colorChange(color.hex)
                }
                disableAlpha
              />
            )}
          />
          <IconButton
            tip="清空颜色"
            onClick={() => this.colorChange('')}
            width={40}
            height={40}
            icon="https://i.loli.net/2019/04/11/5caf052659229.png"
          />
        </div>
        {manyColors ? (<div>
          <div className={`expand-more ${expand ? 'expaned' : ''}`}
            onClick={this.toggleMoreColors}>
            <img src="https://i.loli.net/2019/04/11/5caf0ecda2af7.png"/>
          </div>
          <div
            style={{ display: expand ? 'block' : 'none' }}
            className="color-blocks-container many-color-container">
            {manyColors ? this.setColorBlock(manyColors, value) : null}
          </div>
        </div>) : null}
      </div>
    ) : null;
  }
}

export default ColorPalette;
