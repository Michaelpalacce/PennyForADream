/**
 * @brief	The kernel of the app
 */
define( 'Kernel', ['Router'], function ( Router )
{
	class Kernel
	{
		/**
		 * @param	Object viewMap
		 */
		constructor( viewMap )
		{
			this.viewMap	= viewMap;
		}

		/**
		 * @brief	Handles the request
		 */
		handle()
		{
			try
			{
				this._handle();
			}
			catch ( e )
			{
				console.log( e );
			}
		}

		/**
		 * @brief	Handles the raw request
		 *
		 * @return	void
		 */
		_handle()
		{
			let currentRoute	= Router.getCurrentRoute();

			if ( typeof this.viewMap[currentRoute.getPath()] === 'undefined' )
			{
				throw new Error( 'The View does not exist in the View map' );
			}

			let ViewClass	= require( this.viewMap[currentRoute.getPath()] );

			let view		= new ViewClass( currentRoute );

			view.indexAction();
		}
	}

	return Kernel;
} );