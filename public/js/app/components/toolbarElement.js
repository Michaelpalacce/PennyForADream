'use strict';

/**
 * @brief	ToolbarElement component used to render the toolbar
 */
define( 'ToolbarElement', ['Component'], function ( Component )
{
	class ToolbarElement extends Component
	{
		/**
		 * @param	Object props
		 */
		constructor( props = {} )
		{
			super( props );
		}

		/**
		 * @brief	Renders the element
		 *
		 * @return	String
		 */
		_render()
		{
			return '<li title="' + this.props.name + '"><a href="' + this.props.href + '">' + this.props.name + '</a></li>';
		}
	}

	return ToolbarElement;
} );