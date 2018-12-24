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
			let toolbarBtn		= $(
				'<div>' +
					'<ul id="menu" class="menu">' +
						'<li title="home"><a href="#" class="menu-button home"></a></li>' +
					'</ul>' +
					'<ul id="menu-bar" class="menu-bar"></ul>' +
				'</div>' );
			let toolbarInside	= toolbarBtn.find( '#menu-bar' );

			this.state.toolbarElements.forEach(( toolbarElement )=>{
				toolbarInside.append( toolbarElement.element );
			});

			return toolbarBtn;
		}

		/**
		 * @brief	Attaches an on click event
		 */
		attachEvents()
		{
			super.attachEvents();

			this.element.find( '.menu-button' ).on( 'click', ( event )=>{
				this.setState( { clicked: ! this.state.clicked } );
			});

			this.addOnStateChanged( 'clicked', ( state )=>{
				this.element.find( '.menu-bar' ).toggleClass( 'open' );
			});
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