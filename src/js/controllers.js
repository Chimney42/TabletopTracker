tabletopTracker.controller('NaviController', ['$scope',
    function($scope) {
        $scope.partial = 'src/views/index.php';
        
        $scope.items = [
            {
                'name' : 'Add Game',
                'link' : 'src/views/game/addGame.php'
            }
        ];
        
        $scope.goTo = function(link) {
            $scope.partial = link;
        };
    }
]);

tabletopTracker.controller('GameController', ['$scope',
    function($scope) {

    }
]);