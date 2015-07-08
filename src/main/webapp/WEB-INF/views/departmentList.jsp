<%@ page pageEncoding="UTF-8" contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" type="text/css">
    <link rel="stylesheet" href="<c:url value="/css/my.css"/>" type="text/css">
</head>
<body>

<div class="container">
    <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-8">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <div class="custom">Departments List</div>
                </div>


                <table class="table-striped">
                    <thead>
                    <tr class="table-header">
                        <td>Title</td>
                        <td class="my-table-cell3"></td>
                        <td class="my-table-cell3"></td>
                        <td class="my-table-cell3">
                            <form action="${pageContext.request.contextPath}/departments/departmentForm.html"
                                  method="get">
                                <button type="submit" class="btn btn-default btn-lg">
                                    <span class="glyphicon glyphicon-plus"></span>
                                </button>
                            </form>
                        </td>
                    </tr>
                    </thead>

                    <tbody>
                    <c:forEach var="dep" items="${department}">


                        <tr class="my-table-cell">
                            <td><c:out value="${dep.title}"/></td>

                            <td class="my-table-cell3">
                                <form action="${pageContext.request.contextPath}/departments/delete.html" method="post">
                                    <input type="hidden" name="id" value="${dep.id}"/>
                                    <button type="submit" class="btn btn-default btn-lg">
                                        <span class="glyphicon glyphicon-remove"></span>
                                    </button>
                                </form>
                            </td>
                            <td class="my-table-cell3">
                                <form action="${pageContext.request.contextPath}/departments/edit.html" method="get">
                                    <input type="hidden" name="id" value="${dep.id}"/>
                                    <button type="submit" class="btn btn-default btn-lg">
                                        <span class="glyphicon glyphicon-pencil"></span>
                                    </button>
                                </form>

                            </td>

                            <td class="my-table-cell3">
                                <form action="${pageContext.request.contextPath}/employees/list.html" method="get">
                                    <input type="hidden" name="id_dep" value="${dep.id}"/>
                                    <button type="submit" class="btn btn-default btn-lg">
                                        <span class="glyphicon glyphicon-th-list"></span>
                                    </button>
                                </form>
                            </td>
                        </tr>
                    </c:forEach>

                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-sm-2">
            <form action="/logout">
                <button type="submit" class="btn btn-primary">Logout</button>
            </form>
        </div>

    </div>
</div>
</body>
</html>
