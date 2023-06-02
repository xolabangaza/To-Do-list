// let array = [];

// function add() {
   
//   let val = document.getElementById("myText").value;
//   array.push(val);
//   console.log(array);
//   document.getElementById("display").innerHTML = array;
// }
const myText = document.getElementById("myText")
const myList = document.getElementById("myList")

function add() {
    if(myText.value=== ''){
        alert("Write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = myText.value;
        myList.appendChild(li);
    }
    myText.value = "";
    saveData();
}


myList.addEventListener("click",function(e){
    if(e.target.tagName === "List"){
         e.target.classList. toggle("checked");
         saveData()
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }

} , false);


function saveData() {
    localStorage.setItem("Data",myList.innerHTML );
}
function showList(){
    myList.innerHTML = localStorage.getItem("Data");

}
showList(); 
