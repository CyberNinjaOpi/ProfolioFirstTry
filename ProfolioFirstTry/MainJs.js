var app = angular.module("app", ["ngRoute"])
app.config(function ($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: "Views/home.html",
		controller: "HomeController"
	})
	.when("/home2", {
		templateUrl: "Views/home2.html",
		controller: "Home2Controller"
	})
	.when("/todoapp", {
		templateUrl: "Views/todoapp.html",
		controller: "ToDoController"
	})
	.when("/quizapp", {
		templateUrl: "Views/quizapp.html",
		controller: "QuizController"
	})
	.when("/spaceapp", {
		templateUrl: "Views/spaceapp.html",
		controller: "SpaceShipController"
	})
	.when("/spaceport", {
		templateUrl: "Views/spaceport.html",
		controller: "SpacePortController"
	})
	.when("/chirper", {
		templateUrl: "Views/chirper.html",
		controller: "ChirperController"
	})
    .when("/contact", {
    	templateUrl: "Views/contact.html",
    	controller: "ContactsController"
    })
    .otherwise({
    	templateUrl: "Views/error.html"
    })
});