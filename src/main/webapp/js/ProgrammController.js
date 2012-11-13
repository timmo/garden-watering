function ProgrammController($scope, $http) {

  $scope.statusToString = function (statusEnum) {
    if (statusEnum == "OPEN") {
      return "Open";
    }
    if (statusEnum == "CLOSED") {
      return "Closed";
    }
    return "n.n.";
  };

  $scope.startProgram = function () {
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx Start PRogram');
  };

  $scope.getStatus = function () {
    $http.get('/rest/status').success(function (data) {
      $scope.status = data;
    });
  }

  $scope.status = $scope.getStatus();

}
