const drankCups = document.querySelectorAll(".cup-drank")
const goalCupComplated = document.getElementById("goal-cup-complated")
const goalCupUnComplated = document.getElementById("goal-cup-uncomplated")
const goalCupUnComplatedText = goalCupUnComplated.childNodes[1]
let  currentIndex = 0;
let amountOfIncreaseHeight = 100 / drankCups.length;
drankCups.forEach((drankCup,index)=>{
    
    drankCup.addEventListener('click',()=>{
        drankCupUnActive()
        drankCupActive(index)
        currentIndex = index;
        reSizeGoalCup(index)
    
    })

})

function drankCupActive(index){
    for(let i = 0; i<=index; i++)
        drankCups[i].classList.add('active')
}

function drankCupUnActive(){
    drankCups.forEach(drankCup =>{
        drankCup.classList.remove('active')
    })
}

function reSizeGoalCup(index){
    let complatedHeight = (index+1) * amountOfIncreaseHeight;
    goalCupComplated.style.height = complatedHeight+"%";
    goalCupComplated.textContent = complatedHeight + " %";
    let unCompletedHeight = 100 - complatedHeight;
    goalCupUnComplated.style.height = unCompletedHeight+"%";
    goalCupUnComplatedText.textContent =  2 - ((index+1)*.25) + "L"
 
}