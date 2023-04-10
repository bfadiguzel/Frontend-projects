const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
let progressWidthIncrease = 100 / (circles.length-1);
console.log(progressWidthIncrease)
let currentActive = 1;
update()
next.addEventListener('click', function () {

    if (currentActive < circles.length) {
        currentActive++;
    }
    update();
});
prev.addEventListener('click', function () {

    if (currentActive > 1) {
        currentActive--;
    }

    update();
});



function update() {
   
 
    circles.forEach(function (circle, index) {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });
    let progressWidth = progressWidthIncrease * (currentActive-1);
    progress.style.width = progressWidth+ '%';

    if(currentActive == 1){
        prev.disabled= true;
    }else if(currentActive == circles.length){
        next.disabled=true;
    }else{
        prev.disabled= false;
        next.disabled= false;
    }

}