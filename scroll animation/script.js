const boxes = document.querySelectorAll(".box");

window.addEventListener('scroll', chechBoxes);
 chechBoxes();
function chechBoxes() {
    let triggerButton = window.innerHeight *.8;
    boxes.forEach(box => {
        let boxTop = box.getBoundingClientRect().top;
        if(boxTop < triggerButton){
            box.classList.add("show");
        }else{
            box.classList.remove("show");
        }
    });
}