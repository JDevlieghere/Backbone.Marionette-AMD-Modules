/*global define */

define(function (require) {
    'use strict';

    return {
        footer: require('tpl!templates/footer.tmpl'),
        index: require('tpl!templates/index.tmpl'),
        one: require('tpl!templates/one.tmpl'),
        two: require('tpl!templates/two.tmpl'),
        header: require('tpl!templates/header.tmpl')
    };
});
