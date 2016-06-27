(function () {
    'use strict'

    angular.module('app').component('appComponent', {
        templateUrl: 'app/app.component.html',
        $routeConfig: [
            { path: '/customers', component: 'customers', name: 'Customers' },
            { path: '/customers/:id', component: 'customer', name: 'Customer' },
            { path: '/**', redirectTo: ['Customers'] }
        ]
    });

})();
