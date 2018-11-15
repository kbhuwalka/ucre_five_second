var question_number = 0;
var problems = [
    {
        "question": "Three years ago, Ron gave up eating anything with wheat in it. In that time, he lowered his cholesterol by 100 points and lost nearly 85 pounds. He says he feels better than he has in years. As a result, he is writing a book which says that everyone should stop eating wheat products. He says people are not made to eat wheat and that giving it up is the key to losing weight and being healthier.\n\nWhich of the following, if true, most weakens the argument above?",
        "options": ["Wheat is found in nearly all processed foods.","Ron has a family history of celiac disease, which is an extreme sensitivity to wheat gluten.",
                    "Some studies have shown that a lower carbohydrate diet can help people lose weight and feel better.",
                    "Ron runs three miles every morning.","Ron used to be a vegetarian but has resumed eating meat."]
    },
    {
        "question": "Gina doesn't understand why she cannot get a job as a computer engineer. She even went back to school and got a degree in computer science. After two years on the job market with only a few interviews and no offers, she is staring to wonder if she is not getting hired because she is a woman. One of her friends told her that women seldom succeed in technology fields, and she is beginning to believe it.\n\nWhich of the following, if true, most weakens the argument above?",
        "options":["Gina got her degree online.", "All the people Gina has interviewed with have been men.",
                  "Gina had both female and male professors in college.",
                  "Gina graduated with a C average.",
                  "Gina interviews very well."]
    },
    {
        "question": "As a teacher of young children, I always find the last few days before summer vacation trying, because the students are especially _____.",
        "options":["Restive", "Coordinated", "Unruly", "Ingenious", "Abnormal", "Charitable"]
    },
    {
        "question": "Over the course of his life, Clif has worked in the circus, flown planes as a stunt pilot, and had a number of other _____ jobs.",
        "options":["Unorthodox", "Commonplace", "Flamboyant", "Unconventional", "Ordinary", "Charming"]
    },
    {
        "question": "In recent years, the city has been plagued by _____, and the mayor’s chances of reelection appear _____.",
        "options":["Violence….slim", "Improvements…likely", "Visitors…certain", "Gardeners….unlikely", "Tourists…grim"]
    },
    {
        "question": "Once we came to know Andreas better, it became clear to us that all of his stories of wealth and fame were just a _____.",
        "options":["Biography", "Lullaby", "Ruse", "Secret", "Lunacy"]
    },
    {
        "question": "Lauren is clearly going to make an awful professor. Nearly half of her students failed their final this past spring. She should probably choose another career path, because her students’ performance demonstrates that she doesn’t teach very well.\n\nWhat statement, if true, most weakens the argument above?",
        "options":["This was Lauren’s second time teaching a college class.", "The class Lauren was teaching is a required class for all freshmen.",
                  "The students who failed the exam also had poor attendance.", "The students who passed the exam attended an optional review session Lauren’s teaching assistant held.",
                  "Lauren struggled early in the semester with lesson planning."]
    },
    {
        "question": "1. The hypotenuse is 13 inches.\n\n2. The perpendicular height of the triangle is one less than half its base.",
        "options":["Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient to answer the question asked.",
                  "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient to answer the question asked.",
                  "BOTH statements (1) and (2) TOGETHER are sufficient to answer the question asked, but NEITHER statement ALONE is sufficient to answer the question ask.",
                  "EACH statement ALONE is sufficient to answer the question asked.",
                  "Statements (1) and (2) TOGETHER are NOT sufficient to answer the question asked, and additional data specific to the problem are needed."]
    }
];

var user_answers = [];

const PROBLEMS_KEY = "problems";
const ANSWERS_KEY = "user_answers";

$(document).ready(function(){
	// Start the timer
	// startTimer(duration);
	// var duration = 60; //in seconds
	loadQuestionIntoPage(0);
	$("#next-question-btn").on("click", changeQuestion);
	questions = getFromLocalStorage(PROBLEMS_KEY);

	$("#options-holder").on('change', function(){
		var checkedOption = $('input[name=options]:checked');
		var isOptionSelected = checkedOption.val() == undefined;
		$("#next-question-btn").prop('disabled', isOptionSelected);
	});

});

function changeQuestion(){

	var user_selection = $('input[name=options]:checked').val();
	if(user_selection != undefined){
		user_answers = getFromLocalStorage(ANSWERS_KEY);
		if (user_answers == null){
			user_answers = [];
		}
		user_answers.push(user_selection);
		console.log(user_answers);
		saveToLocalStorage(ANSWERS_KEY, user_answers);
	}

	question_number++;
	if (question_number < problems.length) {
		loadQuestionIntoPage(question_number);
	} else {
		$("#task-container").hide();
		var x = Math.floor((Math.random()*100));
		if (x%2 == 0) {
			$("#negative-result").show();
		} else {
			$("#positive-result").show();
		}

	}

}

function loadQuestionIntoPage(question_number){
	var form = $("#options-holder");
	var question = problems[question_number].question;
	var options = problems[question_number].options;

	$("#question-span").text(question);
	form.empty();
	form.trigger("change");

	for (var i = 0; i < options.length; i++) {
		var template = `
    <p>
      <label>
        <input class="red" name="options" type="radio" id="${i}" value="${options[i]}"/>
        <span class="grey-text text-darken-3">${options[i]}</span>
      </label>
    </p>`;
		form.append($(template));
	}
}

/*
 * Retrieve an item from the localStorage for the given key
 */
function getFromLocalStorage(key){
	return JSON.parse(localStorage.getItem(key));
}

/*
 * Save an item to the localStorage with the given key
 */
function saveToLocalStorage(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}
