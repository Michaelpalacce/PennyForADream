/**
 * @brief	Router responsible for returning the current route
 */
define( 'Router', ['Route'], function ( Route )
{
	class Router
	{
		constructor()
		{
		}

		/**
		 * @brief	Returns the Current Route
		 *
		 * @return	Route
		 */
		getCurrentRoute()
		{
			return new Route( window.location.pathname );
		}
	}

	return new Router();
} );
