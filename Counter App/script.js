let counterDisplay = document.getElementById("counterDisplay")
const decreaseBtn = document.getElementById("decreaseBtn")
const resetBtn = document.getElementById("resetBtn")
const addBtn = document.getElementById("addBtn")
const saveBtn = document.getElementById("saveBtn")
let recentCount = document.getElementById("recent")
let sumBtn = document.getElementById("sumBtn")
let sumDisplay = document.getElementById('sumDisplay')
const resetAll = document.getElementById("resetAll")

let counter = 0;
let recentArray = []


addBtn.addEventListener('click',function(){
    counter++;
    counterDisplay.textContent=counter;
    if(counter>0){
        counterDisplay.style.color="green"
    }
})

decreaseBtn.addEventListener('click',function(){
    counter--;
    counterDisplay.textContent=counter;
    if(counter<0){
        counterDisplay.style.color="red"
    }
})

resetBtn.addEventListener('click',function(){
    counter = 0;
    counterDisplay.textContent = counter;
    counterDisplay.style.color="royalblue"
})

saveBtn.addEventListener('click',function(){
    recentArray.push(counter);
    recentCount.textContent = `Recent: ${recentArray}`
})

sumBtn.addEventListener('click',function(){
    let sum = recentArray.reduce(function(a,b){return a+b},0)
    sumDisplay.textContent=`Sum: ${sum}`
})

resetAll.addEventListener("click", function(){
    counter = 0 ;
    recentArray = [];
    sumDisplay.textContent =`Sum: `
    counterDisplay.textContent = "0"
    recentCount.textContent = `Recent: `
    counterDisplay.style.color="royalblue"
})