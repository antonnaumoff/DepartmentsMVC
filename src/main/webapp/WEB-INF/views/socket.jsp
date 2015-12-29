<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Echo</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <script src="js/socket.js">
    </script>
</head>
<body>
<div class="container">
    <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
            <div class="panel panel-primary">
                <div class="panel-heading">

                </div>
                <div class="container-fluid">
                    <div>
                        <input type="text" id="messageinput"/>
                    </div>
                    <div>
                        <button type="button" onclick="openSocket();">Open</button>
                        <button type="button" onclick="send();">Send</button>
                        <button type="button" onclick="closeSocket();">Close</button>
                    </div>
                    <!-- Server responses get written here -->
                    <div id="messages"></div>
                </div>
            </div>
        </div>

    </div>
</div>

</body>
</html>
