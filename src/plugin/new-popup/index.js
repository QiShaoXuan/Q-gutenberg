const { getSelection, getComputedStyle } = window;
class popUp {
  constructor(){

  }

  createRecord() {
    const selection = getSelection();
    const range = selection.rangeCount > 0 ? selection.getRangeAt( 0 ) : null;

    return create( {
      element: this.editableRef,
      range,
      multilineTag: this.multilineTag,
      multilineWrapperTags: this.multilineWrapperTags,
      prepareEditableTree: this.props.prepareEditableTree,
      __unstableIsEditableTree: true,
    } );
  }

  onSelectionChange() {
    const value = this.createRecord();
    const { start, end, formats } = value;

    if ( start !== this.state.start || end !== this.state.end ) {
      const isCaretWithinFormattedText = this.props.isCaretWithinFormattedText;

      if ( ! isCaretWithinFormattedText && formats[ start ] ) {
        this.props.onEnterFormattedText();
      } else if ( isCaretWithinFormattedText && ! formats[ start ] ) {
        this.props.onExitFormattedText();
      }

      let selectedFormat;
      const formatsAfter = formats[ start ] || [];
      const collapsed = isCollapsed( value );

      if ( collapsed ) {
        const formatsBefore = formats[ start - 1 ] || [];

        selectedFormat = Math.min( formatsBefore.length, formatsAfter.length );
      }

      this.setState( { start, end, selectedFormat } );
      this.applyRecord( { ...value, selectedFormat }, { domOnly: true } );

      delete this.formatPlaceholder;

      if ( collapsed ? selectedFormat > 0 : formatsAfter.length > 0 ) {
        this.recalculateBoundaryStyle();
      }
    }
  }
}
