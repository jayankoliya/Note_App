const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
const notes = document.querySelector(".input-box");

// display the data from localstorage
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("Note");
}
showNotes();

// set the data
function updateStorage() {
    localStorage.setItem("Note",notesContainer.innerHTML)
}

// create the inputbox
createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className= "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img)
})

// update the localstorage value
notesContainer.addEventListener("click",function(e){
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }else if (e.target.tagName === "P") {
        StoreNote = document.querySelectorAll(".input-box");
        StoreNote.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            }
        });
    }
})

//  text new line function 

document.addEventListener("keydown", event =>{
    if (event.key === 'Enter') {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})