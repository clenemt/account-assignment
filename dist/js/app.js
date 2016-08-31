'use strict';

/* global FormView, PasswordModel, UserModel */

(function () {

    new FormView({
        el: '#form_pwd',
        model: new PasswordModel()
    });

    new FormView({
        el: '#form_user',
        model: new UserModel()
    });
})();