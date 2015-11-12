/// <reference path='./../all.ts' />

module myApp {
    export class RunApp {
        static $inject = ['$state'];

        constructor(private $state:any) {

                this.$state.go('main');

        }
    }
}