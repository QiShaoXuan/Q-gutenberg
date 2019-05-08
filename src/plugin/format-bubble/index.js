import React from 'react';
import { registerFormatType, unregisterFormatType } from '@wordpress/rich-text';
import PositionedAtSelection from '@wordpress/components/build/positioned-at-selection';
import { typePrefix, deleteFormats } from './formats.js';
import fommats from './components/index';

import './styles/index.scss';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: ''
    };
  }
  popupChange = (type) => {
    this.setState({
      open: type
    });
  };
  render() {
    const { value } = this.props.params;
    const { open } = this.state;
    const props = {
      ...this.props.params,
      open: open,
      popupChange: this.popupChange
    };

    const show = value.end - value.start > 0;

    return (
      <PositionedAtSelection key={`${value.end}${value.start}`}>
        <div className="Tss-font-style" style={{ opacity: show ? 1 : 0 }}>
          {fommats.map((format) => format.render(props))}
        </div>
      </PositionedAtSelection>
    );
  }
}

deleteFormats.forEach((deleteFormat) => unregisterFormatType(deleteFormat));
fommats.forEach((format) =>
  format.register
    ? registerFormatType(format.register.type, format.register)
    : null
);

registerFormatType(`${typePrefix}/popup`, {
  title: 'Tss Inline popup',
  tagName: 'span',
  className: 'tss-popup',
  edit(params) {
    const { value } = params;
    return <Popup params={params} />;

    // return value.end - value.start > 0 ? <Popup params={params} /> : null;
  }
});
