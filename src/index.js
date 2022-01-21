const addTodo = () => {
    let inputValue = document.getElementById("todo-title-input").value; //grabs the value from the input field
    if (inputValue == '' ) {
        return;
    }
    const todos = document.getElementById("todos"); //grabs the ul element
    const listItem = document.createElement("li"); //creates a li item
    const statusWrapper = document.createElement("div"); //creates a div element
    const statusIcon = document.createElement("i"); //creates an icon element
    const todoTitle = document.createElement("p"); //creates a p element
    const removeIcon = document.createElement("i"); //creates an icon element
    todoTitle.innerHTML = inputValue; //the value from the input field is set as text inside the p element
    //todos.classList.add("done-todos", "undone-todos");
    listItem.classList.add("todo", "undone", "background-color-undone", "flex", "justify-content-space-between", "align-items-center"); //the class todo is added to the list item 
    statusWrapper.classList.add("status-wrapper", "flex", "align-items-center");
    statusIcon.classList.add("far", "fa-circle", "btn-mark-as-done"); //the classes far and fa-circle is added to the list item
    todoTitle.classList.add("todo-title");
    removeIcon.classList.add("fas", "fa-times", "btn-remove");
    todos.appendChild(listItem);
    listItem.appendChild(statusWrapper);
    statusWrapper.appendChild(statusIcon);
    statusWrapper.appendChild(todoTitle);
    listItem.appendChild(removeIcon);
    
    statusIcon.addEventListener("click", (e) => {
        console.log(e.target.parentElement.parentElement)
        const listItemChangeStatus = e.target.parentElement.parentElement
        const iconChangeStatus = e.target
        const titleChangeStatus = e.target.nextSibling
        changeStatus(listItemChangeStatus, iconChangeStatus, titleChangeStatus)
    })
    removeIcon.addEventListener("click", (e) => {
        const listItemRemove = e.target.parentElement
        removeTodo(listItemRemove)
    })

    inputValue = document.getElementById("todo-title-input").value = ""; //sets the input value to blank again
    document.getElementById("todo-title-input").focus(); //resets the focus on the input field
    //todoArray.push(listItem);
}

// const showTodos = () => {
//     const ulItem = document.getElementById("todos");
//     if () {
        
//     }
// }

const changeStatus = (listItemToChange, iconToChange, titleToChange) => { 
    listItemToChange.classList.toggle("done");
    listItemToChange.classList.toggle("undone");
    listItemToChange.classList.toggle("background-color-undone");
    listItemToChange.classList.toggle("background-color-done");
    iconToChange.classList.toggle("far");
    iconToChange.classList.toggle("fa-circle");
    iconToChange.classList.toggle("btn-mark-as-done");
    iconToChange.classList.toggle("fas");
    iconToChange.classList.toggle("fa-check-circle");
    iconToChange.classList.toggle("btn-mark-as-undone");
    titleToChange.classList.toggle("text-line-through");
}

const removeTodo = (listItem) => {
    todos.removeChild(listItem);
}

const addTodoEnter = (event) => { //this function makes it possible to add todos just by hitting enter
    event.preventDefault();
    const inputValue = document.getElementById("todo-title-input").value; //grabs the value from the input field
    if (inputValue == '' ) {
        return;
    }
    if (event.keyCode === 13) {
        document.getElementById("icon-add-todo").click();
    }
};

const changeMode = () => {
    const bodyElement = document.querySelector("body");
    const h1Element = document.querySelector("h1");
    const btnModeElement = document.querySelector("#btn-change-mode");
    bodyElement.classList.toggle("background-color-dark-mode");
    h1Element.classList.toggle("text-color-dark-mode");
    if (btnModeElement.innerText === "Dark mode") {
        btnModeElement.innerText = "Light mode"
    } else {
        btnModeElement.innerText = "Dark mode"
    }
}



//let arrayOfDoneItems = document.getElementsByClassName("undone");


//let showDone = () => {
//    let arrayOfDoneItems = document.getElementsByClassName("done");
//    return
//}

let btnAddTodoEnter = document.querySelector("#todo-title-input");
btnAddTodoEnter.addEventListener("keyup", addTodoEnter)

//let btnAddTodo = document.querySelector("#btn-add-todo");
//btnAddTodo.addEventListener("click", addTodo);

let iconAddTodo = document.querySelector("#icon-add-todo");
iconAddTodo.addEventListener("click", addTodo);

let btnChangeMode = document.querySelector("#btn-change-mode");
btnChangeMode.addEventListener("click", changeMode);

//let btnFilterDone = document.querySelector("#btn-filter-done");
//btnFilterDone.addEventListener("click", showDone);


//var el = document.querySelectorAll("button");
//el[0].addEventListener("click", changeHeight)
//el[0].addEventListener("click", changeWidth)
//el[1].addEventListener("click", changeHeight)
//el[2].addEventListener("click", changeWidth)






