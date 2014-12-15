/* jshint node: true */
'use strict';

module.exports = {
    name: 'ember-idx-tour',
    included: function( app ) {
        this._super.included( app );
        app.import('bower_components/bootstrap-tour/build/js/bootstrap-tour-standalone.js');
        app.import('bower_components/bootstrap-tour/build/css/bootstrap-tour.css');
    }
};
