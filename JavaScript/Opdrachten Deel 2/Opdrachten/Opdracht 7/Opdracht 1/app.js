var container_el = document.querySelector('.container');
var submitButton = document.getElementById("submitButton");

function Studenten(naam1, cijfer1) { 
    this.naam = naam1;
    this.cijfer = cijfer1;
}

var student1 = new Studenten("Jan", "9")
var student2 = new Studenten("Ann", "8")
var student3 = new Studenten("Piet", "7")

submitButton.addEventListener("click", function(ev){
    ev.preventDefault();

    var submittedName = document.getElementById("name").value;
    var submittedGrade = document.getElementById("grade").value;

    //#region Error Check
    var error_el = document.createElement('p');
    container_el.appendChild(error_el);
    if (submittedName == ""){
        error_el.innerHTML = "Error Code 001: User did not enter a name.";
        return;
    }
    if (submittedGrade == ""){
        error_el.innerHTML = "Error Code 002: User did not enter a grade.";
        return;
    }
    if (submittedGrade < 1 || submittedGrade > 10){
        error_el.innerHTML = "Error Code 003: User entered a grade lower or higher then the minimum of 1 or maximum of 10";
        return;
    }
    //#endregion

    var student4 = new Studenten(submittedName, submittedGrade);
    var p_el = document.createElement('p');
    container_el.appendChild(p_el);
    p_el.innerHTML = `Cijfer toegevoegd aan systeem. Student: ${student4.naam} en Cijfer: ${student4.cijfer}`;
});