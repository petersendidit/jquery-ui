module( "progressbar: options" );

test( "{ disabled: true }", function() {
	expect( 3 );
	var element = $( "#progressbar" ).progressbar({
			disabled: true
		}),
		widget = element.progressbar( "widget" );

	ok( widget.hasClass( "ui-state-disabled" ), "element gets ui-state-disabled" );
	equal( widget.attr( "aria-disabled" ), "true", "element gets aria-disabled" );
	ok( widget.hasClass( "ui-progressbar-disabled" ), "element gets ui-progressbar-disabled" );
});

test( "{ disabled: true } option method", function() {
	expect( 3 );
	var element = $( "#progressbar" ).progressbar(),
		widget = element.progressbar( "widget" );

	element.progressbar( "option", "disabled", true );

	ok( widget.hasClass( "ui-state-disabled" ), "element gets ui-state-disabled" );
	equal( widget.attr( "aria-disabled" ), "true", "element gets aria-disabled" );
	ok( widget.hasClass( "ui-progressbar-disabled" ), "element gets ui-progressbar-disabled" );
});

test( "{ disabled: false }", function() {
	expect( 3 );
	var element = $( "#progressbar" ).progressbar({
			disabled: false
		}),
		widget = element.progressbar( "widget" );

	ok( !widget.hasClass( "ui-state-disabled" ), "element no longer has ui-state-disabled" );
	equal( widget.attr( "aria-disabled" ), undefined,  "element doesn't have aria-disabled" );
	ok( !widget.hasClass( "ui-progressbar-disabled" ), "element no longer has ui-progressbar-disabled" );
});

test( "{ disabled: false } option method", function() {
	expect( 3 );
	var element = $( "#progressbar" ).progressbar({
			disabled: true
		}),
		widget = element.progressbar( "widget" );

	element.progressbar( "option", "disabled", false );

	ok( !widget.hasClass( "ui-state-disabled" ), "element no longer has ui-state-disabled" );
	equal( widget.attr( "aria-disabled" ), "false",  "element aria-disabled is false" );
	ok( !widget.hasClass( "ui-progressbar-disabled" ), "element no longer has ui-progressbar-disabled" );
});

test( "{ value: 0 }, default", function() {
	expect( 1 );
	$( "#progressbar" ).progressbar();
	equal( $( "#progressbar" ).progressbar( "value" ), 0 );
});

// Ticket #7231 - valueDiv should be hidden when value is at 0%
test( "value: visibility of valueDiv", function() {
	expect( 4 );
	var element = $( "#progressbar" ).progressbar({
		value: 0
	});
	ok( element.children( ".ui-progressbar-value" ).is( ":hidden" ),
		"valueDiv hidden when value is initialized at 0" );
	element.progressbar( "value", 1 );
	ok( element.children( ".ui-progressbar-value" ).is( ":visible" ),
		"valueDiv visible when value is set to 1" );
	element.progressbar( "value", 100 );
	ok( element.children( ".ui-progressbar-value" ).is( ":visible" ),
		"valueDiv visible when value is set to 100" );
	element.progressbar( "value", 0 );
	ok( element.children( ".ui-progressbar-value" ).is( ":hidden" ),
		"valueDiv hidden when value is set to 0" );
});

test( "{ value: 5 }", function() {
	expect( 1 );
	$( "#progressbar" ).progressbar({
		value: 5
	});
	equal( $( "#progressbar" ).progressbar( "value" ), 5 );
});

test( "{ value: -5 }", function() {
	expect( 1 );
	$( "#progressbar" ).progressbar({
		value: -5
	});
	equal( $( "#progressbar" ).progressbar( "value" ), 0,
		"value constrained at min" );
});

test( "{ value: 105 }", function() {
	expect( 1 );
	$( "#progressbar" ).progressbar({
		value: 105
	});
	equal( $( "#progressbar" ).progressbar( "value" ), 100,
		"value constrained at max" );
});

test( "{ value: 10, max: 5 }", function() {
	expect( 1 );
	$("#progressbar").progressbar({
		max: 5,
		value: 10
	});
	equal( $( "#progressbar" ).progressbar( "value" ), 5,
		"value constrained at max" );
});

test( "change max below value", function() {
	expect( 1 );
	$("#progressbar").progressbar({
		max: 10,
		value: 10
	}).progressbar( "option", "max", 5 );
	equal( $( "#progressbar" ).progressbar( "value" ), 5,
		"value constrained at max" );
});
