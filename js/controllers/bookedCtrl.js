angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, mainSrv) {
  $scope.travelInfo = mainSrv.travelInfo;

  for (var i = 0; i < $scope.travelInfo.length; i++) {
  // debugger;
    if ($scope.travelInfo[i].id == $stateParams.id) {
      $scope.cityName = $scope.travelInfo[i].city;
      $scope.country = $scope.travelInfo[i].country;
      $scope.bookedImg = $scope.travelInfo[i].image;
    }
  }

})
