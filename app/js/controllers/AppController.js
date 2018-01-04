
(function () {
    'use strict';

    angular.module('AngularMaterial')
        .controller('AppCtrl', appCtrl);

    appCtrl.$inject = ['$scope', '$timeout', '$mdSidenav'];
    function appCtrl($scope, $timeout, $mdSidenav) {
        $scope.toggleLeft = buildDelayedToggler('left');

        function buildDelayedToggler(navID) {
            return debounce(function () {
                $mdSidenav(navID).toggle();
            }, 200);
        }

        function debounce(func, wait, context) {
            var timer;

            return function debounced() {
                var context = $scope,
                    args = Array.prototype.slice.call(arguments);
                $timeout.cancel(timer);
                timer = $timeout(function () {
                    timer = undefined;
                    func.apply(context, args);
                }, wait || 10);
            };
        }
    }
})();