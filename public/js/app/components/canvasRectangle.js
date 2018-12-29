/**
 * @brief	Canvas rectangle used in the canvas to draw and store the text
 */
define( 'CanvasRectangle', [], function ()
{
	class CanvasRectangle
	{
		/**
		 * @param	Number x
		 * @param	Number y
		 * @param	Number xLength
		 * @param	Number yLength
		 * @param	String color
		 * @param	CanvasContext c
		 */
		constructor( x, y, xLength, yLength, color, c )
		{
			this.x			= x;
			this.xLength	= xLength;
			this.y			= y;
			this.yLength	= yLength;
			this.c			= c;
			this.color		= color;
		}

		/**
		 * @brief	Update called on every frame
		 *
		 * @return	void
		 */
		update()
		{
			this.draw();
		}

		/**
		 * @brief	Draws the rectangle at the specified path
		 *
		 * @return	void
		 */
		draw()
		{
			this.c.beginPath();
			this.c.strokeRect( this.x, this.y, this.xLength, this.yLength );
			this.c.fillStyle	= this.color;
			this.c.lineWidth	= 1;
			this.c.font			= '12pt sans-serif';
			this.c.fillText('My dream is to go to space and explore the universeMy dream is to go to space and explore the un', this.x, this.y + this.yLength );
		}
	}

	return CanvasRectangle;
} );
