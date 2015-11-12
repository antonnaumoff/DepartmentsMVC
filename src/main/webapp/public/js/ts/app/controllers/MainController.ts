/// <reference path='../../all.ts' />

module myApp {

    import IHttpService = angular.IHttpService;
    import ILocationService = angular.ILocationService;
    import ILogService = angular.ILogService;
    import IScope = angular.IScope;
    import IState = angular.ui.IState;

    export interface User {
        email: string;
        pass: string;
    }

    export interface Message {
        string: string;
    }

    export class MainController {

        static $inject = ['$scope', '$http', '$location', '$log'];

        public user:User = {email: null, pass: null};
        public permission = {};
        public errors = {};
        public message:Message = {string: ""};

        constructor(private $scope:IScope,
                    private $http:IHttpService,
                    private $state:any,
                    private $log:ILogService) {

            $log.debug('Hello from TypeScriptApp!!!');
        };


        public validate():void {
            this.clean();
            this.$http.post("/validate", this.user)
                .success((data)=> {
                    if (data[0] === "login failed") {
                        /*Empty data*/
                        this.message.string = "Login failed, try again";
                    } else {
                        if (data[0] === "login success") {
                            /*data[1] - permissions, */
                            this.permission = data[1];
                            $(".container").remove();
                            this.$state.go('main.departments');
                            //TODO hide form /load department list
                        } else {
                            if (data[0] === "login success") {
                                /*data[1] - permissions, */
                                this.permission = data[1];
                                $(".container").remove();
                                this.$state.go('main.departments');
                                //TODO hide form /load department list
                            } else {
                                /*data[0] - "validation failed" , data[1] - errors*/
                            }
                        }
                    }
                })
                .error(()=> {
                    alert("server is under reconstruction, try later");
                });
        };

        public logout():void {
            this.permission = {};
            this.$state.go('main');
        };

        private clean():void {
            this.errors = {};
            this.message.string = "";
        };
    }
}



