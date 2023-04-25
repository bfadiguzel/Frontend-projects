const circle = document.querySelector('.circle')
const button = document.querySelector('button')

button.addEventListener('click', e => {
    const x = e.clientX
    const y = e.clientY
    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft
    button.innerHTML = `Click Me <span class="circle" style="top:${y-buttonTop}px; left:${x-buttonLeft}px;" ></span>`
})