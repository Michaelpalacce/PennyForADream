'use strict';

/**
 * @brief	Canvas component used to draw on the background
 */
define( 'Canvas', ['Component'], function ( Component )
{
	class Canvas extends Component
	{
		/**
		 * @param	Object props
		 */
		constructor( props = {} )
		{
			props.style	= {
				position	: 'fixed',
				top			: 0,
				left		: 0,
				width		: '100%',
				height		: '100%'
			};

			super( props );
			this.context	= this.getContext();
		}

		/**
		 * @brief	Gets the context of the canvas
		 *
		 * @returns	Object
		 */
		getContext()
		{
			if ( this.context === null )
			{
				let canvas		= document.getElementById( 'background-canvas' );

				this.context	= canvas.getContext( '2d' );
			}

			return this.context;
		}

		/**
		 * @brief	Renders the element
		 *
		 * @return	String
		 */
		_render()
		{
			return '<canvas id="background-canvas" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%;"></canvas>';
		}
	}

	return Canvas;
} );
