import { registerFormatType, getActiveFormat } from '@wordpress/rich-text';
import PositionedAtSelection from '@wordpress/components/build/positioned-at-selection';
import { styleStrToObj } from './untils';
import Popup from './components/popup';
import './styles/index.scss';

const type = 'tss-popup/font';

registerFormatType(type, {
  title: 'Tss Inline popup',
  tagName: 'span',
  className: 'tss-popup',
  attributes: {
    style: 'style',
    tag:''
  },
  isDefault: true,

  edit(params) {
    const { isActive, value, onChange } = params
    console.log(params)
    
    let activeStyle = {};
    if (isActive) {
      const activeFormat = getActiveFormat(value, type);
      activeStyle = styleStrToObj(activeFormat.attributes.style);
    }

    return value.end - value.start > 0 ? (
      <PositionedAtSelection key={`${value.end}${value.start}`}>
        <Popup
          onChange={onChange}
          isActive={isActive}
          value={value}
          activeStyle={activeStyle}
          formatType={type}
        />
      </PositionedAtSelection>
    ) : null;
  }
});
