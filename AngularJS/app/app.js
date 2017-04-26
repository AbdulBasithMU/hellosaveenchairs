var app = angular.module('mainApp',['ui.router','ui.bootstrap']);

app.config(['$stateProvider', '$urlRouterProvider', '$qProvider' ,function($stateProvider,$urlRouterProvider,$qProvider){
			
			$qProvider.errorOnUnhandledRejections(false);
			$urlRouterProvider.otherwise("/home");

			$stateProvider
            
            .state('home', {
            	url: "/home",
            	templateUrl: 'app/view/home.html',
            	controller: 'homeController'
            })

            .state('nextPage', {
            	url: "/nextPage",
            	templateUrl: 'app/view/nextPage.html',
            	controller: 'nextPageController'
            })

}]);