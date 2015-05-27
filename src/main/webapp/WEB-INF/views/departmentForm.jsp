<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page session="false" %>
<html>
<head>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="<c:url value="/css/my.css"/>" type="text/css">
</head>
<body>
<div class="container">
    <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-6">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <div class="custom">${not empty id_dep ? 'Edit Department' : 'Create Department' }</div>
                </div>
                <div class="container-fluid">
                    <form:form method="post" commandName="departmentForm" class="form" role="form"
                               action="${not empty id_dep ? '/departments/editValidator.html' : '/departments/creator.html'}"
                            >
                        <div class="form-group">


                            <label for="title">Title:</label>
                            <form:input path="title" type="text" class="form-control" id="title" name="title"
                                        value='${title}'/>
                            <form:input path="id_dep" type="hidden" id="id_dep" name="id_dep" value="${id_dep}"/>
                            <span class="alarma"><form:errors path="title"/></span>

                        </div>

                        <button type="submit" class="btn btn-default">Submit</button>

                    </form:form>
                </div>
            </div>
        </div>
        <div class="col-sm-2"></div>
    </div>
</div>
</div>
</body>
</html>

