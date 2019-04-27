import React from 'react';
import { toggleFormat, getActiveFormat } from '@wordpress/rich-text';
import { typePrefix } from '../../formats.js';
import IconButton from '../icon-button/index.js';
import { U_on } from '../icons/index.js';
const formatType = 'underline';
const type = `${typePrefix}/${formatType}`;

class Underline extends React.Component {
  handleBtnClick = () => {
    const { onChange, value, popupChange, open } = this.props;
    popupChange(open === type ? '' : type);
    onChange(
      toggleFormat(value, {
        type: type,
        attributes: {
          style: 'text-decoration: underline'
        }
      })
    );
  };
  render() {
    const isActive = getActiveFormat(this.props.value, type) ? true : false;
    return (
      <div className="hover-spread">
        <IconButton
          tip="斜体"
          className={isActive ? 'active' : ''}
          onClick={this.handleBtnClick}
          icon={<U_on />}
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
    }
  },
  render(props) {
    return <Underline {...props} />;
  }
};
