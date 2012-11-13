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

  $scope.getStatus = function () {
    $http.get('/rest/status').success(function (data) {
      $scope.status = data;
    });
  }

  $scope.program = function (command) {
    $http.post("/rest/program?command=" + command)
    $scope.getStatus()
  };

  $scope.status = $scope.getStatus();

}
