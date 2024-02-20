var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/home", {
      templateUrl: "./pages/home.html",
      controller: "homeCtrl",
    })
    .when("/about", {
      templateUrl: "./pages/about.html",
    })
    .when("/contact", {
      templateUrl: "./pages/contact.html",
    })
    .otherwise({
      template: "<h2>Không tìm thấy page </h2>",
    });
});

app.controller("homeCtrl", function ($scope) {
  $scope.message = "Home Page";
});
