( function( $ ) {

    "use strict";
    
    /* Window ready event start code */
    $(document).ready(function () {

    	/* Add and Undo Product wishlist */
	    $( document ).on( 'click', '.hongo-wishlist-add, .undo-product', function() {

            var _this = $( this );
	        if( _this.hasClass( 'wishlist-added' ) ) {
                if( hongoAddons.wishlist_url != '' ) {
	               return;
                }
	        }            

            var w_id  = _this.attr( 'data-product_id' );
            if( w_id != '' && w_id != undefined ) {
    	        $.ajax({
    	            type : 'POST',
    	            url  : hongoAddons.ajaxurl,
    	            data : {
    	                'action'     : 'hongo_addons_add_wishlist',
    	                'wishlistid' : w_id
    	            },
                    beforeSend: function() {
                        _this.addClass( 'loading' );
                    },
    	            success:function( response ) {
    	                
                        $( '.hongo-wishlist[ data-product_id=' + w_id + ']' ).addClass( 'wishlist-added' );

                        // Undo Link Remove on click
    	        		$( '.undo' ).addClass( 'display-none' );
    	        		$( '.undo a' ).removeAttr( 'data-product_id' );

    	                // check Wishlist page select or not
                        $( '.wishlist-added i' ).removeClass( hongoAddons.wishlist_icon );
                        $( '.wishlist-added i' ).addClass( 'fas fa-heart' );

                        if( hongoAddons.wishlist_url != '' ) {
                            // Loader
                            $( '.hongo-wishlist-message' ).remove();
                            $( '.hongo-cart-message' ).remove();
                            $( document.body ).append( '<div class="hongo-wishlist-message alt-font"><i class="fas fa-check"></i>'+ hongoAddons.wishlist_added_message +'</div>' );
    	                    $( '.wishlist-added' ).attr( 'href', hongoAddons.wishlist_url );
                            $( '.wishlist-added i' ).attr( 'title', hongoAddons.browse_wishlist_text );
                            $( '.wishlist-added i' ).attr( 'data-original-title', hongoAddons.browse_wishlist_text );
                            $( '.wishlist-added span.button-text' ).text( hongoAddons.browse_wishlist_text );
                            $( '.wishlist-added[ data-product_id=' + w_id + ']' ).removeClass( 'hongo-wishlist-add' );
                            $( '.hongo-shop-minimalist .hongo-quick-view i' ).attr('title', '');
                            $( '.hongo-shop-minimalist .hongo-quick-view i' ).attr('data-original-title', '');
                            $( '.hongo-shop-minimalist .hongo-wishlist i' ).attr('title', '');
                            $( '.hongo-shop-minimalist .hongo-wishlist i' ).attr('data-original-title', '');
                        } else {
                            // Loader
                            $( '.hongo-wishlist-message' ).remove();
                            $( '.hongo-cart-message' ).remove();
                            $( document.body ).append( '<div class="hongo-wishlist-message alt-font"><i class="fas fa-check"></i>'+ hongoAddons.wishlist_added_message+'</div>' );
                            $( '.hongo-wishlist[ data-product_id=' + w_id + ']' ).removeClass( 'hongo-wishlist-add' );
                            $( '.hongo-wishlist[ data-product_id=' + w_id + ']' ).addClass( 'hongo-wishlist-remove' );
                            $( '.wishlist-added i' ).attr( 'title', hongoAddons.remove_wishlist_text );
                            $( '.wishlist-added i' ).attr( 'data-original-title', hongoAddons.remove_wishlist_text );
                            $( '.wishlist-added span.button-text' ).text( hongoAddons.remove_wishlist_text );
                            $( '.hongo-shop-minimalist .hongo-quick-view i' ).attr('title', '');
                            $( '.hongo-shop-minimalist .hongo-quick-view i' ).attr('data-original-title', '');
                            $( '.hongo-shop-minimalist .hongo-wishlist i' ).attr('title', '');
                            $( '.hongo-shop-minimalist .hongo-wishlist i' ).attr('data-original-title', '');
                        }

    	                // Widget Response add refresh
                        setTimeout( function(){
                            _this.removeClass( 'loading' );
                            $( '.widget-wishlist-wrap' ).html( response );
                            if( hongoAddons.wishlist_url != '' ){
                                $( '.hongo-view-wishlist' ).attr( 'href', hongoAddons.wishlist_url );
                            }
                        }, 200 );

                        // Product added Message
                        setTimeout( function(){

                            $( '.hongo-wishlist-message' ).remove();
                            
                        }, 3000 );

                        // Refersh Wishlist
                        $( document ).trigger( 'hongo-wishlist-refersh' );
    	            },
    	        });
            }
	    });

	    /* Remove Product wishlist */
	    $( document ).on( 'click', '.hongo-remove-wish , .hongo-wishlist-remove', function() {

            var _this = $( this );
	        var r_id = _this.attr('data-product_id');
	        if( r_id != '' && r_id != undefined ) {

                _this.addClass( 'loading' );
                $( '.hongo-wishlist-message' ).remove();
                $( '.hongo-cart-message' ).remove();
                $( document.body ).append( '<div class="hongo-wishlist-message alt-font"><i class="fas fa-times"></i>'+ hongoAddons.wishlist_remove_message +'</div>' );
                
                if( hongoAddons.wishlist_url != '' ){
                    // Default layout icon , link and text change
        	        $( '.hongo-wishlist[ data-product_id="'+ r_id +'"]' ).find( 'span.wish-list-text' ).html( hongoAddons.add_to_wishlist_text );
        	        $( '.hongo-wishlist[ data-product_id="'+ r_id +'"]' ).removeClass( 'wishlist-added' ).attr( 'href', 'javascript:void(0);' );
                    $( '.hongo-wishlist[ data-product_id="'+ r_id +'"] i' ).removeClass( 'fas fa-heart' );
                    $( '.hongo-wishlist[ data-product_id="'+ r_id +'"] i' ).addClass( hongoAddons.wishlist_icon );
                    $( '.hongo-wishlist[ data-product_id="'+ r_id +'"] i' ).attr( 'title', '' ).attr( 'data-original-title', hongoAddons.add_to_wishlist_text );
        	        _this.addClass( 'loading' );
                } else {
                    // Default layout icon , link and text change
                    $( '.hongo-wishlist[ data-product_id="'+ r_id +'"]' ).removeClass('hongo-wishlist-remove').addClass( 'hongo-wishlist-add' );
                    $( '.hongo-wishlist[ data-product_id="'+ r_id +'"]' ).find( 'span.wish-list-text' ).html( hongoAddons.add_to_wishlist_text );
                    $( '.hongo-wishlist[ data-product_id="'+ r_id +'"]' ).removeClass( 'wishlist-added' ).attr( 'href', 'javascript:void(0);' );
                    $( '.hongo-wishlist[ data-product_id="'+ r_id +'"] i' ).removeClass( 'fas fa-heart' );
                    $( '.hongo-wishlist[ data-product_id="'+ r_id +'"] i' ).addClass( hongoAddons.wishlist_icon );
                    $( '.hongo-wishlist[ data-product_id="'+ r_id +'"] i' ).attr( 'title', '' ).attr( 'data-original-title', hongoAddons.add_to_wishlist_text );

                }

                $.ajax({
    	            type : 'POST',
    	            url  : hongoAddons.ajaxurl,
    	            data : {
    	                'action'   : 'hongo_addons_remove_wishlist',
    	                'removeid' : r_id
    	            },
    	            success:function( response ) {

                        // Undo Link
                        $( '.undo' ).removeClass( 'display-none' );
                        $( '.undo a' ).attr( 'data-product_id', r_id);
                        
                        // Widget Response add refresh
                        
                        $( '.widget-wishlist-wrap' ).html( response );
                        if( hongoAddons.wishlist_url != '' ){
                            $( '.hongo-view-wishlist' ).attr( 'href', hongoAddons.wishlist_url );
                        }

                        // Product remove Message
                        setTimeout( function(){
                            _this.removeClass( 'loading' );
                            $( '.hongo-wishlist-message' ).remove();
                        },1000 );

                        // Refersh Wishlist
                        $( document ).trigger( 'hongo-wishlist-refersh' );
    	            },
    	        });
            }
	    });

	    /* Added to cart by clicking widget add to cart button and remove from wishlist */
        $( document ).on( 'click', '.widget-add-to-cart', function() {

            var _this = $( this );
            var r_id = $(this).attr('data-product_id');
            if( r_id != '' && r_id != undefined ) {
                
                _this.addClass( 'loading' );
                $( '.hongo-wishlist-message' ).remove();
                $( '.hongo-cart-message' ).remove();
                $( document.body ).append( '<div class="hongo-wishlist-message alt-font"><i class="fas fa-check"></i>'+ hongoAddons.wishlist_addtocart_message +'</div>' );

                if( hongoAddons.wishlist_url != '' ){
                    // Default layout icon , link and text change
                    $( '.hongo-wishlist[ data-product_id="'+ r_id +'"]' ).find( 'span.wish-list-text' ).html( hongoAddons.add_to_wishlist_text );
                    $( '.hongo-wishlist[ data-product_id="'+ r_id +'"]' ).removeClass( 'wishlist-added' ).attr( 'href', 'javascript:void(0);' );
                    $( '.hongo-wishlist[ data-product_id="'+ r_id +'"] i' ).removeClass( 'fas fa-heart' );
                    $( '.hongo-wishlist[ data-product_id="'+ r_id +'"] i' ).addClass( hongoAddons.wishlist_icon );
                    $( '.hongo-wishlist[ data-product_id="'+ r_id +'"] i' ).attr( 'title', '' ).attr( 'data-original-title', hongoAddons.add_to_wishlist_text );
                    _this.addClass( 'loading' );
                } else {
                    // Default layout icon , link and text change
                    $( '.hongo-wishlist[ data-product_id="'+ r_id +'"]' ).removeClass('hongo-wishlist-remove').addClass( 'hongo-wishlist-add' );
                    $( '.hongo-wishlist[ data-product_id="'+ r_id +'"]' ).find( 'span.wish-list-text' ).html( hongoAddons.add_to_wishlist_text );
                    $( '.hongo-wishlist[ data-product_id="'+ r_id +'"]' ).removeClass( 'wishlist-added' ).attr( 'href', 'javascript:void(0);' );                    
                    $( '.hongo-wishlist[ data-product_id="'+ r_id +'"] i' ).removeClass( 'fas fa-heart' );                    
                    $( '.hongo-wishlist[ data-product_id="'+ r_id +'"] i' ).addClass( hongoAddons.wishlist_icon );                    
                    $( '.hongo-wishlist[ data-product_id="'+ r_id +'"] i' ).attr( 'title', '' ).attr( 'data-original-title', hongoAddons.add_to_wishlist_text );
                }

                $.ajax({
                    type : 'POST',
                    url  : hongoAddons.ajaxurl,
                    data : {
                        'action'   : 'hongo_addons_remove_wishlist',
                        'removeid' : r_id
                    },
                    success:function( response ) {

                        // Widget Response add refresh
                        _this.removeClass( 'loading' );
                        $( '.widget-wishlist-wrap' ).html( response );
                        if( hongoAddons.wishlist_url != '' ){
                            $( '.hongo-view-wishlist' ).attr( 'href', hongoAddons.wishlist_url );
                        }

                        // Product remove Message
                        setTimeout( function(){
                            $( '.hongo-wishlist-message' ).remove();
                        },1000 );

                        // Refersh Wishlist
                        $( document ).trigger( 'hongo-wishlist-refersh' );
                    },
                });
            }
        }); 

        /* Added to cart by clicking single product add to cart button and remove from wishlist */
        $( document ).on( 'click', '.hongo-page-remove-wish, .hongo-wishlist-page .product_type_simple.single-add-to-cart', function() {

            var _this = $( this );
            var removeid = _this.attr('data-product_id');
            if( removeid != '' && removeid != undefined ) {
                _this.addClass( 'loading' );
      
                $.ajax({
                    type : 'POST',
                    url  : hongoAddons.ajaxurl,
                    data : {
                        'action'   : 'hongo_addons_page_remove_wishlist',
                        'removeids' : removeid
                    },
                    success:function( response ) {
                        _this.removeClass( 'loading' );
                        $( '.hongo-wishlist-page' ).html( response );

                        if ( _this.hasClass( 'button' ) ) {
                            $( '.hongo-wishlist-message' ).remove();
                            $( '.hongo-cart-message' ).remove();
                            $( document.body ).append( '<div class="hongo-wishlist-message alt-font"><i class="fas fa-check"></i>'+ hongoAddons.wishlist_addtocart_message +'</div>' );
                        } else {
                            $( '.hongo-wishlist-message' ).remove();
                            $( '.hongo-cart-message' ).remove();
                            $( document.body ).append( '<div class="hongo-wishlist-message alt-font"><i class="fas fa-check"></i>'+ hongoAddons.wishlist_remove_message +'</div>' );    
                        }

                        // Product remove Message
                        setTimeout( function(){
                            $( '.hongo-wishlist-message' ).remove();
                        },1000 );

                        // Refersh Wishlist
                        $( document ).trigger( 'hongo-wishlist-refersh' );
                    },
                });
            }
        });       

        /* Active checkbox for wishlist page */
        $( document ).on( 'click', '.hongo-wishlits-opt', function() {

            var _this = $( this );
            if( _this.hasClass( 'active' ) ){
                _this.removeClass( 'active' );
                $( '.hongo-all-wishlits-opt' ).removeClass( 'active' );
            } else{
                _this.addClass( 'active' );
            }
        });

	    /* Remove all selected wishlist from wishlist page */
	    $( document ).on( 'click', '.hongo-remove-wishlist-selected', function() {

            var product_ids = [];
            var $checkboxes = $( '.hongo-wishlits-opt.active' );
	        $.each( $( $checkboxes ), function(){
                var product_id = $( this ).attr( 'data-product_id' );
                if( product_id != '' && product_id != undefined ) {
                    product_ids.push( product_id );
                }
	        });
	        var remove_ids = product_ids.join(",");

            // For Error Message
            if ( remove_ids.length === 0 ) {

                $( '.hongo-wishlist-error-message' ).removeClass( 'display-none' );
                remove_error_message();
            } else{

                $(this).addClass( 'loading' );

    	        $.ajax({
    	            type : 'POST',
    	            url  : hongoAddons.ajaxurl,
    	            data : {
    	                'action'    : 'hongo_addons_page_remove_wishlist',
    	                'removeids' : remove_ids
    	            },
    	            success:function(response) {

                        $.each( $( $checkboxes ), function(){
                            var product_id = $( this ).attr( 'data-product_id' );
                            if( product_id != '' && product_id != undefined ) {
                                //Default layout icon , link and text change
                                $( '.hongo-wishlist[ data-product_id="'+ product_id +'"] span.wish-list-text' ).html( hongoAddons.add_to_wishlist_text );
                                $( '.hongo-wishlist[ data-product_id="'+ product_id +'"]' ).removeClass( 'wishlist-added' ).attr( 'href', 'javascript:void(0);' );
                                $( '.hongo-wishlist[ data-product_id="'+ product_id +'"] i' ).addClass( hongoAddons.wishlist_icon ).removeClass( 'fas fa-heart' );
                                $( '.hongo-wishlist[ data-product_id="'+ product_id +'"] i' ).attr( 'title', '' ).attr( 'data-original-title', hongoAddons.add_to_wishlist_text );
                            }
                        });
                                
                        $( '.hongo-wishlist-message' ).remove();
                        $( '.hongo-cart-message' ).remove();
                        $( document.body ).append( '<div class="hongo-wishlist-message alt-font"><i class="fas fa-check"></i>'+ hongoAddons.wishlist_multi_select_message +'</div>' );

                        $(this).removeClass( 'loading' );
                        $( '.hongo-wishlist-page' ).html( response );

                        // Product remove Message
                        setTimeout( function(){
                            $( '.hongo-wishlist-message' ).remove();
                        },1000 );

                        // Refersh Wishlist
                        $( document ).trigger( 'hongo-wishlist-refersh' );
    	            },
    	        });
            }
	    });

	    /* Empty wishlist from wishlist page */
	    $( document ).on( 'click', '.hongo-empty-wishlist', function() {

            if( confirm( hongoAddons.wishlist_empty_message ) ) {
    	        $.ajax({
    	            type : 'POST',
    	            url  : hongoAddons.ajaxurl,
    	            data : {
    	                'action': 'hongo_addons_empty_wishlist_all'
    	            },
    	            success:function( response ) {
                        // Default layout icon , link and text change                        
                        $( '.hongo-wishlist-page' ).html( response );

                        // Product remove Message
                        setTimeout( function(){
                            $( '.hongo-wishlist-message' ).remove();
                        },1000 );

                        // Refersh Wishlist
                        $( document ).trigger( 'hongo-wishlist-refersh' );
    	            },
    	        });
            }
	    });

        // Select all check box radio button
        $( document ).on( 'click', '.product-check .hongo-all-wishlits-opt', function() {
            
            var _this = $( this );
            if( _this.hasClass( 'active' ) && $( '.hongo-wishlits-opt' ).hasClass( 'active' ) ) {
                $( '.hongo-wishlits-opt' ).removeClass( 'active' );
            } else {
                $( '.hongo-wishlits-opt' ).addClass( 'active' );
            }
            
            if( _this.hasClass( 'active' ) ){
                _this.removeClass( 'active' );
            } else{
                _this.addClass( 'active' );
            }

        });

        // Refresh wishlist
        $( document ).on( 'hongo-wishlist-refersh', function() {
            $.ajax({
                type : 'POST',
                url  : hongoAddons.ajaxurl,
                data : {
                    'action': 'refresh_wishlist'
                },
                success:function( response ) {

                    // Refresh wishlist count
                    $( '.hongo-wishlist-counter' ).replaceWith( response );
                },
            });
        });
         
    }); /* Window ready event end code */

	/* Display error message in wishlist page based on time out Funstion */
    var remove_message_link = null;
    function remove_error_message() {
        remove_message_link = setTimeout(function(){
            $( '.hongo-wishlist-error-message' ).addClass( 'display-none' );
        }, 3000 );
    }

})( jQuery );