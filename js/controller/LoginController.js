angular.module('SampleAPP')
    .controller('LoginController', ['$scope','$state', '$http', '$location', 'DataService', LoginController]);

function LoginController($scope,$state, $http, $location, DataService) {
     
    $scope.login = function() {
        $state.go("dashboard");
    }
}