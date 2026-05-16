const decreaseBtn=document.getElementById("decrease");
const increaseBtn=document.getElementById("increase");
const resetBtn=document.getElementById("reset");
const counter=document.querySelector("h1");


decreaseBtn.addEventListener("click",()=>{
    counter.innerText--;
})

increaseBtn.addEventListener("click",()=>{
    counter.innerText++;
})

resetBtn.addEventListener("click",()=>{
    counter.innerText=0;
})