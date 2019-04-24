import React from 'react';
import { applyFormat, removeFormat, getActiveFormat } from '@wordpress/rich-text';
import { typePrefix } from '../../formats';
import IconButton from '../icon-button/index';
import { A_on } from '../icons/index';
import ColorPalette from '../color-palette/index';
import { fontColor, manyColors, defaultColor } from '../colors/index';

const formatType = 'color';
const type = `${typePrefix}/${formatType}`;
class Color extends React.Component {
  handleBtnClick = () => {
    const { popupChange ,open} = this.props;
    popupChange(open === type?'':type);
  };
  styleChange = (color, isFromPicker) => {
    if (!isFromPicker) {
      const { popupChange } = this.props;
      popupChange('');
    }

    if (defaultColor === color) {
      this.removeFormat();
    } else {
      this.applyFormat(color);
    }
  };
  applyFormat = (color) => {
    const { onChange, value } = this.props;
    onChange(
      applyFormat(value, {
        type: type,
        attributes: {
          style: `color:${color}`
        }
      })
    );
  };
  removeFormat = () => {
    const { onChange, value } = this.props;

    onChange(removeFormat(value, type));
  };

  render() {
    const open = this.props.open === type;
    const format = getActiveFormat(this.props.value, type);
    const color = format ? format.attributes.style.split(':')[1] : defaultColor;

    return (
      <div className="hover-spread">
        <IconButton
          tip="字体颜色"
          className={open ? 'active' : ''}
          onClick={this.handleBtnClick}
          icon={<A_on />}
        />
        <ColorPalette
          show={open}
          colors={fontColor}
          manyColors={manyColors}
          value={color}
          onChange={this.styleChange}
          onCancel={this.removeFormat}
        />
      </div>
    );
  }
}

export default {
  register: {
    type: type,
    title: `tss-${formatType}`,
    tagName: `span`,
    className: `tss-${formatType}`,
    attributes: {
      style: 'style'
    },
    edit() {
      return null;
    }
  },
  render(props) {
    return <Color {...props} />;
  }
};
