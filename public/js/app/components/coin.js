'use strict';

define( 'Coin', ['Component'],
	function ( Component )
	{
		class Coin extends Component
		{
			/**
			 * @param	Object props
			 */
			constructor( props = {} )
			{
				super( props );
				this.clickedClass	= 'clicked';
				this.state			= {
					clicked: false
				};
			}

			/**
			 * @brief	Returns the rendered element
			 *
			 * @return	String
			 */
			_render()
			{
				return '<img src="/img/coin.png" alt="coin" class="coin">';
			}

			/**
			 * @brief	Attaches events to the element
			 *
			 * @details	Attaches a on click on the element event
			 * 			And attaches a onStateChanged clicked event
			 *
			 * @return	void
			 */
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

			/**
			 * @brief	Minimizes the coin
			 */
			minimize()
			{
				this.setState({clicked: false});
			}
		}

		return Coin;
	}
);
