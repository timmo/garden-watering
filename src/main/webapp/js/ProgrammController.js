function ProgrammController($scope, $http) {

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

  $scope.setOutletDuration = function (outlet) {
    $http.post('/rest/outlet/' + outlet.id + "/duration/" + outlet.duration)
        .success(function () {
                   $scope.updateStatus();
                 });
  }
  $scope.setProgramStartTime = function (program) {
    $http.post('/rest/program/' + program.id + "/startTime/" + program.startTime)
        .success(function () {
                   $scope.updateStatus();
                 });
  }

  $scope.updateStatus();

}
