function set_background(){

var docBody=document.getElementsByTagName("body")[0];
var par=docBody.getElementsByTagName("p");
var myp1=par[0];
myp1.style.backgroundColor="yellow";
var myp2=par[1];
myp2.style.backgroundColor="grey";


}

function getAttributes(){
    var doc=document.getElementById("w3r").hreflang;
    alert(doc);
    var y=document.getElementById("w3r").target;
    alert(y);
    var x=document.getElementById("w3r").type;
    alert(x);

}

function insert_Row(){
    var table=document.getElementById("sampleTable")

    var insertRow=document.createElement("tr");
    var tableData=document.createElement("td");
    var tableData1=document.createElement("td");
    var txt1=tableData.createTextNode("Row cell3");
    var txt2=tableData1.createTextNode("Row cell3");
    insertRow.appendChild(txt1);
    insertRow.appendChild(txt2);
    table.appendChild(insertRow)


}