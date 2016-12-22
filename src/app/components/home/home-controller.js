(function() {
    'use strict';
    angular.module('application').controller('HomeController', function($rootScope, $scope, $log, $q, $state, $stateParams, HomeServices) {
        self = this;
        $rootScope.pageTitle = 'Home';

        self.recipes = {};
        self.recipe = {};


        switch ($state.current.name) {

            case 'home':

                HomeServices.getAllRecipes().then(
                    function(result) {
                        // console.log(result);
                        self.recipes = result.data;
                    },
                    function(err) {
                        console.log('Error saving to endpoint: ', err);
                    });
                break;



            case 'recipe':

                HomeServices.getRecipeById($stateParams.recipeId).then(
                    function(result) {
                        // console.log(result);
                        self.recipe = result[0];
                    },
                    function(err) {
                        console.log('Error saving to endpoint: ', err);
                    });
                break;



            default:
        }




    });
})();
