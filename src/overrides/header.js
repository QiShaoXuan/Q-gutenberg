import {
  Inserter,
  BlockToolbar,
  NavigableToolbar,
  BlockNavigationDropdown
} from '@wordpress/block-editor';
import { EditorHistoryRedo, EditorHistoryUndo, TableOfContents } from '@wordpress/editor';
import { IconButton } from '@wordpress/components';
import { select } from '@wordpress/data';
import { PostSavedState } from '@wordpress/editor';
import { compose } from '@wordpress/compose';
import { withDispatch, withSelect } from '@wordpress/data';
import MoreMenu from '@wordpress/edit-post/build/components/header/more-menu';
import { __ } from '@wordpress/i18n';

function Header({
  closeGeneralSidebar,
  hasActiveMetaboxes,
  isEditorSidebarOpened,
  isPublishSidebarOpened,
  isSaving,
  openGeneralSidebar
}) {
  const toggleGeneralSidebar = isEditorSidebarOpened ? closeGeneralSidebar : openGeneralSidebar;
  return (
    <header
      role="region"
      /* translators: accessibility text for the top bar landmark region. */
      className="edit-post-header gutenberg-editor-header"
      tabIndex="-1">
      <NavigableToolbar className="edit-post-header-toolbar">
        <img
          alt={'logo'}
          width={'32'}
          style={{ margin: '0 10px' }}
          src={'https://s26793.pcdn.co/wp-content/uploads/2018/05/logo.png'}
        />
        <Inserter position="bottom right" />
        <EditorHistoryUndo />
        <EditorHistoryRedo />
        <TableOfContents hasOutlineItemsDisabled={true} />
        <BlockNavigationDropdown isDisabled={false} />
        {
          <div className="edit-post-header-toolbar__block-toolbar">
            <BlockToolbar />
          </div>
        }
      </NavigableToolbar>
      <div className="edit-post-header__settings">
        {!isPublishSidebarOpened && (
          // This button isn't completely hidden by the publish sidebar.
          // We can't hide the whole toolbar when the publish sidebar is open because
          // we want to prevent mounting/unmounting the PostPublishButtonOrToggle DOM node.
          // We track that DOM node to return focus to the PostPublishButtonOrToggle
          // when the publish sidebar has been closed.
          <PostSavedState forceIsDirty={hasActiveMetaboxes} forceIsSaving={isSaving} />
        )}
        <IconButton
          icon="admin-generic"
          label={__('Settings')}
          onClick={toggleGeneralSidebar}
          isToggled={isEditorSidebarOpened}
        />
        <MoreMenu />
      </div>
    </header>
  );
}

export default compose(
  withSelect((select) => ({
    hasActiveMetaboxes: select('core/edit-post').hasMetaBoxes(),
    isEditorSidebarOpened: select('core/edit-post').isEditorSidebarOpened(),
    isPublishSidebarOpened: select('core/edit-post').isPublishSidebarOpened(),
    isSaving: select('core/edit-post').isSavingMetaBoxes()
  })),
  withDispatch((dispatch, ownProps, { select }) => {
    const { getBlockSelectionStart } = select('core/block-editor');
    const { openGeneralSidebar, closeGeneralSidebar } = dispatch('core/edit-post');

    return {
      openGeneralSidebar: () =>
        openGeneralSidebar(getBlockSelectionStart() ? 'edit-post/block' : 'edit-post/document'),
      closeGeneralSidebar
    };
  })
)(Header);
