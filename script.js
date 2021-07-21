const colorDisplay = document.getElementById("color");
const randomBtn = document.getElementById("change-random");


randomBtn.addEventListener('click',function(){
    
    let r = Math.floor(Math.random()*255)
    let g = Math.floor(Math.random()*255)
    let b = Math.floor(Math.random()*255)
    let colorRandom = document.body.style.backgroundColor=`rgb(${r}, ${g}, ${b})`;
    colorDisplay.textContent = colorRandom;
    randomBtn.innerHTML = "Get another color";
})