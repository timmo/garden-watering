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

  $scope.runButtonClass = function () {
    if (typeof $scope.status == "undefined") {
      return "";
    }
    if ($scope.status.program.status == "RUNNING") {
      return "hide";
    }
  }
  $scope.stopButtonClass = function () {
    if (typeof $scope.status == "undefined") {
      return "";
    }
    if ($scope.status.program.status != "RUNNING") {
      return "hide";
    }
  }

  $scope.updateStatus();

}
