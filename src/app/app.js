(function() {
   'use strict';
    angular.module('application', ['ui.router'])

    .run(['$rootScope', '$state', function($rootScope, $state) {


        // this is available from all across the app
        $rootScope.appName = 'Doodle Bug';
        $rootScope.WebAPI = "app/api";
    }])

    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode(true);
    }])

})();
