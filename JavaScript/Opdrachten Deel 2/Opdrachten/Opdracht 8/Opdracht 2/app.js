var submitButton = document.getElementById("submitButton");
var body = document.querySelector('body');
var submittedCity = document.getElementById("city").value.trim();

// getJson('https://randomuser.me/api/?results=5');

submitButton.addEventListener("click", function(ev){
    ev.preventDefault();
    submittedCity = document.getElementById("city").value.trim();

    if(submittedCity.length > 2){
        getJson(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${submittedCity}&mode=JSON&units=metric&cnt=7&lang=nl&appid=16d68659dbe2dc563236cef90b90d1f6`);
    }else{
        var div = document.createElement('div');
        div.innerHTML = "Error 001. CityName is unkown";
        body.appendChild(div);
        console.log("error");
    }
})

function getJson(requestURL){
    fetch(requestURL)
    .then(response => response.json())
    .then(jsonData => processData(jsonData));
    
    function processData(data){
        console.log('data - ',data);
        if(data.cod == "404"){
            var div = document.createElement('div');
            div.innerHTML = "Deze plaats " + submittedCity + " is niet gevonden.";
            body.appendChild(div);
        }
        var div = document.createElement('div');
        div.innerHTML = '<p>' + "Het weer voor de volgende 7 dagen in " + data.city.name + '</p>'
        div.style.border = "thick solid blue"
        body.appendChild(div);
        for(var i = 0; i < data.list.length; i++){
            var div = document.createElement('div');
            if(i == 0){
                div.innerHTML = '<p>'+"Vandaag"+'</p>';
            }else{
                if(i == 1){
                    div.innerHTML = '<p>'+ "Over "+i+" Dag"+'</p>';
                }else{
                    div.innerHTML = '<p>'+ "Over "+i+" Dagen"+'</p>';
                }
            }
            div.innerHTML += '<p>'+ "Het is overdag "+data.list[i].temp.day+" graden"+'</p>';
            div.innerHTML += '<p>'+data.list[i].weather[0].description+'</p>';
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            div.style.border = "thin solid black"
            div.style.backgroundColor = "#" + randomColor;
            body.appendChild(div);
        }
    }
}