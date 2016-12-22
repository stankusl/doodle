(function() {
    'use strict';

    function HomeController($rootScope, $scope) {
        self = this;
        $rootScope.pageTitle = 'Home';
    };

    angular.module('application').controller('HomeController', ['$rootScope', '$scope', '$log', '$q', '$state', '$stateParams', 'HomeServices', HomeController]);

})();
