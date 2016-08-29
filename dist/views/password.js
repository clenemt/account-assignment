'use strict';

var PasswordForm = Backbone.View.extend({
    events: {
        'click [submit]': function clickSubmit(evt) {
            evt.preventDefault();
            this.signUp();
        }
    },

    initialize: function initialize() {
        Backbone.Validation.bind(this);
    },

    signUp: function signUp() {}
});