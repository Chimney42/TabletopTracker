tabletopTracker.controller('NaviController', ['$scope',
    function($scope) {
        $scope.partial = 'views/index.html';
        
        $scope.items = [
            {
                'name' : 'Add Game',
                'link' : 'views/game/addGame.html'
            }
        ];
        
        $scope.goTo = function(link) {
            $scope.partial = link;
        };
    }
]);