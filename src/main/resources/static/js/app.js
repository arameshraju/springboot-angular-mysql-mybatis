var app=angular.module('myApp',[ ]);
app.config(function($httpProvider){
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
});

app.controller('myCtrl',myCtrl);

myCtrl.$inject=['$scope','$http'];
function myCtrl($scope,$http){
$scope.authenticated=false;
$scope.login=function(){
    var headers =  {
					authorization : "Basic "
							+ btoa("user:ramesh")
} ;
$http.get('/user/', {
					headers : headers
				}).success(function(response) {
                                    console.log(" ::" +angular.toJson(response));
//					if (response.data.name) {
						$scope.authenticated = true;
//					} else {
//						$scope.authenticated = false;
//					}
//					callback && callback($scope.authenticated);
				},function(error){
                                     console.log(" ::" +angular.toJson(error));
                                    $scope.authenticated = false;
                                });
}

$scope.getresponse=function(){
 $http.get('/resource/').success(function(data) {
    $scope.greeting = data;
  });
};
$scope.getresponse();
$scope.logout=function(){
 $http.post('logout', {}).finally(function() {
					$scope.authenticated = false;
					$location.path("/");
});
};
}
   
