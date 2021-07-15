function calculate(){

    var field1=document.getElementById("getal1").value;
    var field2=document.getElementById("getal2").value;

    var result=parseFloat(field1)+parseFloat(field2);
    var avarage=result/2;

    document.getElementById("antwoord").innerHTML="Getal 1 + Getal 2 = " + result;
    document.getElementById("avarage").innerHTML="Het gemiddelde van de 2 getallen = " + avarage;
}

