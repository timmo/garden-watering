angular.module('filters', [])
    .filter('ProgramStatus', function () {
              return function (status) {
                if (typeof status == "undefined") {
                  return "n.n";
                }
                status = status.toUpperCase();
                if (status == "RUNNING") {
                  return "Running";
                }
                if (status == "IDLE") {
                  return "Idle";
                }
                return "n.n.";
              };
            })
    .filter('firstUpTailLower', function () {
              return function (status) {
                status = status.toLowerCase();
                status = status[0].toUpperCase() + status.length > 1 ? status.substr(1) : "";
                return status;
              };
            });
