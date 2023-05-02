( function( $ ) {
    "use strict";
    // Ajax add to cart on the product page
    var $warp_fragment_refresh = {
        url: wc_cart_fragments_params.wc_ajax_url.toString().replace( '%%endpoint%%', 'get_refreshed_fragments' ),
        type: 'POST',
        success: function( data ) {
            if ( data && data.fragments ) {

                $.each( data.fragments, function( key, value ) {
                    $( key ).replaceWith( value );
                });

                $( document.body ).trigger( 'wc_fragments_refreshed' );

                /* Open mini cart in slide view */
                if( $( '.hongo-mini-cart-slide-sidebar' ).length > 0 ) {

                    setTimeout( function() {

                        $( '.widget_shopping_cart .mini-cart-slide' ).trigger( 'click' );
                        
                    }, 10 );
                }

                if( productAddtoCart.redirect_to_cart != 'no' ) {
                    
                    window.location.href = productAddtoCart.woo_cart_url;
                }
            }
        }
    };

    $('.single-product .product:not( .product-type-external ) .entry-summary form.cart, .sticky-add-to-cart-wrapper form.cart').on('submit', function (e) {
        e.preventDefault();

        var product_url = window.location,
            form = $(this);

        form.find( 'button' ).block({
            message: null,
        });

        $.post(product_url, form.serialize() + '&_wp_http_referer=' + product_url, function (result) {
            var cart_dropdown = $( '.widget_shopping_cart', result );

            // update fragments
            $.ajax( $warp_fragment_refresh );

            var message = $( result ).find( '.woocommerce-notices-wrapper' );
            var updatedForm = $( result ).find( 'form.cart' );
            $( '.woocommerce-notices-wrapper' ).replaceWith( message ).fadeIn();

            setTimeout( function() {

                $( '.woocommerce-notices-wrapper' ).html('').fadeOut();
                
            }, productAddtoCart.ajax_cart_message_show_time );

            form.find( 'button' ).unblock();

            var headerHeight = $( 'header' ).outerHeight() + 20;
            $( 'html, body' ).stop()
                .animate({
                    'scrollTop': 0
                }, 1200, 'easeInOutExpo' );

            $( '.reset_variations' ).trigger( 'click' );
        });
    });

})( jQuery );