// import
import {
  getBlockTypes,
  registerBlockStyle
} from '@wordpress/blocks';

export default function(wp) {
  setTimeout(() => {
    const blocks = getBlockTypes();
    blocks.forEach((block) => {
      const className = block.name.split('/')[1];

      registerBlockStyle(block.name, {
        name: `tss-${className}`,
        label: `tss-${className}`,
        // isDefault: true
      });
    });
  });
}
