/// <reference path='../../all.ts' />
module myApp {

    export class EmployeeListController {

        static $inject = ['$http', '$state', 'employees'];

        constructor(private $http:ng.IHttpService,
                    private $state:angular.ui.IStateService,
                    public employees:any) {
        };

        public departmentList():void {
            this.$state.go('main.departments');
        };

        public createEmployee(dep_id:number):void {
            alert("Creating new Employee" + dep_id);
        };

        public editing(id:number):void {
            alert("Editing Employee" + id);
        }

        public deleting(id:number, dep_id:number) {
            alert("Deleting Employee " + id + "in Department with id " + dep_id);
        }

        public logout() {
            this.$state.go('main.login');
        };
    }
}


