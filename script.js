
const counterDisplay = document.getElementById("counter");
const counterIncrease = document.getElementById("increment");
const counterReset = document.getElementById("reset");
const counterDecrease = document.getElementById("decrement");

let counter = 0;

const updateCounter = ()=>{
    counterDisplay.textContent = counter;
}

counterIncrease.addEventListener("click", ()=> {
    counter++;
    updateCounter();
})

counterDecrease.addEventListener("click", ()=> {
    if(counter > 0){
        counter--;
    updateCounter();
    }
})

counterReset.addEventListener("click", ()=> {
    counter = 0;
    updateCounter();
})