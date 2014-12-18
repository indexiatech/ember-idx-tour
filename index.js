/* jshint node: true */
'use strict';

module.exports = {
    name: 'ember-idx-tour',
    included: function( app ) {
        this._super.included( app );
        app.import('vendor/bootstrap-tour-standalone.js');
        app.import('vendor/bootstrap-tour.css');
    }
};
