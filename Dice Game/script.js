const dice1 = document.querySelector('.dice-1')
const dice2 = document.querySelector('.dice-2')
const winner = document.querySelector('#Who-win')
const p1name = document.querySelector('#p1h2')
const p2name = document.querySelector('#p2h2')
const rollBtn = document.querySelector('#btn')
const againBtn = document.querySelector('#again')

const forPlayer1 = Math.floor(Math.random() * 6 + 1)
const forPlayer2 = Math.floor(Math.random() * 6 + 1)

rollBtn.addEventListener('click', () => {
  dice1.src = `./images/${forPlayer1}.png`
  dice2.src = `./images/${forPlayer2}.png`
  if (forPlayer1 > forPlayer2) {
    setTimeout(() => {
      winner.innerText = 'Player 1 in winner 👑'
      p1name.style.color = 'rgb(0, 255, 21)'
    }, 1000)
  } else if (forPlayer1 < forPlayer2) {
    setTimeout(() => {
      winner.innerText = 'Player 2 in winner 👑'
      p2name.style.color = 'rgb(0, 255, 21)'
    }, 1000)
  } else {
    setTimeout(() => {
      winner.innerText = 'its Draw'
    })
  }
})

againBtn.addEventListener('click', () => {
  location.reload()
})
