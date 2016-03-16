var user = {};
var responses = [];

function question1() {
	var name = prompt('What is your name?');

	if(name === null) { //if cancel pressed
		alert("Please enter your name");
		return question1();
	}

	user.name = name;
}

question1();

function question2() {
	var firstQuestion = prompt('Does null === 0 ? (Yes or No)');
	if (firstQuestion === null) {
		alert("Please answer either Yes or No");
		return question2();
	}
	if (firstQuestion.toLowerCase() === 'yes') {
		firstQuestion = true;
	} else if (firstQuestion.toLowerCase() === 'no') {
		firstQuestion = false;
	} else {
		alert("Please answer either Yes or No");
		return question2();
	}
	responses.push(firstQuestion);
}

question2();

function question3() {
	var js = prompt('What was the original name for JavaScript: Java, LiveScript, JavaLive, or ScriptyScript?');
	if (firstQuestion === null) {
    	alert("Please answer either Java, LiveScript, JavaLive, or ScriptyScript");
		return question3();
	}
	js = js.toLowerCase();
	var firstQuestion;

	switch (js) {
    	case "java":
    		firstQuestion = false;
    		break;
    	case "livescript":
    		firstQuestion = true;
    		break;
    	case "javalive":
    		firstQuestion = false;
    		break;
    	case "scriptyscript":
    		firstQuestion = false;
    		break;
    	default:
    		alert("Please answer either Java, LiveScript, JavaLive, or ScriptyScript");
			return question3();
    		break;
	}

	responses.push(firstQuestion);
}

question3();

function question4() {
	var firstQuestion = prompt('Does true == 1 and false == 0 ? (Yes or No)');

	if (firstQuestion === null) {
		alert("Please answer either Yes or No");
		return question4();
	}

	if (firstQuestion.toLowerCase() === 'yes') {
		firstQuestion = true;
	} else if (firstQuestion.toLowerCase() === 'no') {
		firstQuestion = false;
	} else {
		alert("Please answer either Yes or No");
		return question4();
	}
	responses.push(firstQuestion);
}

question4();

function question5() {
	var firstQuestion = prompt('Are java and javascript the same? (Yes or No)');

	if (firstQuestion === null) {
		alert("Please answer either Yes or No");
		return question5();
	}

	if (firstQuestion.toLowerCase() === 'yes') {
		firstQuestion = false;
	} else if (firstQuestion.toLowerCase() === 'no') {
		firstQuestion = true;
	} else {
		alert("Please answer either Yes or No");
		return question5();
	}
	responses.push(firstQuestion);
}

question5();

function evaluate(responsesArray) {
	var correct = 0;
	var incorrect = 0;

	for(var i = 0; i < responsesArray.length; i++) {
		if(responsesArray[i]) {
			correct += 1;
		}
		else {
			incorrect += 1;
		}
	}

	user.correct = correct;
	user.incorrect = incorrect;

	showResults();
}

function showResults() {
	console.log("********* " + user.name + " *********");
	console.log("Correct response: " + user.correct);
	console.log("Incorrect response: " + user.incorrect);
	console.log("*************************");
}

// call the function, passing it the responses array
evaluate(responses);