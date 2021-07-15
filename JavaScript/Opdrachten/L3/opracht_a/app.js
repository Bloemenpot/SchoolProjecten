var submitButton = document.getElementById("submitButton");
var body = document.querySelector('body');

document.body.style.backgroundColor = document.cookie.color;

submitButton.addEventListener("click", function(ev){
    ev.preventDefault();
    var date = new Date()
    date.setTime(date.getTime() + 7*24*60*60*1000);
    var div = document.createElement('div');
    div.innerHTML = "hi";
    body.appendChild(div);
    var name = document.getElementById("naam").value;
    var kleur = document.getElementById("kleur").value;
    var expString = "; expires=" + date.toGMTString();
    document.cookie = "naam=" + name + expString + "; Secure";
    document.cookie = "color=" + kleur + expString + "; Secure";
    document.body.style.backgroundColor = document.cookie.color;
})

// document.body.style.backgroundColor = kleur;

// function saveInput(){
//     document.body.style.backgroundColor = kleur;
// }

localStorage.setItem('nTimes', 2); 
var allCookies = document.cookie;
console.log(allCookies);

