document.getElementById("name").onfocus = resultOnFocus;

document.getElementById("name").onchange = resultOnChange;

document.getElementById("box").onmouseover = resultMouseOver;

document.getElementById("box").onmouseout = resultMouseOut;

document.getElementById("box").onclick = resultOnClick;

function resultOnFocus(){
    document.getElementById("result").innerHTML="onFocusEvent";
}

function resultOnChange(){
    document.getElementById("result").innerHTML="onChangeEvent";
}

function resultMouseOver(){
    document.getElementById("result").innerHTML="onMouseOverEvent";
}

function resultMouseOut(){
    document.getElementById("result").innerHTML="onMouseOutEvent";
}

function resultOnClick(){
    document.getElementById("result").innerHTML="onClickEvent";
}