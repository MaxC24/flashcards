

app.directive('flashCard', function(){
    return {
        restrict: 'E',
        templateUrl: '/directives/flashcards/flashcards.directive.html',
        scope: {
            flashcard: '=flashCard'
        }
    };
});
