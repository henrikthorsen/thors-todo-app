const addTodo = () => { //function that is called everytime the + button is clicked, or enter is clicked after intering text in the input field
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
    listItem.classList.add("todo", "undone", "background-color-undone", "flex", "justify-content-space-between", "align-items-center"); //several classes are added to the list item 
    statusWrapper.classList.add("status-wrapper", "flex", "align-items-center"); //several classes are added to the div item wrapped around statusIcon and the title
    statusIcon.classList.add("far", "fa-circle", "btn-mark-as-done"); //several classes are added to the statusIcon
    todoTitle.classList.add("todo-title"); //a class is added to the todoTitle paragraph
    removeIcon.classList.add("fas", "fa-times", "btn-remove"); //several classes are added to the removeIcon
    todos.appendChild(listItem); //the list item is appended as a child to the ul item
    listItem.appendChild(statusWrapper); //the div statusWrapper is appended as a child to the list item
    statusWrapper.appendChild(statusIcon); //the statusIcon is appended as a child to the div statusWrapper
    statusWrapper.appendChild(todoTitle); //the paragraph todoTitle is appended as a child to the div statusWrapper
    listItem.appendChild(removeIcon); //the removeIcon is appended as a child to the list item
    
    statusIcon.addEventListener("click", (e) => { //adds eventlistener to the statusIcon
        //console.log(e.target.parentElement.parentElement)
        const listItemChangeStatus = e.target.parentElement.parentElement //the list item is saved in a variable
        const iconChangeStatus = e.target //the statusIcon is saved in a variable
        const titleChangeStatus = e.target.nextSibling //the todoTitle paragraph is saved in a variable
        changeStatus(listItemChangeStatus, iconChangeStatus, titleChangeStatus) //the changeStatus function is called with 3 arguments
    })
    removeIcon.addEventListener("click", (e) => { //adds eventlistener to the removeIcon
        const listItemRemove = e.target.parentElement //the removeIcon is saved in a variable
        removeTodo(listItemRemove) //the removeTodo function is called with 1 argument
    })

    inputValue = document.getElementById("todo-title-input").value = ""; //sets the input value to blank again
    document.getElementById("todo-title-input").focus(); //resets the focus on the input field
    //todoArray.push(listItem);
}

const showDoneTodos = () => {
    const ulItem = document.querySelectorAll("li");
    const btnFilterDone = document.getElementById("btn-filter-done");
    const btnFilterUndone = document.getElementById("btn-filter-undone");
    const btnFilterAll = document.getElementById("btn-filter-all");
    if (btnFilterDone.classList.contains("background-color-active-button") === false) {
        btnFilterDone.classList.add("background-color-active-button");
    } 
    if (btnFilterDone.classList.contains("background-color-inactive-button")) {
        btnFilterDone.classList.remove("background-color-inactive-button");
    } 
    if (btnFilterUndone.classList.contains("background-color-active-button")) {
        btnFilterUndone.classList.remove("background-color-active-button");
    } 
    if (btnFilterUndone.classList.contains("background-color-inactive-button") === false) {
        btnFilterUndone.classList.add("background-color-inactive-button");
    } 
    if (btnFilterAll.classList.contains("background-color-active-button")) {
        btnFilterAll.classList.remove("background-color-active-button");
    } 
    if (btnFilterAll.classList.contains("background-color-inactive-button") === false) {
        btnFilterAll.classList.add("background-color-inactive-button");
    } 
    for (i = 0; i < ulItem.length; i++) {
        if (ulItem[i].classList.contains("undone")) {
            ulItem[i].classList.add("display-none");
            //console.log(ulItem[i]);
        } else if (ulItem[i].classList.contains("done") && ulItem[i].classList.contains("display-none")) {
            ulItem[i].classList.remove("display-none");
        }
        //console.log(ulItem[i]);
    }  
}

const showUndoneTodos = () => {
    const ulItem = document.querySelectorAll("li");
    const btnFilterDone = document.getElementById("btn-filter-done");
    const btnFilterUndone = document.getElementById("btn-filter-undone");
    const btnFilterAll = document.getElementById("btn-filter-all");
    if (btnFilterDone.classList.contains("background-color-active-button")) {
        btnFilterDone.classList.remove("background-color-active-button");
    } 
    if (btnFilterDone.classList.contains("background-color-inactive-button")  === false) {
        btnFilterDone.classList.add("background-color-inactive-button");
    } 
    if (btnFilterUndone.classList.contains("background-color-active-button") === false) {
        btnFilterUndone.classList.add("background-color-active-button");
    } 
    if (btnFilterUndone.classList.contains("background-color-inactive-button")) {
        btnFilterUndone.classList.remove("background-color-inactive-button");
    }
    if (btnFilterAll.classList.contains("background-color-active-button")) {
        btnFilterAll.classList.remove("background-color-active-button");
    } 
    if (btnFilterAll.classList.contains("background-color-inactive-button") === false) {
        btnFilterAll.classList.add("background-color-inactive-button");
    } 
    for (i = 0; i < ulItem.length; i++) {
        if (ulItem[i].classList.contains("done")) {
            ulItem[i].classList.add("display-none");
            //console.log(ulItem[i]);
        } else if (ulItem[i].classList.contains("undone") && ulItem[i].classList.contains("display-none")) {
            ulItem[i].classList.remove("display-none");
        }
        //console.log(ulItem[i]);
    }  
}

const showAllTodos = () => {
    const ulItem = document.querySelectorAll("li");
    const btnFilterDone = document.getElementById("btn-filter-done");
    const btnFilterUndone = document.getElementById("btn-filter-undone");
    const btnFilterAll = document.getElementById("btn-filter-all");
    if (btnFilterDone.classList.contains("background-color-active-button")) {
        btnFilterDone.classList.remove("background-color-active-button");
    } 
    if (btnFilterDone.classList.contains("background-color-inactive-button") === false) {
        btnFilterDone.classList.add("background-color-inactive-button");
    }
    if (btnFilterUndone.classList.contains("background-color-active-button")) {
        btnFilterUndone.classList.remove("background-color-active-button");
    } 
    if (btnFilterUndone.classList.contains("background-color-inactive-button") === false) {
        btnFilterUndone.classList.add("background-color-inactive-button");
    } 
    if (btnFilterAll.classList.contains("background-color-active-button") === false) {
        btnFilterAll.classList.add("background-color-active-button");
    } 
    if (btnFilterAll.classList.contains("background-color-inactive-button")) {
        btnFilterAll.classList.remove("background-color-inactive-button");
    } 
    for (i = 0; i < ulItem.length; i++) {
        if (ulItem[i].classList.contains("display-none")) {
            ulItem[i].classList.remove("display-none");
        }
        //console.log(ulItem[i]);
    }  
}


const changeStatus = (listItemToChange, iconToChange, titleToChange) => { //function that toggles the status of a todo
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

const removeTodo = (listItem) => { //function that removes a listitem
    todos.removeChild(listItem);
}

const addTodoEnter = (event) => { //function that makes it possible to add todos just by hitting enter
    event.preventDefault(); //prevents the default behaviour
    const inputValue = document.getElementById("todo-title-input").value; //grabs the value from the input field
    if (inputValue == '' ) { //if nothing is entered in the inout field > exit funtion
        return;
    }
    if (event.keyCode === 13) { //if enter key is clicked
        document.getElementById("icon-add-todo").click(); //fire a click on the addTodo icon
    }
};

const changeMode = () => { //function that toggles between light and dark mode
    const bodyElement = document.querySelector("body"); //the body element is saved in a variable
    const h1Element = document.querySelector("h1"); //the h1 element is saved in a variable
    const btnModeElement = document.querySelector("#btn-change-mode"); //the button element is saved in a variable
    bodyElement.classList.toggle("background-color-dark-mode"); //toggles the dark-mode background color
    h1Element.classList.toggle("text-color-dark-mode"); //toggles the dark-mode text color
    if (btnModeElement.innerText === "Dark mode") { //toggles the button text between Dark and Light mode 
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
btnAddTodoEnter.addEventListener("keyup", addTodoEnter) //adds an eventlistener til the enter key

//let btnAddTodo = document.querySelector("#btn-add-todo");
//btnAddTodo.addEventListener("click", addTodo);

let iconAddTodo = document.querySelector("#icon-add-todo");
iconAddTodo.addEventListener("click", addTodo); //adds an eventlistener til the addTodo icon

let btnChangeMode = document.querySelector("#btn-change-mode");
btnChangeMode.addEventListener("click", changeMode); //adds an eventlistener til the Dark mode button

let btnShowDoneTodos = document.querySelector("#btn-filter-done");
btnShowDoneTodos.addEventListener("click", showDoneTodos); //adds an eventlistener til the Done button

let btnShowUndoneTodos = document.querySelector("#btn-filter-undone");
btnShowUndoneTodos.addEventListener("click", showUndoneTodos); //adds an eventlistener til the Undone button

let btnShowAllTodos = document.querySelector("#btn-filter-all");
btnShowAllTodos.addEventListener("click", showAllTodos); //adds an eventlistener til the All button

//let btnFilterDone = document.querySelector("#btn-filter-done");
//btnFilterDone.addEventListener("click", showDone);


//var el = document.querySelectorAll("button");
//el[0].addEventListener("click", changeHeight)
//el[0].addEventListener("click", changeWidth)
//el[1].addEventListener("click", changeHeight)
//el[2].addEventListener("click", changeWidth)






