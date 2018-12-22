'use strict';

define( 'Coin', ['Component'],
	function ( Component )
	{
		class Coin extends Component
		{
			constructor( props = {} )
			{
				super( props );
				this.clickedClass	= 'clicked';
			}

			_render()
			{
				return $( '<img src="/img/48403864_791804017828593_3295795673445695488_n.png" alt="coin" class="coin">' );
			}

			attachEvents()
			{
				super.attachEvents();

				$( this.element ).on( 'click', ()=>{
					this.setState({ clicked: !this.state.clicked });
				});

				this.addOnStateChanged( 'clicked', ( newState )=>{
					if ( newState === true )
					{
						this.element.addClass( this.clickedClass );
					}
					else
					{
						this.element.removeClass( this.clickedClass );
					}
				} )
			}

			getIsClicked()
			{
				return this.state.clicked;
			}

			minimize()
			{
				this.setState({clicked: false});
			}
		}

		return Coin;
	}
);
