app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {

	$scope.variable = true;
	FlashCardsFactory.getFlashCards()
	.then(function(cards){
		$scope.flashCards = cards;
		$scope.variable = false;
	});


	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
			if(answer.correct){
				ScoreFactory.correct ++;
			} else{
				ScoreFactory.incorrect ++;
			}
		}
	};

	$scope.getCategoryCards = function(category){
		$scope.variable = true;
		FlashCardsFactory.getCategoryCards(category)
		.then(function(cards){
			$scope.flashCards = cards;
			$scope.variable = false;
		});
	};

	$scope.categories = [
	    'MongoDB',
	    'Express',
	    'Angular',
	    'Node'
	];
});
