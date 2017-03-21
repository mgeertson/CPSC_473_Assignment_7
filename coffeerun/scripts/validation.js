(function() {
    'use strict';
    var App = window.App || {};
    var Validation = {
        isCompanyEmail: function(email) {
            return /.+@bignerdranch\.com$/.test(email);
        },
        isDecaf: function(coffeeOrder, caffeineStrength) {
            console.log('In custom validation');
            if (/decaf/.test(coffeeOrder) && caffeineStrength >= '20') {
                return false;
            } else {
                return true;
            }

        }
    };

    App.Validation = Validation;
    window.App = App;
})(window);
