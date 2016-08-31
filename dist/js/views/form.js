'use strict';

/* eslint no-unused-vars: off, no-implicit-globals: off */
/* global Backbone, _ */

var FormView = function () {

    return Backbone.View.extend({
        events: {
            'click button:submit': function clickButtonSubmit(evt) {
                evt.preventDefault();
                this.submit();
            }
        },

        initialize: function initialize() {
            Backbone.Validation.bind(this);
        },
        submit: function submit() {
            var data = this.$el.serializeArray();

            // Normalize data for our model
            data = data.reduce(function (a, b) {
                a[b.name] = b.value;
                return a;
            }, {});

            this.model.set(data);

            if (this.model.isValid(true)) {
                console.log('Yay!');
            } else {
                console.log('Booh!');
            }
        }
    });
}();