
const countDown = document.getElementById("count-down-number");
const container = document.querySelector(".container");
const countDownDiv = document.querySelector(".count-down");


var index = parseInt(countDown.textContent);


countDownInterval = setInterval(count, 20);

filterBlurInterval = setInterval(filter, 20);

function count() {
    index--;
    countDown.textContent = index;
    if (index <= 0)
        clearInterval(countDownInterval)
}
let timer = 100;
let blurValue = 8 / timer;
let countBlurValue = 0;
console.log(blurValue)
function filter() {
    timer--;
    countBlurValue++;
    container.style.filter = "blur("+blurValue*timer+"px)";
    countDownDiv.style.filter = "blur("+countBlurValue*blurValue+"px)";

    if (index <= 0){
        clearInterval(filterBlurInterval)
        countDownDiv.remove()
    }
}

