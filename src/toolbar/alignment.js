/**
 * External dependencies
 */
import { find } from 'lodash';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
  Toolbar,
  ColorPicker
} from '@wordpress/components';
import { withViewportMatch } from '@wordpress/viewport';
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';

import { ColorPalette } from '@wordpress/components';
import { withState } from '@wordpress/compose';

const MyColorPalette = withState({
  color: '#f00'
})(({ color, setState }) => {
  const colors = [
    { name: 'red', color: '#f00' },
    { name: 'white', color: '#fff' },
    { name: 'blue', color: '#00f' }
  ];

  const onChange = function(color) {
    console.log(color)

    setState({ color });
  };

  return (
    <ColorPalette
      colors={colors}
      // value={color}
      onChange={onChange}
    />
  );
});
/**
 * Internal dependencies
 */
import { withBlockEditContext } from './untils';
// import { withBlockEditContext } from '../block-edit/context';

const DEFAULT_ALIGNMENT_CONTROLS = [
  {
    icon: 'editor-alignleft',
    title: __('Align text left'),
    align: 'left'
  },
  {
    icon: 'editor-aligncenter',
    title: __('Align text center'),
    align: 'center'
  },
  {
    icon: 'editor-alignright',
    title: __('Align text right'),
    align: 'right'
  }
];

export function AlignmentToolbar({ isCollapsed, value, onChange, alignmentControls = DEFAULT_ALIGNMENT_CONTROLS }) {
  function applyOrUnset(align) {
    return () => onChange(value === align ? undefined : align);
  }

  const activeAlignment = find(alignmentControls, (control) => control.align === value);
  const onChangeComplete = function(color) {
    console.log(color);

    // return onChange(color.hex);
  };

  return (
    <div>
      <MyColorPalette/>
      <Toolbar
        isCollapsed={isCollapsed}
        icon={activeAlignment ? activeAlignment.icon : 'editor-alignleft'}
        label={__('Change Text Alignment')}
        controls={alignmentControls.map((control) => {
          const { align } = control;
          const isActive = (value === align);
          return {
            ...control,
            isActive,
            onClick: applyOrUnset(align)
          };
        })}
      />
    </div>

  );
}

export default compose(
  withBlockEditContext(({ clientId }) => {
    return {
      clientId
    };
  }),
  withViewportMatch({ isLargeViewport: 'medium' }),
  withSelect((select, { clientId, isLargeViewport, isCollapsed }) => {
    const { getBlockRootClientId, getSettings } = select('core/block-editor');
    return {
      isCollapsed: isCollapsed || !isLargeViewport || (
        !getSettings().hasFixedToolbar &&
        getBlockRootClientId(clientId)
      )
    };
  })
)(AlignmentToolbar);
