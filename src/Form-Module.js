import uiModule from './UI-Module.js';
import Todo from './Todo-Class';
import {currentProject, objectIndex} from './Base-Variables.js'
import editModule from './Edit-Module.js'

const formModule = (() => {

  const editForm = document.getElementById('edit-task');
  const editedName = document.getElementById('task-edit-title');
  const editedDescription = document.getElementById('task-edit-description');
  const editedDate = document.getElementById('task-edit-date');

  let toDoArray = [];

  const newProjectSubmit = (e) => {
    const newProjectName = document.getElementById('new-project-name');
    e.preventDefault();
    createNewOption(newProjectName);
    createNewEditOption(newProjectName);
    uiModule.toggleNewProjectModal();
    uiModule.createNewProject(newProjectName);
    uiModule.clearNewProjectInput(newProjectName);
  }

  const newTaskSubmit = (e) => {
    e.preventDefault();

    const taskName = document.getElementById('task-title');
    const taskDescription = document.getElementById('task-description');
    const taskDate = document.getElementById('task-date');
    const taskProject = document.getElementById('project');
    const taskUrgency = document.querySelector("input[name='Urgency']:checked");

    currentProject = taskProject.value;

    // Instantiate New Todo Item
  const newTodo = new Todo(taskName.value, taskDescription.value, taskDate.value, taskProject.value, taskUrgency.value);
    toDoArray.push(newTodo);

    uiModule.toggleNewTaskModal();
    uiModule.clearNewTaskInputs(taskName, taskDescription, taskDate);
    uiModule.appendTasks();
    uiModule.removeActiveProject();
    uiModule.setActiveProject();
  }

  const createNewOption = (projectName) => {
    const newOption = new Option(projectName.value)
    document.querySelector('#project').add(newOption, undefined);
  }

  const createNewEditOption = (projectName) => {
    const newOption = new Option(projectName.value)
    document.querySelector('#edit-project').add(newOption, undefined);
  }

  const checkForTaskName = (newTaskName) => {
  toDoArray.forEach(todo => {
    if (todo.title.toLowerCase() === newTaskName.toLowerCase()) {
      alert("Tasks Cannot Share the Same Name!")
    } else {
      appendTasks();
    }
  })
}

  const checkForEqualName = (newProjectName) => {
    console.log('hello nimious!')
  }

  const editTaskSubmit = (e) => {
    e.preventDefault();
    const editedUrgency = document.querySelector("input[name='Edit-Urgency']:checked");
    const editedProject = document.getElementById('edit-project');

    toDoArray[objectIndex].newTitle = editedName.value
    toDoArray[objectIndex].newDate = editedDate.value;
    toDoArray[objectIndex].newDescription = editedDescription.value;
    toDoArray[objectIndex].newUrgency = editedUrgency.value;
    toDoArray[objectIndex].newProject = editedProject.value;

    uiModule.toggleEditModal();
    uiModule.appendTasks();
  }

  const appendEditDetails = (expandedTitle, expandedDate, expandedNotes, expandedUrgency) => {
    editedName.value = expandedTitle.textContent;
    editedDate.value = expandedDate.textContent;
    editedDescription.value = expandedNotes.textContent;
    document.querySelectorAll("input[name='Edit-Urgency']").forEach(option => {
      if (option.id === expandedUrgency.textContent) {
        option.checked = true;
      }
    })
  }

  return { toDoArray, newProjectSubmit, newTaskSubmit, createNewOption, editTaskSubmit, appendEditDetails }
})();

export default formModule;
