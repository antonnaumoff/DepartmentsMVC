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
                    <div class="custom">${empty id_dep ? 'Edit Employee' : 'Create Employee'}</div>
                </div>
                <div class="container-fluid">

                    <form:form method="post" commandName="employeeForm" class="form" role="form"
                               action="${pageContext.request.contextPath}${empty id_dep ? '/employees/edit.html' : '/employees/employeeCreator.html'}"
                            >
                        <div class="form-group">
                            <label for="jobTitle">Title:</label>
                            <form:input path="jobTitle" type="text" class="form-control" id="jobTitle" name="jobTitle"
                                        value='${jobTitle}'/>
                            <span class="alarma">${errors['jobTitle']}</span>
                        </div>


                        <div class="form-group">
                            <label class="contact_form_label" for="firstName">First Name:</label>
                            <form:input path="firstName" type="text" class="form-control" id="firstName"
                                        name="firstName"
                                        value='${firstName}'/>
                            <span class="alarma">${errors['firstName']}</span>
                        </div>


                        <div class="form-group">
                            <label class="contact_form_label" for="secondName">Second Name:</label>
                            <form:input path="secondName" type="text" class="form-control" id="secondName"
                                        name="secondName"
                                        value='${secondName}'/>
                            <span class="alarma">${errors['secondName']}</span>
                        </div>


                        <div class="form-group">
                            <label class="contact_form_label" for="salary">Salary:</label>
                            <form:input path="salary" type="text" class="form-control" id="salary" name="salary"
                                        value='${salary}'/>
                            <span class="alarma">${errors['salary']}</span>
                        </div>


                        <div class="form-group">
                            <label class="contact_form_label" for="date">Date:</label>
                            <form:input path="date" type="text" class="form-control" id="date" name="date"
                                        value='${date}'/>
                            <form:input path="id" type="hidden" id="id" name="id" value='${id}'/>
                            <form:input path="id_dep" type="hidden" name="id_dep" value="${id_dep}"/>
                            <span class="alarma">${errors['date']}</span>
                        </div>
                        <button type="submit" class="btn btn-default">Submit</button>

                    </form:form>
                </div>
            </div>
        </div>
        <div class="col-sm-2">
            <form action="${pageContext.request.contextPath}/logout.html"
                  method="get">
                <button type="submit" class="btn btn-default btn-lg">
                    <span class="glyphicon glyphicon-off"></span>
                </button>
            </form>
        </div>
    </div>
</div>
</div>
</body>
</html>

