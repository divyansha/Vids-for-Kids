var quiz = angular.module('quizApp', []);

quiz.directive('quiz', function() {
    return {
	restrict: 'AE',
	scope: {},
	templateUrl: 'template.html',
	link: function(scope, elem, attrs) {
    scope.start = function() {
      scope.id = 0;
      scope.quizOver = false;
  	  scope.inProgress = true;
    	scope.getQuestion();
    };

    scope.getQuestion = function() {
    };

    scope.checkAnswer = function() {
    };
	}
    }
});

quiz.factory('quizFactory', function() {
	var questions = [
		{
			question: "Which force causes objects to slow down eventually?",
			options: ["Friction", "Gravity", "Upthrust", "Tension"],
			answer: 0
		},
		{
			question: "When did the second world war end?",
			options: ["1945", "1939", "1944", "1942"],
			answer: 0
		},
		{
			question: "Which was the first country to issue paper currency?",
			options: ["USA", "France", "Italy", "China"],
			answer: 3
		},
		{
			question: "Which city hosted the 1996 Summer Olympics?",
			options: ["Atlanta", "Sydney", "Athens", "Beijing"],
			answer: 0
		},
		{
			question: "Who invented telephone?",
			options: ["Albert Einstein", "Alexander Graham Bell", "Isaac Newton", "Marie Curie"],
			answer: 1
		}
	];

	return {
		getQuestion: function(id) {
			if(id < questions.length) {
				return questions[id];
			} else {
				return false;
			}
		}
	};
});


scope.getQuestion = function() {
	var q = quizFactory.getQuestion(scope.id);
	if(q) {
		scope.question = q.question;
		scope.options = q.options;
		scope.answer = q.answer;
	} else {
		scope.quizOver = true;
	}
};
