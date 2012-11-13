/**
 * Created with IntelliJ IDEA.
 * User: maki
 * Date: 12.11.12
 * Time: 18:43
 * To change this template use File | Settings | File Templates.
 */

function ProgrammController($scope, $http) {
    $scope.status = sampleData;
    $scope.statusToString = function(statusEnum) {
        if (statusEnum == "OPEN") return "funzt";
        if (statusEnum == "CLOSED") return "aus die maus";
        return "n.n.";
    };
    $scope.startProgram = function() {
        console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx Start PRogram');
    };
    $scope.getStatus = function() {
        $http.get('/rest/status').success(function (data) {
            $scope.status = data;
        });
    }
}
