const projectsList = document.querySelector('[data-id="projects-list"]');
const createNewProjectBtn = document.querySelector('[data-id="btn-create-new-project"]');
const createNewTaskBtn = document.querySelector('[data-id="btn-create-new-task"]')
const newTaskModal = document.querySelector('[data-id="task-creation-container"]');
const newTaskClose =  document.querySelector('[data-id="btn-task-close"]');
const newProjectModal = document.querySelector('[data-id="new-project-form-container"]');
const newProjectClose = document.querySelector('[data-id="btn-project-close"]');
const expandedModal = document.querySelector('[data-id="expanded-modal-container"]');
const editModal = document.querySelector('[data-id="task-edit-container"]');
const editTaskClose = document.querySelector('[data-id="btn-task-edit-close"]');
const newProjectForm = document.getElementById('new-project-form');
const newTaskForm = document.getElementById('create-new-task');
const clearStorageBtn =  document.querySelector("[data-id='btn-clear-local-storage']");
const hamburgerMenu = document.querySelector("[data-id='btn-hamburger']");
const mobileNavClose = document.querySelector("[data-id='btn-mobile-nav-close']");
const mobileNavCreateProject = document.querySelector("[data-id='btn-mobile-nav-create']");

// Global variables - needed for Array manipulation

let currentProject = null;
let objectIndex = 0;
let toDoArray = [];
let projectsArray = [];


export {
  projectsList,
  createNewProjectBtn,
  createNewTaskBtn,
  newTaskModal,
  newTaskClose,
  newProjectModal,
  newProjectForm,
  newTaskForm,
  currentProject,
  expandedModal,
  newProjectClose,
  editModal,
  editTaskClose,
  objectIndex,
  toDoArray,
  projectsArray,
  clearStorageBtn,
  hamburgerMenu,
  mobileNavClose,
  mobileNavCreateProject
};
