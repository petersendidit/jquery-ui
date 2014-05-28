module( "progressbar: methods" );

test( "destroy", function() {
	expect( 1 );
	domEqual( "#progressbar", function() {
		$( "#progressbar" ).progressbar().progressbar( "destroy" );
	});
});

test( "disable", function() {
	expect( 3 );

	var element = $( "#progressbar" ).progressbar().progressbar( "disable" ),
		widget = element.progressbar( "widget" );

	ok( widget.hasClass( "ui-state-disabled" ), "element gets ui-state-disabled" );
	equal( widget.attr( "aria-disabled" ), "true", "element gets aria-disabled" );
	ok( widget.hasClass( "ui-progressbar-disabled" ), "element gets ui-progressbar-disabled" );
});

test( "enable", function() {
	expect( 3 );

	var element = $( "#progressbar" ).progressbar({
			disabled: true
		}).progressbar( "enable" ),
		widget = element.progressbar( "widget" );

	ok( !widget.hasClass( "ui-state-disabled" ), "element no longer has ui-state-disabled" );
	equal( widget.attr( "aria-disabled" ), "false",  "element aria-disabled is false" );
	ok( !widget.hasClass( "ui-progressbar-disabled" ), "element no longer has ui-progressbar-disabled" );
});

test( "value", function() {
	expect( 3 );

	var element = $( "<div>" ).progressbar({ value: 20 });
	equal( element.progressbar( "value" ), 20, "correct value as getter" );
	strictEqual( element.progressbar( "value", 30 ), element, "chainable as setter" );
	equal( element.progressbar( "option", "value" ), 30, "correct value after setter" );
});

test( "widget", function() {
	expect( 2 );
	var element = $( "#progressbar" ).progressbar(),
		widgetElement = element.progressbar( "widget" );
	equal( widgetElement.length, 1, "one element" );
	strictEqual( widgetElement[ 0 ], element[ 0 ], "same element" );
});
