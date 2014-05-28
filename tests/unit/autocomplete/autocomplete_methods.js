(function( $ ) {

module( "autocomplete: methods" );

var data = [ "c++", "java", "php", "coldfusion", "javascript", "asp", "ruby",
	"python", "c", "scala", "groovy", "haskell", "perl" ];

test( "destroy", function() {
	expect( 1 );
	domEqual( "#autocomplete", function() {
		$( "#autocomplete" ).autocomplete().autocomplete( "destroy" );
	});
});

asyncTest( "disable", function() {
	expect( 5 );
	var element = $( "#autocomplete" ).autocomplete({
			source: data,
			delay: 0
		}),
		menu = element.autocomplete( "disable" ).autocomplete( "widget" );
	element.val( "ja" ).keydown();

	ok( menu.is( ":hidden" ), "menu is hidden" );

	ok( !element.is( ".ui-state-disabled" ), "element doesn't get ui-state-disabled" );
	ok( !element.attr( "aria-disabled" ), "element doesn't get aria-disabled" );
	ok( menu.is( ".ui-autocomplete-disabled" ), "menu gets ui-autocomplete-disabled" );

	setTimeout(function() {
		ok( menu.is( ":hidden" ), "menu is hidden" );
		start();
	}, 50 );
});

asyncTest( "enable", function() {
	expect( 2 );
	var element = $( "#autocomplete" ).autocomplete({
			source: data,
			delay: 0,
			disable: true
		}),
		menu = element.autocomplete( "widget" );
	element.autocomplete( "enable" );
	element.val( "ja" ).keydown();

	setTimeout(function() {
		ok( menu.is( ":visible" ), "menu is visible" );
		ok( !menu.is( ".ui-autocomplete-disabled" ), "menu doesn't get ui-autocomplete-disabled" );
		start();
	});
});

test( "search, close", function() {
	expect( 6 );
	var element = $( "#autocomplete" ).autocomplete({
			source: data,
			minLength: 0
		}),
		menu = element.autocomplete( "widget" );

	ok( menu.is( ":hidden" ), "menu is hidden on init" );

	element.autocomplete( "search" );
	ok( menu.is( ":visible" ), "menu is visible after search" );
	equal( menu.find( ".ui-menu-item" ).length, data.length, "all items for a blank search" );

	element.val( "has" ).autocomplete( "search" );
	equal( menu.find( ".ui-menu-item" ).text(), "haskell", "only one item for set input value" );

	element.autocomplete( "search", "ja" );
	equal( menu.find( ".ui-menu-item" ).length, 2, "only java and javascript for 'ja'" );

	element.autocomplete( "close" );
	ok( menu.is( ":hidden" ), "menu is hidden after close" );
});

test( "widget", function() {
	expect( 2 );
	var element = $( "#autocomplete" ).autocomplete(),
		widgetElement = element.autocomplete( "widget" );
	equal( widgetElement.length, 1, "one element" );
	ok( widgetElement.is( ".ui-menu" ), "menu element" );
});

}( jQuery ) );
