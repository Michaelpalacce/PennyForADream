/**
 * @brief	Function used to make unique ids
 *
 * @details	This will never return an id that already exists as it saves it internally
 */
define( 'makeId', [], function ()
{
	let currentIds	= [''];

	function makeId( length = 32 )
	{
		let text	= '';

		do {
			text			= '';
			let possible	= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

			for ( let i = 0; i < length; i ++ )
				text	+= possible.charAt( Math.floor( Math.random() * possible.length ) );
		}
		while ( currentIds.indexOf( text ) !== -1 );

		currentIds.push( text );

		return text;
	}

	return makeId;
});