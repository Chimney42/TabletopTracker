<html ng-app="tabletopTracker">
    <head>
        <script src="src/js/angular.min.js" type="text/javascript"></script>
        <script src="src/js/app.js" type="text/javascript"></script>
        <script src="src/js/services.js" type="text/javascript"></script>
        <script src="src/js/controllers.js" type="text/javascript"></script>
        <link rel="stylesheet" href="src/css/styles.css" type="text/css">
        <link rel="stylesheet" href="src/css/960.css" type="text/css">
    </head>
    <body>
        <div class="container_24">
            <div class="grid_24" ng-controller="naviController">
                <div class="navi grid_3 alpha" ng-repeat="item in items">
                    <div ng-click="goTo(item.link)">{{item.name}}</div>
                </div>
                <div id="content" ng-include="partial"></div>
            </div>
        </div>
    </body>
</html>