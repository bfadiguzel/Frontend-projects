const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const body = document.body
const slides = document.querySelectorAll('.slide')



let activeSlide = 0
rightBtn.addEventListener('click', () => {
    activeSlide++
    if (activeSlide > slides.length - 1)
        activeSlide = 0
    setActiveSlide()
})
leftBtn.addEventListener('click', () => {
    activeSlide--
    if (activeSlide < 0)
        activeSlide = slides.length - 1
    setActiveSlide()
})

function setActiveSlide() {
    setBgToBody()
    slides.forEach(slide => slide.classList.remove('active'))
    slides[activeSlide].classList.add('active')
}

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}