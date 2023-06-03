let array = [];

const myText = document.getElementById("myText")
const myList = document.getElementById("myList")
// function for my add button
function add() {
    if(myText.value=== ''){
        alert("Write something");

    }
  
    else{
        let li = document.createElement("li");
        li.innerHTML = myText.value;
        myList.appendChild(li);
    }
    li.innerHTML = `
        <input type="checkbox" class="checkbox" ${checked}>
        ${list.name}
        <button class="delete-button"></button>`;
        myList.appendChild(li);
    myText.value = "";
    saveData();

    let myDate = new Date(); //Get only the date console.log("date: ", 
    console.log('date', myDate.toLocaleDateString()); 
    //Obtain only the time
     console.log("time: ", myDate.toLocaleTimeString());

     array.push(myText.value)
}
function saveData() {
    localStorage.setItem("Data",myList.innerHTML );
}
function showList(){
    myList.innerHTML = localStorage.getItem("Data");

}
showList(); 

function sorting() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("myList");
    switching = true;

    /* Make a loop that will continue until
    no switching has been done: */

    while (switching) {

      // start by saying: no switching is done:

      switching = false;
      b = list.getElementsByTagName("LI");

      // Loop through all list-items:
      for (i = 0; i < (b.length - 1); i++) {

        // start by saying there should be no switching:
        shouldSwitch = false;

        /* check if the next item should
        switch place with the current item: */
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {

          /* if next item is alphabetically
          lower than current item, mark as a switch
          and break the loop: */
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /* If switch is marked, make the switch
        and mark the switch as done */
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
  }

