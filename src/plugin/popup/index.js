import { registerFormatType, getActiveFormat } from '@wordpress/rich-text';
import PositionedAtSelection from '@wordpress/components/build/positioned-at-selection';
import { typePrefix } from './formats';

import './styles/index.scss';
import fommats from './components/index';

fommats.map((fromat) => registerFormatType(fromat.register.type, fromat.register));

registerFormatType(`${typePrefix}/popup`, {
  title: 'Tss Inline popup',
  tagName: 'span',
  className: 'tss-popup',
  edit(params) {
    const { value } = params;

    return value.end - value.start > 0 ? (
      <PositionedAtSelection key={`${value.end}${value.start}`}>
        <div
          className="Tss-font-style"
          style={{ opacity: 1 }}
          onMouseMove={(e) => e.stopPropagation()}>
          {fommats.map((format) => format.render(params))}
        </div>
      </PositionedAtSelection>
    ) : null;
  }
});
