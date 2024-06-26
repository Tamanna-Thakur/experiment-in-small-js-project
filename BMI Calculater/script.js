const weight = document.querySelector('#weight-input')
const height = document.querySelector('#height-input')
const btn = document.querySelector('.btn')
const result = document.querySelector('.result')

btn.addEventListener('click', (e) => {
  e.preventDefault()
  let weightValue = weight.value
  let heightValue = (height.value / 100) ** 2
  const BMI = (weightValue / heightValue).toFixed(2)

  if (BMI >= 18.5 && BMI <= 24.9) {
    result.innerText = `Your BMI is ${BMI} (Normal)`
  } else if (BMI < 18.5) {
    result.innerText = `Your BMI is ${BMI} (Underweight)`
  } else if (BMI > 24.9) {
    result.innerText = `Your BMI is ${BMI} (Overweight)`
  } else {
    result.remove()
  }
})
