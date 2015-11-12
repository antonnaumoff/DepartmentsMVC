/// <reference path='./../all.ts' />

module myApp {
    import IStateProvider = angular.ui.IStateProvider;
    import IUrlRouterProvider = angular.ui.IUrlRouterProvider;
    export class RouterConfig {
        constructor(private $stateProvider:ng.ui.IStateProvider,
                    private $urlRouterProvider:ng.ui.IUrlRouterProvider) {
            this.init();
        }

        private init():void {
            this.$stateProvider.state('main', RouterConfig.mainState());
            this.$stateProvider.state('main.departments', RouterConfig.departmentsState());
            this.$stateProvider.state('main.employee', RouterConfig.employeeState());
            this.$urlRouterProvider.otherwise('/');
        }

        private static mainState():ng.ui.IState {
            return {
                url: '/',
                templateUrl: '/template/loginForm.html',
                controller: 'MainController as main'
            }
        }


        private static departmentsState():ng.ui.IState {
            return {
                url: '/departmentList',
                templateUrl: '/template/departmentList.html',
                controller: 'DepartmentListController as dep'
            }
        }

        private static employeeState():ng.ui.IState {
            return {
                url: '/employeeList',
                templateUrl: '/template/employeeList.html',
                controller: 'EmployeeListController as emp',

            }
        }
    }
}