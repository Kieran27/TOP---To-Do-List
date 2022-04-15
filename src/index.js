import './styles.css';

// JS Module Imports
import uiModule from './UI-Module.js';
import formModule from './Form-Module.js';
import Storage from './Storage-Class.js';
import {
  projectsList,
  createNewProjectBtn,
  createNewTaskBtn,
  newTaskModal,
  newTaskClose,
  newProjectModal,
  newProjectForm,
  newTaskForm,
  editTaskClose,
  currentProject,
  newProjectClose,
  toDoArray,
  clearStorageBtn
} from './Base-Variables.js'

// Static Event Listeners;

createNewProjectBtn.addEventListener('click', uiModule.toggleNewProjectModal);
newProjectClose.addEventListener('click', uiModule.toggleNewProjectModal);
newTaskClose.addEventListener('click', uiModule.toggleNewTaskModal);
editTaskClose.addEventListener('click', uiModule.toggleEditModal);
createNewTaskBtn.addEventListener('click', uiModule.toggleNewTaskModal);
clearStorageBtn.addEventListener('click', Storage.clearStorage);

newProjectForm.addEventListener('submit', formModule.newProjectSubmit);
newTaskForm.addEventListener('submit', formModule.newTaskSubmit);


Storage.getProjects();
Storage.getTasks();
