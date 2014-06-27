define([
    'marionette',
    'modules/one/OneController'
], function (Marionette, OneController) {
    'use strict';

    return Marionette.AppRouter.extend({
        controller:OneController,
        appRoutes: {
            "one": "main"
        }
    });
});