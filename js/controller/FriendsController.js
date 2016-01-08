angular.module('SampleAPP')
    .controller('FriendsController', ['$scope', '$http', '$location', 'DataService', FriendsController]);

function FriendsController($scope, $http, $location, DataService) {
     $scope.friends = DataService.getProducts();
        $scope.user = {"name":"Alan Turing","email":"abc@gmail.com"};
        $scope.user1 = {"name":"Stephen Hawkings","email":"stephen@gmail.com"};
}