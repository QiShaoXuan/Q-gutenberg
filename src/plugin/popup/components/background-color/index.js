import React from 'react';
import { applyFormat, removeFormat, getActiveFormat } from '@wordpress/rich-text';
import { typePrefix } from '../../formats';
import IconButton from '../icon-button/index';
import { T_on } from '../icons/index';
import ColorPalette from '../color-palette/index';
import { bgColors } from '../colors/index';

const formatType = 'background-color';
const type = `${typePrefix}/${formatType}`;
class BackgroundColor extends React.Component {
  handleBtnClick = () => {
    const { popupChange, open } = this.props;
    popupChange(open === type ? '' : type);
  };
  styleChange = (color, isFromPicker) => {
    if (!isFromPicker) {
      const { popupChange } = this.props;
      popupChange('');
    }

    this.applyFormat(color);
  };
  applyFormat = (color) => {
    const { onChange, value } = this.props;
    onChange(
      applyFormat(value, {
        type: type,
        attributes: {
          style: `background-color:${color}`
        }
      })
    );
  };
  removeFormat = () => {
    const { onChange, value } = this.props;

    onChange(removeFormat(value, type));
    s;
  };

  render() {
    const open = this.props.open === type;
    const format = getActiveFormat(this.props.value, type);
    const color = format ? format.attributes.style.split(':')[1] : '';

    return (
      <div className="hover-spread">
        <IconButton
          className={open ? 'active' : ''}
          tip="背景颜色"
          onClick={this.handleBtnClick}
          icon={<T_on />}
        />
        <ColorPalette
          show={open}
          colors={bgColors}
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
    return <BackgroundColor {...props} />;
  }
};
