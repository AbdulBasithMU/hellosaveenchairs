app.controller('homeController',function($scope,uibDateParser){
	$scope.sampleValue = "helloWorld!";
	  $scope.format = 'yyyy/MM/dd';
  	  $scope.date = new Date();
});