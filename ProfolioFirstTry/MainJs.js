var app = angular.module("app", ["ngRoute"])
app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "Views/home.html",
        controller: "HomeController"
    })
    .when("/contact", {
        templateUrl: "Views/contact.html",
        controller: "ContactsController"
    })
    .otherwise({
        templateUrl: "Views/error.html"
    })
});