var app=angular.module('myApp',[ ]);
app.controller('myCtrl',myCtrl);

myCtrl.$inject=['$scope','$http'];
function myCtrl($scope,$http){

 $http.get('/resource/').success(function(data) {
    $scope.greeting = data;
  });
}
   
