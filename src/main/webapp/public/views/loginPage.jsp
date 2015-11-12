<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<html>
<head>
    <!-- inject:css -->

    <link rel="stylesheet" href="/public/dev/main.css">

    <!-- endinject -->
    <title>Welcome!</title>
</head>
<body>

<div id="main" ui-view></div>
<!-- inject:js -->

<script src="/public/dev/app.js"></script>

<!-- endinject -->

<script type="text/javascript">angular.bootstrap(document, ['myApp']);</script>

</body>
</html>
