jQuery(document).ready( function($) {
    /**
     * Any jQuery needed for the project
     */
    var current_field,
        next_field ,
        previous_field,
        control;

    var left,
        opacity,
        scale;

    var animating;

    $( '#diet_yes' ).change( function() {
        var html = '<div class="control_field input_field col-sm-4"> <div class="control clearfix"> <input type="radio" name="diet_option" id="vegetarian" value="vegetarian"/> <label for="vegetarian">Vegetarian</label> </div></div><div class="control_field input_field col-sm-4"> <div class="control clearfix"> <input type="radio" name="diet_option" id="vegan" value="vegan"/> <label for="vegan">Vegan</label> </div></div><div class="control_field input_field col-sm-4"> <div class="control clearfix"> <input type="radio" name="diet_option" id="halal" value="halal"/> <label for="halal">Halal</label> </div></div><div class="control_field input_field col-sm-4"> <div class="control clearfix"> <input type="radio" name="diet_option" id="koser" value="koser"/> <label for="koser">Koser</label> </div></div><div class="control_field input_field col-sm-4"> <div class="control clearfix"> <input type="radio" name="diet_option" id="gluten_free" value="gluten_free"/> <label for="gluten_free">Gluten-free</label> </div></div><div class="control_field input_field col-sm-4"> <div class="control clearfix"> <input type="radio" name="diet_option" id="other_option" value="other"/> <label for="other_option">Other</label> </div></div><div class="input_field col-sm-12"><textarea name="extra_infomation" placeholder="Additional Information"></textarea></div>';
        var dietOption = $( 'div#diet_options' );

        if ( this.checked ) {
            $( dietOption ).append(html);
        }

    } );

    $( '#diet_no' ).change( function() {
        var dietOption = $( 'div#diet_options' );

        if ( this.checked ) {
            $( dietOption ).children().remove();
        }
    } );

    $( '#parking_yes' ).change( function() {
        var html = '<div class="col-sm-12 input_field"><textarea name="car_reg" placeholder="Please Enter your Car Registration"></textarea></div>';
        var reg = $( 'div#reg_plate' );

        if ( this.checked ) {
            $( reg ).append(html);
        }

    } );

    $( '#parking_no' ).change( function() {
        var reg = $( 'div#reg_plate' );

        if ( this.checked ) {
            $( reg ).children().remove();
        }
    } );

    $( '#guest_yes' ).change( function() {
        var html = '<div class="input_field col-md-4 col-sm-12"> <input type="text" name="guest_title" class="input_field" placeholder="Title *"/> </div><div class="input_field col-md-4 col-sm-12"> <input type="text" name="guest_first_name" class="input_field" placeholder="First Name *"/> </div><div class="input_field col-md-4 col-sm-12"> <input type="text" name="guest_surname" class="input_field" placeholder="Surname *"/> </div><div class="guest_requirements col-sm-12"> <h6>Does your guest have any <span class="highlight">Dietary Requirements?</span></h6> <div class="control_field input_field col-sm-6"> <div class="control clearfix"> <input type="radio" name="guest_diet" id="guest_diet_yes" value="yes"/> <label for="guest_diet_yes">Yes</label> </div></div><div class="control_field input_field col-sm-6"> <div class="control clearfix"> <input type="radio" name="guest_diet" id="guest_diet_no" value="no"/> <label for="guest_diet_no">No</label> </div></div> <div id="guest_diet_options"> <div class="control_field input_field col-sm-4"> <div class="control clearfix"> <input type="radio" name="guest_diet_options" id="guest_vegetarian" value="no"> <label for="guest_vegetarian">Vegetarian</label> </div></div><div class="control_field input_field col-sm-4"> <div class="control clearfix"> <input type="radio" name="guest_diet_options" id="guest_vegan" value="no"> <label for="guest_vegan">Vegan</label> </div></div><div class="control_field input_field col-sm-4"> <div class="control clearfix"> <input type="radio" name="guest_diet_options" id="guest_halal" value="no"> <label for="guest_halal">Halal</label> </div></div><div class="control_field input_field col-sm-4"> <div class="control clearfix"> <input type="radio" name="guest_diet_options" id="guest_koser" value="no"> <label for="guest_koser">Koser</label> </div></div><div class="control_field input_field col-sm-4"> <div class="control clearfix"> <input type="radio" name="guest_diet_options" id="guest_luten_free" value="no"> <label for="guest_luten_free">Gluten-free</label> </div></div><div class="control_field input_field col-sm-4"> <div class="control clearfix"> <input type="radio" name="guest_diet_options" id="guest_other" value="no"> <label for="guest_other">Other</label> </div></div><div id="guest_extra_info" class="col-sm-12"> <div class="input_field col-sm-12"> <textarea name="guest_information" placeholder="Additional Information"></textarea> </div></div></div>';
        var guestRequire = $( 'div#guest_list' );

        if ( this.checked ) {
            ( guestRequire ).append(html);
        }
    } )

    $( '#guest_no' ).change( function() {
        var guestRequire = $( 'div#guest_list' );

        if ( this.checked ) {
            $( guestRequire ).children().remove();
        }
    } )

    $( '#guest_diet_no' ).change( function() {
        var guestRemoveOption = $(this).find( 'div#guest_diet_options' );

        if ( this.checked ) {
            $( guestRemoveOption ).children().remove();
        }
    } );

    $( '.next_action' ).click( function() {
        if ( animating )
            return false;

        animating = true;

        control = $( 'input[name="attend_event"]:checked' ).val();

        if ( control == 'no' ) {
            window.location.replace('https://stephenhinett.co.uk/nec/not-attending.html');
        }

        current_field = $(this).parent();
        next_field = $(this).parent().next();

        // Active the next progress bar
        $( '.progress_bar li' ).eq( $( 'fieldset' ).index( next_field ) ).addClass( 'active' );

        /**
         * Show the next field
         * and hide the current field
         */
        next_field.show();
        current_field.animate( { opacity: 0 }, {
            step: function( now, mx ) {
                scale = 1 - (1 - now) * 0.2;

                left = (now * 50)+"%";
                opacity = 1 - now;

                current_field.css({
                    'transform': 'scale('+scale+')',
                    'position': 'absolute'
                });

                next_field.css({
                    'left': left,
                    'opacity': opacity
                });
            },
            duration: 800,
            complete: function() {
                current_field.hide();
                animating = false;
            },
            easing: 'easeInOutBack'
        });
    });

    $( '.previous_action' ).click( function() {
        if ( animating )
            return false;

        animating = true;

        current_field = $(this).parent();
        previous_field = $(this).parent().prev();

        // De-activate the current bar
        $( '.progress_bar li' ).eq( $( 'fieldset' ).index( current_field) ).removeClass( 'active' );

        /**
         * Show the previous field
         * and hide the current field
         */
        previous_field.show();
        current_field.animate( { opacity: 0 }, {
            step: function( now, mx ) {
                //as the opacity of current_field reduces to 0 - stored in "now"
                //1. scale previous_field from 80% to 100%
                scale = 0.8 + (1 - now) * 0.2;
                //2. take current_field to the right(50%) - from 0%
                left = ((1-now) * 50)+"%";
                //3. increase opacity of previous_field to 1 as it moves in
                opacity = 1 - now;
                current_field.css({
                    'left': left,
                    'position': 'relative'
                });
                previous_field.css({
                    'transform': 'scale('+scale+')',
                    'opacity': opacity
                });
            },
            duration: 800,
            complete: function() {
                current_field.hide();
                animating = false;
            },
            easing: 'easeInOutBack'
        });
    });

    $( '.submit_action' ).click( function() {
        return false;
    });


});