var myApp = angular.module('myApp', []);
myApp.controller("ViewController", function ($scope, $http) {

    $scope.permission = {};

    $http.get("/permission").success(function (data, status, headers, config) {
        $scope.permission = data;
    }).error(function (data) {
        alert(data);
    });


});