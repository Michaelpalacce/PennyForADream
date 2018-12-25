'use strict';

/**
 * @brief	Canvas component used to draw on the background
 */
define( 'Canvas', ['Component', 'CanvasRectangle'], function ( Component, CanvasRectangle )
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
			this.state		= {
				rectangles: [new CanvasRectangle( 10, 10, 100, 20, 'black', this.getContext() )]
			};
		}

		draw()
		{
			this.state.rectangles.forEach( ( rectangle )=>{
				rectangle.draw();
			});
		}

		/**
		 * @brief	Gets the context of the canvas
		 *
		 * @returns	Object
		 */
		getContext()
		{
			if ( this.context === undefined )
			{
				let canvas		= this.element[0];

				this.context	= canvas.getContext( '2d' );
			}

			return this.context;
		}

		/**
		 * @brief	Attaches events on resize
		 *
		 * @return	void
		 */
		attachEvents()
		{
			super.attachEvents();
			let canvas		= this.element[0];
			canvas.width	= window.innerWidth;
			canvas.height	= window.innerHeight;

			$( window ).on( 'resize', ()=>
			{
				canvas.width	= window.innerWidth;
				canvas.height	= window.innerHeight;
			});

		}

		/**
		 * @brief	Renders the element
		 *
		 * @return	String
		 */
		_render()
		{
			return '<canvas id="background-canvas" style="position: fixed; top: 0; left: 0;"></canvas>';
		}
	}

	return Canvas;
} );
