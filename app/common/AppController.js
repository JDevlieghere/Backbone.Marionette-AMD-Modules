define([
    'app',
    'common/views/Index'
], function (app, IndexView) {
    'use strict';

    return{
        index: function(){
            var indexView = new IndexView();
            app.main.show(indexView);
        }
    };
});