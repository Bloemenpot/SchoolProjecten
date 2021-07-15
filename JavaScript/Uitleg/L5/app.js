var div = document.queryCommandEnabled('.wrap');
var arrayDiv = document.queryCommandEnabledAll('.wrap');

try{
    div.test();
    console.log("inside try")
} catch (error) {
    console.log(error);
    console.error(error)
} finally {
    console.log("Klaar met de try")
}


var elP = document.createElement('p');
div.appendChild(elP);

