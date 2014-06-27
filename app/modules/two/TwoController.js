define([
    'app',
    'modules/two/TwoView'
], function (app, TwoView) {
    'use strict';

    return {
        main: function(){
            var twoView = new TwoView();
            app.main.show(twoView);
        }
    };
});