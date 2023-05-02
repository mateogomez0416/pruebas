( function( $ ) {

    "use strict";
    
    var $scroll_flag = false;

    var isMobile = false;
    var isiPhoneiPad = false;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
    }

    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        isiPhoneiPad = true;
    }

    // Window ready event start code
    $( document ).ready( function () {

        $scroll_flag = true;

        setTimeout( function() {

            hongoAddonsInitScrollNavigate();
        }, 250 );

        // photoswipe product gallery conflict with iPad safari
        if( isiPhoneiPad ) {

            $( document ).on( 'click', '.woocommerce-product-gallery__trigger, .woocommerce-product-gallery__image a', function( e ) {
                e.preventDefault();

                $( '.mega-menu-main-wrapper, .shop-mega-menu-wrapper, .simple-menu' ).addClass( 'display-none' );
            });

            $( document ).on( 'click touchstart', '.pswp__button--close', function( e ) {
                e.preventDefault();

                $( '.mega-menu-main-wrapper, .shop-mega-menu-wrapper, .simple-menu' ).removeClass( 'display-none' );
            });
        }

        // Header height adjustment
        hongoAddonsReadyResize();

        /* Full width on header sticky */
        if( $( '.full-with-on-sticky' ).length > 0 ) {

            $( 'header' ).addClass( 'full-with-header-sticky' );
        }

        if( $( '.product-search-wrap select' ).length > 0 ) {

            $( '.product-search-wrap select' ).select2({
                minimumResultsForSearch: -1,
                dropdownCssClass: "search-category-dropdown"
            });
            $( '.product-search-wrap' ).on( 'select2:open', function () {
                
                $( '.select2-results__options' ).mCustomScrollbar( 'destroy' );
                setTimeout( function() {
                    $( '.select2-results__options' ).mCustomScrollbar({
                        axis: 'y',
                        scrollInertia: 100,
                        scrollButtons:{
                            enable:false
                        },
                        keyboard:{
                            enable: true
                        },
                        mouseWheel:{
                            enable:true,
                            scrollAmount:200
                        },
                        advanced:{
                            updateOnContentResize:true, /*auto-update scrollbars on content resize (for dynamic content): boolean*/
                            autoExpandHorizontalScroll:true, /*auto-expand width for horizontal scrolling: boolean*/
                        }
                    });
                }, 5 );
            });
        }

        // With categories menu minimum height
        if( $( '.hongo-shop-dropdown-menu' ).length > 0 ) {

            var dropdown_menu_height = $( '.hongo-shop-dropdown-menu ul.navbar-nav' ).outerHeight() + 1;
            $( '.hongo-shop-dropdown-menu .shop-mega-menu-wrapper' ).css( 'min-height', dropdown_menu_height + 'px' );

            $( '.hongo-shop-dropdown-menu' )
                .mouseenter( function( e ) {

                    e.preventDefault();

                    $( this ).addClass( 'active' );
                })
                .mouseleave( function( e ) {

                    e.preventDefault();

                    $( this ).removeClass( 'active' );
                });
            $( '.hongo-shop-dropdown-menu .shop-dropdown-toggle' ).on( 'touchstart', function() {

                if( $( this ).parent().hasClass( 'active' ) ) {

                    $( this ).parent().removeClass( 'active' );
                    $( '.hongo-shop-dropdown-menu .menu li' ).removeClass( 'on' );

                } else {

                    $( this ).parent().addClass( 'active' );
                }
            });
        }

        /* Left menu sticky and accordion */
        if( $( '.hongo-left-menu-wrap' ).length > 0 ) {
            
            $( '.hongo-left-menu-wrap .hongo-left-menu-wrapper' ).on( 'show.bs.collapse', function() {
                
                 $('header').addClass('left-mobile-menu-open');

            }).on( 'hide.bs.collapse', function() {

                 $('header').removeClass('left-mobile-menu-open');
            });

            if( $.inArray( 'sticky-kit', hongoMain.disable_scripts ) < 0 ) {
                $( '.hongo-main-wrap .header-left-wrapper' ).stick_in_parent({
                    recalc : 1
                });
            }
            
            /* Left Menu Accordion */
            $( document ).on( 'click', '.hongo-left-menu-wrap li .handler', function() {
                
                setTimeout( function () {
                    $( '.hongo-main-wrap' ).trigger( 'sticky_kit:recalc' );
                }, 500);
                $(this).parent('li').toggleClass( function() {
                    $( this ).siblings().removeClass( 'on' );
                    $( this ).siblings().find('.dropdown-menu li').removeClass( 'on' );
                    $( this ).siblings().find('.dropdown-menu').slideUp();
                    $( this ).children('.dropdown-menu').slideToggle();
                    return "on";
                });
            });

            $( document ).on( 'hide.bs.collapse', function() {
                $( 'body' ).removeClass( 'hongo-body-overlay' );
                $( '.widget_shopping_cart' ).removeClass( 'open' );
                $( '.hongo-top-account-menu' ).removeClass( 'open' );
            });
            $( document ).on( 'touchstart click', '.hongo-overlay, header .header-logo-wrapper', function() {
                $( 'body' ).removeClass( 'hongo-body-overlay' );
                $( '.widget_shopping_cart' ).removeClass( 'open' );
                $( '.hongo-top-account-menu' ).removeClass( 'open' );
            });

            /* Left Menu Acoount Menu Open */
            $( document ).on( 'click', '.hongo-top-account-menu .account-menu-link', function() {
                if ( $( this ).parents( '.hongo-top-account-menu' ).hasClass( 'open' ) || ! ( $( this ).parents( '.hongo-top-account-menu' ).find( '.hongo-account-menu-wrap' ).length > 0 ) ) {
                    //$( '.hongo-overlay' ).trigger( 'click' );
                    $( 'body' ).removeClass( 'hongo-body-overlay' );
                    $( '.widget_shopping_cart' ).removeClass( 'open' );
                    $( '.hongo-top-account-menu' ).removeClass( 'open' );
                } else {
                    if ( $( '.widget_shopping_cart').hasClass( 'open' ) ) {
                        $( '.widget_shopping_cart').removeClass( 'open' );
                        $( '.hongo-top-account-menu').addClass( 'open' );
                    } else {                    
                        $( this).parents( '.hongo-top-account-menu' ).addClass( 'open' );
                        $( 'body').addClass( 'hongo-body-overlay' );
                    }
                }
            });
            
            /* Left Menu Mini Cart Open */
            $( document ).on( 'click', '.hongo-main-wrap .hongo-top-cart-wrapper', function() {
                if ($(window).width() < 768) {                    
                    window.location.replace( hongoAddons.cart_url );
                } else {
                    if ( $( this ).parents( '.widget_shopping_cart' ).hasClass( 'open' ) ) {
                        $( 'body' ).removeClass( 'hongo-body-overlay' );
                        $( '.widget_shopping_cart' ).removeClass( 'open' );
                        $( '.hongo-top-account-menu' ).removeClass( 'open' );
                    } else {
                        if ( $( '.hongo-top-account-menu').hasClass( 'open' ) ) {
                            $( '.hongo-top-account-menu').removeClass( 'open' );
                            $( '.widget_shopping_cart').addClass( 'open' );
                        } else{
                            $( this ).parents( '.widget_shopping_cart' ).addClass( 'open' );
                            $( 'body' ).addClass( 'hongo-body-overlay' );
                        }
                    }
                }
            });
        }

        /* Hamburger menu toggle */
        if( $('.hongo-hamburger-menu').length > 0 ) {
            
            $( document ).on( 'click', '.menu-hamburger-menu-wrap li .menu-dropdown-toggle', function() {

                $(this).parent('li').toggleClass( function() {
                    $( this ).siblings().removeClass( 'on' );
                    $( this ).siblings().find('.dropdown-menu li').removeClass( 'on' );
                    $( this ).siblings().find('.dropdown-menu').slideUp();
                    $( this ).children('.dropdown-menu').slideToggle();
                    return "on";
                });
            });

            /* Hamburger menu open */
            $(document).on( 'click', '.hamburger-menu-button button, .hamburger-menu-button .mobile-menu-text', function () {

                $( 'body' ).addClass( 'show-menu' );
            });

            /* Hamburger menu close */
            $(document).on( 'click', '.hongo-hamburger-menu-bg .close-button-menu', function () {

                $( 'body' ).removeClass( 'show-menu' );
                $( '.menu-hamburger-menu-wrap li' ).siblings().removeClass( 'on' );
                $( '.menu-hamburger-menu-wrap li' ).siblings().find('.dropdown-menu').slideUp();
            });
        }

        /* Header push ( Right side ) menu */
        if( $( '.header-push-menu-button button' ).length > 0 ) {

            /* Header push menu open */
            $( document ).on( 'click', '.header-push-menu-button button', function() {

                $( 'body' ).addClass( 'header-push-menu-open' );
                setTimeout( function() {

                    $( this ).addClass( 'active' );
                    $( '.cbp-spmenu' ).addClass( 'cbp-spmenu-open' );
                }, 100 );
            });

            /* Header push menu close */
            $( document ).on( 'click', '.close-button-menu', function() {

                $( '.header-push-menu-button button' ).removeClass( 'active' );
                $( '.cbp-spmenu' ).removeClass( 'cbp-spmenu-open' );
                setTimeout( function() {

                    $( 'body' ).removeClass( 'header-push-menu-open' );
                }, 100 );
            });
        }

        // Parent menu active class added on ready
        $( '.hongo-navigation-menu .menu li, .hongo-shop-dropdown-menu .menu li' ).each(function () {
            
            var _this = $( this );
            if( $( '.menu-item', _this ).hasClass( 'current-menu-item' ) ) {

                _this.addClass( 'active' );
            }
        });

        /* Menu toggle */
        $( document ).on( 'click', '.navbar-collapse [data-toggle="dropdown"]', function (event) {
            var $innerLinkLI = $(this).parents('ul.navbar-nav').find('li.dropdown.inner-link a').parent('li.dropdown');
            if (!$(this).parent().hasClass('inner-link') && !$(this).hasClass('dropdown-toggle') && $innerLinkLI.hasClass('open')) {
                $innerLinkLI.removeClass('open');
            }
            var target = $(this).attr('target');
            if ($(window).width() <= hongoAddons.menu_breakpoint && $(this).attr('href') && $(this).attr('href').indexOf("#") <= -1 && !$(event.target).is('i')) {
                if ( event.ctrlKey || event.metaKey ) {
                    window.open($(this).attr('href'), "_blank");
                    return false;
                } else if ( ! target ) {
                    window.location = $(this).attr('href');
                } else {
                    window.open($(this).attr('href'), target);
                }

            } else if ($(window).width() > hongoAddons.menu_breakpoint && $(this).attr('href') && $(this).attr('href').indexOf("#") <= -1) {
                if ( event.ctrlKey || event.metaKey ) {
                    window.open($(this).attr('href'), "_blank");
                    return false;
                } else if (!target) {
                    window.location = $(this).attr('href');
                } else {
                    window.open($(this).attr('href'), target);
                }

            } else if ($(window).width() <= hongoAddons.menu_breakpoint && $(this).attr('href') && $(this).attr('href').length > 1 && $(this).attr('href').indexOf("#") >= 0 && $(this).parent().hasClass('inner-link')) {
                $(this).parents('ul.navbar-nav').find('li.dropdown').not($(this).parent('.dropdown')).removeClass('open');
                if ($(this).parent('.dropdown').hasClass('open')) {
                    $(this).parent('.dropdown').removeClass('open');
                } else {
                    $(this).parent('.dropdown').addClass('open');
                }
                $(this).toggleClass('active');
            } else if( $(window).width() > hongoAddons.menu_breakpoint && $(window).width() <= 1199 ) {
                if ( ! $(this).parent('.dropdown').hasClass('open') ) {
                    $(this).parent('.dropdown').removeClass( 'on' );
                }
            }
        });

        /* Touchstart click */
        $( document ).on( 'touchstart click', 'body', function (e) {
            if ( $(window).width() <= hongoAddons.menu_breakpoint ) {
                if ( ! $('.navbar-collapse').has(e.target).is('.navbar-collapse') && $('.navbar-collapse').hasClass('in') && !$(e.target).hasClass('navbar-toggle') ) {
                    $('.navbar-collapse').collapse('hide');
                }
            } else {
                if ( ! $('.navbar-collapse').has(e.target).is('.navbar-collapse') && $('.navbar-collapse ul').hasClass('in')) {
                    $('.navbar-collapse').find('a.dropdown-toggle').addClass('collapsed');
                    $('.navbar-collapse').find('ul.dropdown-menu').removeClass('in');
                    $('.navbar-collapse a.dropdown-toggle').removeClass('active');
                }
            }
        });

        /* Mobile menu button click active class */
        if( $( '.hongo-navigation-main-wrapper button.toggle-mobile, .hongo-left-menu-wrap button.toggle-mobile' ).length > 0 ) {

            $( '.hongo-navigation-main-wrapper .navbar-collapse, .hongo-left-menu-wrap .hongo-left-menu-wrapper' ).on( 'show.bs.collapse', function() {
                
                $( this ).parent().children( 'button.toggle-mobile' ).addClass( 'active' );

            }).on( 'hide.bs.collapse', function() {

                $( this ).parent().children( 'button.toggle-mobile' ).removeClass( 'active' );
            });
        }
        
        /* Mini header navigation menu responsive toggle */
        $( '.mini-header-main-wrapper .wp-nav-menu-responsive-button' )
            .on( 'mouseenter', function( e ) {
                
                e.preventDefault();

                var $parent_obj = $( this ).parent().parent();
                    $parent_obj.addClass( 'active' );

                $parent_obj.children( 'div:eq(1)' ).slideDown( "300" );

            }).on( 'mouseleave', function( e ) {

                e.preventDefault();

                var $parent_obj = $( this ).parent().parent();
                    $parent_obj.removeClass( 'active' );

                $parent_obj.children( 'div:eq(1)' ).slideUp( "300" );
            });

        $( '.mini-header-main-wrapper .wp-nav-menu-responsive-button' ).on( 'touchstart', function() {

            var $parent_obj = $( this ).parent().parent();
            if( $parent_obj.hasClass( 'active' ) ) {

                $parent_obj.removeClass( 'active' );
                $parent_obj.children( 'div:eq(1)' ).slideUp( "300" );

            } else {

                $parent_obj.addClass( 'active' );
                $parent_obj.children( 'div:eq(1)' ).slideDown( "300" );
            }
        });
        
    }); // End ready event

    // Window resize event start code
    $( window ).resize( function () {

        // Header height adjustment
        hongoAddonsReadyResize();
        hongoAddonsInitScrollNavigate();

    }); // End resize event

    // Window orientationchange event start code
    $( window ).on( "orientationchange", function( event ) {

        setTimeout( function() {

            hongoAddonsInitScrollNavigate();

        }, 10 );

    }); // End orientationchange event

    // Window scroll event start code
    var lastScroll = 0;
    var menuScroll = 0;
    $( window ).on( 'scroll', hongoAddonsInitScrollNavigate );
    function hongoAddonsInitScrollNavigate( e ) {

        var scrollTopPos = $( document ).scrollTop();
        var mini_header_height = 0, top_header_height = 0, main_header_height = 0;
        var aboveHeaderHeight = 0, aboveTopPosition = 0, wpadminbarHeight = 0;
        var ts_height = 0;

        /* One Page Navigation JS */
        var menu_links = $( "header .menu li a" );
        var scrollNavPos = scrollTopPos + 61;

        menu_links.each(function () {
            var currLink = $(this);
            var hasPos  = currLink.attr("href").indexOf("#");
            if( hasPos > -1 ) {
                var res = currLink.attr("href").substring( hasPos );
                if ( res != '' && res != '#' && $( res ).length > 0 ) {
                    var refElement = $( res );
                    if (refElement.offset().top <= scrollNavPos && refElement.offset().top + refElement.height() > scrollNavPos) {
                        menu_links.not( currLink ).removeClass("active");
                        currLink.addClass("active");
                    } else if( $( 'header .menu li a.active' ).length > 1 ) {
                        currLink.removeClass("active");
                    }
                }
            }
        });

        // Hide dropdown menu on scroll
        if( scrollNavPos >= 200 ) {
            
            $( '.header-push-menu-button button' ).removeClass( 'active' );
            $( '.cbp-spmenu' ).removeClass( 'cbp-spmenu-open' );
            setTimeout( function() {

                $( 'body' ).removeClass( 'header-push-menu-open' );
            }, 100 );

            if( ! ( $( '.hongo-navigation-main-wrapper .navbar-toggle' ).hasClass( 'collapsed' ) ) ) {

                $( '.hongo-navigation-main-wrapper .navbar-toggle' ).addClass( 'collapsed' );
            }
            if( $( '.hongo-navigation-main-wrapper .navbar-collapse.collapse' ).hasClass( 'in' ) ) {

                $( '.hongo-navigation-main-wrapper .navbar-collapse.collapse' ).removeClass( 'in' );
            }
            $( '.hongo-navigation-main-wrapper button.toggle-mobile' ).removeClass( 'active' );
        }

        setTimeout( function() { // Required for iPad safari

            if( scrollTopPos > 0 || $scroll_flag ) {

                if( $( '.admin-bar #wpadminbar' ).length > 0 ) {

                    wpadminbarHeight = $( '.admin-bar #wpadminbar' ).outerHeight();
                    wpadminbarHeight = Math.round( wpadminbarHeight );
                }

                /* Mini Header */
                if( $( '.mini-header-main-wrapper' ).length > 0 ) {
                    
                    var miniHeaderObj = $( '.mini-header-main-wrapper' );
                    mini_header_height = miniHeaderObj.outerHeight();
                    ts_height = ts_height + mini_header_height;
                }

                /* Header top wrapper*/
                if( $( '.top-header-main-wrapper' ).length > 0 ) {

                    var topHeaderObj = $( '.top-header-main-wrapper' );
                    top_header_height = topHeaderObj.outerHeight();
                    ts_height = ts_height + top_header_height;
                }

                /* Header main */
                if( $( '.header-main-wrapper' ).length > 0 ) {

                    var mainHeaderObj = $( '.header-main-wrapper' );
                    main_header_height = mainHeaderObj.outerHeight();
                    ts_height = ts_height + main_header_height;
                }

                var headerAppearFlag = false;
                if( scrollTopPos > ts_height ) { // Scroll position is greater than header height

                    headerAppearFlag = true;
                }

                /* Mini Header */
                if( $( '.mini-header-main-wrapper' ).length > 0 ) {

                    var miniHeaderObj = $( '.mini-header-main-wrapper' );
                    mini_header_height = miniHeaderObj.outerHeight();
                    mini_header_height = Math.round( mini_header_height );

                        miniHeaderObj.css( 'margin-top', '0px' );

                    if( miniHeaderObj.hasClass( 'appear-up-scroll' ) ) {

                        if( scrollTopPos < lastScroll ) {
                         
                            if( headerAppearFlag ) {

                                aboveHeaderHeight = aboveHeaderHeight + mini_header_height;
                            }
                            miniHeaderObj.addClass( 'sticky-appear' );
                            miniHeaderObj.css( 'top', wpadminbarHeight + 'px' );

                        } else if( scrollTopPos > lastScroll ) {

                            if( headerAppearFlag ) {

                                var positionTop = mini_header_height + 1;
                                if( $( '.header-main-wrapper' ).length > 0 && ! mainHeaderObj.hasClass( 'appear-down-scroll' ) ) {
                                    positionTop = positionTop + main_header_height;
                                }
                                if( $( '.top-header-main-wrapper' ).length > 0 && ! topHeaderObj.hasClass( 'appear-down-scroll' ) ) {
                                    positionTop = positionTop + top_header_height;
                                }
                                miniHeaderObj.css( 'top', '-' + ( positionTop ) + 'px' );
                            }
                            miniHeaderObj.removeClass( 'sticky-appear' ); // I have commented because its create issue in mobile
                        }

                    } else if( miniHeaderObj.hasClass( 'appear-down-scroll' ) ) {

                        if( headerAppearFlag ) {

                            aboveHeaderHeight = aboveHeaderHeight + mini_header_height;
                            miniHeaderObj.addClass( 'sticky-appear' );
                        }

                    } else {

                        if( scrollTopPos < lastScroll ) { // Back scroll
                        
                            if( ! headerAppearFlag ) { // Header is not sticky

                                miniHeaderObj.css( 'top', wpadminbarHeight + 'px' );

                            } else { // Header is sticky

                                var positionTop = wpadminbarHeight + mini_header_height + 1;
                                if( $( '.header-main-wrapper' ).length > 0 && ! ( mainHeaderObj.hasClass( 'appear-down-scroll' ) || mainHeaderObj.hasClass( 'appear-up-scroll' ) ) ) {
                                    positionTop = positionTop + main_header_height;
                                }
                                if( $( '.top-header-main-wrapper' ).length > 0 && ! ( topHeaderObj.hasClass( 'appear-down-scroll' ) || topHeaderObj.hasClass( 'appear-up-scroll' ) ) ) {
                                    positionTop = positionTop + top_header_height;
                                }
                                miniHeaderObj.css( 'top', '-' + ( positionTop ) + 'px' );
                            }

                        } else if( scrollTopPos > lastScroll ) {

                            if( headerAppearFlag ) { // Header is sticky

                                var positionTop = mini_header_height + 1;
                                if( $( '.header-main-wrapper' ).length > 0 && ! mainHeaderObj.hasClass( 'appear-down-scroll' ) ) {
                                    positionTop = positionTop + main_header_height;
                                }
                                if( $( '.top-header-main-wrapper' ).length > 0 && ! topHeaderObj.hasClass( 'appear-down-scroll' ) ) {
                                    positionTop = positionTop + top_header_height;
                                }
                                miniHeaderObj.css( 'top', '-' + ( positionTop ) + 'px' );
                            }
                        }
                    }
                }

                /* Header top wrapper*/
                if( $( '.top-header-main-wrapper' ).length > 0 ) {

                    var topHeaderObj = $( '.top-header-main-wrapper' );
                    top_header_height = topHeaderObj.outerHeight();
                    top_header_height = Math.round( top_header_height );

                    if( headerAppearFlag && scrollTopPos > 0 ) {

                        topHeaderObj.css( 'margin-top', ( aboveHeaderHeight ) + 'px' );

                    } else {

                        topHeaderObj.css( 'margin-top', ( mini_header_height ) + 'px' );
                    }

                    if( topHeaderObj.hasClass( 'appear-up-scroll' ) ) {

                        if( scrollTopPos < lastScroll ) {
                            
                            if( headerAppearFlag ) {

                                aboveHeaderHeight = aboveHeaderHeight + top_header_height;
                            }
                            topHeaderObj.addClass( 'sticky-appear' );
                            topHeaderObj.css( 'top', wpadminbarHeight + 'px' );

                        } else if( scrollTopPos > lastScroll ) {

                            if( headerAppearFlag ) {
                                
                                var positionTop = top_header_height + 1;
                                if( $( '.header-main-wrapper' ).length > 0 && ! mainHeaderObj.hasClass( 'appear-down-scroll' ) ) {
                                    positionTop = positionTop + main_header_height;
                                }
                                topHeaderObj.css( 'top', '-' + ( positionTop ) + 'px' );
                            }
                            topHeaderObj.removeClass( 'sticky-appear' ); // I have commented because its create issue in mobile
                        }

                    } else if( topHeaderObj.hasClass( 'appear-down-scroll' ) ) {

                        if( headerAppearFlag ) {
                            
                            aboveHeaderHeight = aboveHeaderHeight + top_header_height;
                            topHeaderObj.addClass( 'sticky-appear' );
                        }

                    } else {

                        if( scrollTopPos < lastScroll ) {
                         
                            if( ! headerAppearFlag ) {

                                topHeaderObj.css( 'top', wpadminbarHeight + 'px' );

                            } else {

                                var positionTop = wpadminbarHeight + top_header_height + 1;
                                if( $( '.header-main-wrapper' ).length > 0 && ! ( mainHeaderObj.hasClass( 'appear-down-scroll' ) || mainHeaderObj.hasClass( 'appear-up-scroll' ) ) ) {
                                    positionTop = positionTop + main_header_height;
                                }
                                topHeaderObj.css( 'top', '-' + ( positionTop ) + 'px' );
                            }

                        } else if( scrollTopPos > lastScroll ) {

                            if( headerAppearFlag ) {

                                var positionTop = top_header_height + 1;
                                if( $( '.header-main-wrapper' ).length > 0 && ! mainHeaderObj.hasClass( 'appear-down-scroll' ) ) {
                                    positionTop = positionTop + main_header_height;
                                }
                                topHeaderObj.css( 'top', '-' + ( positionTop ) + 'px' );
                            }
                        }
                    }
                }

                /* Header main */
                if( $( '.header-main-wrapper' ).length > 0 ) {

                    var mainHeaderObj = $( '.header-main-wrapper' );
                    main_header_height = mainHeaderObj.outerHeight();
                    main_header_height = Math.round( main_header_height );

                    if( headerAppearFlag && scrollTopPos > 0 ) {

                        mainHeaderObj.css( 'margin-top', ( aboveHeaderHeight ) + 'px' );

                    } else {

                        mainHeaderObj.css( 'margin-top', ( mini_header_height + top_header_height ) + 'px' );
                    }

                    if( mainHeaderObj.hasClass( 'appear-up-scroll' ) ) {

                        if( scrollTopPos < lastScroll ) { // Back scroll
                            if( headerAppearFlag ) {

                                aboveHeaderHeight = aboveHeaderHeight + main_header_height;
                            }
                            mainHeaderObj.addClass( 'sticky-appear' );
                            mainHeaderObj.css( 'top', wpadminbarHeight + 'px' );

                        } else if( scrollTopPos > lastScroll ) {
                            if( headerAppearFlag ) {
                              
                                var positionTop = main_header_height + 1;
                                mainHeaderObj.css( 'top', '-' + ( positionTop ) + 'px' );
                            }
                            mainHeaderObj.removeClass( 'sticky-appear' ); // I have commented because its create issue in mobile
                        }

                    } else if( mainHeaderObj.hasClass( 'appear-down-scroll' ) ) {

                        if( headerAppearFlag ) {
                            
                            aboveHeaderHeight = aboveHeaderHeight + main_header_height;
                            mainHeaderObj.addClass( 'sticky-appear' );
                        }

                    } else {

                        if( scrollTopPos < lastScroll ) {
                         
                            if( ! headerAppearFlag ) {

                                mainHeaderObj.css( 'top', wpadminbarHeight + 'px' );

                            }

                        } else if( scrollTopPos > lastScroll ) {

                            if( headerAppearFlag ) {

                                var positionTop = main_header_height + 1;
                                mainHeaderObj.css( 'top', '-' + ( positionTop ) + 'px' );
                            }
                        }
                    }
                }

                if( scrollTopPos > ts_height ) {

                    $( 'header.site-header:not( .hongo-main-wrap header )' ).addClass( 'header-sticky' );

                } else {
                    
                    $( 'header:not( .hongo-main-wrap header )' ).removeClass( 'header-sticky' );
                    $( '.mini-header-main-wrapper, .top-header-main-wrapper, .header-main-wrapper' ).removeClass( 'sticky-appear' );
                }

                lastScroll = scrollTopPos;
                if( lastScroll <= 0 ) {

                    $( 'header:not( .hongo-main-wrap header )' ).removeClass( 'header-sticky' );
                    $( '.mini-header-main-wrapper, .top-header-main-wrapper, .header-main-wrapper' ).removeClass( 'sticky-appear' );
                }
            }
        }, 100 ); // Required for iPad safari
    }

    // Header height adjustment
    function hongoAddonsReadyResize() {

        // Main navigation dynamic height
        if( $( window ).width() > hongoAddons.menu_breakpoint ) {

            // Center logo with secondary menu
            if( $( '.header-main-wrapper .hongo-navigation-main-wrapper' ).length > 1 ) {
                $( '.header-main-wrapper .hongo-navigation-main-wrapper' ).each( function( index, value ) {

                    if( index == 0 ) {

                        $( '.hongo-navigation-menu', this ).find( '.hongo-mobile-secondary-menu' ).remove();
                        $( '.hongo-desktop-secondary-menu-wrap' ).show();
                    }
                } );
            }

            // One page navigation on class for line
            $( '.hongo-navigation-menu .menu li.inner-link' )
                .on( 'mouseenter', function( e ) {

                    var _this = $( this );
                        _this.addClass( 'on' );
                        _this.siblings( '.on' ).removeClass( 'on' );

                })
                .on( 'mouseleave', function( e ) {
                    $( this ).removeClass( 'on' );
                });

            // Mega Menu Height code
            $( '.hongo-navigation-menu .menu li:not(.inner-link), .hongo-shop-dropdown-menu .menu li' )
                .on( 'mouseenter', function( e ) {

                    var _this = $( this );
                        _this.addClass( 'on' );
                        _this.siblings( '.on' ).removeClass( 'on' );
                        
                    var windowHeight = $( window ).height();
                        windowHeight = parseInt( windowHeight );

                    var dropdown_menu_height = $( '.hongo-shop-dropdown-menu ul.navbar-nav' ).outerHeight() + 1;
                    $( '.hongo-shop-dropdown-menu .shop-mega-menu-wrapper' ).css( 'min-height', dropdown_menu_height + 'px' );

                    if( $( '.mega-menu-main-wrapper .container', _this ).length > 0 ) { // Mega menu

                        var sub_menu_height = _this.find( '.mega-menu-main-wrapper .container' ).outerHeight();
                            sub_menu_height = parseInt( sub_menu_height );

                        if( sub_menu_height > ( windowHeight - 140 ) ) {

                            _this.children( '.mega-menu-main-wrapper' ).addClass( 'overflow-y' ).height( ( windowHeight - 140 ) ).show();

                        } else {

                            _this.children( '.mega-menu-main-wrapper' ).removeClass( 'overflow-y' ).height( sub_menu_height ).show();
                        }

                    } else if( $( '.sub-menu', _this ).length > 0 && _this.hasClass( 'dropdown' ) ) { // Simple menu

                        var sub_menu_height = $( '.simple-menu .sub-menu', _this ).outerHeight();
                            sub_menu_height = parseInt( sub_menu_height );

                        if( sub_menu_height > ( windowHeight - 140 ) ) {

                            _this.children( '.mega-menu-main-wrapper' ).addClass( 'overflow-y' ).height( ( windowHeight - 140 ) ).show();

                        } else {

                            _this.children( '.mega-menu-main-wrapper' ).removeClass( 'overflow-y' ).height( sub_menu_height ).show();
                        }
                    }

                })
                .on( 'mouseleave', function( e ) {

                    $( this ).children( '.mega-menu-main-wrapper' ).height(0);
                    $( this ).removeClass( 'on' );
                });

                if( isiPhoneiPad ) {
                    $( 'section:not( header section )' ).on( 'click', function() {

                        // This event trigger for close megamenu so menu mouseleave event has triggered
                    });
                }

            // Simple Menu Height
            $( '.hongo-navigation-menu .menu li.simple-dropdown:not(.inner-link)' )
                .on( 'mouseenter', function( e ) {

                    var _this = $( this );

                    var windowHeight = $( window ).height();
                        windowHeight = parseInt( windowHeight );

                    var sub_menu_height = _this.find( '.sub-menu' ).outerHeight();
                        sub_menu_height = parseInt( sub_menu_height );

                    if( sub_menu_height > ( windowHeight - 100 ) ) {

                        _this.children( '.menu-wrap-div' ).addClass( 'overflow-y' ).height( ( windowHeight - 100 ) ).show();

                    } else {

                        _this.children( '.menu-wrap-div' ).removeClass( 'overflow-y' ).height( sub_menu_height ).show();
                    }

                    setTimeout( function() {
                        _this.addClass( 'simple-menu-open' );
                    }, 500 );
                })
                .on( 'mouseleave', function( e ) {

                    $( this ).children( '.menu-wrap-div' ).height(0);
                    $( this ).removeClass('on').removeClass( 'simple-menu-open' );
                });

            $( '.hongo-navigation-menu .menu li a, .hongo-shop-dropdown-menu .menu li a, .hongo-navigation-menu .menu li.simple-dropdown a' ).on( 'click', function() {

                if( $( '.menu-wrap-div', $( this ).parent() ).length > 0 ) {

                    return true;
                }
            });

            $( '.hongo-navigation-menu .menu li.simple-dropdown:not(.inner-link) .dropdown-toggle, .hongo-navigation-menu .menu li:not(.inner-link) .dropdown-toggle, .hongo-shop-dropdown-menu .menu li .dropdown-toggle' ).on( 'touchstart', function() {
                $( this ).parents( 'li' ).trigger( 'mouseenter' );
            });

            // Display inline block for with categories menu above breakpoint
            $( '.hongo-navigation-tab-wrap .hongo-tab.panel' ).css( 'display', 'inline-block' );

        } else {

            $( '.mega-menu-main-wrapper' ).removeClass( 'overflow-y' )

            // Center logo with secondary menu
            var centerLogoMenusObj = $( '.header-main-wrapper .hongo-navigation-main-wrapper:not( .hongo-navigation-main-wrapper .hongo-navigation-main-wrapper )' );
            if( centerLogoMenusObj.length > 1 && ! ( $( '.hongo-mobile-secondary-menu' ).length > 0 ) ) {
                centerLogoMenusObj.each( function( index, value ) {

                    if( index == 0 && $( this ).parents( 'section' ).find( '.hongo-navigation-main-wrapper' ).length > 1 ) {

                        var secondary_menu_obj = centerLogoMenusObj.eq( 1 ).find( '.hongo-navigation-menu' ),
                            secondary_menu_html = secondary_menu_obj.html();
                        $( '.hongo-navigation-menu:not( .hongo-navigation-main-wrapper .hongo-navigation-main-wrapper .hongo-navigation-menu )', this ).find( '.hongo-mobile-secondary-menu' ).remove();
                        $( '.hongo-navigation-menu:not( .hongo-navigation-main-wrapper .hongo-navigation-main-wrapper .hongo-navigation-menu )', this ).append( secondary_menu_html );
                        $( '.hongo-navigation-menu:not( .hongo-navigation-main-wrapper .hongo-navigation-main-wrapper .hongo-navigation-menu )', this ).children( '.hongo-menu-wrap:eq(1)' ).addClass( 'hongo-mobile-secondary-menu' );
                        secondary_menu_obj.parents( '.hongo-navigation-main-wrapper' ).addClass( 'hongo-desktop-secondary-menu-wrap' ).hide();
                    }
                } );
            }

            if( $( '.mega-menu-main-wrapper' ).parent().hasClass( 'on' ) ) {

                $( '.mega-menu-main-wrapper' ).height( 'auto' );
            }
            $( '.hongo-navigation-menu .menu li, .hongo-shop-dropdown-menu .menu li' ).removeClass( 'on' );

        }

        setTimeout( function() {

            var ts_height = hongoAddonsGetTopSpaceHeight();

            // For full screen
            $( ".full-screen" ).each( function() {

                var element = $( this );
                element.parents('section').imagesLoaded( function () {
                    var minheight = $( window ).height();
                    if( element.parents('section').hasClass( 'top-space' ) || element.parents('section').hasClass( 'top-space-padding' ) ) {
                        minheight = minheight - ts_height;
                    }
                    element.children( '.vc_column-inner' ).css( 'min-height', minheight );
                    element.css( 'min-height', minheight );
                });
            });

            // For slider full screen
            $( ".slider-full-screen" ).each( function() {

                var element = $( this );
                element.parents('section').imagesLoaded( function () {
                    var height = $( window ).height();
                    if( element.parents('section').hasClass( 'top-space' ) || element.parents('section').hasClass( 'top-space-padding' ) ) {
                        height = height - ts_height;
                    }
                    element.css( 'height', height );
                });
            });

            var adminBarHeight = 0;
            if( $('.admin-bar').length > 0 ) {
                adminBarHeight = 32;
            }
            var smoothHeaderHeight = adminBarHeight;
            if( $( '.appear-down-scroll' ).length && $('.navbar').length ) {
                smoothHeaderHeight = smoothHeaderHeight + $('.navbar').outerHeight();
            }

            if( $.inArray( 'smooth-scroll', hongoAddons.disable_scripts ) < 0 ) {
                $('.inner-link a').smoothScroll({
                    speed: 900,
                    offset: -( smoothHeaderHeight - 10 ),
                    beforeScroll: function() { $( '#close-button' ).trigger( 'click' ); }
                });
            }

        }, 10 );
            
        // Footer sticky
        if( $( '.footer-sticky' ).length > 0 ) {
            // Added class into body while footer sticky is exist
            $( 'body' ).addClass( 'hongo-contain-footer-sticky' );

            var ua = window.navigator.userAgent;
            var msie = ua.indexOf("MSIE ");
            var msEdge = ua.indexOf("Edge/");
            var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

            if ( is_safari ) {
                $(window).scroll(function() {
                    $('footer').css('z-index', '-1');
                    clearTimeout($.data(this, 'scrollTimer'));
                    $.data(this, 'scrollTimer', setTimeout(function() {
                        $('footer').css('z-index', '0');
                    }, 250));
                });
            }
            $( '.footer-sticky' ).prev().addClass( 'footer-sticky-content' );
            if ( msEdge > 0 || msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) { // If Internet Explorer, return version number // is_safari || 
                setTimeout( function() {
                    
                    var footer_height = $( '.footer-sticky' ).outerHeight() - 1;
                    if ( $(window).width() > 1024 ) {

                        $( '.footer-sticky-content' ).css( 'margin-bottom', footer_height + 'px' );
                    } else {
                        $( '.footer-sticky-content' ).css( 'margin-bottom', '0px' );
                    }
                
                }, 10 );
            }
        }
    }

    // Get top space height
    function hongoAddonsGetTopSpaceHeight() {

        var wp_adminbar_height = 0, default_header_height = 0, mini_header_height = 0, top_header_height = 0, main_header_height = 0, mini_header_ts_height = 0, top_header_ts_height = 0, main_header_ts_height = 0, ts_height = 0;
        if( $( '.mini-header-main-wrapper' ).length > 0 ) {

            mini_header_height = $( '.mini-header-main-wrapper' ).outerHeight();

            top_header_ts_height = top_header_ts_height + mini_header_height;
            main_header_ts_height = main_header_ts_height + mini_header_height;
            ts_height = ts_height + mini_header_height;
        }
        if( $( '.top-header-main-wrapper' ).length > 0 ) {

            top_header_height = $( '.top-header-main-wrapper' ).outerHeight();

            main_header_ts_height = main_header_ts_height + top_header_height;
            ts_height = ts_height + top_header_height;
        }
        if( $( '.header-main-wrapper' ).length > 0 ) {

            main_header_height = $( '.header-main-wrapper' ).outerHeight();

            ts_height = ts_height + main_header_height;
        }

        if( ! ( $( '.header-default-wrapper' ).length > 0 ) ) {

            $( 'header.site-header:not( .hongo-main-wrap header )' ).height( ts_height + 'px' );

        } else {

            default_header_height = $( '.header-default-wrapper' ).outerHeight();

            ts_height = ts_height + default_header_height;
        }

        $( '.top-space' ).css( 'margin-top', ts_height + 'px' );
        if( $( '.hongo-main-title-wrap' ).length > 0 && $( '.top-space-padding' ).length > 0 ) {
            var padding_top = $( '.hongo-main-title-wrap' ).attr( 'data-padding-top' );
            if( padding_top == '' || padding_top == undefined ) {
                padding_top = $( '.hongo-main-title-wrap' ).css('padding-top');
                $( '.hongo-main-title-wrap' ).attr( 'data-padding-top', padding_top );
            }
            ts_height =  parseInt( ts_height ) + parseInt( padding_top );
            $( '.top-space-padding' ).css( 'padding-top', ts_height + 'px' );
        }

        return ts_height;
    }

    /* Overwrite VC full height */
    $( document ).on( 'vc-full-height-row', function( e ) {

        var $element = $( ".vc_row-o-full-height:first" );

        var mini_header_height = 0, top_header_height = 0, main_header_height = 0, default_header_height = 0, ts_height = 0;
        if( $( '.mini-header-main-wrapper' ).length > 0 ) {

            mini_header_height = $( '.mini-header-main-wrapper' ).outerHeight();
            ts_height = ts_height + mini_header_height;
        }
        if( $( '.top-header-main-wrapper' ).length > 0 ) {

            top_header_height = $( '.top-header-main-wrapper' ).outerHeight();
            ts_height = ts_height + top_header_height;
        }
        if( $( '.header-main-wrapper' ).length > 0 ) {

            main_header_height = $( '.header-main-wrapper' ).outerHeight();
            ts_height = ts_height + main_header_height;
        }

        if( $( '.header-default-wrapper' ).length > 0 ) {

            default_header_height = $( '.header-default-wrapper' ).outerHeight();
            ts_height = ts_height + default_header_height;
        }

        if( $( '.hongo-main-title-wrap' ).length > 0 && $( '.top-space-padding' ).length > 0 ) {
            var padding_top = $( '.hongo-main-title-wrap' ).attr( 'data-padding-top' );
            if( padding_top == '' || padding_top == undefined ) {
                padding_top = $( '.hongo-main-title-wrap' ).css('padding-top');
            }
            ts_height =  parseInt( ts_height ) + parseInt( padding_top );
        }

        if( $element.length ) {

            var windowHeight = ( $( window ).height() );

            if( $element.hasClass( 'top-space' ) || $element.hasClass( 'top-space-padding' ) ) {
                windowHeight = windowHeight - ts_height;
            }

            if( windowHeight ) {
                $element.css( "min-height", windowHeight + "px" );
            }
        }
    });

    /* Overwrite VC full width row */
    $( document ).on( 'vc-full-width-row', function( e ) {

        var $elements = $( '[data-vc-full-width="true"]' );
        $.each($elements, function(key, item) {
            var $el = $(this);
            $el.addClass("vc_hidden");
            var $el_full = $el.next(".vc_row-full-width");
            if ($el_full.length || ($el_full = $el.parent().next(".vc_row-full-width")), $el_full.length) {
                var padding, paddingRight, el_margin_left = parseInt($el.css("margin-left"), 10),
                    el_margin_right = parseInt($el.css("margin-right"), 10),
                    offset = 0 - $el_full.offset().left - el_margin_left,
                    width = $(window).width();

                    /* Box layout strach row code start */
                    if( $( '.box-layout' ).length > 0 ) {

                        var boxLayoutWidth = $( '.box-layout' ).width();
                        var boxWidth = ( width - boxLayoutWidth ) / 2;

                        offset = offset + boxWidth;
                        width  = width - ( boxWidth * 2 );
                    }
                    /* Box layout strach row code end */

                    /* Let menu strach row code start */
                    if( $( '.hongo-main-site-content' ).length > 0 ) {

                        var leftHeaderWidth = $( '.header-left-wrapper' ).width();
                        var leftMenuLayoutWidth = $( '.hongo-main-site-content' ).width();

                        if( $(window).width() > 991 ) {

                            offset = offset + leftHeaderWidth;
                        }
                        width  = leftMenuLayoutWidth;
                    }
                    /* Let menu strach row code end */

                    if ("rtl" === $el.css("direction") && (offset -= $el_full.width(), offset += width, offset += el_margin_left, offset += el_margin_right), $el.css({
                            position: "relative",
                            left: offset,
                            "box-sizing": "border-box",
                            width: width
                        }), !$el.data("vcStretchContent")) "rtl" === $el.css("direction") ? ((padding = offset) < 0 && (padding = 0), (paddingRight = offset) < 0 && (paddingRight = 0)) : ((padding = -1 * offset) < 0 && (padding = 0), (paddingRight = width - padding - $el_full.width() + el_margin_left + el_margin_right) < 0 && (paddingRight = 0)), $el.css({
                        "padding-left": padding + "px",
                        "padding-right": paddingRight + "px"
                    });
                    $el.attr("data-vc-full-width-init", "true"), $el.removeClass("vc_hidden"), $(document).trigger("vc-full-width-row-single", {
                        el: $el,
                        offset: offset,
                        marginLeft: el_margin_left,
                        marginRight: el_margin_right,
                        elFull: $el_full,
                        width: width
                    });
            }
        });
    });

})( jQuery );