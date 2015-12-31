app.controller('DashboardController', ['$scope','$http','$location','DataService',
                                       function ($scope,$http, $location, DataService) {
    $scope.user = {};
    var url = '/data/user.json'
    
    //Simple AJAX GET 
        $http({
          method: 'GET',
          url: url
        }).then(function successCallback(response) {
            console.log(typeof(response));
            $scope.user = response.data;
            
          }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });
    
    $scope.submit = function(){
        DataService.addProduct($scope.user);
        $location.path("/users")
    }
}]);