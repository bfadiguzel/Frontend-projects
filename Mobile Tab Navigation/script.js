const images = document.querySelectorAll('.phone img')
const links = document.querySelectorAll('.phone nav ul li')

const setActiveLink = (link) => {
    links.forEach(link => link.classList.remove('active'))
    link.classList.add('active')
}

const setActiveImage = (index) => {
    images.forEach(image => image.classList.remove('show'))
    images[index].classList.add('show')
}

links.forEach((link, index) => {
    link.addEventListener('click', () => {
        setActiveLink(link)
        setActiveImage(index)
    })
})