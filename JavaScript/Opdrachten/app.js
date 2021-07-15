var submitButton = document.getElementById("submitButton");
var body = document.querySelector('body');

submitButton.addEventListener("click", function(ev){
    ev.preventDefault();
    var div = document.createElement('div');
    div.innerHTML = "hi";
    body.appendChild(div);
    var name = document.getElementById("naam").value;
    var kleur = document.getElementById("kleur").value;
    document.cookie = "naam=" + name + expString + "; Secure";
    document.cookie = "color=" + kleur + expString + "; Secure";
})

// var date = new Date()
// date.setTime(date.getTime() + 7*24*60*60*1000);
// document.body.style.backgroundColor = kleur;

// function saveInput(){
//     var expString = "; expires=" + date.toGMTString();
//     document.body.style.backgroundColor = kleur;
// }

// localStorage.setItem('nTimes', 2); 
// var allCookies = document.cookie;
// console.log(allCookies);

