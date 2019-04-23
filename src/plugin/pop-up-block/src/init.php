<?php
/**
 * This is a Pop Up Block for the Gutenberg editor
 *
 * @package Block Party Pop Up
 * @since 1.0.0
 */

/**
 * Exit if accessed directly.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * `wp-blocks`: includes block type registration and related functions.
 *
 * @since 1.0.0
 */
function gutenberg_pop_up_block_assets() {
	wp_enqueue_script(
		'gutenberg_pop_up-block-bootstrap-js',
		plugins_url( '/bootstrap-modal.min.js', dirname( __FILE__ ) ),
		array( 'jquery' ),
		true,
		true
	);
	wp_enqueue_script(
		'block-party-pop-up-velocity',
		plugins_url( '/velocity.min.js', dirname( __FILE__ ) ),
		array( 'jquery' ),
		true,
		true
	);
	wp_enqueue_script(
		'block-party-pop-up-velocity-ui',
		plugins_url( '/velocity-ui.min.js', dirname( __FILE__ ) ),
		array( 'jquery', 'block-party-pop-up-velocity' ),
		true,
		true
	);
	wp_enqueue_script(
		'block-party-pop-up-animations',
		plugins_url( '/animations.js', dirname( __FILE__ ) ),
		array( 'jquery', 'block-party-pop-up-velocity', 'block-party-pop-up-velocity-ui' ),
		true,
		true
	);
	wp_enqueue_style(
		'gutenberg_pop_up-block-editor-bootstrap-css',
		plugins_url( 'bootstrap-modal.css', dirname( __FILE__ ) ),
		array( 'wp-edit-blocks' ),
		true
	);
}

add_action( 'enqueue_block_assets', 'gutenberg_pop_up_block_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function gutenberg_pop_up_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'gutenberg_pop_up-block-js',
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		true,
		true
	);
}

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'gutenberg_pop_up_editor_assets' );

/**
 * Render the Pop Up block
 *
 * @param array  $attributes Attributes set in the Gutenberg editor.
 * @param string $content HTML saved in the Gutenberg block save method.
 * @return string
 */
function block_party_render_pop_up_block( $attributes, $content ) {

	$button_style = 'background-color: ' . $attributes['buttonColor'] . '; color: ' . $attributes['buttonTextColor'];

	$output = "<div class='" . esc_attr( $attributes['className'] ) . "' style='display: flex; justify-content: " . esc_attr( $attributes['align'] ) . "'>";

	$output .= "<p><button style='" . esc_attr( $button_style ) . "' type='button' class='button' data-toggle='modal' data-target='#" . esc_attr( $attributes['randomKey'] ) . "'>";

	$output .= $attributes['buttonText'];

	$output .= '</button></p></div>';

	// due to some themes having strange z-index issues on the content, we need to put this at the bottom of the page to avoid that. We are using an anonymous function in case there is more than one per page.
	add_action(
		'wp_footer',
		function() use ( $attributes, $content ) {

			$modal_content_style = 'background-color: ' . $attributes['textBackgroundColor'] . '; color: ' . $attributes['textColor'] . '; border-radius: ' . $attributes['borderRadius'] . 'px';

			$modal_header_style = 'background-color: ' . $attributes['titleBackgroundColor'] . '; border-radius: ' . $attributes['borderRadius'] . 'px ' . $attributes['borderRadius'] . 'px 0 0';

			$modal_title_style = 'color: ' . $attributes['titleColor'];

			?>
			<div class="modal" data-easein="<?php echo esc_attr( $attributes['animation'] ); ?>" id="<?php echo esc_attr( $attributes['randomKey'] ); ?>" style="color: <?php echo esc_attr( $attributes['textColor'] ); ?>" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
				<div class="modal-dialog<?php echo esc_attr( $attributes['size'] ); ?>" role="document">
					<div class="modal-content" style="<?php echo esc_attr( $modal_content_style ); ?>">
						<div class="modal-header" style="<?php echo esc_attr( $modal_header_style ); ?>">
							<h4 class="modal-title" id="myModalLabel" style="<?php echo esc_attr( $modal_title_style ); ?>"><?php echo esc_html( $attributes['title'] ); ?></h4>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						</div>
						<div class="modal-body">
							<?php echo wp_kses_post( $content ); ?>
						</div>
					</div>
				</div>
			</div>
			<?php
		}
	);

	return $output;
}
/**
 * Register the Pop Up block
 *
 * @return void
 */
function block_party_register_pop_up_block() {
	if ( \function_exists( 'register_block_type' ) ) {
		$attributes                         = [];
		$attributes['title']                = [
			'type'    => 'string',
			'default' => '',
		];
		$attributes['buttonText']           = [
			'type'    => 'string',
			'default' => 'Click Me',
		];
		$attributes['align']                = [
			'type'    => 'string',
			'default' => 'left',
		];
		$attributes['randomKey']            = [
			'type'    => 'string',
			'default' => 'myModal',
		];
		$attributes['size']                 = [
			'type'    => 'string',
			'default' => '',
		];
		$attributes['textBackgroundColor']  = [
			'type'    => 'string',
			'default' => '',
		];
		$attributes['titleBackgroundColor'] = [
			'type'    => 'string',
			'default' => '',
		];
		$attributes['textColor']            = [
			'type'    => 'string',
			'default' => '',
		];
		$attributes['titleColor']           = [
			'type'    => 'string',
			'default' => '',
		];
		$attributes['buttonColor']          = [
			'type'    => 'string',
			'default' => '',
		];
		$attributes['buttonTextColor']      = [
			'type'    => 'string',
			'default' => '',
		];
		$attributes['borderRadius']         = [
			'type'    => 'number',
			'default' => 6,
		];
		$attributes['animation']            = [
			'type'    => 'string',
			'default' => 'fadeIn',
		];
		\register_block_type(
			'blockparty/block-gutenberg-pop-up',
			array(
				'attributes'      => $attributes,
				'render_callback' => 'block_party_render_pop_up_block',
			)
		);
	}
}
add_action( 'init', 'block_party_register_pop_up_block' );




