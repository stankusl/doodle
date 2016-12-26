(function() {
    'use strict';
    angular.module('application').controller('HomeController', ['$rootScope', '$scope', '$log', '$q', '$state', '$stateParams', 'HomeServices', HomeController]);

    function HomeController($rootScope, $scope) {
        self = this;
        $rootScope.pageTitle = 'Home';
    };


})();
