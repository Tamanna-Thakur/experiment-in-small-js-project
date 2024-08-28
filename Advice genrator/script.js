const diceBtn=document.querySelector('.dice-button')
const quit=document.querySelector('.quit span')
const adviceCount=document.querySelector('.Advice-count')

const value=localStorage.getItem('adviceNUM')
adviceCount.innerText=value

diceBtn.addEventListener('click',()=>{
    
    fetch('	https://api.adviceslip.com/advice')
    .then((res)=>res.json())
    .then((data)=>{
        quit.innerText=`" ${data.slip.advice} "`
        let adviceValue=parseInt(adviceCount.innerText)
        adviceCount.innerText=adviceValue+1
        localStorage.setItem('adviceNUM',adviceCount.innerText)

    })
})

