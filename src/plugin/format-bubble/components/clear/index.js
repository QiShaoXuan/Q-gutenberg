import React from 'react';
import {
  applyFormat,
  removeFormat,
  getActiveFormat
} from '@wordpress/rich-text';
import { typePrefix } from '../../formats.js';
import IconButton from '../icon-button/index.js';
import { DeleteIcon } from '../icons/index.js';

const formatType = 'clear';
const type = `${typePrefix}/${formatType}`;

class Delete extends React.Component {
  handleBtnClick = () => {
    let { onChange, value } = this.props;
    const { start, end } = value;

    value.formats.forEach((format, key) => {
      if (format && key < end && key >= start) {
        delete value.formats[key];
      }
    });

    onChange(value);
  };
  render() {
    return (
      <div className="hover-spread">
        <IconButton
          tip="清除样式"
          onClick={this.handleBtnClick}
          icon={<DeleteIcon />}
        />
      </div>
    );
  }
}

export default {
  render(props) {
    return <Delete {...props} />;
  }
};
