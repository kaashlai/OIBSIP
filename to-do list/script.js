



const taskInput = document.getElementById('taskInput');
const listContainer = document.getElementById('listContainer');

function addTask(){
    if (taskInput.value === " "){
        alert("please Enter a task.");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = taskInput.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "\u00D7";
        li.appendChild(span);
      }
        taskInput.value = "";
}
listContainer.addEventListener('click', function(e){
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showData();