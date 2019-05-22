const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const list = document.getElementById("list");
const ul = document.querySelector("ul");
const li = document.getElementsByTagName("li").length;
const deleteBtn = document.getElementsByClassName("deleteBtn");

//initialize function adds delete buttons to starting list
//and also adds the "newLi" class to starting list
init = () => {
    addAnotherDeleteButton();
    addLiClass();
}

inputLength = () => {
    return input.value.length;
}

createListElement = () => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    li.classList.add("newLi");
    input.value = "";
}

addListAfterClick = () => {
    if(inputLength() > 0){
        createListElement();
        addDeleteButton();
    } 
}

addListAfterKeypress = (e) => {
    if(inputLength() > 0 && e.keyCode === 13){
        createListElement();
        addDeleteButton();
    }
}

//creates a delete button
createDeleteBtn = () =>{
    let btn = document.createElement("button");
    btn.classList.add("deleteBtn");
    btn.innerHTML = "Delete";
    return btn;
}

//creates the "newLi" class and adds it to starting list
addLiClass = () => {
    for (let i = 0; i < li; i++){
        document.querySelectorAll("li")[i].classList.add("newLi");
    }
}

//toggles the strikethrough style that can be found on the style.css
//this toggle function is limited to the list items assigned to the 
//class "newLi"
toDoDone = (e) => {
    if(e.target && e.target.matches(".newLi")){
        e.target.classList.toggle("done");
    }
}

//adds a delete button to new items added to the list
addAnotherDeleteButton = () => {
    for (let i = 0; i < li; i++){
        let btn = createDeleteBtn();
        document.querySelectorAll("li")[i].appendChild(btn);
    }
}

//adds a delete button to the items on the starting list
addDeleteButton = () => {
    let li = document.getElementsByTagName("li").length;
    let btn = createDeleteBtn();
    for (let i = 0; i < li; i++){
        document.getElementsByTagName("li")[i].appendChild(btn);
    }
}

//removes the list item by selecting the targets (delete button)
//parent node (li) parent node (ul) and removing the child which 
//is the targets parent node (li)
removeListItem = (e) => {
    if (e.target.matches(".deleteBtn")){
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    }
}

init();

button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterKeypress)

list.addEventListener("click", toDoDone)

list.addEventListener("click", removeListItem)