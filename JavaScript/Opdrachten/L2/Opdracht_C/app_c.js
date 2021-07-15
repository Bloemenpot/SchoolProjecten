var body = document.querySelector('body');

function calculate(){
    var tafelNumber = document.getElementById("number").value;
    var range = document.getElementById("range").value;

    for(let i = 1; i <= range; i++) {
        
        const result = i * tafelNumber;

        var div = document.createElement('div');
        div.innerHTML = '<p>'+`${tafelNumber} * ${i} = ${result}`+'</p>'
        body.appendChild(div);
        console.log(`${tafelNumber} * ${i} = ${result}`); 
    }
}