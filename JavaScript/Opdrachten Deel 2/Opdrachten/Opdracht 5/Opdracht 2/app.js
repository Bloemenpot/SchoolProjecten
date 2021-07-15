var getal1;
var getal2;
var rightAnwer;
var correctAmount = 0;
var wrongAmount = 0;

question();

var submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function(ev){
    ev.preventDefault();
    checkAnswer();
});

function question(){
    getal1 = getRandomInt(1, 10);
    getal2 = getRandomInt(1, 10);
    rightAnwer = getal1 * getal2;
    document.getElementById("question").innerHTML="Hoeveel is " + getal1 + " keer " + getal2; 
}

function checkAnswer(){
    var answer = document.getElementById("answer").value;
    if(answer == getal1 * getal2){
        document.getElementById("result").innerHTML="Het antwoord is goed";
        document.getElementById("goodResult").innerHTML=" "
        correctAmount++;
        document.getElementById("correctAmount").innerHTML="Aantal goed " + correctAmount;
    }else{
        document.getElementById("result").innerHTML="Het antwoord is niet goed";
        document.getElementById("goodResult").innerHTML="Het juiste antwoord moest zijn " + rightAnwer; 
        wrongAmount++;
        document.getElementById("wrongAmount").innerHTML="Aantal fout " + wrongAmount;
    }
    question();
}

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}