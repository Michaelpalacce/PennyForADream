'use strict';

/**
 * @brief	Toolbar component used to render the toolbar
 */
define( 'Toolbar', ['Component', 'ToolbarElement'], function ( Component, ToolbarElement )
{
	class Toolbar extends Component
	{
		/**
		 * @param	Object props
		 */
		constructor( props = {} )
		{
			super( props );

			this.state	= {
				toolbarElements	: [],
				clicked			: false
			};
		}

		/**
		 * @brief	Renders the element
		 *
		 * @return	String
		 */
		_render()
		{
			this.getAllToolbarElements();
			let toolbar	= $( '<div id="toolbar-btn" class="toolbar-btn"><div id="toolbar" class="toolbar"></div></div>' );

			this.state.toolbarElements.forEach(( toolbarElement )=>{
				toolbar.find( '.toolbar' ).append( toolbarElement.element );
			});

			return toolbar;
		}

		/**
		 * @brief	Attaches an on click event
		 */
		attachEvents()
		{
			super.attachEvents();

			this.element.closest( '#toolbar-btn' ).on( 'click', ( event )=>{
				this.setState( { clicked: ! this.state.clicked } );
			});

			this.addOnStateChanged( 'clicked', ( state )=>{
				state ? this.element.find( '#toolbar' ).show() : this.element.find( '#toolbar' ).hide();
			} )
		}

		/**
		 * @brief	Sets all the toolbar elements in the state of the object and returns their rendered html
		 *
		 * @return	String
		 */
		getAllToolbarElements()
		{
			let elements		= this.props.elements;
			let elementTexts	= Object.keys( elements );
			let toolbarElements	= [];

			elementTexts.forEach(( elementText )=>{
				let elementLink		= elements[elementText];

				let toolbarElement	= new ToolbarElement({
					href	: elementLink,
					name	: elementText
				});

				toolbarElements.push( toolbarElement );
			});

			this.setState({
				toolbarElements
			});
		}
	}

	return Toolbar;
} );