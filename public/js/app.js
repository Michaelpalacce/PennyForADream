const CoinBag	= require( 'CoinBag' );
const DreamBox	= require( 'DreamBox' );

$( document ).ready( function ()
{
	let dreamBox	= new DreamBox();
	let coinBag		= new CoinBag( {
		dreamBox	: dreamBox
	} );

	coinBag.attachTo( $( '#app' ) );
	coinBag.fillWithCoins();
} );