/**
 * @brief	Dream box component used to render the pony image
 */
define( 'Pony', ['Component'], function ( Component )
{
	class Pony extends Component
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
			return '<div class="pony-container"><img src="/img/pony.png" alt="pony" class="pony"></div>';
		}
	}

	return Pony;
} );