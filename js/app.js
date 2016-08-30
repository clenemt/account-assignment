/* eslint no-unused-vars: off, no-implicit-globals: off, strict: off */
/* global FormView, PasswordModel, UserModel */

(function () {

    var passwordview = new FormView({
        el: '#form_pwd',
        model: new PasswordModel()
    });

    var userview = new FormView({
        el: '#form_user',
        model: new UserModel()
    });

}());
