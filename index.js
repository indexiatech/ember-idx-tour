/* jshint node: true */
'use strict';

module.exports = {
    name: 'ember-idx-tour',
    included: function( app ) {
        this._super.included( app );
        app.import('vendor/bootstrap-tourist.js');
        app.import('vendor/bootstrap-tourist.css');
    }
};
