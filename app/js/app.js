
angular.module('AngularMaterial', ['ui.router', 'ngMaterial'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'tpls/home.html',
                controller: 'HomeController'
            });

        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode(true).hashPrefix('!');
    }
]);

angular.element(document).ready(function() {
    angular.bootstrap(document, ['AngularMaterial']);
});
