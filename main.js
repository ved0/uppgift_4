const button = document.getElementById("addTask");
const list = document.getElementById("taskList");
const countingLabel = document.getElementById("counter");
const arrayLabel = document.getElementById("array");
const fullArrayLabel = document.getElementById("fullArray");
const arrayText = "The current array : ";
const counterText = "Tasks done : ";
const fullArrayText = "Array with all tasks : "
let arrayWithEverything = [];
let counterOfEverything = 0;
let doneTasksCounter = 0;
let taskArray = [];
let arrayLastPoss = 0;

button.onclick = function () {
    const taskInput = document.getElementById("task");
    if (taskInput.value < 1) {
        alert("You need to write something first!");
    } else {
        let input = taskInput.value;
        taskArray[arrayLastPoss] = input;
        arrayLabel.textContent = arrayText + arrayToText(taskArray);
        arrayLastPoss++;
        arrayWithEverything[counterOfEverything] = input;
        counterOfEverything++;
        fullArrayLabel.textContent = fullArrayText + arrayToText(arrayWithEverything);
        const newTask = document.createElement("li");
        newTask.appendChild(document.createTextNode(taskInput.value));
        const thrashCan = document.createElement("i");
        thrashCan.className = "fa-solid fa-trash-can";
        thrashCan.style.float = "right";
        thrashCan.onclick = function () {
            const index = taskArray.indexOf(newTask.textContent);
            taskArray.splice(index, 1);
            arrayLastPoss--;
            arrayLabel.textContent = arrayText + arrayToText(taskArray);
            newTask.parentNode.removeChild(newTask);
        }
        newTask.appendChild(thrashCan);
        list.appendChild(newTask);
        arrayLabel.textContent = arrayText + arrayToText(taskArray);
        taskInput.value = "";
    }
}
list.addEventListener("click", function (ev) {
    if (ev.target.tagName === "LI") {
        if (ev.target.classList.toggle("checked")) {
            ++doneTasksCounter;
            countingLabel.textContent = counterText + doneTasksCounter;
        } else {
            --doneTasksCounter;
            countingLabel.textContent = counterText + doneTasksCounter;
        };
    }
}, false);


function arrayToText(myArray){
    let text = "";
    for(let i = 0; i < myArray.length; i ++){
        text += myArray[i] + ", ";
    }
    return text;
}