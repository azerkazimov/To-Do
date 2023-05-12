const task = document.querySelector(".task-bloc");
const newTask = document.querySelector(".form-control");

// Add task

function addNewTask(element) {
  const previousElement = newTask.value;

  const taskBloc = `
	<div class="input-group mb-3">
		<div class="input-group-text">
			<input class="form-check-input mt-0" type="checkbox" value="" onclick="doneTask(this)">
		</div>
		<input type="text" class="form-control" value="${previousElement}" disabled>
		<button class="btn btn-outline-success" type="button" onclick="editTask(this)">Edit</button>
		<button class="btn btn-outline-danger" type="button" onclick="deleteTask(this)">Delete</button>
	</div>
  `;
  if (inputValid()) {
    task.innerHTML += taskBloc;
  }
}

//  ENTER düyməsinə basaraq tapşırıq əlavə edilməsi
newTask.addEventListener("keyup", function (e) {
  if (e.keyCode === 13 && inputValid()) {
    addNewTask();
  }
});

// Input boş olarsa
function inputValid() {
  return newTask.value !== "";
}

// Delete task

function deleteTask(element) {
  const parentOfElemet = element.parentElement;
  task.removeChild(parentOfElemet);
}

// Done task

function doneTask(element) {
  if (element.checked) {
    element.parentElement.nextElementSibling.style.textDecoration =
      "line-through";
    element.parentElement.style.background = "#c6f7c9";
    element.parentElement.nextElementSibling.style.background = "#c6f7c9";
  } else {
    element.parentElement.nextElementSibling.style.textDecoration = "none";
    element.parentElement.style.background = "#e9ecef";
    element.parentElement.nextElementSibling.style.background = "#e9ecef";
  }
}

// Edit task

function editTask(element) {
  element.previousElementSibling.disabled = false;
}
