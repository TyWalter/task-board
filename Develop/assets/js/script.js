// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
const submitBtn = $('#submitBtn');
const closeMdl = $('#formModal');
const titleEl = $('#title');
const dateEl = $('#taskDueDate');
const descEl = $('#texarea');

// Save tasks to local storage
function saveToStorage(){
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Read tasks from local storage
function readFromStorage(){
  let tasks = JSON.parse(localStorage.getItem('tasks'));
// If no tasks are present, create a blank array to push tasks to later
  if(!tasks){
    tasks = [];
  }
  return tasks;
}

// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard(task) {
  const taskCard = $('<div>')
    .addClass('card project-card draggable my-3')
    .attr('data-task-id', task.id);
  const cardHeader = $('<div>')
    .addClass('card-header h4')
    .text(task.title);
  const cardBody = $('<div>')
    .addClass('card-body');
  const cardDesc = $('<p>')
    .addClass('card-text')
    .text(task.desc);
  const cardDueDate = $('<p>')
    .addClass('card-text')
    .text(task.dueDate);
  const cardDeleteBtn = $('<button>')
    .addClass('btn btn-danger delete')
    .text('Delete')
    .attr('data-task-id', task.id);
  cardDeleteBtn.on('click', handleDeleteTask);

// If project is due today, make the card yellow, if it's overdue, make it red
  if(task.dueDate && task.status !== 'done'){
    const now = dayjs();
    const taskDueDate = dayjs(task.dueDate, 'DD/MM/YYY');
    if(now.isSame(taskDueDate, 'day')){
      taskCard.addClass('bg-warning text-white');
    } else if(now.isAfter(taskDueDate)){
      taskCard.addClass('bg-danger text-white');
      cardDeleteBtn.addClass('border-light');
    }
  }
// Append all elements above to the correct elements
  cardBody.append(cardDesc, cardDueDate, cardDeleteBtn);
  taskCard.append(cardHeader, cardBody);
  return taskCard;
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
  const taskId = $(this).attr('data-task-id');
  const tasks = readFromStorage();
  tasks.forEach((task) => {
    if(task.id === taskId){
      tasks.splice(tasks.indexOf(task), 1);
    }
  });
  saveToStorage(tasks);
  renderTaskList();
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event) {
  event.preventDefault();
  
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
// Render the task list
  renderTaskList();
// Event listener for submitting task
  submitBtn.on('click', function(){
    console.log('submitted');
    $(closeMdl).modal('toggle');
  })
// Making date selection in modal datepicker
  $('#taskDueDate').datepicker({
    changeMonth: true,
    changeYear: true,
  });
// Make lanes droppable
  $('.lane').droppable({
    accept: '.draggable',
    drop: handleDrop,
  });
});
