tabletopTracker.controller('naviController', ['$scope', 'gameService',
    function($scope, gameService) {
        $scope.partial = 'src/views/index.php';
        
        $scope.items = [
            {
                'name' : 'Add Game',
                'link' : 'src/views/game/addGame.php'
            }
        ];
    }
]);