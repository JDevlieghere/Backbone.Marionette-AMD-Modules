define([
    'marionette',
    'common/views/Header',
    'common/views/Footer'
], function (Marionette, Header, Footer) {
    'use strict';

    var app = new Marionette.Application();

    var header = new Header();
    var footer = new Footer();

    app.addRegions({
        header: '#header',
        main: '#main',
        footer: '#footer'
    });

    app.addInitializer(function (){
        app.header.show(header);
        app.footer.show(footer);
        require([
            'common/AppRouter',
            'modules/one/OneApp',
            'modules/two/TwoApp'
        ], function(AppRouter){
            new AppRouter();
            Backbone.history.start({pushState: true})
        });
    });

    return window.app = app;
});