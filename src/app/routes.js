(function() {
    'use strict';

    angular.module('application')

    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider

        .state('homepage', {
            url: '/',
            templateUrl: './app/components/home/home-view.html',
            controller: 'HomeController',
            controllerAs: 'Home'
        })

        .state('recipe', {
            url: '/recipe/:recipeId',
            templateUrl: './app/components/home/recipe-view.html',
            controller: 'HomeController',
            controllerAs: 'Recipe'
        })

        $urlRouterProvider.otherwise('/');
    }]);

})();
