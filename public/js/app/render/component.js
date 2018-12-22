'use strict';

define( 'Component', ['makeId'], function ( makeId )
{
	class Component
	{
		/**
		 * @param	Object props
		 */
		constructor( props = {} )
		{
			this.setUpPropsDefaults( props );
			this.id				= makeId( 32 );
			this.props			= props;
			this.state			= {};
			this.element		= this.render();
			this.state			= {
				clicked: false
			};

			this.stateEvents	= {};

			this.attachEvents();
		}

		setUpPropsDefaults( props )
		{
			props.style	= typeof props.style === 'undefined' ? {} : props.style;
		}

		addOnStateChanged( state, callback )
		{
			if ( typeof this.stateEvents[state] === "undefined" )
			{
				this.stateEvents[state]	= [];
			}

			this.stateEvents[state].push( callback );
		}

		dispatchStateChanged( state, change )
		{
			if ( typeof this.stateEvents[state] === "undefined" )
			{
				this.stateEvents[state]	= [];
			}

			this.stateEvents[state].forEach(( callback )=>{
				callback( change, this );
			})
		}

		/**
		 * @breif	Sets state params to the state of the component
		 *
		 * @param	Object state
		 *
		 * @return	void
		 */
		setState( state )
		{
			if ( typeof state === 'object' )
			{
				let keys	= Object.keys( state );
				keys.forEach(( key )=>{
					let value		= state[key];
					this.state[key]	= value;
					this.dispatchStateChanged( key, value );
				});
			}
		}

		/**
		 * @brief	Attaches events to the rendered object
		 */
		attachEvents()
		{
		}

		/**
		 * @brief	Detaches the object from the DOM
		 */
		detach()
		{
			this.element.detach();
		}

		/**
		 * @brief	Detaches and then reattaches the element to the given elementToAppendTo
		 *
		 * @param	jQueryElement elementToAppendTo
		 */
		attachTo( elementToAppendTo )
		{
			this.detach();

			this.element.appendTo( elementToAppendTo );
		}

		render()
		{
			let element	= this._render();

			element.css(this.props.style);

			return element;
		}

		/**
		 * @brief	This function must be used to return the rendered element
		 *
		 * @return	string
		 */
		_render()
		{
			throw new Error( 'Implement the _render function' );
		}
	}

	return Component;
} );


