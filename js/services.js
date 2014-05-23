var tabletopTracker = angular.module('tabletopTracker', ['ui.bootstrap']);

tabletopTracker.factory('dbService', ['$rootScope', '$http',
    function($rootScope, $http) {
        var dbService = function() {
            this.host = 'http://chimney42.iriscouch.com/tabletoptracker';
            
            this.getGameList = function() {
                var self = this;
                url = self.host + '_design/games/_view/list';

                $http({method: 'GET', url: url}).
                success(function(data, status, headers, config) {
                    console.log(data);
                }).
                error(function(data, status, headers, config) {
                  console.log('error getting game list');
                });
            };
        };
    }
]);