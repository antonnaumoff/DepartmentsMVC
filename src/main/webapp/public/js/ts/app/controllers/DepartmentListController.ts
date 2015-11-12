/// <reference path='../../all.ts' />
module myApp {
    import IHttpService = angular.IHttpService;
    import ILocationService = angular.ILocationService;
    import IRootScopeService = angular.IRootScopeService;
    export class DepartmentListController {

        static $inject = ['$http', '$state', '$rootScope'];

        public departments = {};

        constructor(private $http:IHttpService,
                    private $state:any,
                    private $rootScope:IRootScopeService) {

            this.$http.post('/getDepartmentList', null)
                .success((data)=> {
                    if (data[0] === 'DataBaseException') {
                        //TODO redirect to error page
                    } else {
                        this.departments = data;
                    }
                })
                .error(()=> {
                    alert("server is under reconstruction, try later");
                })
        };

        public employeeList(dep_id:number):void {
            this.$rootScope['dep_id'] = dep_id;
            this.$state.go('main.employee');
        };

        public deleting(dep_id:number):void {
            alert("Deleting Department" + dep_id);
        };

        public editing(dep_id:number):void {
            alert("Editing Department" + dep_id);
        };

        public createDepartment():void {
            alert("Create Department");
        };

    }
}




