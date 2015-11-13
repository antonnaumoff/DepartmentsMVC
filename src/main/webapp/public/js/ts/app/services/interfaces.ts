/// <reference path='./../../all.ts' />

module myApp {

    export interface IService{

    }

    export interface IDepartmentService extends IService {
        getDepartments():any;
    }

    export interface  IEmployeeService extends IService{
        getEmployees(dep_id:any):any;
    }
}

