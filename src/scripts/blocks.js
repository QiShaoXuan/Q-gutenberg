import { getBlockTypes, unregisterBlockType } from '@wordpress/blocks';

const allowedBlocks = [
  'core/paragraph',
  'core/image',
  'core/heading',
  'core/list',
  'core/quote',
  'core/code',
  'core/columns',
  'core/column',
  'core/cover',
  'core/media-text',
  'core/separator',
  'core/block',
  'core/spacer',
  'core/subhead',
  'core/table',
  'core/template',
  'core/text-columns',
  'core/verse'
];

// https://wordpress.org/gutenberg/handbook/designers-developers/developers/filters/block-filters/
// https://wordpress.org/gutenberg/handbook/designers-developers/developers/filters/editor-filters/
// add_filter( 'allowed_block_types', 'my_plugin_allowed_block_types', 10, 2 );
export default class {
  static unregisterUnused() {
    getBlockTypes().forEach((item) => {
      if (allowedBlocks.indexOf(item.name) === -1) {
        unregisterBlockType(item.name);
      }
    });
  }

  static unregisterAll() {
    getBlockTypes().forEach((item) => {
      unregisterBlockType(item.name);
    });
  }
}
