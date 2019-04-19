/**
 * External dependencies
 */
import map from 'lodash/map';

/**
 * Internal dependencies
 */
import icons from './../../../utils/icons';
import VisualDropdown from '../../../components/visual-dropdown/';
import { styleOptions } from './styles';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { BlockControls } = wp.editor;
const { Toolbar } = wp.components;

function Controls( { attributes, setAttributes, apiKey } ) {
	const {
		pinned,
		skin,
	} = attributes;

	const toolbarControls = [
		{
			icon: 'edit',
			title: __( 'Edit' ),
			isActive: ! pinned,
			onClick: () => setAttributes( { pinned: ! pinned } ),
		},
	];

	return (
		<BlockControls>
			{ apiKey &&
				<Toolbar>
					<VisualDropdown
						icon={ icons.style }
						label={ __( 'Map style' ) }
						controls={ [
							map( styleOptions, ( { value, label } ) => ( {
								title: label,
								label: label,
								key: value,
								value: skin,
								onClick: () => {
									setAttributes( { skin: value } );
								},
							} ) ),
						] }
					/>
				</Toolbar>
			}
			<Toolbar controls={ toolbarControls } />
		</BlockControls>
	);
}

export default Controls;
