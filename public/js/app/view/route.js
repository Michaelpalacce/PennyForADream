/**
 * @brief	Holds information about the current route
 */
define( 'Route', [], function ()
{
	class Route
	{
		/**
		 * @param	String path
		 */
		constructor( path )
		{
			this.path	= path;
		}

		/**
		 * @brief	Returns the current path of the url
		 *
		 * @return	String
		 */
		getPath()
		{
			return this.path;
		}
	}

	return Route;
} );
