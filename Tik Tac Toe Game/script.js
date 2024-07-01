// Step 1 initialize variables
const resetBtn = document.querySelector('#reset')
const WinnerMsg = document.querySelector('#Winner-msg')
let boxes = document.querySelectorAll('.box')
let clickCount = 0
let turnO = true //playerO ,playerX

// step 2 create array of all possible winPatterns
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
]

// step 3 check each box click and provide them (X,O)
boxes.forEach((box) => {
  box.addEventListener('click', (e) => {
    clickCount += 1
    if (turnO) {
      box.innerText = 'O'
      turnO = false
    } else {
      box.innerText = 'X'
      turnO = true
    }
    box.disabled = true

    checkWinner()
  })
})

// step 4 main logic of game
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText
    let pos2Val = boxes[pattern[1]].innerText
    let pos3Val = boxes[pattern[2]].innerText
    if (pos1Val != '' && pos2Val != '' && pos3Val != '') {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        WinnerMsg.classList.remove('show-not')
        WinnerMsg.innerText = `Winner is ${pos1Val}`
        disabledBtn()
      }
    }
  }
  if (clickCount === 9) {
    WinnerMsg.classList.remove('show-not')
    WinnerMsg.innerText = `It's Draw`
  }
}

const disabledBtn = () => {
  for (box of boxes) {
    box.disabled = true
  }
}

const enableBoxes = () => {
  for (box of boxes) {
    box.disabled = false
  }
}
resetBtn.addEventListener('click', () => {
  clickCount = 0
  turnO = true
  for (box of boxes) {
    box.innerText = ''
    WinnerMsg.innerText = ''
  }
  enableBoxes()
})
