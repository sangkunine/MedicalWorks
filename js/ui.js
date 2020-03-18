/**
 * @author mrdoob / http://mrdoob.com/
 */

var UI = {};

UI.Element = function ( dom ) {

	this.dom = dom;

};

UI.Element.prototype = {

	add: function () {

		for ( var i = 0; i < arguments.length; i ++ ) {

			var argument = arguments[ i ];

			if ( argument instanceof UI.Element ) {

				this.dom.appendChild( argument.dom );

			} else {

				console.error( 'UI.Element:', argument, 'is not an instance of UI.Element.' );

			}

		}

		return this;

	},

	remove: function () {

		for ( var i = 0; i < arguments.length; i ++ ) {

			var argument = arguments[ i ];

			if ( argument instanceof UI.Element ) {

				this.dom.removeChild( argument.dom );

			} else {

				console.error( 'UI.Element:', argument, 'is not an instance of UI.Element.' );

			}

		}

		return this;

	},

	clear: function () {

		while ( this.dom.children.length ) {

			this.dom.removeChild( this.dom.lastChild );

		}

	},

	setId: function ( id ) {

		this.dom.id = id;

		return this;

	},

	setClass: function ( name ) {

		this.dom.className = name;

		return this;

	},

	setStyle: function ( style, array ) {

		for ( var i = 0; i < array.length; i ++ ) {

			this.dom.style[ style ] = array[ i ];

		}

		return this;

	},

	setDisabled: function ( value ) {

		this.dom.disabled = value;

		return this;

	},

	setTextContent: function ( value ) {

		this.dom.textContent = value;

		return this;

	}

};

// properties

var properties = [
	'position', 'left', 'top', 'right', 'bottom', 'width', 'height', 'maxHeight', 'display', 'overflow',
	'border', 'borderLeft', 'borderTop', 'borderRight', 'borderBottom', 'borderRadius', 'borderColor',
	'margin', 'marginLeft', 'marginTop', 'marginRight', 'marginBottom',
	'padding', 'paddingLeft', 'paddingTop', 'paddingRight', 'paddingBottom',
	'color', 'background', 'backgroundColor', 'opacity', 'fontSize', 'fontWeight',
	'verticalAlign', 'textAlign', 'textDecoration', 'textTransform', 'textShadow', 'cursor', 'zIndex',
	'transform', 'transition', 'lineHeight', 'visibility', 'textIndent', 'wordBreak',
	'boxShadow'
];

properties.forEach( function ( property ) {

	var method = 'set' + property.substr( 0, 1 ).toUpperCase() + property.substr( 1, property.length );

	UI.Element.prototype[ method ] = function () {

		this.setStyle( property, arguments );

		return this;

	};

} );

// events

var events = [ 'KeyDown', 'KeyUp', 'MouseDown', 'MouseUp', 'MouseEnter', 'MouseLeave', 'MouseOver', 'MouseOut', 'Click', 'DblClick', 'Change', 'Input' ];

events.forEach( function ( event ) {

	var method = 'on' + event;

	UI.Element.prototype[ method ] = function ( callback ) {

		this.dom.addEventListener( event.toLowerCase(), callback.bind( this ), false );

		return this;

	};

} );


// Span

UI.Span = function () {

	UI.Element.call( this );

	this.dom = document.createElement( 'span' );

	return this;

};

UI.Span.prototype = Object.create( UI.Element.prototype );
UI.Span.prototype.constructor = UI.Span;


// Div

UI.Div = function () {

	UI.Element.call( this );

	this.dom = document.createElement( 'div' );

	return this;

};

UI.Div.prototype = Object.create( UI.Element.prototype );
UI.Div.prototype.constructor = UI.Div;


// Row

UI.Row = function () {

	UI.Element.call( this );

	var dom = document.createElement( 'div' );
	dom.className = 'Row';

	this.dom = dom;

	return this;

};

UI.Row.prototype = Object.create( UI.Element.prototype );
UI.Row.prototype.constructor = UI.Row;


// Column

UI.Column = function () {

	UI.Element.call( this );

	var dom = document.createElement( 'div' );
	dom.className = 'Column';

	this.dom = dom;

	return this;

};

UI.Column.prototype = Object.create( UI.Element.prototype );
UI.Column.prototype.constructor = UI.Column;


// Panel

UI.Panel = function () {

	UI.Element.call( this );

	var dom = document.createElement( 'div' );
	dom.className = 'Panel';

	this.dom = dom;

	return this;

};

UI.Panel.prototype = Object.create( UI.Element.prototype );
UI.Panel.prototype.constructor = UI.Panel;


// Text

UI.Text = function ( text ) {

	UI.Element.call( this );

	var dom = document.createElement( 'span' );
	dom.className = 'Text';
	dom.style.cursor = 'default';
	dom.style.display = 'inline-block';
	dom.style.verticalAlign = 'middle';

	this.dom = dom;
	this.setValue( text );

	return this;

};

UI.Text.prototype = Object.create( UI.Element.prototype );
UI.Text.prototype.constructor = UI.Text;

UI.Text.prototype.getValue = function () {

	return this.dom.textContent;

};

UI.Text.prototype.setValue = function ( value ) {

	if ( value !== undefined ) {

		this.dom.textContent = value;

	}

	return this;

};


// Input

UI.Input = function ( text ) {

	UI.Element.call( this );

	// var scope = this;

	var dom = document.createElement( 'input' );
	dom.className = 'Input';
	dom.style.padding = '2px';
	dom.style.border = '1px solid transparent';

	dom.addEventListener( 'keydown', function ( event ) {

		event.stopPropagation();

	}, false );

	this.dom = dom;
	this.setValue( text );

	return this;

};

UI.Input.prototype = Object.create( UI.Element.prototype );
UI.Input.prototype.constructor = UI.Input;

UI.Input.prototype.getValue = function () {

	return this.dom.value;

};

UI.Input.prototype.setValue = function ( value ) {

	this.dom.value = value;

	return this;

};


// TextArea

UI.TextArea = function () {

	UI.Element.call( this );

	// var scope = this;

	var dom = document.createElement( 'textarea' );
	dom.className = 'TextArea';
	dom.style.padding = '2px';
	dom.spellcheck = false;

	dom.addEventListener( 'keydown', function ( event ) {

		event.stopPropagation();

		if ( event.keyCode === 9 ) {

			event.preventDefault();

			var cursor = dom.selectionStart;

			dom.value = dom.value.substring( 0, cursor ) + '\t' + dom.value.substring( cursor );
			dom.selectionStart = cursor + 1;
			dom.selectionEnd = dom.selectionStart;

		}

	}, false );

	this.dom = dom;

	return this;

};

UI.TextArea.prototype = Object.create( UI.Element.prototype );
UI.TextArea.prototype.constructor = UI.TextArea;

UI.TextArea.prototype.getValue = function () {

	return this.dom.value;

};

UI.TextArea.prototype.setValue = function ( value ) {

	this.dom.value = value;

	return this;

};


// Select

UI.Select = function () {

	UI.Element.call( this );

	// var scope = this;

	var dom = document.createElement( 'select' );
	dom.className = 'Select';
	dom.style.padding = '2px';

	this.dom = dom;

	return this;

};

UI.Select.prototype = Object.create( UI.Element.prototype );
UI.Select.prototype.constructor = UI.Select;

UI.Select.prototype.setMultiple = function ( boolean ) {

	this.dom.multiple = boolean;

	return this;

};

UI.Select.prototype.setOptions = function ( options ) {

	var selected = this.dom.value;

	while ( this.dom.children.length > 0 ) {

		this.dom.removeChild( this.dom.firstChild );

	}

	for ( var key in options ) {

		var option = document.createElement( 'option' );
		option.value = key;
		option.innerHTML = options[ key ];
		this.dom.appendChild( option );

	}

	this.dom.value = selected;

	return this;

};

UI.Select.prototype.getValue = function () {

	return this.dom.value;

};

UI.Select.prototype.setValue = function ( value ) {

	value = String( value );

	if ( this.dom.value !== value ) {

		this.dom.value = value;

	}

	return this;

};

// Checkbox

UI.Checkbox = function ( boolean ) {

	UI.Element.call( this );

	// var scope = this;

	var dom = document.createElement( 'input' );
	dom.className = 'Checkbox';
	dom.type = 'checkbox';

	this.dom = dom;
	this.setValue( boolean );

	return this;

};

UI.Checkbox.prototype = Object.create( UI.Element.prototype );
UI.Checkbox.prototype.constructor = UI.Checkbox;

UI.Checkbox.prototype.getValue = function () {

	return this.dom.checked;

};

UI.Checkbox.prototype.setValue = function ( value ) {

	if ( value !== undefined ) {

		this.dom.checked = value;

	}

	return this;

};


// Color

UI.Color = function () {

	UI.Element.call( this );

	// var scope = this;

	var dom = document.createElement( 'input' );
	dom.className = 'Color';
	dom.style.width = '64px';
	dom.style.height = '17px';
	dom.style.border = '0px';
	dom.style.padding = '2px';
	dom.style.backgroundColor = 'transparent';

	try {

		dom.type = 'color';
		dom.value = '#ffffff';

	} catch ( exception ) {}

	this.dom = dom;

	return this;

};

UI.Color.prototype = Object.create( UI.Element.prototype );
UI.Color.prototype.constructor = UI.Color;

UI.Color.prototype.getValue = function () {

	return this.dom.value;

};

UI.Color.prototype.getHexValue = function () {

	return parseInt( this.dom.value.substr( 1 ), 16 );

};

UI.Color.prototype.setValue = function ( value ) {

	this.dom.value = value;

	return this;

};

UI.Color.prototype.setHexValue = function ( hex ) {

	this.dom.value = '#' + ( '000000' + hex.toString( 16 ) ).slice( - 6 );

	return this;

};


// Number

UI.Number = function ( number ) {

	UI.Element.call( this );

	var scope = this;

	var dom = document.createElement( 'input' );
	dom.className = 'Number';
	dom.value = '0.00';

	dom.addEventListener( 'keydown', function ( event ) {

		event.stopPropagation();

		if ( event.keyCode === 13 ) dom.blur();

	}, false );

	this.value = 0;

	this.min = - Infinity;
	this.max = Infinity;

	this.precision = 2;
	this.step = 1;
	this.unit = '';

	this.dom = dom;

	this.setValue( number );

	var changeEvent = document.createEvent( 'HTMLEvents' );
	changeEvent.initEvent( 'change', true, true );

	var distance = 0;
	var onMouseDownValue = 0;

	var pointer = [ 0, 0 ];
	var prevPointer = [ 0, 0 ];

	function onMouseDown( event ) {

		event.preventDefault();

		distance = 0;

		onMouseDownValue = scope.value;

		prevPointer = [ event.clientX, event.clientY ];

		document.addEventListener( 'mousemove', onMouseMove, false );
		document.addEventListener( 'mouseup', onMouseUp, false );

	}

	function onMouseMove( event ) {

		var currentValue = scope.value;

		pointer = [ event.clientX, event.clientY ];

		distance += ( pointer[ 0 ] - prevPointer[ 0 ] ) - ( pointer[ 1 ] - prevPointer[ 1 ] );

		var value = onMouseDownValue + ( distance / ( event.shiftKey ? 5 : 50 ) ) * scope.step;
		value = Math.min( scope.max, Math.max( scope.min, value ) );

		if ( currentValue !== value ) {

			scope.setValue( value );
			dom.dispatchEvent( changeEvent );

		}

		prevPointer = [ event.clientX, event.clientY ];

	}

	function onMouseUp( event ) {

		document.removeEventListener( 'mousemove', onMouseMove, false );
		document.removeEventListener( 'mouseup', onMouseUp, false );

		if ( Math.abs( distance ) < 2 ) {

			dom.focus();
			dom.select();

		}

	}

	function onTouchStart( event ) {

		if ( event.touches.length === 1 ) {

			distance = 0;

			onMouseDownValue = scope.value;

			prevPointer = [ event.touches[ 0 ].pageX, event.touches[ 0 ].pageY ];

			document.addEventListener( 'touchmove', onTouchMove, false );
			document.addEventListener( 'touchend', onTouchEnd, false );

		}

	}

	function onTouchMove( event ) {

		var currentValue = scope.value;

		pointer = [ event.touches[ 0 ].pageX, event.touches[ 0 ].pageY ];

		distance += ( pointer[ 0 ] - prevPointer[ 0 ] ) - ( pointer[ 1 ] - prevPointer[ 1 ] );

		var value = onMouseDownValue + ( distance / ( event.shiftKey ? 5 : 50 ) ) * scope.step;
		value = Math.min( scope.max, Math.max( scope.min, value ) );

		if ( currentValue !== value ) {

			scope.setValue( value );
			dom.dispatchEvent( changeEvent );

		}

		prevPointer = [ event.touches[ 0 ].pageX, event.touches[ 0 ].pageY ];

	}

	function onTouchEnd( event ) {

		if ( event.touches.length === 0 ) {

			document.removeEventListener( 'touchmove', onTouchMove, false );
			document.removeEventListener( 'touchend', onTouchEnd, false );

		}

	}

	function onChange( event ) {

		scope.setValue( dom.value );

	}

	function onFocus( event ) {

		dom.style.backgroundColor = '';
		dom.style.cursor = '';

	}

	function onBlur( event ) {

		dom.style.backgroundColor = 'transparent';
		dom.style.cursor = 'col-resize';

	}

	onBlur();

	dom.addEventListener( 'mousedown', onMouseDown, false );
	dom.addEventListener( 'touchstart', onTouchStart, false );
	dom.addEventListener( 'change', onChange, false );
	dom.addEventListener( 'focus', onFocus, false );
	dom.addEventListener( 'blur', onBlur, false );

	return this;

};

UI.Number.prototype = Object.create( UI.Element.prototype );
UI.Number.prototype.constructor = UI.Number;

UI.Number.prototype.getValue = function () {

	return this.value;

};

UI.Number.prototype.setValue = function ( value ) {

	if ( value !== undefined ) {

		value = parseFloat( value );

		if ( value < this.min ) value = this.min;
		if ( value > this.max ) value = this.max;

		this.value = value;
		this.dom.value = value.toFixed( this.precision );

		if ( this.unit !== '' ) this.dom.value += ' ' + this.unit;

	}

	return this;

};

UI.Number.prototype.setPrecision = function ( precision ) {

	this.precision = precision;

	return this;

};

UI.Number.prototype.setStep = function ( step ) {

	this.step = step;

	return this;

};

UI.Number.prototype.setRange = function ( min, max ) {

	this.min = min;
	this.max = max;

	return this;

};

UI.Number.prototype.setUnit = function ( unit ) {

	this.unit = unit;

	return this;

};

// Integer

UI.Integer = function ( number ) {

	UI.Element.call( this );

	var scope = this;

	var dom = document.createElement( 'input' );
	dom.className = 'Number';
	dom.value = '0';

	dom.addEventListener( 'keydown', function ( event ) {

		event.stopPropagation();

	}, false );

	this.value = 0;

	this.min = - Infinity;
	this.max = Infinity;

	this.step = 1;

	this.dom = dom;

	this.setValue( number );

	var changeEvent = document.createEvent( 'HTMLEvents' );
	changeEvent.initEvent( 'change', true, true );

	var distance = 0;
	var onMouseDownValue = 0;

	var pointer = [ 0, 0 ];
	var prevPointer = [ 0, 0 ];

	function onMouseDown( event ) {

		event.preventDefault();

		distance = 0;

		onMouseDownValue = scope.value;

		prevPointer = [ event.clientX, event.clientY ];

		document.addEventListener( 'mousemove', onMouseMove, false );
		document.addEventListener( 'mouseup', onMouseUp, false );

	}

	function onMouseMove( event ) {

		var currentValue = scope.value;

		pointer = [ event.clientX, event.clientY ];

		distance += ( pointer[ 0 ] - prevPointer[ 0 ] ) - ( pointer[ 1 ] - prevPointer[ 1 ] );

		var value = onMouseDownValue + ( distance / ( event.shiftKey ? 5 : 50 ) ) * scope.step;
		value = Math.min( scope.max, Math.max( scope.min, value ) ) | 0;

		if ( currentValue !== value ) {

			scope.setValue( value );
			dom.dispatchEvent( changeEvent );

		}

		prevPointer = [ event.clientX, event.clientY ];

	}

	function onMouseUp( event ) {

		document.removeEventListener( 'mousemove', onMouseMove, false );
		document.removeEventListener( 'mouseup', onMouseUp, false );

		if ( Math.abs( distance ) < 2 ) {

			dom.focus();
			dom.select();

		}

	}

	function onChange( event ) {

		scope.setValue( dom.value );

	}

	function onFocus( event ) {

		dom.style.backgroundColor = '';
		dom.style.cursor = '';

	}

	function onBlur( event ) {

		dom.style.backgroundColor = 'transparent';
		dom.style.cursor = 'col-resize';

	}

	onBlur();

	dom.addEventListener( 'mousedown', onMouseDown, false );
	dom.addEventListener( 'change', onChange, false );
	dom.addEventListener( 'focus', onFocus, false );
	dom.addEventListener( 'blur', onBlur, false );

	return this;

};

UI.Integer.prototype = Object.create( UI.Element.prototype );
UI.Integer.prototype.constructor = UI.Integer;

UI.Integer.prototype.getValue = function () {

	return this.value;

};

UI.Integer.prototype.setValue = function ( value ) {

	if ( value !== undefined ) {

		value = parseInt( value );

		this.value = value;
		this.dom.value = value;

	}

	return this;

};

UI.Integer.prototype.setStep = function ( step ) {

	this.step = parseInt( step );

	return this;

};

UI.Integer.prototype.setRange = function ( min, max ) {

	this.min = min;
	this.max = max;

	return this;

};


// Break

UI.Break = function () {

	UI.Element.call( this );

	var dom = document.createElement( 'br' );
	dom.className = 'Break';

	this.dom = dom;

	return this;

};

UI.Break.prototype = Object.create( UI.Element.prototype );
UI.Break.prototype.constructor = UI.Break;


// HorizontalRule

UI.HorizontalRule = function () {

	UI.Element.call( this );

	var dom = document.createElement( 'hr' );
	dom.className = 'HorizontalRule';

	this.dom = dom;

	return this;

};

UI.HorizontalRule.prototype = Object.create( UI.Element.prototype );
UI.HorizontalRule.prototype.constructor = UI.HorizontalRule;


// Button

UI.Button = function ( value ) {

	UI.Element.call( this );

	var dom = document.createElement( 'button' );
	dom.className = 'Button';

	this.dom = dom;
	this.dom.textContent = value;

	return this;

};

UI.Button.prototype = Object.create( UI.Element.prototype );
UI.Button.prototype.constructor = UI.Button;

UI.Button.prototype.setLabel = function ( value ) {

	this.dom.textContent = value;

	return this;

};


// TabbedPanel

UI.TabbedPanel = function ( ) {

	UI.Element.call( this );

	var dom = document.createElement( 'div' );

	this.dom = dom;

	this.setClass( 'TabbedPanel' );

	this.tabs = [];
	this.panels = [];

	this.tabsDiv = new UI.Div();
	this.tabsDiv.setClass( 'Tabs' );

	this.panelsDiv = new UI.Div();
	this.panelsDiv.setClass( 'Panels' );

	this.add( this.tabsDiv );
	this.add( this.panelsDiv );

	this.selected = '';

	return this;

};

UI.TabbedPanel.prototype = Object.create( UI.Element.prototype );
UI.TabbedPanel.prototype.constructor = UI.TabbedPanel;

UI.TabbedPanel.prototype.select = function ( id ) {

	var tab;
	var panel;
	var scope = this;

	// Deselect current selection
	if ( this.selected && this.selected.length ) {

		tab = this.tabs.find( function ( item ) { return item.dom.id === scope.selected } );
		panel = this.panels.find( function ( item ) { return item.dom.id === scope.selected } );

		if ( tab ) {

			tab.removeClass( 'selected' );

		}

		if ( panel ) {

			panel.setDisplay( 'none' );

		}

	}

	tab = this.tabs.find( function ( item ) { return item.dom.id === id } );
	panel = this.panels.find( function ( item ) { return item.dom.id === id } );

	if ( tab ) {

		tab.addClass( 'selected' );

	}

	if ( panel ) {

		panel.setDisplay( '' );

	}

	this.selected = id;

	return this;

};

UI.TabbedPanel.prototype.addTab = function ( id, label, items ) {

	var tab = new UI.TabbedPanel.Tab( label, this );
	tab.setId( id );
	this.tabs.push( tab );
	this.tabsDiv.add( tab );

	var panel = new UI.Div();
	panel.setId( id );
	panel.add( items );
	panel.setDisplay( 'none' );
	this.panels.push( panel );
	this.panelsDiv.add( panel );

	this.select( id );

};

UI.TabbedPanel.Tab = function ( text, parent ) {

	UI.Text.call( this, text );
	this.parent = parent;

	this.setClass( 'Tab' );

	var scope = this;

	this.dom.addEventListener( 'click', function ( event ) {

		scope.parent.select( scope.dom.id );

	} );

	return this;

};

UI.TabbedPanel.Tab.prototype = Object.create( UI.Text.prototype );
UI.TabbedPanel.Tab.prototype.constructor = UI.TabbedPanel.Tab;

// Listbox
UI.Listbox = function ( ) {

	UI.Element.call( this );

	var dom = document.createElement( 'div' );
	dom.className = 'Listbox';
	dom.tabIndex = 0;

	this.dom = dom;
	this.items = [];
	this.listitems = [];
	this.selectedIndex = 0;
	this.selectedValue = null;

	return this;

};

UI.Listbox.prototype = Object.create( UI.Element.prototype );
UI.Listbox.prototype.constructor = UI.Listbox;

UI.Listbox.prototype.setItems = function ( items ) {

	if ( Array.isArray( items ) ) {

		this.items = items;

	}

	this.render();

};

UI.Listbox.prototype.render = function ( ) {

	while ( this.listitems.length ) {

		var item = this.listitems[ 0 ];

		item.dom.remove();

		this.listitems.splice( 0, 1 );

	}

	for ( var i = 0; i < this.items.length; i ++ ) {

		var item = this.items[ i ];

		var listitem = new UI.Listbox.ListboxItem( this );
		listitem.setId( item.id || `Listbox-${i}` );
		listitem.setTextContent( item.name || item.type );
		this.add( listitem );

	}

};

// Assuming user passes valid list items
UI.Listbox.prototype.add = function () {

	var items = Array.from( arguments );

	this.listitems = this.listitems.concat( items );

	UI.Element.prototype.add.apply( this, items );

};

UI.Listbox.prototype.selectIndex = function ( index ) {

	if ( index >= 0 && index < this.items.length ) {

		this.setValue( this.listitems[ index ].getId() );

	}

	this.selectedIndex = index;

};

UI.Listbox.prototype.getValue = function () {

	return this.selectedValue;

};

UI.Listbox.prototype.setValue = function ( value ) {

	for ( var i = 0; i < this.listitems.length; i ++ ) {

		var element = this.listitems[ i ];

		if ( element.getId() === value ) {

			element.addClass( 'active' );

		} else {

			element.removeClass( 'active' );

		}

	}

	this.selectedValue = value;

	var changeEvent = document.createEvent( 'HTMLEvents' );
	changeEvent.initEvent( 'change', true, true );
	this.dom.dispatchEvent( changeEvent );

};

// Listbox Item
UI.Listbox.ListboxItem = function ( parent ) {

	UI.Element.call( this );

	var dom = document.createElement( 'div' );
	dom.className = 'ListboxItem';

	this.parent = parent;
	this.dom = dom;

	var scope = this;

	function onClick() {

		if ( scope.parent ) {

			scope.parent.setValue( scope.getId( ) );

		}

	}

	dom.addEventListener( 'click', onClick, false );

	return this;

};

UI.Listbox.ListboxItem.prototype = Object.create( UI.Element.prototype );
UI.Listbox.ListboxItem.prototype.constructor = UI.Listbox.ListboxItem;


// Image

UI.Image = function ( value ) {

	UI.Element.call( this );

	var dom = document.createElement( 'img' );
	dom.className = 'Image';
	dom.src = value; // cf: value = image url

	this.dom = dom;

	return this;

};

UI.Image.prototype = Object.create( UI.Element.prototype );
UI.Image.prototype.constructor = UI.Image;


// Tooltip

UI.Tooltip = function ( text ) {

	UI.Element.call( this );

	var dom = document.createElement( 'span' );
	dom.setAttribute( 'data-tooltip', text );
	dom.setAttribute( 'data-tooltip-position', 'top' );

	this.dom = dom;

	return this;

}

UI.Tooltip.prototype = Object.create( UI.Element.prototype );
UI.Tooltip.prototype.constructor = UI.Tooltip;


// Modal

UI.Modal = function () {

	var scope = this;

	var dom = document.createElement( 'div' );

	dom.style.position = 'absolute';
	dom.style.width = '100%';
	dom.style.height = '100%';
	dom.style.backgroundColor = 'rgba(0,0,0,0.5)';
	dom.style.display = 'none';
	dom.style.alignItems = 'center';
	dom.style.justifyContent = 'center';
	dom.addEventListener( 'click', function ( event ) {

		scope.hide();

	} );

	this.dom = dom;

	this.container = new UI.Panel();
	this.container.dom.style.width = '200px';
	this.container.dom.style.padding = '20px';
	this.container.dom.style.backgroundColor = '#ffffff';
	this.container.dom.style.boxShadow = '0px 5px 10px rgba(0,0,0,0.5)';

	this.add( this.container );

	return this;

};

UI.Modal.prototype = Object.create( UI.Element.prototype );
UI.Modal.prototype.constructor = UI.Modal;

UI.Modal.prototype.show = function ( content ) {

	this.container.clear();
	this.container.add( content );

	this.dom.style.display = 'flex';

	return this;

};

UI.Modal.prototype.hide = function () {

	this.dom.style.display = 'none';

	return this;

};

//==============================================================================

// Texture

UI.Texture = function ( mapping ) {

	UI.Element.call( this );

	var scope = this;

	var dom = document.createElement( 'span' );

	var form = document.createElement( 'form' );

	var input = document.createElement( 'input' );
	input.type = 'file';
	// input.multiple = true;
	input.addEventListener( 'change', function ( event ) {

		loadFile( event.target.files[ 0 ] );

	} );
	form.appendChild( input );

	var canvas = document.createElement( 'canvas' );
	canvas.width = 50;//50;//32;
	canvas.height = 50;//40;//16;
	canvas.style.cursor = 'pointer';
	canvas.style.marginRight = '5px';
	canvas.style.border = '1px solid #888';

	canvas.addEventListener( 'click', function ( event ) {

		input.click();

	}, false );

	canvas.addEventListener( 'dragover', function ( event ) { // added by jamie

		// dragover is needed to fire the drop
		event.preventDefault();
		event.stopPropagation();

	}, false );

	canvas.addEventListener( 'drop', function ( event ) {

		event.preventDefault();
		event.stopPropagation();
		loadFile( event.dataTransfer.files[ 0 ] );

	}, false );

	dom.appendChild( canvas );

	function loadFile( file ) {

		if ( file.type.match( 'image.*' ) ) {

			var reader = new FileReader();

			if ( file.type === 'image/targa' ) {

				reader.addEventListener( 'load', function ( event ) {

					var canvas = new THREE.TGALoader().parse( event.target.result );

					var texture = new THREE.CanvasTexture( canvas, mapping );
					texture.sourceFile = file.name;

					scope.setValue( texture );

					if ( scope.onChangeCallback ) scope.onChangeCallback( texture );

				}, false );

				reader.readAsArrayBuffer( file );

			} else {

				reader.addEventListener( 'load', function ( event ) {

					var image = document.createElement( 'img' );
					image.addEventListener( 'load', function () {

						var texture = new THREE.Texture( this, mapping );
						texture.sourceFile = file.name;
						texture.format = file.type === 'image/jpeg' ? THREE.RGBFormat : THREE.RGBAFormat;
						texture.needsUpdate = true;

						scope.setValue( texture );

						if ( scope.onChangeCallback ) scope.onChangeCallback( texture );

					}, false );

					image.src = event.target.result;

				}, false );

				reader.readAsDataURL( file );

			}

		} else {

			var reader = new FileReader();
			reader.addEventListener( 'load', function ( event ) {

				if ( file.name.split( '.' ).pop() === 'hdr' ) {

					// assuming RGBE/Radiance HDR iamge format

					var loader = new THREE.RGBELoader().setDataType( THREE.UnsignedByteType );
					loader.load( event.target.result, function ( hdrTexture ) {

						hdrTexture.sourceFile = file.name;
						hdrTexture.isHDRTexture = true;

						scope.setValue( hdrTexture );

						if ( scope.onChangeCallback ) scope.onChangeCallback( hdrTexture );

					} );

				}

			} );

			reader.readAsDataURL( file );

		}

		form.reset();

	}

	this.dom = dom;
	this.texture = null;
	this.onChangeCallback = null;

	return this;

};

UI.Texture.prototype = Object.create( UI.Element.prototype );
UI.Texture.prototype.constructor = UI.Texture;

UI.Texture.prototype.getValue = function () {

	return this.texture;

};

UI.Texture.prototype.setValue = function ( texture ) {

	var canvas = this.dom.children[ 0 ];
	var context = canvas.getContext( '2d' );

	if ( texture !== null ) {

		// var image = texture.image;
		var image = texture.isCubeTexture ? texture.image[0] : texture.image;

		if ( image !== undefined && image.width > 0 ) {

			canvas.title = texture.sourceFile;
			var scale = canvas.width / image.width;

			if ( image.data === undefined ) {

				context.drawImage( image, 0, 0, image.width * scale, image.height * scale );

			} else {

				var canvas2 = renderToCanvas( texture );
				context.drawImage( canvas2, 0, 0, image.width * scale, image.height * scale );

			}

		} else {

			canvas.title = texture.sourceFile + ' (error)';
			context.clearRect( 0, 0, canvas.width, canvas.height );

		}

	} else {

		canvas.title = 'empty';

		if ( context !== null ) {

			// Seems like context can be null if the canvas is not visible

			context.clearRect( 0, 0, canvas.width, canvas.height );

		}

	}

	this.texture = texture;

};

UI.Texture.prototype.setEncoding = function ( encoding ) {

	var texture = this.getValue();
	if ( texture !== null ) {

		texture.encoding = encoding;

	}

	return this;

};

UI.Texture.prototype.onChange = function ( callback ) {

	this.onChangeCallback = callback;

	return this;

};


// Tree

UI.Tree = function ( appWorks ) {

	UI.Element.call( this );

	var scope = this;

	this.appWorks = appWorks;

	var dom = document.createElement( 'div' );
	dom.className = 'Tree';
	dom.tabIndex = 0; // keyup event is ignored without setting tabIndex

	// prevent native scroll behavior
	dom.addEventListener( 'keydown', function ( event ) {

		switch ( event.keyCode ) {
			case 38: // up
			case 40: // down
				event.preventDefault();
				event.stopPropagation();
				break;
		}

	}, false );

	// keybindings to support arrow navigation
	dom.addEventListener( 'keyup', function ( event ) {

		switch ( event.keyCode ) {
			case 38: // up
				scope.selectIndex( scope.selectedIndex - 1 );
				break;
			case 40: // down
				scope.selectIndex( scope.selectedIndex + 1 );
				break;
		}

	}, false );

	this.dom = dom;

	this.items = []; // li elements in the tree (cf: li per object3D)
	this.selectedIndex = -1; // selected by keyboard up/down

	return this;

};

UI.Tree.prototype = Object.create( UI.Element.prototype );
UI.Tree.prototype.constructor = UI.Tree;

UI.Tree.prototype.selectIndex = function ( index ) {

	if ( index >= 0 && index < this.items.length )
	{
		this.selectedIndex = index;
		this.appWorks.selectById( parseInt( this.items[ index ].id ) );
	}

};

UI.Tree.prototype.clean = function ( className, bool ) {

	var items = this.items;

	for( var i = 0, l = items.length; i < l; i++ )
	{
		items[ i ].classList.toggle( className, bool );
	}

};

UI.Tree.prototype.toggle = function ( ids, className, bool ) {

	ids.forEach( function( id ) {

		var li = document.getElementById( id );
		if( li )
		{
			li.classList.toggle( className, bool );
		}

	} );

};

UI.Tree.prototype.setInnerHTML = function ( html ) {

	var scope = this;
	var appWorks = this.appWorks;

	// update html

	while( this.dom.children.length > 0 ) {

		this.dom.removeChild( this.dom.firstChild );

	}

	this.dom.innerHTML = html;

	// toggle
	// - display = hidden if .nested
	// - display = block  if .nested.active

	var itemsHasUL = this.dom.getElementsByClassName( 'box' );

	for( var i = 0; i < itemsHasUL.length; i ++ )
	{
		var li = itemsHasUL[ i ]; // li = li that has ul as a child

		li.addEventListener( 'click', function( e )
		{
			this.parentElement.querySelector( '.nested' ).classList.toggle( 'active' );

			this.classList.toggle( 'check-box' );
		});
	}

	// click

	function onClick( event )
	{
		event.stopPropagation();

		var mode = undefined;

		if( event.ctrlKey )
		{
			mode = 'multiple';
		}
		else if( event.altKey )
		{
			mode = 'ancestor';
		}

		appWorks.selectById( parseInt( this.id ), mode );
	}

	// contextMenu

	function onContextMenu( event )
	{
		event.stopPropagation();
		event.preventDefault();

		appWorks.selectById( parseInt( this.id ) );

		appWorks.guiContextMenu.toggle( event );
	}

	// touch

	var touchTimer, touched;

    function onTouchMove( event )
    {
        event.preventDefault();

        if( touchTimer ) clearTimeout( touchTimer );

        appWorks.mouseMovePosition.copy( appWorks.getMousePosition( event ) );
    }

    function onTouchStart( event )
    {
        event.preventDefault();

		if( touched ) return; // prevent any additional touchstarts

		appWorks.selectById( parseInt( this.id ) );

		touchTimer = setTimeout( onLongTouch, 500, event );
        touched = true;

        appWorks.mouseDownPosition.copy( appWorks.getMousePosition( event ) );

		document.addEventListener( 'touchend', onTouchEnd, false );
	}

    function onTouchEnd( event )
    {
        if( touchTimer )
        {
            clearTimeout( touchTimer );
            touched = false;
        }

		appWorks.mouseUpPosition.copy( appWorks.getMousePosition( event ) );

		document.removeEventListener( 'touchend', onTouchEnd, false );
    }

    function onLongTouch( event )
    {
		event.stopPropagation();
		event.preventDefault();

		appWorks.guiContextMenu.toggle( event );
    }

	// drag & drop

	var currentDrag; // item being dragged

	function onDrag( event )
	{
		currentDrag = this;

		event.stopPropagation();
	}

	function onDragStart( event )
	{
		event.dataTransfer.setData( 'text', 'foo' ); // it works well!!

		event.stopPropagation();
	}

	function onDragOver( event )
	{
		if ( this === currentDrag ) return;

		// if( this.children.length > 0 ) return;

		var area = event.offsetY / this.clientHeight;

		if ( area < 0.25 )
		{
			this.className = 'dragTop';
		}
		else if ( area > 0.75 )
		{
			this.className = 'dragBottom';
		}
		else
		{
			this.className = 'drag';
		}

		event.preventDefault(); // why: for drop to work!!
	}

	function onDragLeave()
	{
		if ( this === currentDrag ) return;

		this.className = '';
	}

	function onDrop( event )
	{
		if ( this === currentDrag ) return;

		this.className = '';

		var scene = appWorks.scene;
		var object = scene.getObjectById( parseInt( currentDrag.id ) );
		if( object === undefined ) return;

		var area = event.offsetY / this.clientHeight;

		if ( area < 0.25 )
		{
			var nextObject = scene.getObjectById( parseInt( this.id ) );
			moveObject( object, nextObject.parent, nextObject );

		}
		else if ( area > 0.75 )
		{
			var nextObject = scene.getObjectById( parseInt( this.nextSibling.id ) );
			moveObject( object, nextObject.parent, nextObject );
		}
		else
		{
			var parentObject = scene.getObjectById( parseInt( this.id ) );
			moveObject( object, parentObject );
		}

		event.stopPropagation();
	}

	function moveObject( object, newParent, nextObject )
	{
		if ( newParent === null ) return;

		if ( nextObject === null ) nextObject = undefined;

		var newParentIsChild = false;

		object.traverse( function ( child ) {

			if ( child === newParent ) newParentIsChild = true;

		});

		if ( newParentIsChild ) return;

		appWorks.move( object, newParent, nextObject );
	}

	var items = this.dom.getElementsByTagName( 'li' );
	this.items = items;

	var sceneId = this.appWorks.scene.id.toString();
	var cameraId = this.appWorks.camera.id.toString();

	for( var i = 0; i < items.length; i ++ )
	{
		var li = items[ i ]; // li per object3D
		li.className = '';

		li.addEventListener( 'click', onClick, false );
		li.addEventListener( 'contextmenu', onContextMenu, false );

		li.addEventListener( 'touchmove', onTouchMove, true ); // if false => not working
		li.addEventListener( 'touchstart', onTouchStart, false );

		if ( li.id === sceneId || li.id === cameraId )
		{
			li.draggable = false;
		}
		else
		{
			li.draggable = true;

			li.addEventListener( 'drag', onDrag, false );
			li.addEventListener( 'dragstart', onDragStart, false ); // Firefox needs this

			li.addEventListener( 'dragover', onDragOver, false );
			li.addEventListener( 'dragleave', onDragLeave, false );
			li.addEventListener( 'drop', onDrop, false );
		}
	}

	//----------------------------------------
	// Features supported by this tree
	//----------------------------------------

	// 1) set .selected (if object is selected)

	var itemIds = appWorks.selectObjects.map( function( object )
	{
		return object.id.toString();
	});
	this.clean( 'selected', false );
	this.toggle( itemIds, 'selected', true );

	// 2) set .translucent (if object.visible === false)

	var itemIds = [];
	appWorks.scene.traverse( function( object )
	{
		if( object.visible === false )
		{
			itemIds.push( object.id.toString() );
		}
	});
	this.clean( 'translucent', false );
	this.toggle( itemIds, 'translucent', true );

	return scope;

};


// Boolean

UI.Boolean = function ( boolean, text ) {

	UI.Span.call( this );

	this.setMarginRight( '10px' );

	this.checkbox = new UI.Checkbox( boolean );
	this.text = new UI.Text( text ).setMarginLeft( '3px' );

	this.add( this.checkbox );
	this.add( this.text );

};

UI.Boolean.prototype = Object.create( UI.Span.prototype );
UI.Boolean.prototype.constructor = UI.Boolean;

UI.Boolean.prototype.getValue = function () {

	return this.checkbox.getValue();

};

UI.Boolean.prototype.setValue = function ( value ) {

	return this.checkbox.setValue( value );

};

var renderer;

function renderToCanvas( texture ) {

	if ( renderer === undefined ) {

		renderer = new THREE.WebGLRenderer( { canvas: new OffscreenCanvas( 1, 1 ) } );

	}

	var image = texture.image;

	renderer.setSize( image.width, image.height, false );
	renderer.toneMapping = THREE.ReinhardToneMapping;
	renderer.toneMappingExposure = 2;
	renderer.outputEncoding = THREE.sRGBEncoding;

	var scene = new THREE.Scene();
	var camera = new THREE.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );

	var material = new THREE.MeshBasicMaterial( { map: texture } );
	var quad = new THREE.PlaneBufferGeometry( 2, 2 );
	var mesh = new THREE.Mesh( quad, material );
	scene.add( mesh );

	renderer.render( scene, camera );

	return renderer.domElement;

}

export { UI };