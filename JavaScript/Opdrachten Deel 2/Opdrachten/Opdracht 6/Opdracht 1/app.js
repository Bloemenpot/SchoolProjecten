var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    makeTable(this);
  }
};
xhttp.open("GET", "vakken.xml", true);
xhttp.send();


function makeTable(xml){
  var i;
  var xmlDoc = xml.responseXML;
  var table = "<tr><th>Vaknaam</th><th>Docent</th><th>Cijfer</th><th>Moeilijkheidsgraad</th></tr>";
  var x = xmlDoc.getElementsByTagName("vak");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("vaknaam")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("docent")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("cijfer")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("moeilijkheidsgraad")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}