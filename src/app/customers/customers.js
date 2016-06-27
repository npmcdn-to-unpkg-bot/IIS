(function () {
    'use strict';

    function controller(repository) {
        var customers = this;
        customers.data = [];

        customers.$onInit = onInit;
        customers.navigate = navigate;

        function onInit() {
            customers.data = repository.getCustomers();
        }
        function navigate(id) {
            this.$router.navigate(['Customer', {id: id}]);
        }
    };

    angular.module('app')
        .component('customers', {
            templateUrl: 'app/customers/customers.html',
            bindings: { $router: '<' },
            controller: controller,
            controllerAs: 'model'
        });

})();
