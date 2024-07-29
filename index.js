
const input = document.getElementById('input');
const btn = document.getElementById('btn');
const toDos = document.getElementById('toDos');

//Button function to add to dos to the list and a delete button plus the time that todo is being created.
btn.addEventListener('click', () => {

    let time = new Date();
    let timeStamp = time.getHours() + ":" + time.getMinutes() + ' ' + time.getUTCDate() + "/" + (time.getUTCMonth() + 1) + '/' + time.getFullYear();
    timeStamp.className = "time";

  
    let timeStampElement = document.createElement('div');

    timeStampElement.textContent = timeStamp;
    timeStampElement.className = "time"


    let inputValue = input.value;
    let delBtn = document.createElement('BUTTON');
    delBtn.innerHTML = "Delete";
    delBtn.className = "delBtn";
    let li = document.createElement('LI');
    // li.setAttribute('contentEditable', true)
  

    if (inputValue === "") {
    alert('Input cannot Be empty')
    } else {
        

        toDos.appendChild(li).append(inputValue);
        //   li.insertAdjacentText('beforeend',"CReated At")
    li.appendChild( timeStampElement);
        li.appendChild(delBtn);
        input.value = "";
        li.className = "li"
    storedTodos();

}

delBtn.addEventListener('click',(e)=> {
     let userRes = confirm('are you sure you wnt to delete this To do?')
    if (e.target.tagName === "BUTTON" && userRes) {
    e.target.parentElement.remove()
    } 
    storedTodos();
    
})
   


})


//delete to do from the list and from the local storage function.
toDos.addEventListener('click',(e) => {
    

   

    
})
const clearAll = document.getElementById('clearAll');

clearAll.addEventListener('click', () => {
    let ask = confirm('Are You Sure You Want To Clear All To DOS??')
    if (ask == true) {
        toDos.innerHTML = "";
    }
    storedTodos()

})

const delBtn = document.querySelector('#delBtn');
console.log(delBtn)



//function to store toDo to the localstorage.
function storedTodos() {
    localStorage.setItem('todos', toDos.innerHTML);
}

//function to retrieve a to do.
function retrieve() {
    toDos.innerHTML = localStorage.getItem('todos');
}

retrieve()