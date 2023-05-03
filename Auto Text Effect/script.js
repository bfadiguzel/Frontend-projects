const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')

const text = 'Hello World!!'
let idx = 1
let speed = 300 / speedEl.value

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)

const writeText = () =>{
    textEl.innerHTML = text.slice(0, idx++)
    
    if(idx > text.length) idx = 1

    setTimeout(writeText, speed)

}



writeText()