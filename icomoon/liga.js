/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'add': '&#xe902;',
            'remove': '&#xe90d;',
            'menu': '&#xe910;',
            'search': '&#xe911;',
            'settings': '&#xe912;',
            'clear': '&#xe903;',
            'forward': '&#xe904;',
            'chevron_left': '&#xe909;',
            'chevron_right': '&#xe90a;',
            'print': '&#xe905;',
            'check': '&#xe906;',
            'chevron_up': '&#xe90b;',
            'chevron_down': '&#xe90c;',
            'credit_card': '&#xe907;',
            'payment': '&#xe907;',
            'forward_message': '&#xe908;',
            'email': '&#xf003;',
            'close': '&#xf00d;',
            'zoom_in': '&#xf00e;',
            'zoom_out': '&#xf010;',
            'trash': '&#xf014;',
            'cart': '&#xf07a;',
            'linkedin': '&#xf08c;',
            'phone': '&#xf095;',
            'twitter': '&#xf099;',
            'shipping': '&#xf0d1;',
            'expand_down': '&#xf0d7;',
            'expand_up': '&#xf0d8;',
            'expand_left': '&#xf0d9;',
            'expand_right': '&#xf0da;',
            'sort': '&#xf0dc;',
            'info': '&#xf129;',
            'notice': '&#xf12a;',
            'menu': '&#xf142;',
            'youtube': '&#xf167;',
            'instagram': '&#xf16d;',
            'facebook': '&#xf230;',
            'cash': '&#xe900;',
            'barcode': '&#xe901;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
