<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<html ng-app="myApp">
<head>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
    <script type="application/javascript"
            src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.js"></script>
    <script src="/angular/angular-route.js"></script>
    <script src="/angular/lodash.js"></script>
    <script src="/angular/restangular.js"></script>
    <script src="/angular/controllers.js"></script>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="<c:url value="/css/my.css"/>" type="text/css">

    <title>Welcome!</title>
</head>

<body ng-controller="MainController">
<ng-view></ng-view>
<div class="container">

    <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">

            <div class="login">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <div class="custom">Please login into a system</div>
                    </div>
                    <div class="container-fluid">
                        <form name="loginform" class="form" role="form">
                            <div class="form-group">
                                <label for="userName">Username:</label>
                                <input type="text" class="form-control" id="userName" name="username"
                                       ng-model="user.username" required ng-minlength="5"/>
                                <span ng-show="loginform.username.$error.required">Required</span>
                                <span ng-show="loginform.username.$error.minlength">min 5 chars</span>
                                <span class="alarma">{{errors.username}}</span>
                            </div>
                            <div class="form-group">
                                <label for="password">Password:</label>
                                <input type="password" class="form-control" id="password" name="password"
                                       ng-model="user.password" required ng-minlength="5"/>
                                <span ng-show="loginform.username.$error.required">Required</span>
                                <span ng-show="loginform.password.$error.minlength">min 5 chars</span>
                                <span class="alarma">{{errors.password}}</span>
                            </div>

                            <button ng-click="validate()" class="btn btn-default">Submit</button>
                        </form>
                        <span ng-bind="message.string" class="alarma"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-4">
        </div>
    </div>
</div>


<div>
</div>
</body>
</html>
