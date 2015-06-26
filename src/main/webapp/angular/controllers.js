var myApp = angular.module('myApp', ['ngRoute', 'restangular']);

myApp.config(['$routeProvider', function ($routeProvider) {


    $routeProvider
        .when('/departmentList', {
            templateUrl: "/template/departmentList.html",
            controller: 'DepartmentListController'
        })
        .when('/employeeList', {
            templateUrl: "template/employeeList.html",
            controller: 'EmployeeListController'
        }).when('/logout', {
            templateUrl: "/template/loginForm.html"

        }).when('/restPractices', {
            templateUrl: "template/restPractices.html",
            controller: "RESTController"
        })
}]);

myApp.controller("MainController", ['$scope', '$http', '$location', '$log', function ($scope, $http, $location, logger) {

    logger.debug('Hello');

    $scope.permission = {};

    $scope.errors = {};

    $scope.message = {};

    $scope.clean = function () {
        $scope.errors = {};
        $scope.message = {
            string: ""
        };
    };

    $scope.validate = function () {
        $scope.clean();
        $http.post("/validate", $scope.user)
            .success(function (data) {
                if (data[0] === "login failed") {
                    /*Empty data*/
                    $scope.message.string = "Login failed, try again";
                } else {
                    if (data[0] === "login success") {
                        /*data[1] - permissions, */
                        $scope.permission = data[1];
                        $(".container").remove();
                        $location.path("/departmentList");
                        //TODO hide form /load department list
                    } else {
                        /*data[0] - "validation failed" , data[1] - errors*/
                        $scope.errors = data[1];
                    }
                }
            }).error(function () {
                alert("server is under reconstruction, try later");
            });
    };

    $scope.logout = function () {
        $scope.permission = {};
        $location.path("/logout");
    }
}]);

myApp.controller("DepartmentListController", ['$scope', '$http', '$location', '$rootScope', function ($scope, $http, $location, $rootScope) {

    $scope.departments = {};

    $http.post("/getDepartmentList")
        .success(function (data) {
            if (data[0] === 'DataBaseException') {
                //TODO redirect to error page
            } else {
                $scope.departments = data;
            }
        }).error(function () {
            alert("server is under reconstruction, try later");
        });

    $scope.employeeList = function (dep_id) {
        $rootScope.dep_id = dep_id;
        $location.path("/employeeList");
    };

    $scope.deleting = function (dep_id) {
        alert("Deleting Department" + dep_id);
    };

    $scope.editing = function (dep_id) {
        alert("Editing Department" + dep_id);
    };

    $scope.createDepartment = function () {
        alert("Create new Department");
    };

    $scope.practices = function () {
        $location.path("/restPractices");
    };

}]);

myApp.controller("EmployeeListController", ['$scope', '$http', '$location', '$rootScope', function ($scope, $http, $location, $rootScope) {

    $scope.employees = {};

    $http.post("/getEmployeeList/" + $scope.dep_id)
        .success(function (data) {
            if (data[0] === "DataBaseException") {
                //TODO Redirect to error page
            } else {
                $scope.employees = data;
            }
        })
        .error(function () {
            alert("server is under reconstruction, try later");
        });

    $scope.departmentList = function () {
        $rootScope.dep_id = 0;
        $location.path("/departmentList");
    };

    $scope.createEmployee = function (dep_id) {
        alert("Creating new Employee" + dep_id);
    };

    $scope.editing = function (id) {
        alert("Editing Employee" + id);
    };

    $scope.deleting = function (id, dep_id) {
        alert("Deleting Employee " + id + "in Department with id " + dep_id);
    };

}]);

myApp.factory('DepartmentService', function (Restangular) {
    var dao = Restangular.withConfig(function (RestangularConfigurer) {
        RestangularConfigurer.setBaseUrl("/rest");
    });


    return {

        getAll: function () {
            return dao.all('departments').getList().then(function (departments) {
                angular.forEach(departments, function (department) {
                    console.log(department);
                });

            });
        },

        getById: function (id) {
            return dao.one('departments', id).get().then(function (department) {
                console.log(department);
            });
        },

        /*  author.customPOST({body: "Ari's Bio"}, // post body
         "biography",  // route
         {},           // custom params
         {});          // custom headers*/
        //TODO customPOST

        create: function (title) {

            var headers = {'Content-Type': 'application/x-www-form-urlencoded'};
            return dao.all('').customPOST('title=' + title, 'departments', undefined, headers);
        },

        edit: function (id, title) {

            var headers = {'Content-Type': 'application/x-www-form-urlencoded'};
            return dao.all('').customPUT({'title': title, 'id': id}, 'departments', undefined, headers);
        },

        delete: function (id) {
            return dao.one('departments', id).remove();
        }
    }
});

myApp.controller("RESTController", ['$scope', '$http', '$location', '$rootScope', 'DepartmentService', function ($scope, $http, $location, $rootScope, DepartmentService) {

    $scope.id = '';

    $scope.title = "Basic";

    $scope.getAll = function () {
        return DepartmentService.getAll();
    };

    $scope.getById = function (id) {
        return DepartmentService.getById(id);
    };

    $scope.create = function () {
        return DepartmentService.create($scope.title)
    };

    $scope.delete = function (id) {
        return DepartmentService.delete(id);
    };

    $scope.edit = function () {
        return DepartmentService.edit($scope.id, $scope.title);
    }


}]);


