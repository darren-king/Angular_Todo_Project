var toDoApp = angular.module('toDoApp', ['ngRoute'/*, 'RouteControllers'*/]);
// above we have declared the app and injected the ngRoute dependency written within an array - the RouteControllers
// dependency is just added below as a controller rather than as a seperate controller module. 


//this section is where we configure our application with routes....

toDoApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){ // passing through dependecny routeProvider

	$locationProvider.html5Mode(true);   // --> use for pretty URLs but cannot get it to work with refreshing active 

	$routeProvider
		.when('/', {								//no # added here - only added in href 
			templateUrl: 'views/home.html',
			controller: 'HomeController'
		})
		.when('/accounts/register', {
			templateUrl: 'views/register.html',
			controller: 'RegisterController'
		})
		.otherwise({
			redirectTo: '/'
		});

}]);


//this section is where we describe our controllers...

toDoApp.controller("HomeController", ["$scope", function($scope){

	$scope.title = "Welcome To my Angular ToDo App";

}]); 