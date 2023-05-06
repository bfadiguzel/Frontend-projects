const likedAmount = document.getElementById('liked-amount')
const image = document.getElementById('image')

let clickTime = 0

const createHeart = (e) =>{
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')
    heart.classList.add('heart')
    const x = e.clientX
    const y = e.clientY
    var viewportOffset = e.target.getBoundingClientRect();
    // these are relative to the viewport, i.e. the window
    var top = parseInt(viewportOffset.top);
    var left = parseInt(viewportOffset.left);
    heart.style.top = y - top + 'px'
    heart.style.left = x - left + 'px'

    image.appendChild(heart)

    setTimeout(() => heart.remove(),1000)
}

image.addEventListener('dblclick', (e) =>createHeart(e))