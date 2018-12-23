define( 'CoinBag', ['Component', 'Coin'] , function (Component, Coin )
{
	class CoinBag extends Component
	{
		/**
		 * @param	Object props
		 */
		constructor( props = {} )
		{
			super( props );

			this.state	= {
				coins	: [],
				x		: 0,
				zIndex	: 1
			};
		}

		/**
		 * @brief	Attaches a on resize event
		 *
		 * @return	void
		 */
		attachEvents()
		{
			super.attachEvents();
			$( window ).on( 'resize', ()=>{
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

				let coin	= new Coin({
					style: {
						zIndex	: zIndex,
						left	: x,
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
						})
					}


					value ? this.showDreamBox( component ) : this.hideDreamBox();
				} );

				coins.push( coin );
			}

			this.setState( {
				coins: coins,
				x: x,
				zIndex: zIndex
			} );
		}

		showDreamBox( coin )
		{
			let dreamBox	= this.props.dreamBox;
			setTimeout( ()=>{
				dreamBox.attachTo( $( '#app' ) );

				let elementPositions	= coin.element.position();
				let elementOuterWidth	= dreamBox.element.outerWidth();
				let coinOuterWidth		= coin.element.outerWidth();
				let position			= elementPositions.left + coinOuterWidth * 2;

				if ( position + elementOuterWidth > window.innerWidth )
				{
					position	= elementPositions.left - elementOuterWidth;
				}
				dreamBox.setState(
					{
						style:
							{
								left: position,
								top: coin.element.position().top + 35
							}
					}
				);
			}, 500 );
		}

		hideDreamBox()
		{
			this.props.dreamBox.detach();
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