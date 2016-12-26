(function() {
    'use strict';
    angular.module('application').controller('HomeController', ['$rootScope', '$scope', '$log', '$q', '$state', '$stateParams', 'HomeServices', HomeController]);

    function HomeController($rootScope, $scope) {
        self = this;
        $rootScope.pageTitle = 'Home';



        self.bugObj = function (options) {
            this.doodleName = options.name || 'unnamed';
            this.teamName = options.team || 'foo';
            this.attributes = {
                speed: options.attributes.speed,
                strength: options.attributes.strength,
                intelligence: options.attributes.intelligence
            };
            this.getHighestRating = function () {
                var highestRating = Math.max(this.attributes.speed, Math.max(this.attributes.strength, this.attributes.intelligence));
                return highestRating;
            };
            this.getName = function () {
                return this.doodleName;
            };
            this.formatName = function () {
                return this.doodleName + ':bug'
            }
        }


    };


})();
