/**
 * @brief	Main view of the app
 */
define( 'MainView', ['View'], function ( View )
{
	class MainView extends View
	{
		constructor( route )
		{
			super( route );
			this.dreamBox	= null;
			this.pony		= null;
			this.coinBag	= null;
			this.toolbar	= null;
			this.appElement	= $( '#app' );
		}

		/**
		 * @brief	Landing view
		 */
		indexAction()
		{
			super.indexAction();
		}

		/**
		 * @brief	Renders the page elements
		 */
		render()
		{
			const DreamBox	= require( 'DreamBox' );
			const Pony		= require( 'Pony' );
			const CoinBag	= require( 'CoinBag' );
			const Toolbar	= require( 'Toolbar' );

			this.toolbar	= new Toolbar({
				elements: {
					Home		: '/',
					About		: '/about',
					Charities	: '/charities',
				}
			});
			this.dreamBox	= new DreamBox();
			this.pony		= new Pony();
			this.coinBag	= new CoinBag( {
				dreamBox	: this.dreamBox
			} );

			this.toolbar.attachTo( this.appElement );
			this.pony.attachTo( this.appElement );
			this.coinBag.attachTo( this.appElement );
			this.coinBag.fillWithCoins();
		}
	}

	return MainView;
} );
