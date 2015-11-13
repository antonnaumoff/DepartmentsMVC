/// <reference path='./../../all.ts' />

module myApp {

    export class DepartmentService implements IDepartmentService {

        static $inject = ['$log', '$http', '$q'];

        constructor(private $log:ng.ILogService,
                    private $http:ng.IHttpService,
                    private $q:any) {
        }

        public getDepartments():any {
            return this.$q((resolve, reject) => {
                this.$http.post('/getDepartmentList', null).then(response => {
                    resolve(response['data']);
                }, (error) => {
                    resolve([]);
                });
            });
        }
    }
}