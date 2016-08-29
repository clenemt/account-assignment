var PasswordModel = Backbone.Model.extend({
    validation: {
        'cur_pwd': {
            required: true
        },
        'new_pwd': [{
            required: true,
            msg: 'A new password is required'
        }, {
            minLength: 8
        }, {
            maxLength: 32
        }],
        'repeat_pwd': {
            equalTo: 'new_pwd',
            msg: 'The passwords do not match'
        }
    }
});
