define([
    'marionette',
    'common/AppController'
], function (Marionette, AppController) {
    'use strict';

    return Marionette.AppRouter.extend({
        controller: AppController,
        appRoutes: {
            "": "index"
        }
    });
});