import React from 'react';
import { registerFormatType, getActiveFormat } from '@wordpress/rich-text';
import PositionedAtSelection from '@wordpress/components/build/positioned-at-selection';
import { typePrefix } from './formats';
import fommats from './components/index';

import './styles/index.scss';

class Popup extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      open: ''
    };

    setTimeout(() => {
      this.setState({
        show: true
      });
    }, 200);
  }
  popupChange = (type) => {
    this.setState({
      open: type
    });
  };

  render() {
    const { value } = this.props.params;
    const { show ,open} = this.state;
    const props = {
      ...this.props.params,
      open: open,
      popupChange: this.popupChange
    };

    return (
      <PositionedAtSelection key={`${value.end}${value.start}`}>
        <div className="Tss-font-style" style={{ opacity: show ? 1 : 0 }}>
          {fommats.map((format) => format.render(props))}
        </div>
      </PositionedAtSelection>
    );
  }
}

fommats.map((fromat) => registerFormatType(fromat.register.type, fromat.register));

registerFormatType(`${typePrefix}/popup`, {
  title: 'Tss Inline popup',
  tagName: 'span',
  className: 'tss-popup',
  edit(params) {
    const { value } = params;

    return value.end - value.start > 0 ? <Popup params={params} /> : null;
  }
});
