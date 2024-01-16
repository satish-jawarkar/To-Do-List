const inputBox = document.getElementById("inputbox");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ""){
        alert("Must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    save ();
}

listContainer.addEventListener("click",function(event){
    if(event.target.tagName == "SPAN"){
        event.target.parentElement.remove();
        save();
    }
    else if(event.target.tagName == "LI"){
        event.target.classList.toggle("checked");
        save();
    }
})

function save(){
    localStorage.setItem('data',listContainer.innerHTML);
}

function data(){
    listContainer.innerHTML=localStorage.getItem('data');
}

data();