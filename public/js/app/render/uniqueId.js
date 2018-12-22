define( 'makeId', [], function ()
{
	let currentIds	= [''];

	function makeId( length = 32 )
	{
		let text	= '';

		do {
			text			= '';
			let possible	= "abef";

			for ( let i = 0; i < length; i ++ )
				text	+= possible.charAt( Math.floor( Math.random() * possible.length ) );
		}
		while ( currentIds.indexOf( text ) !== -1 );

		currentIds.push( text );

		return text;
	}

	return makeId;
});