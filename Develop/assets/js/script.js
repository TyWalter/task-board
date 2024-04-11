// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
const titleEl = $('#title');
const dateEl = $('#taskDueDate');
const descEl = $('#texarea');
const submitBtn = $('#submitBtn');

// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard() {
  
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
  
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
  event.preventDefault();

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event) {
  event.preventDefault();
  
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
  submitBtn.on('click', function(){
    console.log('submitted');
    $(submitBtn).addClass('data-bs-dismiss="modal"')
  })
  $('#taskDueDate').datepicker({
    changeMonth: true,
    changeYear: true,
  });

  $('.lane').droppable({
    accept: '.draggable',
    drop: handleDrop,
  });
});
