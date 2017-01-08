(function() {
    'use strict';
    angular.module('application').controller('HomeController', ['$rootScope', '$scope', 'HomeServices', 'orderByFilter', '$filter', HomeController]);

    function HomeController($rootScope, $scope, HomeServices, orderBy, $filter) {
        self = this;
        $rootScope.pageTitle = 'Home';
        self.doodleBugs = [];
        self.compareEnabled = true;
        self.comparisonArray = [];
        self.reverse = true;
        self.orderReverse = {};

        self.sortBy = function(propertyName) {
          self.orderReverse = (propertyName !== null && self.propertyName === propertyName) ? !self.orderReverse : false;
          self.propertyName = propertyName;
          self.doodleBugs = orderBy(self.doodleBugs, self.propertyName, self.orderReverse);
        }

        self.clickBug = function(bugId) {

          if( (self.comparisonArray).length < 2  )
          {
            var isInArray = false;
            // Check if item alread exists in current array
            angular.forEach(self.comparisonArray, function(value, index) {
              if( value.name == $filter('filter')(self.doodleBugs, {'id' :bugId})[0].name ) {
                self.comparisonArray.splice(index, 1);
                isInArray = true;
              }
            });
            // Push into comarison array
            if(!isInArray) {
              self.comparisonArray.push($filter('filter')(self.doodleBugs, {'id' :bugId})[0])
            }
          }

          else
          {
            // Remove if already selected
            angular.forEach(self.comparisonArray, function(value, index) {
              if( value.name == $filter('filter')(self.doodleBugs, {'id' :bugId})[0].name ) {
                self.comparisonArray.splice(index, 1);
              }
            });
          }
        }

        self.bugIsInCompare = function(bugId) {
            if ( $filter('filter')(self.comparisonArray, {'id' :bugId})[0] ) {
              return true;
            }
            return false;
        }

        self.bugCompare = function(value1, value2) {
          if(value1 && value2) {
            if (value1 > value2) {
              return 'greater'
            }
            else {
              return 'leser'
            }
          }
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
        },
        function(err) {
            console.log('Error retrieving from endpoint: ', err);
        });

    };


})();
