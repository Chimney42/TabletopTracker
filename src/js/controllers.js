tabletopTracker.controller('NaviController', ['$scope',
    function($scope) {
        $scope.partial = 'src/views/index.php';
        
        $scope.items = [
            {
                'name' : 'Add Game',
                'link' : 'src/views/game/addGame.php'
            }
        ];
    }
]);