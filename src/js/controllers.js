tabletopTracker.controller('NaviController', ['$scope',
    function($scope) {
        $scope.partial = 'src/views/index.html';
        
        $scope.items = [
            {
                'name' : 'Add Game',
                'link' : 'src/views/game/addGame.html'
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