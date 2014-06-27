define([
    'app',
    'modules/two/TwoRouter'
], function (app, TwoRouter) {
    'use strict';

    var TwoModule = app.module("TwoApp");

    TwoModule.addInitializer(function(){
        app.Router = new TwoRouter();
    });

    TwoModule.addFinalizer(function(){
        //
    });

    return TwoModule;
});