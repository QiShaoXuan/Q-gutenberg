import React from 'react';
import { applyFormat, removeFormat } from '@wordpress/rich-text';
import { typePrefix } from '../../formats';
import IconButton from '../icon-button/index';
import FontSizeMenu from './font-size-menu';
import { Two_arrow_on } from '../../icons/index';

import './index.scss';

const formatType = 'fontsize';
const type = `${typePrefix}/${formatType}`;
const defaultFontsize = 20;

class Fontsize extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      fontsize: 20
    };
  }
  handleBtnClick = () => {
    this.setState({
      open: true
    });
  };
  fontsizeChange = (fontsize) => {
    const { onChange, value } = this.props;

    this.setState({
      fontsize: fontsize,
      open: false
    });

    onChange(
      fontsize == defaultFontsize
        ? removeFormat(value, type)
        : applyFormat(value, {
            type: type,
            attributes: {
              style: `font-size:${fontsize}px`
            }
          })
    );
  };

  render() {
    const { open, fontsize } = this.state;

    return (
      <div className={`hover-spread ${open === 'font-size' ? 'active' : ''}`}>
        <IconButton
          className="font-size-btn"
          tip="字号与微信编辑器相同"
          icon={<Two_arrow_on />}
          onClick={this.handleBtnClick}
          text={fontsize}
        />
        {open ? (
          <FontSizeMenu value={fontsize} onChange={(fontsize) => this.fontsizeChange(fontsize)} />
        ) : null}
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
    return <Fontsize {...props} />;
  }
};
