import Em from 'ember';
var get = Em.get;
var set = Em.set;
/*global Tour*/

/*
* A tour component for ember.js
* Currently backed by Bootstrap-tour but the plan is to be rewritten the ember way in the future
*/
export default Em.Component.extend({
    classNames: ['ember-idx-tour'],
    /**
    * The name of the tour, used to create the name of the storage item.
    * It is possible to create different tour names in the same page / app
    **/
    name: 'tour',

    /**
    * Appends the step popover to a specific element.
    **/
    container: 'body',

    /**
    * If true will display a dark backdrop behind the popover and its element but will highlight the current step.
    **/
    backdrop: true,

    /**
    * Add padding to the step being currently highligted
    **/
    'backdrop-padding': 5,

    /**
    * An array of objects representing the steps to be included in the tour.
    **/
    steps: [],

    /**
    * The bootstrap tour object
    **/
    tour: undefined,

    /**
    * The tour will start if set to true
    **/
    'start-if': undefined,

    /**
    * The action to invoke when tour starts
    **/
    'on-start': undefined,

    /**
    * The action to invoke when tour ends
    **/
    'on-end': undefined,

    /**
    * The action to invoke before each step is shown
    **/
    'on-show': undefined,

    /**
    * The action to invoke after each step is shown
    **/
    'on-shown': undefined,

    /**
    * The action to invoke before each step is hidden
    **/
    'on-hide': undefined,

    /**
    * The action to invoke after each step is hidden
    **/
    'on-hidden': undefined,

    /**
    * The action to invoke when the next step is asked for
    **/
    'on-next': undefined,

    /**
    * The action to invoke when the previous step is asked for
    **/
    'on-prev': undefined,

    initTour: function() {
        var tour = new Tour({
            name: get(this, 'name'),
            steps: get(this, 'steps'),
            backdrop: get(this, 'backdrop'),
            backdropPadding: get(this, 'backdrop-padding'),
            component: this,
            onShow: function(tour) {
                var comp = tour._options.component;
                comp.sendAction('on-show', comp, tour, this);
            },
            onShown: function(tour) {
                var comp = tour._options.component;
                comp.sendAction('on-shown', comp, tour, this);
            },
            onHide: function(tour) {
                var comp = tour._options.component;
                comp.sendAction('on-hide', comp, tour, this);
            },
            onHidden: function(tour) {
                var comp = tour._options.component;
                comp.sendAction('on-hidden', comp, tour, this);
            },
            onNext: function(tour) {
                var comp = tour._options.component;
                comp.sendAction('on-next', comp, tour, this);
            },
            onPrev: function(tour) {
                var comp = tour._options.component;
                comp.sendAction('on-prev', comp, tour, this);
            },
            onStart: function(tour) {
                var comp = tour._options.component;
                comp.sendAction('on-start', comp, tour, this);
            },
            onEnd: function(tour) {
                var comp = tour._options.component;
                comp.sendAction('on-end', comp, tour, this);
            }
        });
        this.set('tour', tour);
    }.on('didInsertElement'),

    observeStartIf: function() {
        if (this.get('start-if')) {
            this.get('tour').init();
            this.get('tour').restart();
            this.set('start-if', undefined);
        }
    }.observes('start-if')
});