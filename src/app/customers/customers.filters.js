(function () {
    'use strict';

    angular
        .module('app')
        .filter('containsLetters', function () {

            return function (items, letters, anything) {
                if (letters == undefined) {
                    return items;
                }
                var filtered = [];
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    if (item.fullName.toLowerCase().includes(letters.toLowerCase())) {
                        filtered.push(item);
                    }
                }
                return filtered;
            };
        });
})();