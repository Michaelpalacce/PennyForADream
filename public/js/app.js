const CoinBag	= require( 'CoinBag' );

$( document ).ready( function ()
{
	let coinBag	= new CoinBag();

	coinBag.attachTo( $( '#app' ) );
	coinBag.fillWithCoins();
} );