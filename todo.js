var str=[];
var i=0;
var temp="";

$("#inp").keypress(function(event)
{ 
   if (event.keyCode === 13) 
   { 
       $("#btn1").click(); 
   } 
}
); 

function addToList()
{  

    str[i] = document.getElementById("inp").value;

    var node = document.createElement("P");   
    node.id = "aa";           

    var btn = document.createElement("BUTTON");
    btn.innerHTML = "Clear";

    var textnode = document.createTextNode(str[i]);

    node.appendChild(textnode); 
    node.appendChild(btn);

    document.getElementById("list").appendChild(node);

    btn.onclick = removeFromList;
    
    document.getElementById("inp").value = "";
    i++;
}

function removeFromList()
{

    var  x = document.getElementById("aa");
    document.getElementById("list").removeChild(x);
   
}
