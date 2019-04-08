const { createElement } = window.wp.element;
const { registerFormatType, applyFormat, removeFormat, getActiveFormat } = window.wp.richText;
const { InspectorControls, PanelColorSettings } = window.wp.editor;
const { FontSizePicker, PanelBody, ToggleControl } = window.wp.components;
import { __, _x } from '@wordpress/i18n';
// [
//   {
//     name: 'fontsize',
//     title: 'change inline fontsizer'
//   }
// ].forEach(({ name, title }) => {
const title = 'change inline fontsizer';
const name = 'fontsize';
const type = `advanced/${name}`;
registerFormatType(type, {
  title: title,
  tagName: 'span',
  className: 'fontsize',
  attributes: {
    style: 'style'
  },
  edit({ isActive, value, onChange }) {
    let activeColor;

    if (isActive) {
      const activeFormat = getActiveFormat(value, type);
      const style = activeFormat.attributes.style;

      activeColor = style.replace(new RegExp(`^${name}:\\s*`), '');
    }
    return (<InspectorControls>
      <PanelBody title={__('Inline Text Settings')}
        className="inline-block-font-size">
        <FontSizePicker
          // fallbackFontSize={ fallbackFontSize }
          // value={ fontSize.size }
          // onChange={ setFontSize }
          onChange={(color) => {
            if (color) {
              onChange(applyFormat(value, {
                type,
                attributes: {
                  style: `${name}:${color}px`
                }
              }));
              return;
            }

            onChange(removeFormat(value, type));
          }}
        />
      </PanelBody>
    </InspectorControls>);
    return (
      createElement(InspectorControls, null,
        createElement(FontSizePicker, {
          title,
          initialOpen: true,
          colorSettings: [
            {
              value: activeColor,
              onChange: (color) => {
                if (color) {
                  onChange(applyFormat(value, {
                    type,
                    attributes: {
                      style: `${name}:${color}px`
                    }
                  }));
                  return;
                }

                onChange(removeFormat(value, type));
              },
              label: 'Apply color to the selected text.'
            }
          ]
        })
      )
    );
  }
});
// });
