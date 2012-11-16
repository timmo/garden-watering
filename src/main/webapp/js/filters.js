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
            });
