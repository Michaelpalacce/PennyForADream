define( 'CoinBag', ['Component', 'Coin'] , function ( Component, Coin )
{
	class CoinBag extends Component
	{
		constructor( props = {} )
		{
			super( props );

			this.state	= {
				coins	: [],
				x		: 0,
				zIndex	: 1
			};
		}

		attachEvents()
		{
			super.attachEvents();
			$( window ).on( 'resize', ()=>{
				this.fillWithCoins();
			});
		}

		fillWithCoins()
		{
			let coins	= this.state.coins;
			let x		= this.state.x;
			let spacing	= 25;
			let zIndex	= this.state.zIndex;

			while ( x + 100 < window.innerWidth )
			{
				x		= x + spacing;
				zIndex	++;

				let coin	= new Coin({
					style: {
						zIndex: zIndex,
						left: x
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
				} );

				coins.push( coin );
			}

			this.setState( {
				coins: coins,
				x: x,
				zIndex: zIndex
			} );
		}

		_render()
		{
			return $( '<div class="coin-bag" id="coin-bag"></div>' );
		}
	}

	return CoinBag;
});