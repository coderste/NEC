jQuery(document).ready( function($) {
    /**
     * Any jQuery needed for the project
     */
    var startForm = $( '.start_the_form' );
    var startFormBtn = $( '.start_form_btn' );
    var formWrapper = $( '.form_wrapper' );
    var inputField = $( '.input_field' );

    var formElements = $( '.form_elements' );
    var btnNext = $( '.next_form' );

    $( startFormBtn ).click( function() {
        $( startForm ).hide( 'slide',
            { direction: "left" },
        1500 );

        if ( $( startForm ).is( ":visible" ) ) {
            $( formWrapper ).show( 'slide',
                { direction: "right" },
            2000 )
        }
    } );

    $( btnNext ).click( function() {
        var parentEle = $(this).parent();
        $( parentEle ).hide( 'slide',
            { direction: "left" },
        1500 );

        $(parentEle).next( '.form_elements' ).show( 'slide',
                { direction: "right" },
        2000 );
    });
});