import React from 'react';
import { toggleFormat, getActiveFormat } from '@wordpress/rich-text';
import { typePrefix } from '../../formats';
import IconButton from '../icon-button/index';
import { B_on } from '../../icons/index';
const formatType = 'bold';
const type = `${typePrefix}/${formatType}`;

class Bold extends React.Component {
  handleBtnClick = () => {
    const { onChange, value } = this.props;
    onChange(
      toggleFormat(value, {
        type: type
      })
    );
  };
  render() {
    const isActive = getActiveFormat(this.props.value, type) ? true : false;
    return (
      <div className={`hover-spread ${isActive ? 'active' : ''}`}>
        <IconButton tip="加粗" onClick={this.handleBtnClick} icon={<B_on />} />
      </div>
    );
  }
}

export default {
  register: {
    type: type,
    title: `tss-${formatType}`,
    tagName: `strong`,
    className: `tss-${formatType}`,
    edit() {
      return null;
    }
  },
  render(props) {
    return <Bold {...props} />;
  }
};
