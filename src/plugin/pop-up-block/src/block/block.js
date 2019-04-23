const { __ } = wp.i18n; 
const { Component } = wp.element;
const { registerBlockType } = wp.blocks; 
const { InnerBlocks, InspectorControls, ColorPalette, BlockAlignmentToolbar, AlignmentToolbar, PlainText } = wp.editor;
const { TextControl, SelectControl, RangeControl, IconButton, PanelBody } = wp.components;


class EditorComponent extends Component {


	constructor() {
		super( ...arguments );
		this.state = {
			isEditing: false
		}
	}

	componentDidMount() {
		const randomKey = "myModal" + Math.floor(Math.random() * 1000);
		this.props.setAttributes({randomKey: randomKey});
	}

	render() {
		const { attributes, setAttributes, className, focus, isSelected} = this.props;

		const handleChildClick = (e) => {
			e.stopPropagation();
			previewAnimation(attributes.animation, '.colorPreview')
			this.setState( { colorSelector: e.target.className } )
		}

		const handleParentClick = (e) => {
			previewAnimation(attributes.animation, '.colorPreview')
			this.setState( { colorSelector: 'textBackgroundColor' } )
		}

		const colorControl = (attributeName, title) => {
			return [
				<p>{__(title)}</p>,
				<ColorPalette
					onChange={ ( value ) => {
						const update = {};
						update[attributeName] = value;
						setAttributes( update )
						}
					}
				/>
			];
		}

		const styles = {
			colorPreview: {
				borderRadius: attributes.borderRadius,
				// border: "1px solid rgba(0, 0, 0, 0.2)",
				width: "100%",
				height: "60px",
				backgroundColor: attributes.textBackgroundColor,
				boxShadow: "0 2px 5px rgba(0, 0, 0, 0.5)",
				marginBottom: "3px",
			},
			previewBox: {
				titleBackgroundColor: {
					backgroundColor: attributes.titleBackgroundColor,
					borderBottom: '1px solid #e5e5e5',
					height: "40%",
					borderRadius: `${attributes.borderRadius}px ${attributes.borderRadius}px 0 0`,
				},
				titleColor: {
					display: 'inline',
					color: attributes.titleColor,
					padding: "5px",
				},
				textColor: {
					width: "20%",
					color: attributes.textColor,
					padding: "5px",
				},
			},
			modal: {
				modalContent: {
					backgroundColor: attributes.textBackgroundColor,
					color: attributes.textColor,
					borderRadius: attributes.borderRadius,
				},
				modalHeader: {
					backgroundColor: attributes.titleBackgroundColor,
					borderRadius: `${attributes.borderRadius}px ${attributes.borderRadius}px 0 0`,
				},
				modalTitle: {
					color: attributes.titleColor,
				},
			},
			button: {
				backgroundColor: attributes.buttonColor,
				color: attributes.buttonTextColor,
			},
		}

		const previewAnimation = (animation, element) => {
				if (animation == 'shake') {
					jQuery(element).velocity('callout.' + animation);
				} else if (animation == 'pulse') {
					jQuery(element).velocity('callout.' + animation);
				} else if (animation == 'tada') {
					jQuery(element).velocity('callout.' + animation);
				} else if (animation == 'flash') {
					jQuery(element).velocity('callout.' + animation);
				} else if (animation == 'bounce') {
					jQuery(element).velocity('callout.' + animation);
				} else if (animation == 'swing') {
					jQuery(element).velocity('callout.' + animation);
				} else {
					jQuery(element).velocity('transition.' + animation);
				}
		}

		const controls = isSelected && [
			 <InspectorControls>
				<SelectControl
					label={ __("Size: ") }
					value={ attributes.size }
					options={[
						{ value: ' modal-lg', label: 'Large' },
						{ value: '', label: 'Medium' },
						{ value: ' modal-sm', label: 'Small' },
					]}
					onChange={ (value) => setAttributes( { size: value } ) }
				/>
				<SelectControl
					className="animation-select-control"
					style={{ width: '100%'}}
					label={ __("Animation: ") }
					value={ attributes.animation }
					options={[
						{ value: 'fadeIn', label: __("Fade In") },
						{ value: 'bounce', label: __("Bounce") },
						{ value: 'shake', label: __("Shake") },
						{ value: 'flipBounceYIn', label: __("Flip") },
						{ value: 'shrinkIn', label: __("Zoom Out") },
						{ value: 'expandIn', label: __("Zoom In") },
						{ value: 'slideDownIn', label: __("Slide In") },
						{ value: 'perspectiveLeftIn', label: __("Perspective In") },
						{ value: 'pulse', label: __("Pulse") },
						{ value: 'swing', label: __("Swing") },
						{ value: 'tada', label: __("Tada") }
					]}
					onChange={ (value) => {
						setAttributes( { animation: value } )
						previewAnimation(value, '.animation-select-control')
					} }
				/>
				<PanelBody title={ __( 'Title Settings' ) } initialOpen={false}>
					<TextControl
						label="Pop Up Title:"
						onChange={ ( value ) => setAttributes( { title: value } ) }
						value={ attributes.title }
						placeholder="Pop Up Title"
					/>
					{colorControl('titleColor', 'Title Color')}
					{colorControl('titleBackgroundColor', 'Title Background Color')}
				</PanelBody>
				<PanelBody title={ __( 'Content Settings' ) } initialOpen={false}>
					{colorControl('textBackgroundColor', 'Text Background Color')}
				</PanelBody>
				<PanelBody title={ __( 'Button Settings' ) } initialOpen={false}>
					{colorControl('buttonTextColor', 'Button Text Color')}
					{colorControl('buttonColor', 'Button Background Color')}
				</PanelBody>
				<RangeControl
					label={ __("Rounded Corners: ") }
					value={ (attributes.borderRadius / 3) }
					min={ 0 }
					max={ 5 }
					onChange={ (value) => setAttributes( { borderRadius: (value * 3) } ) }
				/>	
				{ __( "Mini Preview:" ) }
				<div className="colorPreview" onClick={ (e) => handleParentClick(e) } style={ styles.colorPreview }>
					<div className="titleBackgroundColor" style={ styles.previewBox.titleBackgroundColor } onClick={ (e) => handleChildClick(e) }>
						<h2 className="titleColor" style={ styles.previewBox.titleColor } onClick={ (e) => handleChildClick(e) }>{attributes.title}</h2>
						<h2 className="textBackgroundColor" style={{textAlign:'center'}} onClick={ (e) => handleChildClick(e) }>...</h2>
					</div>
				</div>
			</InspectorControls>
		]

		return [
			controls,
			isSelected || this.state.isEditing
				?
					<BlockAlignmentToolbar
						value={attributes.align}
						onChange={ (value) => {
							setAttributes( { align: value === 'right' ? 'flex-end' : value } )
						} }
					/>
				: 
					null,
			(
				<div>
				{ this.state.isEditing
					?
						<div className="pop-up-editor-container">
							<div style={{display: 'flex', justifyContent: attributes.align}} className={ className } onClick={() => this.setState({ isEditing: true })}>
								<p><span style={styles.button} type="button" className="button">
									<PlainText
										value={attributes.buttonText}
										style={{backgroundColor: 'transparent'}}
										onChange={ ( value ) => setAttributes( { buttonText: value } ) }
									/>
								</span></p>
							</div>
							<label class="blocks-base-control__label">Pop Up Content:</label>
							<InnerBlocks/>
							<div style={{textAlign: 'right'}}>
								<IconButton style={{display: 'inline-block'}} icon="yes" label={ __( 'Apply' ) } type="submit" onClick={(event) => { event.preventDefault(); this.setState({ isEditing: false });}}/>
							</div>
						</div>
					:
						<div>
							<div style={{display: 'flex', justifyContent: attributes.align}} className={ className } onClick={() => this.setState({ isEditing: true })}>
								<p><button style={styles.button} type="button" className="button" data-toggle="modal">
									{ attributes.buttonText }
								</button></p>
							</div>
							{ isSelected &&
								<div style={{textAlign: 'right'}}>
									<IconButton style={{display: 'inline-block'}} icon="edit" label={ __( 'Edit Popup Content' ) } type="submit" onClick={(event) => { event.preventDefault(); this.setState({ isEditing: true });}}/>
								</div>
							}
						</div>
				}
			</div>
		)
		];
	}
}

registerBlockType( 'blockparty/block-gutenberg-pop-up', {
	title: __( 'Block Party Pop Up' ),
	icon: 'external', 
	category: 'common', 
	description: __( 'Create a custom pop-up modal!' ),
	keywords: [
		__( 'Pop Up' ),
		__( 'Block Party' ),
	],

	edit: EditorComponent,

	save: function() {
		return (<InnerBlocks.Content/>);
	},
} );