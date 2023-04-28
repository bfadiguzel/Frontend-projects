const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-tex')

function getDate(){
    header.innerHTML = '<img src="https://www.pngarts.com/files/4/Dell-Laptop-PNG-Background-Image.png" alt="">'

    title.innerText = 'Lorem ipsum dolor sit.'
    excerpt.innerHTML ='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet reprehenderit quis odio?'
    profile_img.innerHTML ='<img src="https://cdn-icons-png.flaticon.com/512/666/666201.png" alt="">'
    name.innerHTML='Jhon Doe'
    date.innerHTML='Oct 08, 2023'

    animated_bgs.forEach(bg=> bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bgt=> bgt.classList.remove('animated-bg-text'))
}

setTimeout(getDate,2500)