( function( $ ) {

    "use strict";

    /* Set default variation Function */
    function hongoSetDefaultVariation() {

        /* All variation hide / show based on condition */
        $( '.variations_form' ).find( '.hongo-attribute-filter' ).each( function() {

            var $wrap = $( this ),
                $variation_select = $wrap.closest( '.value' ).find( 'select' );

                $wrap.find( '.hongo-swatch' ).each( function() {
                    var value = $( this ).data( 'value' );

                    if ( ! $variation_select.find( 'option[value="' + value + '"]' ).length ) {

                        $( this ).addClass( 'disable' );
                        
                    } else {

                        $( this ).removeClass( 'disable' );
                    }
                });
        });
    };

    /* Window ready event start code */
    $(document).ready(function () {

        /* Product Quick View */
        $( document ).on( 'click', '.hongo-quick-view', function() {

            //$('.hongo-quick-view-popup').css( 'display','block' );
            $( '.hongo-quick-view-popup' ).css( 'visibility','visible' ).css( 'opacity','1' );
            
            var _this = $( this );
            var productId   = $( this ).attr( 'data-product_id' );

            if( productId != '' && productId != undefined ) { // Check product id

                $.ajax({
                    type: 'POST',
                    url: hongoAddons.ajaxurl, 
                    data: {
                        'action':'quick_view_product_details',
                        'productid' : productId
                    },
                    beforeSend: function() {
                        _this.addClass( 'loading' );
                    },
                    success:function(response) {

                        if( $( '#hongo_quick_view_popup' ).length > 0 ) {

                            $( '#hongo_quick_view_popup' ).html( response );
                            _this.removeClass( 'loading' );

                            // Tooltip
                            if( $( '.hongo-tooltip' ).length > 0 ) {
           
                                $( '.hongo-tooltip' ).tooltip();
                            }

                            // Open popup for quick view product details
                            if( $.inArray( 'jquery-magnific-popup', hongoAddons.disable_scripts ) < 0 ) {
                                $.magnificPopup.open({
                                    delegate: 'a',
                                    fixedContentPos: true,
                                    items: {
                                        src: '#hongo_quick_view_popup',
                                        type: 'inline'
                                    },
                                    mainClass: 'mfp-fade quick-view-popup-wrap hongo-mfp-bg-white hongo-quick-view-popup',
                                    callbacks: {
                                        elementParse: function(item) {

                                            // Product Gallery
                                            var product_gallery = $( item.src ).find('.woocommerce-product-gallery');
                                            product_gallery.each( function() {
                                                $( this ).wc_product_gallery();
                                            });

                                            // Variation Form
                                            var form_variation = $( item.src ).find('.variations_form');
                                            form_variation.each( function() {
                                                $( this ).wc_variation_form();
                                            });

                                            // Init after gallery.
                                            setTimeout( function() {
                                                form_variation.trigger( 'check_variations' );
                                                form_variation.trigger( 'wc_variation_form' );
                                            }, 100 );

                                            //Zoom Disable
                                            $( '.woocommerce-product-gallery__image' ).attr( 'style',  'pointer-events:none !important' );

                                            // Quick view product details open popup trigger
                                            $( document.body ).trigger( 'hongo_quick_view_product_details_open_popup' );
                                        }
                                    }
                                });
                            }

                            // Product Count down
                            if( $.inArray( 'countdown', hongoAddons.disable_scripts ) < 0 ) {
                                if( $( '.hongo-quick-view-deal-wrap' ).length > 0 ) {
                                    $( '.hongo-quick-view-deal-wrap' ).each( function() {
                                        var $date = $( this ).attr( 'data-end-date' );
                                        if( hongoAddons.moment_timezone ) {
                                            var $enddate = moment.tz( $(this).attr( 'data-end-date' ), $(this).attr('data-timezone'));
                                            $date = $enddate.toDate();
                                        }
                                        if( $date != '' && $date != undefined ) {
                                            $(this).countdown( $date, function (event) {
                                                $( this ).html(
                                                    event.strftime( '' 
                                                        + '<span class="hongo-product-deal-days">%D<span>' + hongoAddons.product_deal_day + '</span></span>'
                                                        + '<span class="hongo-product-deal-hours">%H<span>' + hongoAddons.product_deal_hour + '</span></span>'
                                                        + '<span class="hongo-product-deal-mins">%M<span>' + hongoAddons.product_deal_min + '</span></span>'
                                                        + '<span class="hongo-product-deal-secs">%S<span>' + hongoAddons.product_deal_sec + '</span></span>'
                                                    )
                                                );
                                            });
                                        }
                                    });
                                }
                            }

                            //Quick View Slider and do not apply loop slider
                            if( $.inArray( 'swiper', hongoAddons.disable_scripts ) < 0 ) {
                                var quick_view = new Swiper('.quick-view-images', {
                                    navigation: {
                                        nextEl: '.swiper-button-next',
                                        prevEl: '.swiper-button-prev',
                                    },
                                    watchOverflow: true,
                                });
                            }

                            setTimeout(function() {
                                
                                /* Set default variation */
                                hongoSetDefaultVariation();

                            }, 100 );

                            /* Single product boxed variation form */
                            $( '#hongo_quick_view_popup .variations_form' ).hongoVariationSwatchesForm();

                            // Quick View Variation code here because of change slide by quick_view variable
                            if( $( '#hongo_quick_view_popup .quick-view-images' ).length > 0 ) {
                                
                                $('.variations_form.cart').on('found_variation', function (e, variation) {

                                    quick_view.slideTo( 0, 1000, false );
                                    e.preventDefault();

                                });

                                $('.variations_form.cart').on('click', '.reset_variations', function (e) {  

                                    quick_view.slideTo( 0, 1000, false );
                                    e.preventDefault();
                                })
                            }
                        }
                    }
                });
            }
        });

    }); /* Window ready event end code */
    // Ajax add to cart on the quick view
    if( hongoAddons.quickview_ajax_add_to_cart == 1 ) {

        var $quick_view_fragment_refresh = {
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
                }
            }
        };

        $( document ).on( 'submit', '.quick-view-product .entry-summary:not( .product-type-external ) form.cart', function (e) {
            e.preventDefault();

            var product_url = window.location,
                form = $(this);

            form.find( 'button' ).block({
                message: null,
            });

            $.post( product_url, form.serialize() + '&_wp_http_referer=' + product_url, function ( result ) {
                var cart_dropdown = $( '.widget_shopping_cart', result );

                // update fragments
                $.ajax( $quick_view_fragment_refresh );

                $( '.hongo-cart-message' ).remove();

                $( document.body ).append( '<div class="hongo-cart-message alt-font"><i class="fas fa-check"></i>'+ hongoAddons.quickview_addtocart_message +'</div>' );

                form.find( 'button' ).unblock();

                // Close popup when added add to cart
                if( $.inArray( 'jquery-magnific-popup', hongoAddons.disable_scripts ) < 0 ) {
                    $('#hongo_quick_view_popup').magnificPopup( 'close' );
                }

                // Product added Message
                setTimeout( function(){

                    $( '.hongo-cart-message' ).remove();
                    
                }, 3000 );

                $( '.reset_variations' ).trigger( 'click' );
            });
        });
    }

})( jQuery );