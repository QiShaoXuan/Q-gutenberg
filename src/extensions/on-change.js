// https://github.com/WordPress/gutenberg/issues/4674

const { subscribe } = wp.data;

const initialPostStatus = wp.data.select('core/editor').getEditedPostAttribute('status');

if ('publish' !== initialPostStatus) {
  // Watch for the publish event.
  const unssubscribe = subscribe(() => {
    const currentPostStatus = wp.data.select('core/editor').getEditedPostAttribute('status');
    if ('publish' === currentPostStatus) {
      // ...do something here - the post has been published
    }
  });
}
