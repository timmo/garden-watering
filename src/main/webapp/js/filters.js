angular.module('filters', [])
    .filter('firstUpTailLower', function () {
              return function (status) {
                status = status.toLowerCase();
                status = status[0].toUpperCase() + (status.length > 1 ? status.substr(1) : "");
                return status;
              };
            });
