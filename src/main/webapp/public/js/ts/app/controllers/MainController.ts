/// <reference path='../../all.ts' />

module myApp {

    import IHttpService = angular.IHttpService;
    import ILogService = angular.ILogService;
    import IScope = angular.IScope;
    import IStateService = ng.ui.IStateService;

    export interface User {
        username: string;
        password: string;
    }

    export interface Message {
        string: string;
    }

    export class MainController {

        static $inject = ['$http', '$state', '$log'];

        public user:User = {username: null, password: null};
        public permission = {};
        public errors = {};
        public message:Message = {string: ""};

        constructor(private $http:IHttpService,
                    private $state:IStateService,
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
                        }
                    }
                })
                .error(()=> {
                    alert("server is under reconstruction, try later");
                });

        };

        public logout():void {
            this.permission = {};
            this.$state.go('main.login');
        };

        private clean():void {
            this.errors = {};
            this.message.string = "";
        };
    }
}



