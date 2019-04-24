import React from 'react';
import { toggleFormat, getActiveFormat } from '@wordpress/rich-text';
import { typePrefix } from '../../formats';
import IconButton from '../icon-button/index';
import { U_on } from '../../icons/index';
const formatType = 'underline';
const type = `${typePrefix}/${formatType}`;

class Underline extends React.Component {
  handleBtnClick = () => {
    const { onChange, value } = this.props;
    onChange(
      toggleFormat(value, {
        type: type,
        attributes: {
          style: 'text-decoration: underline'
        },
      })
    );
  };
  render() {
    const isActive = getActiveFormat(this.props.value, type) ? true : false;
    return (
      <div className={`hover-spread ${isActive ? 'active' : ''}`}>
        <IconButton tip="斜体" onClick={this.handleBtnClick} icon={<U_on />} />
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
    return <Underline {...props} />;
  }
};
