let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");

function AddTask(){

    if(inputBox.value === ''){
        alert("You must write something");
    }else{
        let div = document.createElement("Div");
        
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        div.appendChild(li);
        listContainer.appendChild(div);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        div.appendChild(span)
    }inputBox.value = "";
    saveData();

}


listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();