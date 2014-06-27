require.config({
    paths: {
        underscore: '../bower_components/underscore/underscore',
        backbone: '../bower_components/backbone/backbone',
        marionette: '../bower_components/backbone.marionette/lib/backbone.marionette',
        jquery: '../bower_components/jquery/dist/jquery',
        handlebars: '../bower_components/handlebars/handlebars.runtime',
        tpl: 'lib/tpl'
    },

    shim: {
        underscore: {
            exports: '_'
        },

        backbone: {
            exports: 'Backbone',
            deps: ['jquery', 'underscore']
        },

        marionette: {
            exports: 'Backbone.Marionette',
            deps: ['backbone']
        }
    },

    deps: ['jquery', 'underscore']
});

require([
    'app',
    'backbone',
], function (app, Backbone) {
    'use strict';

    $(document).on("click", "a:not([data-bypass])", function(evt) {
        var href = { prop: $(this).prop("href"), attr: $(this).attr("href") };
        var root = location.protocol + "//" + location.host + '/';

        if (href.prop && href.prop.slice(0, root.length) === root) {
            evt.preventDefault();
            Backbone.history.navigate(href.attr, true);
        }
    });

    app.start();

});