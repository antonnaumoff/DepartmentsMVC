module myApp {

    export class EmployeeService implements IEmployeeService {

        static $inject = ['$stateParams', '$log', '$http', '$q'];

        private dep_id:any;

        constructor(private $stateParams:angular.ui.IStateParamsService,
                    private $log:ng.ILogService,
                    private $http:ng.IHttpService,
                    private $q:any) {
        }

        public getEmployees(dep_id:any):any {
            //var dep_id = this.$stateParams['dep_id'];
            return this.$q((resolve, reject) => {
                this.$http.post('/getEmployeeList/' + dep_id, null).then(response => {
                    resolve(response['data']);
                }, (error) => {
                    resolve([]);
                });
            });
        }
    }
}