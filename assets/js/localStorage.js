let button = document.getElementById("button");
button = document.addEventListener("click", setName);

function setName(){
    let userName = document.getElementById("userName");

    // if(userName.value == ""){
    //     alert("El usuario debe de colocar el nombre")
    // }
    
    localStorage.setItem("name", userName.value);
}