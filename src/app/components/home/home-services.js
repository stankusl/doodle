(function() {
  angular.module('application').factory('HomeServices', ['$rootScope', '$http', '$q', '$log', HomeServices]);

  function HomeServices($rootScope, $http, $q, $log) {

      var bugsEndPoint = $rootScope.WebAPI + '/doodles.json';

      return {
          getAllBugs: getAllBugs
      };

      function getAllBugs() {

          var deferred = $q.defer();
          $http({
                  method: "GET",
                  url: bugsEndPoint,
              })
              .then(function(response) {
                  deferred.resolve(response.data);
              })
              .catch(function(response) {
                  $log.error('Error retrieving current user data: ' + status);
                  return $q.reject('Error retrieving current user data');
              });
          return deferred.promise;
      }

  }

})();
