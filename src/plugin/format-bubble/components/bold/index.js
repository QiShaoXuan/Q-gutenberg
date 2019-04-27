import React from 'react';
import { toggleFormat, getActiveFormat } from '@wordpress/rich-text';
import { typePrefix } from '../../formats.js';
import IconButton from '../icon-button/index.js';
import { B_on } from '../icons/index.js';
const formatType = 'bold';
const type = `${typePrefix}/${formatType}`;

class Bold extends React.Component {
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
        <IconButton tip="加粗"  className={isActive?'active':''} onClick={this.handleBtnClick} icon={<B_on />} />
      </div>
    );
  }
}

export default {
  register: {
    type: type,
    title: `tss-${formatType}`,
    tagName: `strong`,
    className: `tss-${formatType}`
  },
  render(props) {
    return <Bold {...props} />;
  }
};
