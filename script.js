let calculations = document.querySelector("#calculations");

function results(input){
   document.getElementById("calculations").insertAdjacentHTML('beforeend', (input));
}


function clearResults(){
    document.getElementById("calculations").innerHTML = ""; 
}