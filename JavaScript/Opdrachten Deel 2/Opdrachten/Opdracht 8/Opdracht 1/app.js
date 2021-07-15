var container_el = document.querySelector('.container');
var submitButton = document.getElementById("submitButton");

let requestURL = `studenten.json`;
let request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.responseType = 'json';
request.send();
request.onload = function() {
    let data = request.response;
    addData(data);
    
}

function addData(jsonData) {    
    submitButton.addEventListener("click", function(ev){
        ev.preventDefault();
        
        var body = document.querySelector('body');
        
        var studenten = jsonData.studenten;
        
        var submittedAmountOfStudents = document.getElementById("students").value;

        for(var i = 0; i < submittedAmountOfStudents; i++){
            var div = document.createElement('div');
            div.innerHTML = '<p>'+studenten[i].geboortedatum+'</p> ';
            div.innerHTML += '<p>'+studenten[i].woonplaats+'</p> ';
            div.innerHTML += '<p>'+studenten[i].emailadres+'</p> ';
            div.innerHTML += '<p>'+studenten[i].achternaam+'</p> ';
            div.innerHTML += '<p>'+studenten[i].voornaam+'</p> ';
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            div.style.border = "thick solid black"
            div.style.backgroundColor = "#" + randomColor;
            body.appendChild(div);
        }
    });
}