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

  $scope.updateStatus = function () {
    $http.get('/rest/status').success(function (data) {
      $scope.status = data;
    });
  }

  $scope.program = function (command) {
    $http.post("/rest/program?command=" + command)
    $scope.updateStatus()
  };

  $scope.showRunButton = function () {
    if (typeof $scope.status == "undefined") {
      return true;
    }
    return $scope.status.program.status != "RUNNING"
  }

  $scope.updateStatus();

}
