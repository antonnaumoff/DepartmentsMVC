<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title>LOGIN</title>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="<c:url value="/css/my.css"/>" type="text/css">
</head>

<body onload='document.f.j_username.focus();'>

<div class="container">
    <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">

            <div class="panel panel-primary">
                <div class="panel-heading">
                    <div class="login-form-title" style="text-align:center; font-size:x-large">Login with Username and
                        Password
                    </div>
                </div>

                <div class="container-fluid">
                    <form name='f' method='POST' class="form"
                          action='/login'>
                        <div class="form-group">
                            <label for="user">User:</label>
                            <input type="text" class="form-control" name="j_username" id="user"/>
                        </div>
                        <div class="form-group">
                            <label for="password">Password:</label>
                            <input type="password" class="form-control" name="j_password" id="password"/>
                        </div>
                        <div class="form-group">
                            <label for="remember_me" class="inline" >Remember me</label>
                            <input type="checkbox" name="_spring_security_remember_me" id="remember_me"/>
                        </div>

                        <div class="form-group">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                        <div class="form-group">
                            <button type="reset" class="btn btn-primary">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-sm-3"></div>
    </div>
</div>
</body>
</html>
