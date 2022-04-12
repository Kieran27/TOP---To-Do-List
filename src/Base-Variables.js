const projectsList = document.querySelector('[data-id="projects-list"]');
const createNewProjectBtn = document.querySelector('[data-id="btn-create-new-project"]');
const createNewTaskBtn = document.querySelector('[data-id="btn-create-new-task"]')
const newTaskModal = document.querySelector('[data-id="task-creation-container"]');
const newProjectModal = document.querySelector('[data-id="new-project-form-container"]');
const newProjectClose = document.querySelector('[data-id="btn-project-close"]');
const expandedModal = document.querySelector('[data-id="expanded-modal-container"]');
const newProjectForm = document.getElementById('new-project-form');
const newTaskForm = document.getElementById('create-new-task');


let currentProject = null;


export {
  projectsList,
  createNewProjectBtn,
  createNewTaskBtn,
  newTaskModal,
  newProjectModal,
  newProjectForm,
  newTaskForm,
  currentProject,
  expandedModal,
  newProjectClose
};
