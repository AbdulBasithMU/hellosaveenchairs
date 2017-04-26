app.controller('nextPageController',function($scope,$state){
	$scope.nextPageValue = "hello! How r u?";
	$scope.reDirectto = function(){
		$state.go("home");
	};
});