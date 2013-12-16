/*! Lazy Load XT v0.8.5 2013-12-16
 * http://ressio.github.io/lazy-load-xt
 * (C) 2013 RESS.io
 * Licensed under MIT */

(function ($) {
var options = $.lazyLoadXT;

    options.forceEvent += ' lazyloadall';
    options.autoLoad = 50;

    $(document).ready(function () {
        setTimeout(function () {
            $(window).trigger('lazyloadall');
        }, options.autoLoad);
    });

})(window.jQuery || window.Zepto);
