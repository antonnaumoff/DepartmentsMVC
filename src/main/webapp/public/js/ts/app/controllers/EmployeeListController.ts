/// <reference path='../../all.ts' />
module myApp {

    export class EmployeeListController {

        static $inject = ['$http', '$state', '$rootScope'];

        public employees = {};

        constructor(private $http,
                    private $state,
                    private $rootScope) {

            this.$http.post('/getEmployeeList/' + this.$rootScope['dep_id'])
                .success((data)=> {
                    if (data[0] === "DataBaseException") {
                        //TODO Redirect to error page
                    } else {
                        this.employees = data;
                    }
                })
                .error(()=> {
                    alert("server is under reconstruction, try later");
                })
        };

        public departmentList():void {
            this.$rootScope['dep_id'] = 0;
            this.$state.go('main.department');
        };

        public createEmployee(dep_id:number):void{
            alert("Creating new Employee" + dep_id);
        };

        public editing(id:number):void{
            alert("Editing Employee" + id);
        }

        public deleting(id:number, dep_id:number){
            alert("Deleting Employee " + id + "in Department with id " + dep_id);
        }
    }
}


