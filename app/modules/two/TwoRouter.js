define([
    'marionette',
    'modules/two/TwoController'
], function (Marionette, TwoController) {
    'use strict';

    return Marionette.AppRouter.extend({
        controller:TwoController,
        appRoutes: {
            "two": "main"
        }
    });
});