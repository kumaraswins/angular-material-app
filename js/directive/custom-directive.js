app.directive('studentInfo', function() {
   return {
    restrict: 'EAC',
    scope: {
      userInfo: '=info'
    },
    templateUrl: 'views/my-student.html'
  };
    
});