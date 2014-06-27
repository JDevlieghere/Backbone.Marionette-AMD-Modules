define([
    'marionette',
    './AppController'
], function (Marionette, AppController) {
    'use strict';

    return Marionette.AppRouter.extend({
        controller: AppController,
        appRoutes: {
            "example": "example"
        }
    });
});