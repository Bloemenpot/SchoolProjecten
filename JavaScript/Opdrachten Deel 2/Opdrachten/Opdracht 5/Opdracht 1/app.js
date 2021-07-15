// var form = document.querySelector("form");
// form.addEventListener("submit", function(ev){
//     ev.preventDefault();
//     replaceTekst();
// });


var setLowerCaseButton = document.getElementById("setLowerCaseButton");
setLowerCaseButton.addEventListener("click", function(ev){
    ev.preventDefault();
    textToLowerCase();
});

var countWordsButton = document.getElementById("countWordsButton");
countWordsButton.addEventListener("click",function(ev){
    ev.preventDefault();
    countWords();
});

var replaceButton = document.getElementById("replaceButton");
replaceButton.addEventListener("click",function(ev){
    ev.preventDefault();
    replaceTekst();
});

function textToLowerCase() {
    var str = document.getElementById("tekst").innerHTML;
    var txt = str.toLowerCase();
    document.getElementById("tekst").innerHTML = txt;
}

function countWords() {
    var str = document.getElementById("tekst").innerHTML;
    var wordAmount = str.split(' ').length;
    console.log(wordAmount);
    document.getElementById("showWordAmount").innerHTML="The amount of words in this text = " + wordAmount;
}

function replaceTekst() {
    var word1 = document.getElementById("replaceWord").value;
    var word2 = document.getElementById("replaceWith").value;
    var str = document.getElementById("tekst").innerHTML; 
    var txt = str.replace(word1,word2);
    document.getElementById("tekst").innerHTML = txt;
    console.log(txt);
}