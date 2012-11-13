/**
 * Created with IntelliJ IDEA.
 * User: maki
 * Date: 12.11.12
 * Time: 18:43
 * To change this template use File | Settings | File Templates.
 */

function ProgrammController($scope, $http) {
//  $scope.status = sampleData;
  $http.get("/rest/status").success(function (data) {
    $scope.status = data;
  })
}