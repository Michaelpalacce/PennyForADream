'use strict';

/**
 * @brief	Main component definition that is inherited by every renderable element
 */
define( 'Component', ['makeId'], function ( makeId )
{
	class Component
	{
		/**
		 * @param	Object props
		 */
		constructor( props = {} )
		{
			this.id				= makeId( 32 );
			this.state			= {};
			this.stateEvents	= {};
			this.props			= this.setUpPropsDefaults( props );
			this.element		= this.render();

			this.attachEvents();
		}

		/**
		 * @brief	Removes the element from the DOM and removes all callbacks
		 *
		 * @details	Calls detachEvents
		 *
		 * @return	void
		 */
		remove()
		{
			this.element.remove();
			this.stateEvents	= {};
			this.state			= {};
		}

		/**
		 * @brief	Extracts data from the props provided by the constructor and sets up defaults if none were provided
		 *
		 * @param	Object props
		 *
		 * @return	Object
		 */
		setUpPropsDefaults( props )
		{
			props.style	= typeof props.style === 'undefined' ? {} : props.style;

			return props;
		}

		/**
		 * @brief	Adds a callback for the given state change
		 *
		 * @param	String state
		 * @param	Function callback
		 */
		addOnStateChanged( state, callback )
		{
			if ( typeof state !== 'string' && typeof callback !== 'function' )
			{
				throw new Error( 'Invalid constructor arguments provided' );
			}

			if ( typeof this.stateEvents[state] === "undefined" )
			{
				this.stateEvents[state]	= [];
			}

			this.stateEvents[state].push( callback );
		}

		/**
		 * @brief	Dispatches a state Change
		 *
		 * @param	String state
		 * @param	Mixed change
		 *
		 * @return	void
		 */
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
		 * @brief	Sets state params to the state of the component
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
		 *
		 * @return	void
		 */
		attachEvents()
		{
			this.addOnStateChanged( 'style', ( value )=>{
				this.element.css( value );
			} )
		}

		/**
		 * @brief	Detaches all events of the rendered object
		 *
		 * @return	void
		 */
		detachEvents()
		{
		}

		/**
		 * @brief	Detaches the object from the DOM
		 *
		 * @return	void
		 */
		detach()
		{
			this.element.detach();
		}

		/**
		 * @brief	Detaches and then reattaches the element to the given elementToAppendTo
		 *
		 * @param	jQueryElement elementToAppendTo
		 * @param	Boolean append
		 *
		 * @return	void
		 */
		attachTo( elementToAppendTo, append = true )
		{
			this.detach();

			append === true ? this.element.appendTo( elementToAppendTo ) : this.element.prependTo( elementToAppendTo );
		}

		/**
		 * @brief	Public render function to be called when the rendering is needed
		 *
		 * @details	_render should be implemented instead of this function
		 *
		 * @return	String
		 */
		render()
		{
			let element	= $( this._render() );

			element.css( this.props.style );

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


