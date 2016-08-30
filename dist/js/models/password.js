'use strict';

/* eslint no-unused-vars: off, no-implicit-globals: off, strict: off */
/* global Backbone */

var PasswordModel = function () {

    return Backbone.Model.extend({
        validation: {
            'cur_pwd': {
                required: true,
                msg: 'Please enter your current password'
            },
            'new_pwd': [{
                required: true,
                msg: 'A new password is required'
            }, {
                minLength: 8,
                msg: 'The new password must be at least 8 characters'
            }],
            'repeat_pwd': {
                equalTo: 'new_pwd',
                msg: 'The passwords do not match'
            }
        }
    });
}();