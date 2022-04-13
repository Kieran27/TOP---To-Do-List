import uiModule from './UI-Module.js';
import Todo from './Todo-Class';
import {currentProject, objectIndex} from './Base-Variables.js'
import editModule from './Edit-Module.js'

const formModule = (() => {

  const editForm = document.getElementById('edit-task');
  const editedName = document.getElementById('task-edit-title');
  const editedDescription = document.getElementById('task-edit-description');
  const editedDate = document.getElementById('task-edit-date');
  const editedProject = document.getElementById('project');


  let toDoArray = [];

  const newProjectSubmit = (e) => {
    const newProjectName = document.getElementById('new-project-name');
    e.preventDefault();
    createNewOption(newProjectName);
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
    console.log(toDoArray);

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

  const checkForEqualName = (newProjectName) => {
    console.log('hello nimious!')
  }

  const editTaskSubmit = (e) => {
    e.preventDefault();
    const editedUrgency = document.querySelector("input[name='Edit-Urgency']:checked");
    toDoArray[objectIndex].title = editedName.value;
    toDoArray[objectIndex].date = editedDate.value;
    toDoArray[objectIndex].description = editedDescription.value;
    toDoArray[objectIndex].urgency = editedUrgency.value;
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
