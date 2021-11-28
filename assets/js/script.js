var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler =function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    
    //create list item
    var listItemE1 = document.createElement("li");
    listItemE1.className ="task-item";
   
    // create a div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemE1.appendChild(taskInfoEl);

   
    //add entire list item to list
    tasksToDoEl.appendChild(listItemE1);
  };


    formEl.addEventListener("submit", createTaskHandler); {   
    var listItemE1 = document.createElement("li");
    listItemE1.className = "task-item";

    tasksToDoEl.appendChild(listItemE1);
   };

