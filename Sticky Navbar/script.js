const nav = document.querySelector('.nav')

const fixNav = () =>{
    console.log(window.scrollY +' ' + nav.offsetHeight + 150)
   if(window.scrollY > nav.offsetHeight + 150)
        nav.classList.add('active')
    else
    nav.classList.remove('active')
}


window.addEventListener('scroll', fixNav)