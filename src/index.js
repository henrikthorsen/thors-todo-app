// console.log("Hello from index.js");
//const p = document.getElementById("todos");
//p.innerHTML = "This is where the magic will happen!";

const addTodo = () => {
    const inputValue = document.getElementById("todo-title-input").value; //grabs the value from the input field
    const todos = document.getElementById("todos"); //grabs the ul element
    const listItem = document.createElement("li"); //creates a li item
    const statusWrapper = document.createElement("div"); //creates a div element
    const statusIcon = document.createElement("i"); //creates a icon element
    const todoTitle = document.createElement("p"); //creates a p element
    const removeIcon = document.createElement("i"); //creates a icon element
    todoTitle.innerHTML = inputValue; //the value from the input field is set as text inside the p element
    listItem.classList.add("todo", "background-color-salmon", "flex", "justify-content-space-between", "align-items-center"); //the class todo is added to the list item 
    statusWrapper.classList.add("status-wrapper", "flex", "align-items-center");
    statusIcon.classList.add("far", "fa-circle", "btn-mark-as-done"); //the classes far and fa-circle is added to the list item
    todoTitle.classList.add("todo-title");
    removeIcon.classList.add("fas", "fa-times", "btn-remove");
    todos.appendChild(listItem);
    listItem.appendChild(statusWrapper);
    statusWrapper.appendChild(statusIcon);
    statusWrapper.appendChild(todoTitle);
    listItem.appendChild(removeIcon);
    inputValue = document.getElementById("todo-title-input").value = ""; //sets the input value to blank again
}

// const markAsDone = () => { 
//    listItem.classList.remove("background-color-salmon");
//    listItem.classList.add("background-color-lightgray");
//    statusIcon.classList.remove("far", "fa-circle", "btn-mark-as-done");
//    statusIcon.classList.add("fas", "fa-check-circle", "btn-mark-as-undone");
//    todoTitle.classList.add("text-line-through");
//}

// const markAsUndone = () => {
//    listItem.classList.remove("background-color-lightgray");
//    listItem.classList.add("background-color-salmon");
//    statusIcon.classList.remove("fas", "fa-check-circle", "btn-mark-as-undone");
//   statusIcon.classList.add("far", "fa-circle", "btn-mark-as-done");
//    todoTitle.classList.remove("text-line-through");
//}

//const removeTodo = () => {
//    const listItemRemoved = ????;
//    todos.removeChild(listItemRemoved);
//}

const addTodoEnter = (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("btn-add-todo").click();
    }
};

let btnAddTodoEnter = document.querySelector("#todo-title-input");
btnAddTodoEnter.addEventListener("keyup", addTodoEnter)

let btnAddTodo = document.querySelector("#btn-add-todo");
btnAddTodo.addEventListener("click", addTodo);

//let btnMarkAsDoneAll = document.querySelectorAll(".btn-mark-as-done");
//btnMarkAsDoneAll.addEventListener("click", markAsDone);

//let btnMarkAsUndone = document.querySelector(".btn-mark-as-undone");
//btnMarkAsUndone.addEventListener("click", markAsUndone);

//let btnRemoveTodo = document.querySelector(".btn-remove");
//btnRemoveTodo.addEventListener("click", removeTodo);


//var item = document.querySelector("div");

//var el = document.querySelectorAll("button");
//el[0].addEventListener("click", changeHeight)
//el[0].addEventListener("click", changeWidth)
//el[1].addEventListener("click", changeHeight)
//el[2].addEventListener("click", changeWidth)

//let list = document.querySelector(".btn-mark-as-done");
//list.addEventListener('click', markAsDone);

//<i class="far fa-circle"></i>
//<i class="fas fa-times"></i>
//<i class="fas fa-check-circle"></i>



