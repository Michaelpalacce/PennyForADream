'use strict';

define( 'DreamBox', ['Component'], function ( Component ) {
	class DreamBox extends Component
	{
		/**
		 * @param	Object props
		 */
		constructor( props = {} )
		{
			super( props );
			this.detach();
		}

		/**
		 * @brief	Renders the element
		 *
		 * @return	String
		 */
		_render()
		{
			return '<div class="dream-box"><input type="text" placeholder="Penny for a dream?" class="dream-input"></div>';
		}
	}

	return DreamBox;
} );