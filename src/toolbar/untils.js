import { noop } from 'lodash';
import { createContext } from '@wordpress/element';
import { createHigherOrderComponent } from '@wordpress/compose';

const { Consumer, Provider } = createContext( {
  name: '',
  isSelected: false,
  focusedElement: null,
  setFocusedElement: noop,
  clientId: null,
} );
export const withBlockEditContext = ( mapContextToProps ) => createHigherOrderComponent( ( OriginalComponent ) => {
  return ( props ) => (
    <Consumer>
      { ( context ) => (
        <OriginalComponent
          { ...props }
          { ...mapContextToProps( context, props ) }
        />
      ) }
    </Consumer>
  );
}, 'withBlockEditContext' );
