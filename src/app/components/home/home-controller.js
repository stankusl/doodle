(function() {
    'use strict';
    angular.module('application').controller('HomeController', ['$rootScope', '$scope', 'HomeServices', 'orderByFilter', HomeController]);

    function HomeController($rootScope, $scope, HomeServices, orderBy) {
        self = this;
        $rootScope.pageTitle = 'Home';
        self.doodleBugs = [];
        self.compareEnabled = true;
        self.comparisonArray = [];

        self.orderReverse = {};

        self.sortBy = function(propertyName) {
          (propertyName !== null && self.propertyName === propertyName) ? !(self.orderReverse) : false;
          self.propertyName = propertyName;
          self.doodleBugs = orderBy(self.doodleBugs, self.propertyName, self.orderReverse);
        }

        self.clickBug = function(bugIndex) {

          if( (self.comparisonArray).length < 2  ) {

            var isInArray = false;

            // Check if item alread exists in current array
            angular.forEach(self.comparisonArray, function(value, index) {
              console.log('comparison array itterates', index);
              if( value.name == self.doodleBugs[bugIndex].name ) {
                self.comparisonArray.splice(index, 1);
                isInArray = true;
              }
            });


            // Item doesnt exist, push item into array.
            if(!isInArray) {
              self.comparisonArray.push(self.doodleBugs[bugIndex])
            }
            // Item Exists, find item and remove it




          }

          else {
            alert("You can only compare two items!");
            return;
          }

          console.log(self.comparisonArray);
          console.log(bugIndex);
        }

        self.isGreater = function(value1, value2) {
          if( parseInt(value1) > parseInt(value2) ) {
            return 'greater';
          }
          else {
            return 'leser';
          };

          if( parseInt(value1) === parseInt(value2) ){
            return '';
          }

        }

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
