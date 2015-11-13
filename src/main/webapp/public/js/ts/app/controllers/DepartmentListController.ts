/// <reference path='../../all.ts' />
module myApp {

    export class DepartmentListController {

        static $inject = ['departments', '$http', '$state'];

        constructor(public departments:any,
                    private $http:ng.IHttpService,
                    private $state:angular.ui.IStateService) {
        };

        public employeeList(id:number):void {
            this.$state.go('main.employee', {'dep_id': id});
        };

        public deleting(dep_id:number):void {
            alert("Deleting Department" + dep_id);
        };

        public editing(dep_id:number):void {
            alert("Editing Department" + dep_id);
        };

        public createDepartment():any {

        };

        public logout() {
            this.$state.go('main.login');
        };
    }
}




