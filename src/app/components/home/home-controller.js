(function() {
    'use strict';
    angular.module('application').controller('HomeController', ['$rootScope', '$scope', 'HomeServices', HomeController]);

    function HomeController($rootScope, $scope, HomeServices) {
        self = this;
        $rootScope.pageTitle = 'Home';
        self.doodleBugs = [];

        self.getHighestRating = function(bugObject) {
          var highestRating = Math.max(bugObject.attributes.speed, Math.max(bugObject.attributes.strength, bugObject.attributes.intelligence));
          return highestRating;
        }

        self.formatName = function (bugObject) {
            
            return bugObject.name + ':bug';
        }

        HomeServices.getAllBugs().then(
        function(result) {
            self.doodleBugs = result;
            console.log(result);
        },
        function(err) {
            console.log('Error saving to endpoint: ', err);
        });

    };


})();
