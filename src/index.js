import './styles.css';

// JS Module Imports
import uiModule from './UI-Module.js'
import formModule from './Form-Module.js'
import {
  projectsList,
  createNewProjectBtn,
  createNewTaskBtn,
  newTaskModal,
  newProjectModal,
  newProjectForm,
  newTaskForm,
  currentProject,
  newProjectClose
} from './Base-Variables.js'

// Static Event Listeners;

createNewProjectBtn.addEventListener('click', uiModule.toggleNewProjectModal);
newProjectClose.addEventListener('click', uiModule.toggleNewProjectModal);
createNewTaskBtn.addEventListener('click', uiModule.toggleNewTaskModal);

newProjectForm.addEventListener('submit', formModule.newProjectSubmit);
newTaskForm.addEventListener('submit', formModule.newTaskSubmit);
