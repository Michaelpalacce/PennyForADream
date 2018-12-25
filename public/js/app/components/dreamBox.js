'use strict';

/**
 * @brief	Dream box component used to render the dream box input and container
 */
define( 'DreamBox', ['Component'], function ( Component )
{
	class DreamBox extends Component
	{
		/**
		 * @param	Object props
		 */
		constructor( props = {} )
		{
			super( props );
			this.detach();
			this.maxLength	= 96;
			this.dreamInput	= this.element.find( '#dream-input' );
		}

		attachEvents()
		{
			super.attachEvents();
			this.element.find( '#dream-input' ).on( 'input', ( event )=>{
				let text			= this.dreamInput.val();
				let lengthOfText	= text.length;

				if ( lengthOfText > this.maxLength )
				{
					text	= text.substr( 0, this.maxLength );
				}

				this.dreamInput.val( text );
				this.setState( {
					inputValue	: text,
					inputLength	: text.length
				} );
			});

			this.addOnStateChanged( 'inputLength', ( value )=>{
				$( '#dream-box-message-length' ).text( value );
			} );
		}

		/**
		 * @brief	Renders the element
		 *
		 * @return	String
		 */
		_render()
		{
			return '<div class="dream-box">' +
					'<textarea placeholder="\nPenny for a dream?" class="dream-input" autofocus id="dream-input"></textarea>' +
					'<div class="counter" style="color: #000;"><span id="dream-box-message-length">0</span><span>/96</span></div>' +
					'<button class="dream-submit">Share</button>' +
				'</div>';
		}
	}

	return DreamBox;
} );
