define([
    'app',
    'modules/one/OneRouter'
], function (app, OneRouter) {
    'use strict';

    var OneModule = app.module("OneApp");

    OneModule.addInitializer(function(){
        app.Router = new OneRouter();
    });

    OneModule.addFinalizer(function(){
        //
    });

    return OneModule;
});