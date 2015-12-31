app.controller('FriendsController', ['$scope','$http','$location','DataService',
                                       function ($scope,$http, $location, DataService) {
    $scope.friends = DataService.getProducts();
}]);