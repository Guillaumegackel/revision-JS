const quizData = [
  {
    question: "quelle est la couleur préférée de Norah ?",
    a: "rouge",
    b: "bleu",
    c: "rose",
    d: "arc-en-ciel",
    correct: "c",
  },
  {
    question: "quel est le plat préféré de Norah ?",
    a: "nasi Lemak",
    b: "Cordon bleue",
    c: "Pizza Hawai",
    d: "Les frites",
    correct: "d",
  },
  {
    question: "quel est le personnage de BD préféré de Norah ?",
    a: "SpiderMan",
    b: "L'ane TroTro",
    c: "Tchoupi",
    d: "Mortelle Adèle",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("btn");

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
	deselectAnswers();

  const currentQuizData = quizData[currentQuestion];

  questionEl.innerHTML = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  console.log(answerEls);

  let answer = undefined

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
answer = answerEl.id;    
}
  });
  return answer;
}

function deselectAnswers(){
	answerEls.forEach((answerEl)=>{
		answerEl.checked = false;
	});
}

submitBtn.addEventListener("click", () => {
	const answer = getSelected();	
	
	if (answer) {
		if(answer===quizData[currentQuestion].correct){
			score++;
		}
	  currentQuestion++;

        if (currentQuestion < quizData.length) {
      loadQuiz();
    } 

 if (currentQuestion === 3 && score>2){
  document.getElementById("quiz").classList.add('result');
  quiz.innerHTML= ` Félicitation, vous connaissez très bien Norah! <br><br> Vous avez ${score} bonnes réponses  <br><br /><button onclick="location.reload()">Recommencez ?</button>`

}

if (currentQuestion === 3 && score<2){
  document.getElementById("quiz").classList.add('result');
  quiz.innerHTML= ` Dommage, vous ne connaissez pas très bien Norah! <br><br> Vous avez seulement ${score} bonnes réponses  <br><br /><button onclick="location.reload()">Essayez encore ?</button>`
}

}


}
);
