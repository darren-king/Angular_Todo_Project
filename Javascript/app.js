var toDoApp = angular.module('toDoApp', ['ngRoute', 'angular-storage']); /*, 'RouteControllers'*/
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

toDoApp.controller("RegisterController", ["$scope", "UserAPIService", 'store', function($scope, UserAPIService, store){

	$scope.registrationUser = {};
	var URL = "https://morning-castle-91468.herokuapp.com/";


	$scope.login = function(){

		UserAPIService.callAPI(URL + "accounts/api-token-auth/", $scope.data).then(function(results){
			$scope.token = results.data.token;
			store.set("username", $scope.registrationUser.username);
			store.set("authToken",$scope.token);
			console.log($scope.token);
		}).catch(function(err){
			console.log(err.data);
		});

	}

	$scope.submitForm = function(){										//make sure you put $scope before the function as seen here. 
		
		if ($scope.registrationForm.$valid){
			$scope.registrationUser.username = $scope.user.username;
			$scope.registrationUser.password = $scope.user.password;
		}

		console.log("Username and Password entered!");
		console.log("Username: " + $scope.registrationUser.username);
		console.log("Password: " + $scope.registrationUser.password);

		UserAPIService.callAPI(URL + "accounts/register/", $scope.registrationUser).then(function(results){
			$scope.data = results.data;
			alert("You have successfully registered to Angular ToDo");
			$scope.login();
		}).catch(function(err){
			alert("Oops...something went wrong!");
			console.log(err);
		});

	}

}]);


//this section pertains to the addition of a User API service. 
//Services in Angular are generally used to make calls to APIs.

toDoApp.factory("UserAPIService", ["$http", function($http){

	UserAPIService = {
		callAPI: function(url,data){
			return $http.post(url,data);
		}
	};

	return UserAPIService;

}]);



