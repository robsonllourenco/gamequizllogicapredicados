var mainBox = document.getElementById('mainBox');
var menuPrincipal = document.getElementById('menuPrincipal');
var divQuestoes = document.getElementById('divQuestoes');
var divQuizFinalizado = document.getElementById('divQuizFinalizado');
var startButton = document.getElementById('startButton');
var logoquizPlay = document.getElementById('logoquizPlay');

var question1Options = document.getElementById('question1Options').querySelectorAll('.questionButton');
var question2Options = document.getElementById('question2Options').querySelectorAll('.questionButton');
var question3Options = document.getElementById('question3Options').querySelectorAll('.questionButton');
var question4Options = document.getElementById('question4Options').querySelectorAll('.questionButton');
var question5Options = document.getElementById('question5Options').querySelectorAll('.questionButton');
var question6Options = document.getElementById('question6Options').querySelectorAll('.questionButton');
var question7Options = document.getElementById('question7Options').querySelectorAll('.questionButton');
var question8Options = document.getElementById('question8Options').querySelectorAll('.questionButton');
var question9Options = document.getElementById('question9Options').querySelectorAll('.questionButton');
var question10Options = document.getElementById('question10Options').querySelectorAll('.questionButton');

var question1 = document.getElementById('question1');
var question2 = document.getElementById('question2');
var question3 = document.getElementById('question3');
var question4 = document.getElementById('question4');
var question5 = document.getElementById('question5');
var question6 = document.getElementById('question6');
var question7 = document.getElementById('question7');
var question8 = document.getElementById('question8');
var question9 = document.getElementById('question9');
var question10 = document.getElementById('question10');

var question = 1;
var score = 0;

function renderQuestion() {
  menuPrincipal.style.display = 'none';
  divQuestoes.style.display = 'block';

  switch (question) {
    case 1:
      question1.style.display = 'block';
      break;
    case 2:
      question1.style.display = 'none';
      question2.style.display = 'block';
      break;
    case 3:
      question2.style.display = 'none';
      question3.style.display = 'block';
      break;
    case 4:
      question3.style.display = 'none';
      question4.style.display = 'block';
      break;
    case 5:
      question4.style.display = 'none';
      question5.style.display = 'block';
      break;
    case 6:
      question5.style.display = 'none';
      question6.style.display = 'block';
      break;
    case 7:
      question6.style.display = 'none';
      question7.style.display = 'block';
      break;
    case 8:
      question7.style.display = 'none';
      question8.style.display = 'block';
      break;
    case 9:
      question8.style.display = 'none';
      question9.style.display = 'block';
      break;
    case 10:
      question9.style.display = 'none';
      question10.style.display = 'block';
      break;
    case 11:
      question10.style.display = 'none';
      divQuestoes.style.display = 'none';
      divQuizFinalizado.style.display = 'block';
      divQuizFinalizado.innerHTML = `
      
      <img id="logofinish" class="logofinish" src="./public/img/logo_quiz.png">
      <p style="font-size: 40px; margin-top: 10px;">A sala acertou ${score} de 10 questões!</p>
              <button onclick="reloadPage()" class="restartButton">REINICIAR</button>
          `;
      break;
  }
  console.log(`question: ${question}`);
  console.log(`score: ${score}`);
}

//<img id="grupocampeao" class="grupocampeao" src="./public/img/grupocampeao.gif">

function increaseMainBox(fun) {
  menuPrincipal.style.display = 'none';
  startButton.style.display = 'none';
  document.querySelectorAll('.custom-h5').forEach(element => element.style.display = 'none');

  let id = null;
  let h = mainBox.style.minHeight;
  let w = mainBox.style.minWidth;
  clearInterval(id);
  id = setInterval(frame, 7);
  function frame() {
    if (h == 45 || w == 70) {
      clearInterval(id);
      fun();
    } else {
      mainBox.style.minHeight = `${h}vh`;
      mainBox.style.minWidth = `${w}vw`;
      h++;
      w++;
    }
  }
  fun();
}

function questionAnswered(correct) {

  const correctfx = new Audio('./public/audio/correctfx.mp3');
  correctfx.volume = 0.9;

  const wrongfx = new Audio('./public/audio/wrongfx.mp3');
  wrongfx.volume = 0.9;

  switch (question) {
    case 1:
      question1Options[0].classList.add('optionButtonWrong');
      question1Options[1].classList.add('optionButtonCorrect');
      question1Options[2].classList.add('optionButtonWrong');
      break;
    case 2:
      question2Options[0].classList.add('optionButtonWrong');
      question2Options[1].classList.add('optionButtonWrong');
      question2Options[2].classList.add('optionButtonCorrect');
      break;
    case 3:
      question3Options[0].classList.add('optionButtonWrong');
      question3Options[1].classList.add('optionButtonCorrect');
      question3Options[2].classList.add('optionButtonWrong');
      break;
    case 4:
      question4Options[0].classList.add('optionButtonWrong');
      question4Options[1].classList.add('optionButtonWrong');
      question4Options[2].classList.add('optionButtonCorrect');
      break;
    case 5:
      question5Options[0].classList.add('optionButtonCorrect');
      question5Options[1].classList.add('optionButtonWrong');
      question5Options[2].classList.add('optionButtonWrong');
      break;
    case 6:
      question6Options[0].classList.add('optionButtonWrong');
      question6Options[1].classList.add('optionButtonWrong');
      question6Options[2].classList.add('optionButtonCorrect');
      break;
    case 7:
      question7Options[0].classList.add('optionButtonWrong');
      question7Options[1].classList.add('optionButtonWrong');
      question7Options[2].classList.add('optionButtonCorrect');
      break;
    case 8:
      question8Options[0].classList.add('optionButtonCorrect');
      question8Options[1].classList.add('optionButtonWrong');
      question8Options[2].classList.add('optionButtonWrong');
      break;
    case 9:
      question9Options[0].classList.add('optionButtonWrong');
      question9Options[1].classList.add('optionButtonWrong');
      question9Options[2].classList.add('optionButtonCorrect');
      break;
    case 10:
      question10Options[0].classList.add('optionButtonCorrect');
      question10Options[1].classList.add('optionButtonWrong');
      question10Options[2].classList.add('optionButtonWrong');
      break;
  }

  if (correct) {
    score++;
    correctfx.play();
  } else {
    wrongfx.play();
  }

  const currentQuestionOptions = document.getElementById(`question${question}Options`).querySelectorAll('.questionButton');
  currentQuestionOptions.forEach(option => {
    option.classList.add('hide');
  });

  const nextQuestionOptions = document.getElementById(`question${question + 1}Options`).querySelectorAll('.questionButton');
  nextQuestionOptions.forEach(option => {
    option.classList.remove('hide');
    option.classList.add('show');
  });
}


// função pra resetar os pontos e ir pro menu
function resetAndGoToMainMenu() {
  question = 1;
  score = 0;
  mainBox.style.minHeight = 0;
  mainBox.style.minWidth = 0;

  divQuestoes.style.display = 'none';
  divQuizFinalizado.style.display = 'none';

  startButton.style.display = 'block';
  menuPrincipal.style.display = 'block';

  console.log(`question: ${question}`);
  console.log(`score: ${score}`);
}

function reloadPage() {
  document.location.reload();
}

function nextQuestion() {
  question++;
  renderQuestion();
}



// ...
var logoquiz = document.getElementById('logoquiz');

// Função para esconder a logoquiz
function hideLogoQuiz() {
  logoquiz.style.display = 'none';
}

// Função para mostrar a logoquiz
function showLogoQuiz() {
  logoquiz.style.display = 'block';
}
// ...

// ...
// Evento de clique no botão startButton
startButton.addEventListener('click', function () {
  hideLogoQuiz(); // Esconder a logoquiz
  increaseMainBox(renderQuestion);
});

// Exibir o score
function showScore(score) {
  // ...
  showLogoQuiz(); // Mostrar a logoquiz
}
  // ...
