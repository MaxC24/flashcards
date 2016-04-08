var app = angular.module('flashCards', []);

app.factory('FlashCardsFactory', function ($http) {
    return {
        getFlashCards: function () {
            return $http.get('/cards')
            .then( function(allCards){
                return allCards.data;
            });
        },
        getCategoryCards: function(category){

            var configObj = {
        		params: {
        			category: category
        		}
        	};
            return $http.get('/cards', configObj)
            .then(function(response){
                return response.data;
            });
        }
    };
});

app.factory('ScoreFactory', function($http){
    return {
        correct: 0,
        incorrect: 0
    };
});

app.controller('StatsController', function($scope, ScoreFactory){
     $scope.scores = ScoreFactory;
});
