var PasswordView = Backbone.View.extend({

    events: {
        'click button:submit': function (evt) {
            evt.preventDefault();
            this.submit();
        }
    },

    initialize () {
        Backbone.Validation.bind(this);
    },

    submit () {
        var data = this.$el.serializeArray();

        // Normalize data for our model
        data = data.reduce((a, b) => {
            a[b.name] = b.value;
            return a;
        }, {});

        this.model.set(data);

        if (this.model.isValid(true)){
            alert('Great Success!');
        } else {
            alert('Bad Error!');
        }
    }
});
