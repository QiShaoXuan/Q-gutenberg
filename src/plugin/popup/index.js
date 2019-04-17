const { registerFormatType, getActiveFormat, applyFormat } = window.wp.richText;
const { PositionedAtSelection } = window.wp.components;
import { styleStrToObj } from './untils';

import Popup from './components/popup';

import './styles/index.scss';

const type = 'tss-popup/font';

registerFormatType(type, {
  title: 'Tss Inline popup',
  tagName: 'span',
  className: 'tss-popup',
  attributes: {
    style: 'style'
  },
  isDefault: true,

  edit({ isActive, value, onChange }) {
    console.log('getActiveFormat(value, type)',getActiveFormat(value, type))
    
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
// <img src="https://i.loli.net/2019/04/11/5caecf869757e.png" alt="format-bgcolor.png" title="format-bgcolor.png" />
// <img src="https://i.loli.net/2019/04/11/5caecf869903e.png" alt="format-bgcolor-on.png" title="format-bgcolor-on.png" />
// <img src="https://i.loli.net/2019/04/11/5caeca7d4eb88.png" alt="format-color-on.png" title="format-color-on.png" />
// <img src="https://i.loli.net/2019/04/11/5caeca7d4eb7c.png" alt="format-underlined-on.png" title="format-underlined-on.png" />
//   <img src="https://i.loli.net/2019/04/11/5caeca7d4ef7b.png" alt="format-bold.png" title="format-bold.png" />
//   <img src="https://i.loli.net/2019/04/11/5caeca7d4f017.png" alt="format-bold-on.png" title="format-bold-on.png" />
//   <img src="https://i.loli.net/2019/04/11/5caeca7d504b7.png" alt="format-italic-on.png" title="format-italic-on.png" />
//   <img src="https://i.loli.net/2019/04/11/5caeca7d505c5.png" alt="format-italic.png" title="format-italic.png" />
//   <img src="https://i.loli.net/2019/04/11/5caeca7d506aa.png" alt="format-color.png" title="format-color.png" />
//   <img src="https://i.loli.net/2019/04/11/5caeca7d61954.png" alt="format-underlined.png" title="format-underlined.png" />

// {/*<img src="https://i.loli.net/2019/04/11/5caf052657805.png" alt="picker.png" title="picker.png" />*/}
// {/*<img src="https://i.loli.net/2019/04/11/5caf052659229.png" alt="cancel.png" title="cancel.png" />*/}

// <img src="https://i.loli.net/2019/04/11/5caf0ecda2af7.png" alt="arrow.png" title="arrow.png" />
// <img src="https://i.loli.net/2019/04/11/5caf0ecda4477.png" alt="duigou.png" title="duigou.png" />
// <img src="https://i.loli.net/2019/04/11/5caf249ddb483.png" alt="two-arrow.png" title="two-arrow.png" />
