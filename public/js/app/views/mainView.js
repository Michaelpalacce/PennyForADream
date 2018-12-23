/**
 * @brief	Main view of the app
 */
define( 'MainView', ['View', 'CoinBag', 'DreamBox'], function ( View, CoinBag, DreamBox )
{
	class MainView extends View
	{
		/**
		 * @brief	Landing view
		 */
		indexAction()
		{
			let dreamBox	= new DreamBox();
			let coinBag		= new CoinBag( {
				dreamBox	: dreamBox
			} );

			coinBag.attachTo( $( '#app' ) );
			coinBag.fillWithCoins();
		}
	}

	return MainView;
} );
