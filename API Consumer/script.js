// Background-image
fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
.then(response => response.json())
.then(data =>{
    document.body.style.backgroundImage=`url(${data.urls.full})
    `
    document.getElementById('author').innerHTML=`
    <p>By: ${data.user.name}</p>`


})

// CRYPTO
fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
.then(response=> response.json())
.then(data=> {
    document.getElementById('crypto').innerHTML+=`
    
    <img class='img-crypto'src=${data.image.small}>
    <h1>${data.name}</h1>
    <p><span class="current-price">Current price:</span> ${data.market_data.current_price.usd} USD</p>
    <p><span class="price-high">High(24h):</span> ${data.market_data.high_24h.usd} USD</p>
    <p><span class="price-low">Low(24h):</span> ${data.market_data.low_24h.usd} USD</p>
    
`

})

document.getElementById("form-submit").addEventListener('submit',function(event){
    event.preventDefault();
    let inputValue = document.getElementById('input-search-crypto').value
    fetch(`https://api.coingecko.com/api/v3/coins/${inputValue}`)
    .then(response=> response.json())
    .then(data=> {
        document.getElementById('crypto').innerHTML=`
    
        <img class='img-crypto'src=${data.image.small}>
        <h1>${data.name}</h1>
        <p><span class="current-price">Current price:</span> ${data.market_data.current_price.usd} USD</p>
        <p><span class="price-high">High(24h):</span> ${data.market_data.high_24h.usd} USD</p>
        <p><span class="price-low">Low(24h):</span> ${data.market_data.low_24h.usd} USD</p>
        
    `
})
})

//WEATHER

navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('weather-container').innerHTML=`
        <img class='image-weather'src='http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'>
        <p class="degrees-display">${Math.round(data.main.temp)}°</p>
        <p class='city-display'>${data.name}</p>
        `
    })
});

// CLOCK

function getTime(){
    var time = new Date();
    
    let timeNow = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    document.getElementById('hour-container').innerHTML = `
    <p class="time-now">${timeNow}</p>`
}

setInterval(getTime,1000);


//ToDo




let displayTodo = document.getElementById('display-todo');
let inputEl = document.getElementById('todo-input')
let inputArray = [];


let localStorageLeads = JSON.parse(localStorage.getItem('toDo'))


if(localStorageLeads){
    inputArray=localStorageLeads;
    renderLeads()
}

document.getElementById('button-todo').addEventListener('click',function(e){
    e.preventDefault();
    inputArray.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem('toDo', JSON.stringify(inputArray))
    renderLeads()
})

function renderLeads(){
    let arrayItem=""
    for(let i=0;i<inputArray.length;i++){
        arrayItem +=`
        <li>${inputArray[i]}</li>
        `
    }
    displayTodo.innerHTML = arrayItem;
}

document.getElementById('button-todo-delete').addEventListener('click',function(e){
    e.preventDefault();
    localStorage.clear();
    displayTodo.textContent = " "
    inputArray=[];
})

