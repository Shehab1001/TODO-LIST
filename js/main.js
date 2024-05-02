var taskInput = document.getElementById("add-task");
var addButton = document.getElementById("addButton");
var editButton = document.getElementById("editButton");
var editedTask;

var tasksList = [];

if (localStorage.getItem("tasks") !== null) {
  tasksList = JSON.parse(localStorage.getItem("tasks"));

  displayTasksList(tasksList);
}

function addTask() {
  if (validInputs() === true) {
    var task = {
      name: taskInput.value,
    };

    tasksList.push(task);

    clearInputs();

    setItemInlocalStorage();

    displayTasksList(tasksList);
  } else {
    alert("Please enter a valid Task");
  }
}

function clearInputs() {
  taskInput.value = "";
}

function setItemInlocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasksList));
}

function displayTasksList(list) {
  var box = ``;

  for (var i = 0; i < list.length; i++) {
    box += `
      <div
            class="p-3 my-2 d-flex justify-content-between rounded-3" id="card"
          >
            <div class="checkbox-wrapper-11">
              <input id="${i}" type="checkbox" name="r" value="2" />
              <label for="${i}">${list[i].name}</label>
            </div>

            <div class="d-flex" id="btns">
              <div>
                <button class="editBtn rounded-3 mx-2" onclick ="getTaskToEdit(${i})">
                <i class="fa-solid fa-pencil"></i>
                </button>
              </div>

              <div>
                <button class="bin-button rounded-3" onclick ="deleteTask(${i})">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 39 7"
                    class="bin-top"
                  >
                    <line
                      stroke-width="4"
                      stroke="white"
                      y2="5"
                      x2="39"
                      y1="5"
                    ></line>
                    <line
                      stroke-width="3"
                      stroke="white"
                      y2="1.5"
                      x2="26.0357"
                      y1="1.5"
                      x1="12"
                    ></line>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 33 39"
                    class="bin-bottom"
                  >
                    <mask fill="white" id="path-1-inside-1_8_19">
                      <path
                        d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
                      ></path>
                    </mask>
                    <path
                      mask="url(#path-1-inside-1_8_19)"
                      fill="white"
                      d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                    ></path>
                    <path
                      stroke-width="4"
                      stroke="white"
                      d="M12 6L12 29"
                    ></path>
                    <path stroke-width="4" stroke="white" d="M21 6V29"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 89 80"
                    class="garbage"
                  >
                    <path
                      fill="white"
                      d="M20.5 10.5L37.5 15.5L42.5 11.5L51.5 12.5L68.75 0L72 11.5L79.5 12.5H88.5L87 22L68.75 31.5L75.5066 25L86 26L87 35.5L77.5 48L70.5 49.5L80 50L77.5 71.5L63.5 58.5L53.5 68.5L65.5 70.5L45.5 73L35.5 79.5L28 67L16 63L12 51.5L0 48L16 25L22.5 17L20.5 10.5Z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
      `;
  }
  document.getElementById("task-list").innerHTML = box;
}

function deleteTask(index) {
  tasksList.splice(index, 1);

  setItemInlocalStorage();

  displayTasksList(tasksList);
}

function getTaskToEdit(i) {
  addButton.classList.add("d-none");
  editButton.classList.remove("d-none");
  taskInput.value = tasksList[i].name;
  editedTask = i;
}

function setTaskToEdit() {
  addButton.classList.remove("d-none");
  editButton.classList.add("d-none");
  tasksList[editedTask].name = taskInput.value;

  clearInputs();

  setItemInlocalStorage();

  displayTasksList(tasksList);
}

function validInputs() {
  var patern = /[a-zA-Z0-9]{2,}/;

  if (patern.test(taskInput.value) === true) {
    return true;
  } else {
    return false;
  }
}
