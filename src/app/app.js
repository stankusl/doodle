(function() {

    angular.module('application', ['ui.bootstrap', 'ui.router'])

    .run(['$rootScope', '$state', function($rootScope, $state) {
        'use strict';

        // this is available from all across the app
        $rootScope.appName = 'Recipe Book';
        $rootScope.WebAPI = "http://188.166.154.233/public";
        // make $state available from templates
        $rootScope.$state = $state;
    }])

    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode(true);
    }])

    .config(['$httpProvider', function($httpProvider) {
        //initialize get if not there
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }
    }])

    .filter('dateToISO', function() {
      return function(input) {
        return new Date(input).toISOString();
      };
    })

    .filter('timeToCook', function() {
      return function(input) {
        return input / 60 + 'min.';
      };
    })

    .run(['$rootScope', '$log', function($rootScope, $log) {
        //
        // $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        //     $log.debug('successfully changed states');
        //     $log.debug('event', event);
        //     $log.debug('toState', toState);
        //     $log.debug('toParams', toParams);
        //     $log.debug('fromState', fromState);
        //     $log.debug('fromParams', fromParams);
        // });
        //
        // $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams) {
        //     $log.error('The requested state was not found: ', unfoundState);
        // });
        //
        // $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
        //     $log.error('An error occurred while changing states: ', error);
        //     $log.debug('event', event);
        //     $log.debug('toState', toState);
        //     $log.debug('toParams', toParams);
        //     $log.debug('fromState', fromState);
        //     $log.debug('fromParams', fromParams);
        // });
    }]);

})();
