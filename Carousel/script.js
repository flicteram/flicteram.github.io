const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;
const prevBtn = document.getElementById('carousel-button-prev')
const nextBtn = document.getElementById('carousel-button-next')
const positionDots = document.getElementsByClassName("position-item")


nextBtn.addEventListener('click',moveToNextSlide)
prevBtn.addEventListener('click',moveToPrevSlide)


function moveToNextSlide(){
    positionChangeDot();
    hideAllSlides();
    if(slidePosition===totalSlides-1){
        slidePosition=0;
        
    }
    else{
        slidePosition++;
               
    }
    slides[slidePosition].classList.add('carousel-item-visible')
    positionDots[slidePosition].classList.add('position-item-recent')
 
    
    
}
function moveToPrevSlide(){
    positionChangeDot();
    hideAllSlides();
    if(slidePosition===0){
        slidePosition = totalSlides-1;
    }
    else {
        slidePosition --
    }
    slides[slidePosition].classList.add('carousel-item-visible')
    positionDots[slidePosition].classList.add('position-item-recent')

}

function hideAllSlides(){
    for(const slide of slides){
        slide.classList.remove('carousel-item-visible')
        slide.classList.add('carousel-item-hidden')
    }
}

let interval = setInterval(moveToNextSlide,10000); 

function positionChangeDot(){
    for(const dot of positionDots){
        dot.classList.remove('position-item-recent');
    }
}

positionDots.addEventListener('click',function(){
    for(const dot of positionDots){
        dot=slidePosition
    }
})