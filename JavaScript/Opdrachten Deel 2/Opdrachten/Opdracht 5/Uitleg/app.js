var naam = "Michael";
var klas = "GDE19";
var output = `${naam} krijgt les in ${klas}`;

var el_container = document.querySelector(".container");
var el_button = document.querySelector("button");

createElToShow('p', output, el_container);

createElToShow('p', output.length, el_container);

createElToShow('p', output.toUpperCase(), el_container);

el_button.addEventListener('click', function(){

    // createElToShow('p',Math.random(), el_container);
    createElToShow('p',random(1, 10), el_container);
});



function createElToShow(el, val, parent_el){

    let elem = document.createElement(el);
    elem.innerHTML = val;
    parent_el.appendChild(elem)
}

function createEl(el, val, parent_el){

    let elem = document.createElement(el);
    elem.innerHTML = val;
    return elem;
}

function random(min, max){
    min = Math.ceil(min); 
    max = Math.floor(max); 
    //Exclusief max, inclusief min 
    return Math.floor(Math.random() * (max - min)) + min;  
}
