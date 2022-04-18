import './styles.css';

import Icon from './assets/delete.svg'

// JS Module Imports
import uiModule from './UI-Module.js';
import formModule from './Form-Module.js';
import Storage from './Storage-Class.js';
import FirstLoad from './First-Load.js';
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
  clearStorageBtn,
  hamburgerMenu,
  mobileNavClose,
  mobileNavCreateProject
} from './Base-Variables.js'

// Static Event Listeners;

createNewProjectBtn.addEventListener('click', uiModule.toggleNewProjectModal);
newProjectClose.addEventListener('click', uiModule.toggleNewProjectModal);
newTaskClose.addEventListener('click', uiModule.toggleNewTaskModal);
editTaskClose.addEventListener('click', uiModule.toggleEditModal);
createNewTaskBtn.addEventListener('click', uiModule.toggleNewTaskModal);
hamburgerMenu.addEventListener('click', uiModule.toggleMobileNav);
mobileNavClose.addEventListener('click', uiModule.toggleMobileNav);
mobileNavCreateProject.addEventListener('click', uiModule.toggleNewProjectModal);

clearStorageBtn.addEventListener('click', Storage.clearStorage);

newProjectForm.addEventListener('submit', formModule.newProjectSubmit);
newTaskForm.addEventListener('submit', formModule.newTaskSubmit);

// Local Storage - Get Projects and Tasks and display them to user

Storage.getProjects();
Storage.getTasks();

FirstLoad.createHomeProject();
FirstLoad.createHomeProjectMobile();
FirstLoad.setCurrentProject();
