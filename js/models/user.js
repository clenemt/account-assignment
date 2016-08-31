/* eslint no-unused-vars: off, no-implicit-globals: off */
/* global Backbone, _ */

var UserModel = (function () {

    return Backbone.Model.extend({
        validation: {
            firstname: {
                required: true,
                pattern: /[^0-9]/,
                msg: 'Please use a valid first name'
            },
            lastname: {
                required: true,
                pattern: /[^0-9]/,
                msg: 'Please use a valid last name'
            },
            sex: {
                oneOf: ['', 'male', 'female', 'other']
            },
            tel: {
                pattern: 'digits',
                required: false,
                msg: 'Please use a valid telephone number'
            },
            day (value, attr, computed) {
                if (value !== 'day' || computed.month !== 'month' || computed.year !== 'year') {
                    value = new Date(computed.year + computed.month + computed.day);

                    if (!_.isDate(value) || isNaN(value)) {
                        return 'Please pick a valid date';
                    }
                }
            }
        }
    });

}());
