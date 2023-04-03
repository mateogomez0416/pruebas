(function(require){
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    waitSeconds: 0,
    map: {
        '*': {
            'ko': 'knockoutjs/knockout',
            'knockout': 'knockoutjs/knockout',
            'mageUtils': 'mage/utils/main',
            'rjsResolver': 'mage/requirejs/resolver'
        }
    },
    shim: {
        'jquery/jquery-migrate': ['jquery'],
        'jquery/jstree/jquery.hotkeys': ['jquery'],
        'jquery/hover-intent': ['jquery'],
        'mage/adminhtml/backup': ['prototype'],
        'mage/captcha': ['prototype'],
        'mage/new-gallery': ['jquery'],
        'mage/webapi': ['jquery'],
        'jquery/ui': ['jquery'],
        'MutationObserver': ['es6-collections'],
        'matchMedia': {
            'exports': 'mediaCheck'
        },
        'magnifier/magnifier': ['jquery']
    },
    paths: {
        'jquery/validate': 'jquery/jquery.validate',
        'jquery/hover-intent': 'jquery/jquery.hoverIntent',
        'jquery/file-uploader': 'jquery/fileUploader/jquery.fileuploader',
        'prototype': 'legacy-build.min',
        'jquery/jquery-storageapi': 'jquery/jquery.storageapi.min',
        'text': 'mage/requirejs/text',
        'domReady': 'requirejs/domReady',
        'spectrum': 'jquery/spectrum/spectrum',
        'tinycolor': 'jquery/spectrum/tinycolor',
        'jquery-ui-modules': 'jquery/ui-modules'
    },
    deps: [
        'jquery/jquery-migrate'
    ],
    config: {
        mixins: {
            'jquery/jstree/jquery.jstree': {
                'mage/backend/jstree-mixin': true
            },
            'jquery': {
                'jquery/patches/jquery': true
            }
        },
        text: {
            'headers': {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }
    }
};

require(['jquery'], function ($) {
    'use strict';

    $.noConflict();
});

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            'rowBuilder':             'Magento_Theme/js/row-builder',
            'toggleAdvanced':         'mage/toggle',
            'translateInline':        'mage/translate-inline',
            'sticky':                 'mage/sticky',
            'tabs':                   'mage/tabs',
            'zoom':                   'mage/zoom',
            'collapsible':            'mage/collapsible',
            'dropdownDialog':         'mage/dropdown',
            'dropdown':               'mage/dropdowns',
            'accordion':              'mage/accordion',
            'loader':                 'mage/loader',
            'tooltip':                'mage/tooltip',
            'deletableItem':          'mage/deletable-item',
            'itemTable':              'mage/item-table',
            'fieldsetControls':       'mage/fieldset-controls',
            'fieldsetResetControl':   'mage/fieldset-controls',
            'redirectUrl':            'mage/redirect-url',
            'loaderAjax':             'mage/loader',
            'menu':                   'mage/menu',
            'popupWindow':            'mage/popup-window',
            'validation':             'mage/validation/validation',
            'breadcrumbs':            'Magento_Theme/js/view/breadcrumbs',
            'jquery/ui':              'jquery/compat',
            'cookieStatus':           'Magento_Theme/js/cookie-status'
        }
    },
    deps: [
        'jquery/jquery.mobile.custom',
        'mage/common',
        'mage/dataPost',
        'mage/bootstrap'
    ],
    config: {
        mixins: {
            'Magento_Theme/js/view/breadcrumbs': {
                'Magento_Theme/js/view/add-home-breadcrumb': true
            },
            'jquery/ui-modules/dialog': {
                'jquery/patches/jquery-ui': true
            }
        }
    }
};

/* eslint-disable max-depth */
/**
 * Adds polyfills only for browser contexts which prevents bundlers from including them.
 */
if (typeof window !== 'undefined' && window.document) {
    /**
     * Polyfill localStorage and sessionStorage for browsers that do not support them.
     */
    try {
        if (!window.localStorage || !window.sessionStorage) {
            throw new Error();
        }

        localStorage.setItem('storage_test', 1);
        localStorage.removeItem('storage_test');
    } catch (e) {
        config.deps.push('mage/polyfill');
    }
}
/* eslint-enable max-depth */

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            checkoutBalance:    'Magento_Customer/js/checkout-balance',
            address:            'Magento_Customer/js/address',
            changeEmailPassword: 'Magento_Customer/js/change-email-password',
            passwordStrengthIndicator: 'Magento_Customer/js/password-strength-indicator',
            zxcvbn: 'Magento_Customer/js/zxcvbn',
            addressValidation: 'Magento_Customer/js/addressValidation',
            'Magento_Customer/address': 'Magento_Customer/js/address',
            'Magento_Customer/change-email-password': 'Magento_Customer/js/change-email-password'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            priceBox:             'Magento_Catalog/js/price-box',
            priceOptionDate:      'Magento_Catalog/js/price-option-date',
            priceOptionFile:      'Magento_Catalog/js/price-option-file',
            priceOptions:         'Magento_Catalog/js/price-options',
            priceUtils:           'Magento_Catalog/js/price-utils'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            compareList:            'Magento_Catalog/js/list',
            relatedProducts:        'Magento_Catalog/js/related-products',
            upsellProducts:         'Magento_Catalog/js/upsell-products',
            productListToolbarForm: 'Magento_Catalog/js/product/list/toolbar',
            catalogGallery:         'Magento_Catalog/js/gallery',
            catalogAddToCart:       'Magento_Catalog/js/catalog-add-to-cart'
        }
    },
    config: {
        mixins: {
            'Magento_Theme/js/view/breadcrumbs': {
                'Magento_Catalog/js/product/breadcrumbs': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            creditCardType: 'Magento_Payment/js/cc-type',
            'Magento_Payment/cc-type': 'Magento_Payment/js/cc-type'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            bundleOption:   'Magento_Bundle/bundle',
            priceBundle:    'Magento_Bundle/js/price-bundle',
            slide:          'Magento_Bundle/js/slide',
            productSummary: 'Magento_Bundle/js/product-summary'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            giftMessage:    'Magento_Sales/js/gift-message',
            ordersReturns:  'Magento_Sales/js/orders-returns',
            'Magento_Sales/gift-message':    'Magento_Sales/js/gift-message',
            'Magento_Sales/orders-returns':  'Magento_Sales/js/orders-returns'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            escaper: 'Magento_Security/js/escaper'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            quickSearch: 'Magento_Search/js/form-mini',
            'Magento_Search/form-mini': 'Magento_Search/js/form-mini'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            discountCode:           'Magento_Checkout/js/discount-codes',
            shoppingCart:           'Magento_Checkout/js/shopping-cart',
            regionUpdater:          'Magento_Checkout/js/region-updater',
            sidebar:                'Magento_Checkout/js/sidebar',
            checkoutLoader:         'Magento_Checkout/js/checkout-loader',
            checkoutData:           'Magento_Checkout/js/checkout-data',
            proceedToCheckout:      'Magento_Checkout/js/proceed-to-checkout',
            catalogAddToCart:       'Magento_Catalog/js/catalog-add-to-cart'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            fileElement: 'Magento_CustomerCustomAttributes/file-element'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            addToCart: 'Magento_Msrp/js/msrp'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/action/select-payment-method': {
                'Magento_SalesRule/js/action/select-payment-method-mixin': true
            },
            'Magento_Checkout/js/model/shipping-save-processor': {
                'Magento_SalesRule/js/model/shipping-save-processor-mixin': true
            },
            'Magento_Checkout/js/action/place-order': {
                'Magento_SalesRule/js/model/place-order-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            captcha: 'Magento_Captcha/js/captcha',
            'Magento_Captcha/captcha': 'Magento_Captcha/js/captcha'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            downloadable: 'Magento_Downloadable/js/downloadable',
            'Magento_Downloadable/downloadable': 'Magento_Downloadable/js/downloadable'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    deps: [],
    shim: {
        'chartjs/Chart.min': ['moment'],
        'tiny_mce_4/tinymce.min': {
            exports: 'tinyMCE'
        }
    },
    paths: {
        'ui/template': 'Magento_Ui/templates'
    },
    map: {
        '*': {
            uiElement:      'Magento_Ui/js/lib/core/element/element',
            uiCollection:   'Magento_Ui/js/lib/core/collection',
            uiComponent:    'Magento_Ui/js/lib/core/collection',
            uiClass:        'Magento_Ui/js/lib/core/class',
            uiEvents:       'Magento_Ui/js/lib/core/events',
            uiRegistry:     'Magento_Ui/js/lib/registry/registry',
            consoleLogger:  'Magento_Ui/js/lib/logger/console-logger',
            uiLayout:       'Magento_Ui/js/core/renderer/layout',
            buttonAdapter:  'Magento_Ui/js/form/button-adapter',
            chartJs:        'chartjs/Chart.min',
            tinymce4:       'tiny_mce_4/tinymce.min',
            wysiwygAdapter: 'mage/adminhtml/wysiwyg/tiny_mce/tinymce4Adapter'
        }
    }
};

/**
 * Adds polyfills only for browser contexts which prevents bundlers from including them.
 */
if (typeof window !== 'undefined' && window.document) {
    /**
     * Polyfill Map and WeakMap for older browsers that do not support them.
     */
    if (typeof Map === 'undefined' || typeof WeakMap === 'undefined') {
        config.deps.push('es6-collections');
    }

    /**
     * Polyfill MutationObserver only for the browsers that do not support it.
     */
    if (typeof MutationObserver === 'undefined') {
        config.deps.push('MutationObserver');
    }

    /**
     * Polyfill FormData object for old browsers that don't have full support for it.
     */
    if (typeof FormData === 'undefined' || typeof FormData.prototype.get === 'undefined') {
        config.deps.push('FormData');
    }
}

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            toggleGiftCard: 'Magento_GiftCard/toggle-gift-card'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            wishlist:       'Magento_Wishlist/js/wishlist',
            addToWishlist:  'Magento_Wishlist/js/add-to-wishlist',
            wishlistSearch: 'Magento_Wishlist/js/search'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            ticker:     'Magento_CatalogEvent/js/ticker',
            carousel:   'Magento_CatalogEvent/js/carousel'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            configurable: 'Magento_ConfigurableProduct/js/configurable'
        }
    },
    config: {
        mixins: {
            'Magento_Catalog/js/catalog-add-to-cart': {
                'Magento_ConfigurableProduct/js/catalog-add-to-cart-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            advancedSearch: 'Magento_GiftRegistry/advanced-search',
            giftRegistry: 'Magento_GiftRegistry/gift-registry',
            addressOption: 'Magento_GiftRegistry/address-option',
            searchByChanged: 'Magento_GiftRegistry/js/search-by-changed'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/action/place-order': {
                'Magento_CheckoutAgreements/js/model/place-order-mixin': true
            },
            'Magento_Checkout/js/action/set-payment-information': {
                'Magento_CheckoutAgreements/js/model/set-payment-information-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            pageCache:  'Magento_PageCache/js/page-cache'
        }
    },
    deps: ['Magento_PageCache/js/form-key-provider']
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            requireCookie: 'Magento_Cookie/js/require-cookie',
            cookieNotices: 'Magento_Cookie/js/notices'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    paths: {
        'jquery/jquery-storageapi': 'Magento_Cookie/js/jquery.storageapi.extended'
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            orderBySkuFailure:  'Magento_AdvancedCheckout/js/order-by-sku-failure',
            fileChooser:        'Magento_AdvancedCheckout/js/file-chooser'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            catalogSearch: 'Magento_CatalogSearch/form-mini'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            giftCard:       'Magento_GiftCardAccount/js/gift-card',
            paymentMethod:  'Magento_GiftCardAccount/js/payment-method'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            giftOptions:    'Magento_GiftMessage/js/gift-options',
            extraOptions:   'Magento_GiftMessage/js/extra-options',
            'Magento_GiftMessage/gift-options':    'Magento_GiftMessage/js/gift-options',
            'Magento_GiftMessage/extra-options':   'Magento_GiftMessage/js/extra-options'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            giftWrapping: 'Magento_GiftWrapping/gift-wrapping'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            configurableVariationQty: 'Magento_InventoryConfigurableProductFrontendUi/js/configurable-variation-qty'
        }
    },
    config: {
        mixins: {
            'Magento_ConfigurableProduct/js/configurable': {
                'Magento_InventoryConfigurableProductFrontendUi/js/configurable': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            multiShipping: 'Magento_Multishipping/js/multi-shipping',
            orderOverview: 'Magento_Multishipping/js/overview',
            payment: 'Magento_Multishipping/js/payment',
            billingLoader: 'Magento_Checkout/js/checkout-loader',
            cartUpdate: 'Magento_Checkout/js/action/update-shopping-cart'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            recentlyViewedProducts: 'Magento_Reports/js/recently-viewed'
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/model/quote': {
                'Magento_InventoryInStorePickupFrontend/js/model/quote-ext': true
            },
            'Magento_Checkout/js/view/shipping-information': {
                'Magento_InventoryInStorePickupFrontend/js/view/shipping-information-ext': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    config: {
        mixins: {
            'Magento_Swatches/js/swatch-renderer': {
                'Magento_InventorySwatchesFrontendUi/js/swatch-renderer': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            'taxToggle': 'Magento_Weee/js/tax-toggle',
            'Magento_Weee/tax-toggle': 'Magento_Weee/js/tax-toggle'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            multipleWishlist: 'Magento_MultipleWishlist/js/multiple-wishlist'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            subscriptionStatusResolver: 'Magento_Newsletter/js/subscription-status-resolver',
            newsletterSignUp:  'Magento_Newsletter/js/newsletter-sign-up'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            'slick': 'Magento_PageBuilder/js/resource/slick/slick',
            'jarallax': 'Magento_PageBuilder/js/resource/jarallax/jarallax',
            'jarallaxVideo': 'Magento_PageBuilder/js/resource/jarallax/jarallax-video',
            'vimeo': 'Magento_PageBuilder/js/resource/vimeo/player',
            'vimeoWrapper': 'Magento_PageBuilder/js/resource/vimeo/vimeo-wrapper'
        }
    },
    shim: {
        'Magento_PageBuilder/js/resource/slick/slick': {
            deps: ['jquery']
        },
        'Magento_PageBuilder/js/resource/jarallax/jarallax-video': {
            deps: ['jarallax', 'vimeoWrapper']
        },
        'Magento_PageBuilder/js/resource/vimeo/player': {
            exports: ['Player']
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            orderReview: 'Magento_Paypal/js/order-review',
            'Magento_Paypal/order-review': 'Magento_Paypal/js/order-review',
            paypalCheckout: 'Magento_Paypal/js/paypal-checkout'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            transparent: 'Magento_Payment/js/transparent',
            'Magento_Payment/transparent': 'Magento_Payment/js/transparent'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    config: {
        mixins: {
            'Magento_Customer/js/customer-data': {
                'Magento_Persistent/js/view/customer-data-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            loadPlayer: 'Magento_ProductVideo/js/load-player',
            fotoramaVideoEvents: 'Magento_ProductVideo/js/fotorama-add-video-events'
        }
    },
    shim: {
        vimeoAPI: {}
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

/*eslint strict: ["error", "global"]*/

'use strict';

var config = {
    config: {
        mixins: {
            'Magento_Ui/js/view/messages': {
                'Magento_ReCaptchaFrontendUi/js/ui-messages-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

// eslint-disable-next-line no-unused-vars
var config = {
    config: {
        mixins: {
            'Magento_Paypal/js/view/payment/method-renderer/payflowpro-method': {
                'Magento_ReCaptchaPaypal/js/payflowpro-method-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            rmaTrackInfo:   'Magento_Rma/rma-track-info',
            rmaCreate:      'Magento_Rma/rma-create'
        }
    },
    shim: {
        'Magento_Rma/rma-track-info': {
            deps: ['Magento_Rma/set-options']
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    shim: {
        cardinaljs: {
            exports: 'Cardinal'
        },
        cardinaljsSandbox: {
            exports: 'Cardinal'
        }
    },
    paths: {
        cardinaljsSandbox: 'https://includestest.ccdc02.com/cardinalcruise/v1/songbird',
        cardinaljs: 'https://songbird.cardinalcommerce.com/edge/v1/songbird'
    }
};


require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    shim: {
        'Magento_Tinymce3/tiny_mce/tiny_mce_src': {
            'exports': 'tinymce'
        }
    },
    map: {
        '*': {
            'tinymceDeprecated': 'Magento_Tinymce3/tiny_mce/tiny_mce_src'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            mageTranslationDictionary: 'Magento_Translation/js/mage-translation-dictionary'
        }
    },
    deps: [
        'mageTranslationDictionary'
    ]
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            editTrigger: 'mage/edit-trigger',
            addClass: 'Magento_Translation/js/add-class',
            'Magento_Translation/add-class': 'Magento_Translation/js/add-class'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/view/payment/list': {
                'Magento_PaypalCaptcha/js/view/payment/list-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
var config = 
{
    config: 
    {
        mixins: 
        {
        	'Magento_Checkout/js/action/select-payment-method':
			{
				'Anowave_Ec/js/action/select-payment-method':true
			},
			'Magento_Checkout/js/action/select-shipping-method':
			{
				'Anowave_Ec/js/action/select-shipping-method':true
			},
			'Magento_Checkout/js/action/place-order': 
			{
			    'Anowave_Ec/js/action/place-order': true
			},
            'Magento_Checkout/js/model/step-navigator': 
            {
                'Anowave_Ec/js/step-navigator/plugin': true
            },
            'Magento_Checkout/js/view/shipping-information': 
			{
			    'Anowave_Ec/js/view/shipping-information': true
			},
            'Magento_Customer/js/action/check-email-availability':
			{
				'Anowave_Ec/js/action/check-email-availability':true
			},
			'Magento_Checkout/js/sidebar':
            {
            	'Anowave_Ec/js/sidebar': true
            },
            'Magento_Catalog/js/price-box':
            {
            	'Anowave_Ec/js/price-box': true
            },
            'Magento_SalesRule/js/view/payment/discount':
            {
            	'Anowave_Ec/js/discount': true
            },
            'Magento_ConfigurableProduct/js/configurable':
            {
            	'Anowave_Ec/js/configurable': true
            },
    		'Magento_Swatches/js/swatch-renderer':
    		{
    			'Anowave_Ec/js/swatch-renderer': true
    		}
        }
    }
};
require.config(config);
})();
(function() {
var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/action/set-shipping-information': {
                'Aventi_CityDropDown/js/set-city-mixin': true
            }
        }
    }
};
require.config(config);
})();
(function() {
var config = {
    config: {
        mixins: {
            'Magento_ConfigurableProduct/js/configurable': {
                'Aventi_CustomSwatches/js/model/skuswitch': true
            },
            'Magento_Swatches/js/swatch-renderer': {
                'Aventi_CustomSwatches/js/model/swatch-skuswitch': true
            }
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            'Eloom_PayU/js/view/payment/method-renderer/vault':'Aventi_RimaxTheme/js/vault-mixin',
            'Magento_Checkout/js/view/summary/cart-items':'Aventi_RimaxTheme/js/cart-items'
        }
    }
};
require.config(config);
})();
(function() {
var config = {
    paths: {
        'intlTelInput': 'Dotdigitalgroup_Sms/js/intlTelInput',
        'intlTelInputUtils': 'Dotdigitalgroup_Sms/js/utils',
        'internationalTelephoneInput': 'Dotdigitalgroup_Sms/js/internationalTelephoneInput'
    },

    shim: {
        'intlTelInput': {
            'deps': ['jquery', 'knockout']
        },
        'internationalTelephoneInput': {
            'deps': ['jquery', 'intlTelInput']
        }
    },

    config: {
        mixins: {
            'mage/validation': {
                'Dotdigitalgroup_Sms/js/telephoneValidatorAddress': true
            },
            'Magento_Ui/js/form/element/abstract': {
                'Dotdigitalgroup_Sms/js/setAdditionalParams': true
            },
            'Magento_Ui/js/lib/validation/validator': {
                'Dotdigitalgroup_Sms/js/telephoneValidatorCheckout': true
            }
        }
    }
};

require.config(config);
})();
(function() {
var config={map:{"*":{EloomMask:"Eloom_Core/js/masks"}}};

require.config(config);
})();
(function() {
var config = {
    config: {
        mixins: {
            'mage/gallery/gallery': {
                'Fastly_Cdn/js/gallery/gallery-mixin': true
            },
            'Magento_Swatches/js/swatch-renderer': {
                'Fastly_Cdn/js/swatch-renderer-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * This file is part of the Klarna KP module
 *
 * (c) Klarna Bank AB (publ)
 *
 * For the full copyright and license information, please view the NOTICE
 * and LICENSE files that were distributed with this source code.
 */
var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/action/get-payment-information': {
                'Klarna_Kp/js/action/override': true
            }
        }
    },
    map: {
        '*': {
            klarnapi: 'https://x.klarnacdn.net/kp/lib/v1/api.js'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * This file is part of the Klarna Onsitemessaging module
 *
 * (c) Klarna Bank AB (publ)
 *
 * For the full copyright and license information, please view the NOTICE
 * and LICENSE files that were distributed with this source code.
 */
var config = {
    config: {
        mixins: {
            "Magento_Catalog/js/price-box": {
                "Klarna_Onsitemessaging/js/pricebox-widget-mixin": true
            }
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            catalogAddToCart:       'MGS_AjaxCart/js/action/catalog-add-to-cart',
            widgetAddToCart:        'MGS_AjaxCart/js/action/widget-add-to-cart',
            mgsAjaxCartFooter:         'MGS_AjaxCart/js/footer',
        }
    },
    shim: {
        'magnificPopup':           ['jquery']
    },
    paths: {
        'magnificPopup':           'MGS_AjaxCart/js/lib/magnific-popup'
    }
};

require.config(config);
})();
(function() {
var config = {
 config: {
     mixins: {
         'Smile_ElasticsuiteCatalog/js/range-slider-widget': {
			'MGS_Ajaxlayernavigation/js/range-slider-widget': true
		}
     }
 }
};
require.config(config);
})();
(function() {
var config = {
	"map": {
		"*": {
			"mgs/owlcarousel": "MGS_Mpanel/js/owl.carousel.min",
			"mgs/isotope": "MGS_Mpanel/js/isotope.pkgd.min",
			"mgsmasonry": "MGS_Mpanel/js/masonryChangeRow.pkgd",
			"mgsvisible": "MGS_Mpanel/js/element_visible",
			"bridget" : "MGS_Mpanel/js/jquery-bridget",
			"magnificPopup": "MGS_Mpanel/js/jquery.magnific-popup.min",
			"waypoints": "MGS_Mpanel/js/waypoints.min",
			"mpanelSearch": "MGS_Mpanel/js/search-suggest",
			"ajaxscroll": "MGS_Mpanel/js/jquery.ajaxscroll.min",
			"zoom-images": "MGS_Mpanel/js/jquery.zoom.min",
			"sticky-content": "MGS_Mpanel/js/jquery.sticky-kit.min",
			"YouTubePopUp": "MGS_Mpanel/js/YouTubePopUp.jquery",
			"mgs/slick": "MGS_Mpanel/js/slick.min",
			"mgs/bgvideo": "MGS_Mpanel/js/jquery.mb.YTPlayer.src",
			"mgs/lazyload": "MGS_Mpanel/js/jquery.lazyload",
			"rotateImage": "MGS_Mpanel/js/j360",
			"MgsModelViewLegacy" : "MGS_Mpanel/js/model-ar-legacy",
			"MgsModelViewMin" : "MGS_Mpanel/js/model-ar.min",

		}
	},

	"paths": {  
		"mgs/owlcarousel": "MGS_Mpanel/js/owl.carousel.min",
		"mgs/isotope": "MGS_Mpanel/js/isotope.pkgd.min",
		"mgsmasonry": "MGS_Mpanel/js/masonryChangeRow.pkgd",
		"mgsvisible": "MGS_Mpanel/js/element_visible",
		"bridget" : "MGS_Mpanel/js/jquery-bridget",
		"magnificPopup": "MGS_Mpanel/js/jquery.magnific-popup.min",
		"waypoints": "MGS_Mpanel/js/waypoints.min",
		"ajaxscroll": "MGS_Mpanel/js/jquery.ajaxscroll.min",
		"zoom-images": "MGS_Mpanel/js/jquery.zoom.min",
		"sticky-content": "MGS_Mpanel/js/jquery.sticky-kit.min",
		"YouTubePopUp": "MGS_Mpanel/js/YouTubePopUp.jquery",
		"mgs/slick": "MGS_Mpanel/js/slick.min",
		"mgs/bgvideo": "MGS_Mpanel/js/jquery.mb.YTPlayer.src",
		"mgs/lazyload": "MGS_Mpanel/js/jquery.lazyload",
		"rotateImage": "MGS_Mpanel/js/j360",
		"MgsModelViewLegacy" : "MGS_Mpanel/js/model-ar-legacy",
		"MgsModelViewMin" : "MGS_Mpanel/js/model-ar.min",

	},   
    "shim": {
		"MGS_Mpanel/js/owl.carousel.min": ["jquery"],
		"MGS_Mpanel/js/jquery.magnific-popup.min": ["jquery"],
		"MGS_Mpanel/js/waypoints.min": ["jquery"],
		"MGS_Mpanel/js/jquery.ajaxscroll.min": ["jquery"],
		"MGS_Mpanel/js/jquery.zoom.min": ["jquery"],
		"MGS_Mpanel/js/jquery.sticky-kit.min": ["jquery"],
		"MGS_Mpanel/js/YouTubePopUp.jquery": ["jquery"],
		"MGS_Mpanel/js/slick.min": ["jquery"],
		"MGS_Mpanel/js/jquery.mb.YTPlayer.src": ["jquery"],
		"MGS_Mpanel/js/jquery.lazyload": ["jquery"],
		"MGS_Mpanel/js/j360": ["jquery"]
	}
};
require.config(config);
})();
(function() {
var config = {
    config: {
        mixins: {
            'Magento_Wishlist/js/add-to-wishlist': {
                'MGS_Guestwishlist/js/add-to-wishlist': true
            },
            'Magento_Wishlist/js/view/wishlist': {
                'MGS_Guestwishlist/js/view/guest-wishlist': true
            }
        }
    }
};
require.config(config);
})();
(function() {
/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            searchListToolbarForm: 'MGS_InstantSearch/js/search/list/toolbar',
        }
    }
};

require.config(config);
})();
(function() {
var config = {
	config: {
        mixins: {
            'Magento_ConfigurableProduct/js/configurable': {
                'MGS_ClaueTheme/js/configurable': true
            },
            'Magento_Swatches/js/swatch-renderer': {
                'MGS_ClaueTheme/js/swatch-renderer': true
            }
        }
    }
};
require.config(config);
})();
(function() {
var config = {};
if (window.location.href.indexOf('onestepcheckout') !== -1) {
    config = {
        map: {
            '*':
                {
                    'Magento_Checkout/js/model/shipping-rate-service': 'MGS_OSCheckout/js/model/shipping/shipping-rate-service',
                    'Magento_Checkout/js/model/shipping-rates-validator': 'MGS_OSCheckout/js/model/shipping/shipping-rates-validator',
                    'Magento_CheckoutAgreements/js/model/agreements-assigner': 'MGS_OSCheckout/js/model/agreement/agreements-assigner'
                },
            'MGS_OSCheckout/js/model/shipping/shipping-rates-validator': {
                'Magento_Checkout/js/model/shipping-rates-validator': 'Magento_Checkout/js/model/shipping-rates-validator'
            },
            'Magento_Checkout/js/model/shipping-save-processor/default': {
                'Magento_Checkout/js/model/full-screen-loader': 'MGS_OSCheckout/js/model/one-step-checkout-loader'
            },
            'Magento_Checkout/js/action/set-billing-address': {
                'Magento_Checkout/js/model/full-screen-loader': 'MGS_OSCheckout/js/model/one-step-checkout-loader'
            },
            'Magento_SalesRule/js/action/set-coupon-code': {
                'Magento_Checkout/js/model/full-screen-loader': 'MGS_OSCheckout/js/model/onestepcheckout-loader/discount'
            },
            'Magento_SalesRule/js/action/cancel-coupon': {
                'Magento_Checkout/js/model/full-screen-loader': 'MGS_OSCheckout/js/model/onestepcheckout-loader/discount'
            },
            'MGS_OSCheckout/js/model/one-step-checkout-loader': {
                'Magento_Checkout/js/model/full-screen-loader': 'Magento_Checkout/js/model/full-screen-loader'
            },

        },
        config: {
            mixins: {
                'Magento_Braintree/js/view/payment/method-renderer/paypal': {
                    'MGS_OSCheckout/js/view/payment/braintree-paypal-mixins': true
                },
                'Magento_Checkout/js/action/place-order': {
                    'MGS_OSCheckout/js/action/place-order-mixins': true
                },
                'Magento_Paypal/js/action/set-payment-method': {
                    'MGS_OSCheckout/js/model/set-payment-method-mixin': true
                }
            }
        }
    };

    if (window.location.href.indexOf('#') !== -1) {
        window.history.pushState("", document.title, window.location.pathname);
    }
}

require.config(config);
})();
(function() {
var config = {
	paths: {
		'mgs/notifyslider'			: 'MGS_PurchasedProduct/js/notifyslider'
	},

	shim: {
		'mgs/notifyslider': {
			deps: ['jquery']
		}
	}

};
require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            mgs_quickview: 'MGS_QuickView/js/mgs_quickview'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            storelocator: 'MGS_StoreLocator/js/storelocator'
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            voiceSearch: 'MGS_VoiceSearch/js/voiceSearch'
        }
    }
};
require.config(config);
})();
(function() {
/**
 * Mageplaza
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the mageplaza.com license that is
 * available through the world-wide-web at this URL:
 * https://www.mageplaza.com/LICENSE.txt
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade this extension to newer
 * version in the future.
 *
 * @category    Mageplaza
 * @package     Mageplaza_Core
 * @copyright   Copyright (c) Mageplaza (https://www.mageplaza.com/)
 * @license     https://www.mageplaza.com/LICENSE.txt
 */

var config = {
    paths: {
        'mageplaza/core/jquery/popup': 'Mageplaza_Core/js/jquery.magnific-popup.min',
        'mageplaza/core/owl.carousel': 'Mageplaza_Core/js/owl.carousel.min',
        'mageplaza/core/bootstrap': 'Mageplaza_Core/js/bootstrap.min',
        mpIonRangeSlider: 'Mageplaza_Core/js/ion.rangeSlider.min',
        touchPunch: 'Mageplaza_Core/js/jquery.ui.touch-punch.min',
        mpDevbridgeAutocomplete: 'Mageplaza_Core/js/jquery.autocomplete.min'
    },
    shim: {
        "mageplaza/core/jquery/popup": ["jquery"],
        "mageplaza/core/owl.carousel": ["jquery"],
        "mageplaza/core/bootstrap": ["jquery"],
        mpIonRangeSlider: ["jquery"],
        mpDevbridgeAutocomplete: ["jquery"],
        touchPunch: ['jquery', 'jquery/ui']
    }
};

require.config(config);
})();
(function() {
/**
 * Mageplaza
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the mageplaza.com license that is
 * available through the world-wide-web at this URL:
 * https://www.mageplaza.com/LICENSE.txt
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade this extension to newer
 * version in the future.
 *
 * @category    Mageplaza
 * @package     Mageplaza_CurrencyFormatter
 * @copyright   Copyright (c) Mageplaza (https://www.mageplaza.com/)
 * @license     https://www.mageplaza.com/LICENSE.txt
 */
var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/view/summary/abstract-total': {
                'Mageplaza_CurrencyFormatter/js/view/summary/abstract-total': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Mageplaza
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Mageplaza.com license that is
 * available through the world-wide-web at this URL:
 * https://www.mageplaza.com/LICENSE.txt
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade this extension to newer
 * version in the future.
 *
 * @category    Mageplaza
 * @package     Mageplaza_Smtp
 * @copyright   Copyright (c) Mageplaza (https://www.mageplaza.com/)
 * @license     https://www.mageplaza.com/LICENSE.txt
 */
var config = {};
if (typeof window.AVADA_EM !== 'undefined') {
    config = {
        config: {
            mixins: {
                'Magento_Checkout/js/view/billing-address': {
                    'Mageplaza_Smtp/js/view/billing-address-mixins' : true
                },
                'Magento_Checkout/js/view/shipping': {
                    'Mageplaza_Smtp/js/view/shipping-mixins' : true
                }
            }
        }
    };
}

require.config(config);
})();
(function() {
/**
 * Mageplaza
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Mageplaza.com license that is
 * available through the world-wide-web at this URL:
 * https://www.mageplaza.com/LICENSE.txt
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade this extension to newer
 * version in the future.
 *
 * @category  Mageplaza
 * @package   Mageplaza_SocialLogin
 * @copyright Copyright (c) Mageplaza (https://www.mageplaza.com/)
 * @license   https://www.mageplaza.com/LICENSE.txt
 */

var config = {
    paths: {
        socialProvider: 'Mageplaza_SocialLogin/js/provider',
        socialPopupForm: 'Mageplaza_SocialLogin/js/popup'
    },
    map: {
        '*': {
            'Magento_Checkout/js/proceed-to-checkout': 'Mageplaza_SocialLogin/js/proceed-to-checkout'
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/model/step-navigator': {
                'PayPal_Braintree/js/model/step-navigator-mixin': true
            },
            'PayPal_Braintree/js/view/payment/method-renderer/cc-form': {
                'PayPal_Braintree/js/reCaptcha/braintree-cc-method-mixin': true
            }
        }
    },
    map: {
        '*': {
            braintreeCheckoutPayPalAdapter: 'PayPal_Braintree/js/view/payment/adapter'
        }
    },
};

require.config(config);
})();
(function() {
/**
 * Config to pull in all the relevant Braintree JS SDKs
 * @type {{paths: {braintreePayPalInContextCheckout: string, braintreePayPalCheckout: string, braintreeVenmo: string, braintreeHostedFields: string, braintreeDataCollector: string, braintreeThreeDSecure: string, braintreeGooglePay: string, braintreeApplePay: string, braintreeAch: string, braintreeLpm: string, googlePayLibrary: string}, map: {"*": {braintree: string}}}}
 */
var config = {
    map: {
        '*': {
            braintree: 'https://js.braintreegateway.com/web/3.67.0/js/client.min.js',
        }
    },

    paths: {
        "braintreePayPalCheckout": "https://js.braintreegateway.com/web/3.67.0/js/paypal-checkout.min",
        "braintreeHostedFields": "https://js.braintreegateway.com/web/3.67.0/js/hosted-fields.min",
        "braintreeDataCollector": "https://js.braintreegateway.com/web/3.67.0/js/data-collector.min",
        "braintreeThreeDSecure": "https://js.braintreegateway.com/web/3.67.0/js/three-d-secure.min",
        "braintreeApplePay": 'https://js.braintreegateway.com/web/3.67.0/js/apple-pay.min',
        "braintreeGooglePay": 'https://js.braintreegateway.com/web/3.67.0/js/google-payment.min',
        "braintreeVenmo": 'https://js.braintreegateway.com/web/3.67.0/js/venmo.min',
        "braintreeAch": "https://js.braintreegateway.com/web/3.67.0/js/us-bank-account.min",
        "braintreeLpm": "https://js.braintreegateway.com/web/3.67.0/js/local-payment.min",
        "googlePayLibrary": "https://pay.google.com/gp/p/js/pay",
        "braintreePayPalInContextCheckout": "https://www.paypalobjects.com/api/checkout"
    }
};

require.config(config);
})();
(function() {
/**
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Smile ElasticSuite to newer
 * versions in the future.
 *
 * @category  Smile
 * @package   Smile\ElasticsuiteCore
 * @author    Romain Ruaud <romain.ruaud@smile.fr>
 * @copyright 2020 Smile
 * @license   Open Software License ("OSL") v. 3.0
 */

var config = {
    map: {
        '*': {
            quickSearch: 'Smile_ElasticsuiteCore/js/form-mini'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Smile ElasticSuite to newer
 * versions in the future.
 *
 * @category  Smile
 * @package   Smile\ElasticsuiteCore
 * @author    Botis <botis@smile.fr>
 * @copyright 2021 Smile
 * @license   Open Software License ("OSL") v. 3.0
 */

var config = {
    config: {
        mixins: {
            'Magento_Ui/js/lib/validation/validator': {
                'Smile_ElasticsuiteCore/js/validation/validator-mixin': true
            }
        }
    },
};


require.config(config);
})();
(function() {
/**
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Smile ElasticSuite to newer
 * versions in the future.
 *
 * @category  Smile
 * @package   Smile\ElasticsuiteCatalog
 * @author    Aurelien FOUCRET <aurelien.foucret@smile.fr>
 * @copyright 2020 Smile
 * @license   Open Software License ("OSL") v. 3.0
 */

var config = {
    map: {
        '*': {
            rangeSlider: 'Smile_ElasticsuiteCatalog/js/range-slider-widget'
        }
    },
    shim: {
        'Smile_ElasticsuiteCatalog/js/jquery.ui.touch-punch.min': {
            deps: ['Smile_ElasticsuiteCatalog/js/mouse']
        }
    }
};

require.config(config);
})();
(function() {
/**
 * @copyright  Vertex. All rights reserved.  https://www.vertexinc.com/
 * @author     Mediotype                     https://www.mediotype.com/
 */

var config = {
    map: {
        '*': {
            'set-checkout-messages': 'Vertex_Tax/js/model/set-checkout-messages'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * @copyright  Vertex. All rights reserved.  https://www.vertexinc.com/
 * @author     Mediotype                     https://www.mediotype.com/
 */

var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/view/billing-address': {
                'Vertex_AddressValidation/js/billing-validation-mixin': true
            },
            'Magento_Checkout/js/view/shipping': {
                'Vertex_AddressValidation/js/shipping-validation-mixin': true
            },
            'Magento_Checkout/js/checkout-data': {
                'Vertex_AddressValidation/js/shipping-invalidate-mixin': true
            },
            'Magento_Customer/js/addressValidation': {
                'Vertex_AddressValidation/js/customer-validation-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
			html5shiv: 'js/html5shiv',
			responsive: 'js/responsive',
			theme: 'js/theme'
        }
    }
};
require.config(config);
})();



})(require);