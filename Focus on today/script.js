const checkBoxList = document.querySelectorAll('.custom-checkbox')
const warning = document.querySelector('#warnning')
const inputFields = document.querySelectorAll('.goal-input')
const progressBar = document.querySelector('.progress-bar')
const progressValue = document.querySelector('.progress-value')
const quotes = document.querySelector('.head-quote')

const allQuotes = [
  'Raise the bar by completing your goals! 🎯',
  'Well begun is half done! 👍',
  'Just a step away, keep going! go ',
  'Whoa! You just completed all the goals, time for chill 😃',
]

// object of localStorage to save data
const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {
  first: {
    Name: '',
    completed: false,
  },

  second: {
    Name: '',
    completed: false,
  },
  third: {
    Name: '',
    completed: false,
  },
}

let completedGoalsCount = Object.values(allGoals).filter(
  (goal) => goal.completed
).length

progressValue.style.width = `${(completedGoalsCount / 3) * 100}%`
progressValue.firstElementChild.innerText = `${completedGoalsCount}/3 completed`

quotes.innerText = allQuotes[completedGoalsCount]

// show error if person check box without fill data in input
checkBoxList.forEach((checkBox) => {
  checkBox.addEventListener('click', (e) => {
    const allGoalsAdded = [...inputFields].every((input) => {
      return input.value
    })

    if (allGoalsAdded) {
      checkBox.parentElement.classList.toggle('completed')
      // save data is check box completed of not in localStorage
      const inputId = checkBox.nextElementSibling.id

      allGoals[inputId].completed = !allGoals[inputId].completed
      completedGoalsCount = Object.values(allGoals).filter(
        (goal) => goal.completed
      ).length

      progressValue.style.width = `${(completedGoalsCount / 3) * 100}%`
      progressValue.firstElementChild.innerText = `${completedGoalsCount}/3 completed`
      quotes.innerText = allQuotes[completedGoalsCount]
      localStorage.setItem('allGoals', JSON.stringify(allGoals))
    } else {
      progressBar.classList.add('error')
    }
  })
})

inputFields.forEach((input) => {
  // show data in inputs which is write by user last time from localStorage
  input.value = allGoals[input.id].Name

  // add class of checklist on input parent to show input is completed or not
  if (allGoals[input.id].completed) {
    input.parentElement.classList.add('completed')
  }
  // remove error if input in focus
  input.addEventListener('focus', () => {
    progressBar.classList.remove('error')
  })

  input.addEventListener('input', (e) => {
    // if goal is complete so that is not editable only after an check
    if (allGoals[input.id].completed) {
      input.value = allGoals[input.id].Name
      return
    }

    // set data in localStorage of inputs
    allGoals[input.id].Name = input.value
    localStorage.setItem('allGoals', JSON.stringify(allGoals))
  })
})
