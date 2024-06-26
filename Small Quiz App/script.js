// Step 1: Define Quiz Data
const quizData = [
  {
    question: 'what does CSS stands for?',

    options: [
      'Cascading Style Sheets',
      'Cascading Styling Sheet',
      'Case Style Sheet',
      'Caseing styling Sheets',
    ],
    correct: 0,
  },

  {
    question: 'which CSS property is used to center text',

    options: ['font-align', 'text-align', 'justify-content', 'align-items'],
    correct: 1,
  },

  {
    question:
      'which keyword is used in JS to declare a variable that cannot be reassigned?',

    options: ['var', 'constant', 'const', 'let'],
    correct: 2,
  },

  {
    question: 'which HTML tag is used to create unordered list? ',

    options: ['<al>', '<ol>', '<li>', '<ul>'],
    correct: 3,
  },

  {
    question: 'Which CSS property controls the size of an element’s text? ',

    options: ['font-style', 'text-size', 'font-size', 'text-style'],
    correct: 2,
  },
  {
    question: 'Which HTML element is used to create a hyperlink?',

    options: ['<a>', '<link>', '<href>', '<nav>'],
    correct: 0,
  },
  {
    question: 'How do you create an array in JavaScript?',

    options: [
      `var arr = "1, 2, 3"`,
      `var arr = (1, 2, 3)`,
      `var arr = [1, 2, 3]`,
      `var arr = {1, 2, 3}`,
    ],
    correct: 2,
  },
  {
    question: ' What is the output of the following code? console.log("5" + 5)',

    options: ['10', `"55"`, 'NaN', 'TypeError'],
    correct: 1,
  },
  {
    question: 'What will be the output of the following code? Boolean(0); ',

    options: ['false', 'true', 'null', 'undefined'],
    correct: 0,
  },
  {
    question: 'How do you remove the last element from an array in JavaScript?',

    options: ['arr.removeLast()', 'arr.pop()', 'arr.deleteLast()', 'arr.cut()'],
    correct: 1,
  },
]

// Step 2: Javascript initialization

const answerElm = document.querySelectorAll('.answer')
const [questionElm, option_1, option_2, option_3, option_4] =
  document.querySelectorAll(
    '#question ,.option_1, .option_2, .option_3, .option_4'
  )

const submitBtn = document.querySelector('#submit')
const quiz = document.querySelector('.Quiz')
const body = document.querySelector('body')
const setMusic = document.querySelector('#setmusic')
const musicOn = document.querySelector('#on')
const musicOff = document.querySelector('#off')
const audio = document.querySelector('audio')

let currentQuiz = 0
let Score = 0

// step 3: load Quiz Data

const loadQuiz = () => {
  const { question, options } = quizData[currentQuiz]
  console.log(question, options)

  // set question
  questionElm.innerText = `${currentQuiz + 1} . ${question}`

  // show option of question
  options.forEach(
    (curOption, index) => (window[`option_${index + 1}`].innerText = curOption)
  )
}

loadQuiz()

// step 4: Get selected answer Functions on button click

const getSelectedOption = () => {
  // let ans_Index
  // answerElm.forEach((curOption, index) => {
  //   if (curOption.checked) {
  //     ans_Index = index
  //   }
  // })
  // return ans_Index

  // simple way to do same work
  let answerElement = Array.from(answerElm)
  return answerElement.findIndex((curElem) => curElem.checked)
}

// deselectAnswers

const deselectAnswers = () => {
  answerElm.forEach((curElm) => (curElm.checked = false))
}

// btn click
submitBtn.addEventListener('click', (e) => {
  const selectedOptionIndex = getSelectedOption()
  console.log(selectedOptionIndex)

  if (selectedOptionIndex === quizData[currentQuiz].correct) {
    Score += 1
    console.log(Score)
  }

  currentQuiz++

  if (currentQuiz < quizData.length) {
    deselectAnswers()
    loadQuiz()
  } else {
    quiz.innerHTML = `
    <div class="result">
    <h2>🏆 Your Score:${Score}/${quizData.length} Correct Answer</h2>
    <p>Congratulations on completing the quiz 🎉 </p>
    <a href="./Welcome.html"><button  onclick="location.reload()">Play Again 🔁 </button></a>
    </div>`

    const h3 = document.createElement('h3')
    quiz.append(h3)
    if (Score < 5) {
      h3.innerText = 'Loser👎🏻'
    } else if (Score > 5 && Score <= 7) {
      h3.innerText = 'GOOD👍'
    } else {
      h3.innerText = 'Awesome😀'
    }
  }
})

// Music
musicOn.addEventListener('click', () => {
  setMusic.classList.add('music-not')
  audio.pause()
})
musicOff.addEventListener('click', () => {
  setMusic.classList.remove('music-not')
  audio.play()
})
