const counterTwitter = document.getElementById("counter-twitter")
const counterYoutube = document.getElementById("counter-youtube")
const counterFacebook = document.getElementById("counter-facebook")




let interval = setInterval(count, 40)

let countLimitFacebook = 84251
let countLimitYoutube = 18542
let countLimitTwitter = 16000
let t = 0
let y = 0
let f = 0
let amountOfIncreasingF = parseInt(countLimitFacebook / 20)
let amountOfIncreasingY = parseInt(countLimitYoutube / 20)
let amountOfIncreasingT = parseInt(countLimitTwitter / 20)

function count() {
    t += amountOfIncreasingT;
    y += amountOfIncreasingY;
    f += amountOfIncreasingF;
    console.log(t)
    if (t <= countLimitTwitter)
        counterTwitter.textContent = t
    else
        counterTwitter.textContent = countLimitTwitter
    if (y <= countLimitYoutube)
        counterYoutube.textContent = y
    else
        counterYoutube.textContent = countLimitYoutube
    if (f <= countLimitFacebook)
        counterFacebook.textContent = f
    else
        counterFacebook.textContent = countLimitFacebook

    if (t >= countLimitTwitter && y >= countLimitYoutube && f >= countLimitFacebook)
        clearInterval(interval)
}


