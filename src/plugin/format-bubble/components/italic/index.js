import React from 'react';
import { toggleFormat, getActiveFormat } from '@wordpress/rich-text';
import { typePrefix } from '../../formats.js';
import IconButton from '../icon-button/index.js';
import { I_on } from '../icons/index.js';
const formatType = 'italic';
const type = `${typePrefix}/${formatType}`;

class Italic extends React.Component {
  handleBtnClick = () => {
    const { onChange, value, popupChange, open } = this.props;
    popupChange(open === type ? '' : type);
    onChange(
      toggleFormat(value, {
        type: type
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
          icon={<I_on />}
        />
      </div>
    );
  }
}

export default {
  register: {
    type: type,
    title: `tss-${formatType}`,
    tagName: `em`,
    className: `tss-${formatType}`,
    edit() {
      return null;
    }
  },
  render(props) {
    return <Italic {...props} />;
  }
};
