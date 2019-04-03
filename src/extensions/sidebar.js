import * as compose from '@wordpress/compose';
import { PanelBody, TextControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/editor';
import * as hooks from '@wordpress/hooks';

// https://wordpress.org/gutenberg/handbook/designers-developers/developers/components/panel/
// https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/plugin-sidebar-0/
// https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/plugin-sidebar-0/plugin-sidebar-1-up-and-running/
//
// export const addMyCustomBlockControls = compose.createHigherOrderComponent((BlockEdit) => {
//   return (props) => {
//     // If this block supports scheduling and is currently selected, add our UI
//     if (props.isSelected) {
//       return (
//         <div>
//           <BlockEdit {...props} />
//           <InspectorControls>
//             <PanelBody title={'TSS Panel Heading'}>
//               <TextControl
//                 label={'My Custom Control'}
//                 help={'Some help text for my custom control.'}
//                 value={props.attributes.scheduledStart || ''}
//                 onChange={(nextValue) => {
//                   props.setAttributes({
//                     scheduledStart: nextValue
//                   });
//                 }}
//               />
//             </PanelBody>
//           </InspectorControls>
//         </div>
//       );
//     }
//
//     return <BlockEdit {...props} />;
//   };
// }, 'addMyCustomBlockControls');
