define([
    'marionette',
    '../../templates'
], function (Marionette, templates) {
    'use strict';

    return Marionette.LayoutView.extend({
        template: templates.header
    });
});