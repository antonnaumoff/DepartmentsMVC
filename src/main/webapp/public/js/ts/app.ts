/// <reference path='all.ts' />
module myApp {

    import MainController = myApp.MainController;
    import DepartmentListController = myApp.DepartmentListController;
    import EmployeeListController = myApp.EmployeeListController;


    angular.module('myApp', ['ui.router'])
        .config(["$stateProvider", "$urlRouterProvider", ($stateProvider, $urlRouterProvider) => new RouterConfig($stateProvider, $urlRouterProvider)])
        .controller('MainController', MainController)
        .controller('DepartmentListController', DepartmentListController)
        .controller('EmployeeListController', EmployeeListController)
        .service('DepartmentService', DepartmentService)
        .service('EmployeeService', EmployeeService)
        .run(RunApp);
}
