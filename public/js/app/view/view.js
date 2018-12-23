/**
 * @brief	Main View class extended by all views
 */
define( 'View', [], function ()
{
	class View
	{
		constructor( route )
		{
			this.route	= route;
		}

		/**
		 * @brief	Landing view
		 */
		indexAction()
		{
			console.log( 'Implement' );
		}
	}

	return View;
} );