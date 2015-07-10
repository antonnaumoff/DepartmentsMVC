<%@ page contentType="text/html; charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="security" uri="http://www.springframework.org/security/tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="<c:url value="/css/my.css"/>" type="text/css">
</head>
<body>

<div class="container">
    <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-8">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <div class="custom">Employee List</div>
                </div>
                <table class="table-striped">
                    <thead>
                    <tr class="table-header">
                        <td>Title</td>
                        <td>First Name</td>
                        <td>Second Name</td>
                        <td>Salary</td>
                        <td>Date</td>
                        <td class="my-table-cell3">
                            <form action="${pageContext.request.contextPath}/employees/employeeFormHandlerForCreation.html"
                                  method="get">
                                <input type="hidden" name="id_dep" value="${id_dep}"/>
                                <button type="submit" class="btn btn-default btn-lg">
                                    <span class="glyphicon glyphicon-plus"></span>
                                </button>
                            </form>
                        </td>
                        <td class="my-table-cell3">
                            </form>
                            <form action="${pageContext.request.contextPath}/departments/list.html" method="get">
                                <button type="submit" class="btn btn-default btn-lg">
                                    <span class="glyphicon glyphicon-th-list"></span>
                                </button>
                            </form>
                        </td>
                    </tr>
                    </thead>
                    <tbody>
                    <c:forEach var="emp" items="${list}">
                        <tr class="my-table-cell">
                            <td><c:out value="${emp.job_title}"/></td>

                            <td><c:out value="${emp.first_name}"/></td>

                            <td><c:out value="${emp.second_name}"/></td>

                            <td><c:out value="${emp.salary}"/></td>

                            <td><c:out value="${emp.date}"/></td>

                            <td class="my-table-cell3">
                                <security:authorize
                                        access="hasRole('ROLE_ADMIN')">
                                    <form action="${pageContext.request.contextPath}/employees/employeeDeleting.html"
                                          method="post">
                                        <input type="hidden" name="id" value="${emp.id}"/>
                                        <input type="hidden" name="id_dep" value="${id_dep}">
                                        <button type="submit" class="btn btn-default btn-lg">
                                            <span class="glyphicon glyphicon-remove"></span>
                                        </button>
                                    </form>
                                </security:authorize>
                            </td>

                            <td class="my-table-cell3">
                                <security:authorize
                                        access="hasRole('ROLE_ADMIN')">
                                    <form action="${pageContext.request.contextPath}/employees/employeeFormHandlerForEditing.html"
                                          method="get">
                                        <input type="hidden" name="id" value="${emp.id}"/>
                                        <button type="submit" class="btn btn-default btn-lg">
                                            <span class="glyphicon glyphicon-pencil"></span>
                                        </button>
                                    </form>
                                </security:authorize>
                            </td>

                        </tr>
                    </c:forEach>
                    </tbody>

                </table>
            </div>
        </div>
        <div class="col-sm-2">
            <form action="/logout">
                <button type="submit" class="btn btn-primary">Logout ${loginId}</button>
            </form>
        </div>
    </div>
</div>

</body>


