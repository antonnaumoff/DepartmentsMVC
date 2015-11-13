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
            this.$stateProvider.state('main.login', RouterConfig.loginState());
            this.$stateProvider.state('main.departments', RouterConfig.departmentsState());
            this.$stateProvider.state('main.employee', RouterConfig.employeeState());
            this.$urlRouterProvider.otherwise('/login');
        }

        private static mainState():ng.ui.IState {
            return {
                abstract: true,
                templateUrl: '/template/index.html',
                controller: 'MainController as main'
            }
        }

        private static loginState():ng.ui.IState {
            return {
                url: '/login',
                templateUrl: '/template/loginForm.html'
            }
        }

        private static departmentsState():ng.ui.IState {
            return {
                url: '/departmentList',
                templateUrl: '/template/departmentList.html',
                controller: 'DepartmentListController as dep',
                resolve: {
                    departments: ['DepartmentService', departmentService => departmentService.getDepartments()]
                }
            }
        }

        private static employeeState():ng.ui.IState {
            return {
                url: '/employeeList/:dep_id',
                templateUrl: '/template/employeeList.html',
                controller: 'EmployeeListController as emp',
                resolve: {
                    employees: ['EmployeeService', '$stateParams', (employeeService, $stateParams) => {
                        return employeeService.getEmployees($stateParams.dep_id);
                    }]
                }
            }
        }
    }
}