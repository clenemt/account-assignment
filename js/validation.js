/* global Backbone, _ */

(function () {

    _.extend(Backbone.Validation.callbacks, {
        valid (view, attr) {
            var $el = view.$('[name=' + attr + ']'),
                $group = $el.closest('.form-group');

            $group.removeClass('has-error');
            $group.find('.form-feedback').html('').addClass('hidden');
        },

        invalid (view, attr, error) {
            var $el = view.$('[name=' + attr + ']'),
                $group = $el.closest('.form-group');

            $group.addClass('has-error');
            $group.find('.form-feedback').html(error).removeClass('hidden');
        }
    });

}());
