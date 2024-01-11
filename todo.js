const inputBox = document.getElementById("inputbox");
const listcontainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ""){
        alert("Must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}

listcontainer.addEventListener("click",function(r){
    if(r.target.tagName == "SPAN"){
        r.target.parentElement.remove();
    }
    else if(r.target.tagName == "LI"){
        r.target.classList.toggle("checked");
    }
})