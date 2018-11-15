const USER_KEY = "user_key";
const passwords = new Set(["jazzy_1","fuzzy_2","muzzy_3","whizz_4","fezzy_5","fizzy_6","abuzz_7","zuzim_8","scuzz_9","dizzy_10","frizz_11","huzza_12","mezzo_13","pizza_14","jujus_15","tizzy_16","hajji_17","zazen_18","zanza_19","zizit_20","jumpy_21","tazza_22","jacky_23","tazze_24","zappy_25","jimmy_26","jimpy_27","jiffy_28","zippy_29","jemmy_30","quick_31","jammy_32","quack_33","junky_34","mujik_35","jocko_36","jugum_37","zaxes_38","zinky_39","jumps_40","jumbo_41","kudzu_42","quiff_43","jocks_44","kopje_45","jacks_46","quaky_47","quaff_48","jerky_49","jibbs_50","juicy_51","junks_52","furzy_53","zincy_54","zombi_55","jivey_56","zilch_57","jokey_58","jaggy_59","jukus_60","jambe_61","jambs_62","jiggy_63","juked_64","capiz_65","kanzu_66","enzym_67","jowly_68","klutz_69","zebec_70","jiffs_71","pujah_72","buxom_73","zingy_74","azuki_75","punji_76","mixup_77","unzip_78","quipu_79","jived_80","boozy_81","quirk_82","fjeld_83","gauzy_84","jupon_85","woozy_86","unjam_87","kanji_88","julep_89","qophs_90","jinks_91","jauks_92","junco_93","crazy_94","hamza_95","zonks_96","jouks_97","fuzed_98","fuzil_99","hafiz_100"]);

$(document).ready(function(){
  $("#submit-btn").on("click", checkPassword);
  $("#continue-btn").on("click", showDesign);
});

function checkPassword() {
  let password = $("#password").val();
  if (passwords.has(password)) {
    $("#password-container").hide();
    $("#intro-container").show();
    saveToLocalStorage(USER_KEY, password);
  } else {
    alert("Invalid password");
  }
}

function showDesign() {
  $("#intro-container").hide();
  $("#task-image-container").show();
}

// function changeQuestion(){
// 	var user_selection = $('input[name=options]:checked').val();
// 	if(user_selection != undefined){
// 		user_answers = getFromLocalStorage(ANSWERS_KEY);
// 		if (user_answers == null){
// 			user_answers = [];
// 		}
// 		user_answers.push(user_selection);
// 		console.log(user_answers);
// 		saveToLocalStorage(ANSWERS_KEY, user_answers);
// 	}

// 	question_number++;
// 	if (question_number < problems.length) {
// 		loadQuestionIntoPage(question_number);
// 	} else {
// 		$("#task-container").hide();
// 		var x = Math.floor((Math.random()*100));
// 		if (x%2 == 0) {
// 			$("#negative-result").show();
// 		} else {
// 			$("#positive-result").show();
// 		}
// 	}
// }

// function loadQuestionIntoPage(question_number){
// 	var form = $("#options-holder");
// 	var question = problems[question_number].question;
// 	var options = problems[question_number].options;

// 	$("#question-span").text(question);
// 	form.empty();
// 	form.trigger("change");

// 	for (var i = 0; i < options.length; i++) {
// 		var template = `
//     <p>
//       <label>
//         <input class="red" name="options" type="radio" id="${i}" value="${options[i]}"/>
//         <span class="grey-text text-darken-3">${options[i]}</span>
//       </label>
//     </p>`;
// 		form.append($(template));
// 	}
// }

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
