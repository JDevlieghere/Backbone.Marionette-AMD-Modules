define([
    'app',
    'modules/one/OneView'
], function (app, OneView) {
    'use strict';

    return {
        main: function(){
            var oneView = new OneView();
            app.main.show(oneView);
        }
    };
});