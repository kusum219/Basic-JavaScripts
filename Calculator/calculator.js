let string = "";
let buttons = document.querySelectorAll(".button")

Array.from(buttons).forEach((button) => {
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.getElementById("show").value = string;

        }
        else if(e.target.innerHTML == "AC"){
            string = "";
            document.getElementById("show").value = string;
        }
        else if(e.target.innerHTML == "DEL"){
            string = string.slice(0,-1);
            document.getElementById("show").value = string;
        }
        else{
        string = string + e.target.innerHTML;
        document.getElementById("show").value = string;

        }
    })
});
