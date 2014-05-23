tabletopTracker.controller('NaviController', ['$scope', 
    function($scope) {
        $scope.partial = 'views/index.html';
        
        $scope.items = [
            {
                'name' : 'List Games',
                'link' : 'views/game/gameList.html'
            }, {
                'name' : 'Add Game',
                'link' : 'views/game/addGame.html'
            }
        ];
        
        $scope.goTo = function(link) {
            $scope.partial = link;
        };
    }
]);

tabletopTracker.controller('GameController', ['$scope', 'dbService',
    function($scope) {
        $scope.games = function() {
            return dbService.getGameList();
        };
    }
]);