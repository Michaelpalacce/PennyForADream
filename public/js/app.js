const Kernel	= require( 'Kernel' );
const viewMap	= require( 'ViewMap' );

$( document ).ready( function ()
{
	let kernel	= new Kernel( viewMap );
	kernel.handle();
} );
