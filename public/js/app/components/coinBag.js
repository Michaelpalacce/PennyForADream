define( 'CoinBag', ['Component', 'Coin'] , function ( Component, Coin )
{
	class CoinBag extends Component
	{
		/**
		 * @param	Object props
		 */
		constructor( props = {} )
		{
			super( props );

			this.state	= { coins : [] };
		}

		/**
		 * @brief	Attaches a on resize event
		 *
		 * @return	void
		 */
		attachEvents()
		{
			super.attachEvents();
			$( window ).on( 'resize', ()=>
			{
				this.fillWithCoins();
				this.hideDreamBox();
			});
		}

		/**
		 * @brief	Fills the window with coins
		 *
		 * @return	void
		 */
		fillWithCoins()
		{
			this.state.coins.forEach( ( coin )=>{
				coin.remove();
			});

			let coins			= [];
			let x				= 0;
			let spacing			= 50;
			let zIndex			= 0;
			let width			= 102;
			let height			= 102;

			let spaceToSides	= 100;

			if ( x === 0 )
			{
				x	+= spaceToSides;
			}

			while ( x + width + spacing + spaceToSides < window.innerWidth )
			{
				x		= x + spacing;
				zIndex	++;

				let ySpacing		= Math.floor( Math.random() * 8 );

				let coin	= new Coin({
					style: {
						zIndex	: zIndex,
						left	: x,
						bottom	: ySpacing + 25,
						width	: width + 'px',
						height	: height + 'px'
					}
				});

				coin.attachTo( this.element );
				coin.addOnStateChanged( 'clicked', ( value, component )=>{
					if ( value === true )
					{
						this.state.coins.forEach( ( coin )=>{
							if ( coin.id !== component.id )
							{
								coin.minimize();
							}
						});

						component.element.one( 'transitionend', ( event ) =>
						{
							// Check if the element is still clicked
							if ( component.state.clicked === true )
							{
								this.showDreamBox( component )
							}
						});
					}

					value === false ? this.hideDreamBox() : null;
				} );

				coins.push( coin );
			}

			this.setState( { coins: coins } );
		}

		/**
		 * @brief	Show the dream Box next to the given coin
		 *
		 * @param	Coin coin
		 *
		 * @return	void
		 */
		showDreamBox( coin )
		{
			let dreamBox	= this.props.dreamBox;
			dreamBox.attachTo( $( '#app' ) );

			let coinElement = coin.element;

			dreamBox.setState(
				{
					style:
						{
							left: coinElement.position().left - coinElement.outerWidth() / 2,
							top: coinElement.position().top + coinElement.outerHeight() * 2
						}
				}
			);
		}

		/**
		 * @brief	Find and hide the dreambox
		 *
		 * @return	void
		 */
		hideDreamBox()
		{
			this.props.dreamBox.detach();
			this.props.dreamBox.dreamInput.val( '' );
			this.props.dreamBox.setState( { inputLength: 0 } );
		}

		/**
		 * @brief	Renders the coin bag
		 *
		 * @return	String
		 */
		_render()
		{
			return '<div class="coin-bag" id="coin-bag"></div>';
		}
	}

	return CoinBag;
});
