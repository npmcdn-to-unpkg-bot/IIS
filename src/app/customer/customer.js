(function () {
    'use strict';

    function controller(repository) {
        var customer = this;
        customer.$routerOnActivate = routerOnActivate;
        customer.makePayment = makePayment;

        function routerOnActivate(next, previous) {
            var id = next.params.id;
            customer.data = repository.getCustomers(id);
        };

        function makePayment() {
            repository.addPayment(customer.data.id, customer.amount);
            customer.amount = null;
        }
    };

    angular.module('app')
        .component('customer', {
            templateUrl: 'app/customer/customer.html',
            controller: controller,
            controllerAs: 'model'
        });

})();
