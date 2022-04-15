import {
  projectsList,
  createNewProjectBtn,
  createNewTaskBtn,
  newTaskModal,
  newProjectModal,
  currentProject,
  expandedModal,
  editModal,
  objectIndex,
  toDoArray
}
 from './Base-Variables.js'

import formModule from './Form-Module.js';
import editModule from './Edit-Module.js';

const uiModule = (() => {

  const toggleNewProjectModal = () => {
    newProjectModal.classList.toggle('toggle-display');
  }

  const toggleNewTaskModal = () => {
    return newTaskModal.classList.toggle('toggle-display');
  }

  const toggleExpandedModal = () => {
    return expandedModal.classList.toggle('toggle-display');
  }

  const toggleEditModal = () => {
    return editModal.classList.toggle('toggle-display');
  }

  const clearNewProjectInput = (inputName) => {
    inputName.value = "";
  }

  const clearNewTaskInputs = (a, b, c) => {
    a.value = "";
    b.value = "";
    c.value = "";
  }

  const createNewProject = (v) => {
    const listItem = document.createElement('li');
    const projectBtn = document.createElement('button');
    projectBtn.classList.add('btn-project');
    projectBtn.textContent = v.value;
    projectBtn.onclick = changeProjects;

    listItem.appendChild(projectBtn);

    projectsList.appendChild(listItem);
  }

  const appendProjects = (projectsArray) => {
    projectsArray.forEach(project => {
      const listItem = document.createElement('li');
      const projectBtn = document.createElement('button');
      projectBtn.classList.add('btn-project');
      projectBtn.textContent = project;
      projectBtn.onclick = changeProjects;

      listItem.appendChild(projectBtn);

      projectsList.appendChild(listItem);
    })
  }

  const changeProjects = (e) => {
    currentProject = e.currentTarget.textContent;
    removeActiveProject();
    setActiveProject();
    changeOutputTitle(currentProject)
    appendTasks();
  }

  const appendTasks = () => {
    clearContainer();
    const template = document.querySelector("[data-id='todo-template']");
    const filteredArray = toDoArray.filter(todo => todo.project === currentProject);
    filteredArray.forEach(todo => {
      const clone = template.content.cloneNode(true);
      appendDetails(todo, clone);
      addEventListeners(clone);
      document.getElementById('todo-container').appendChild(clone);
    })
  }

  const clearContainer = () => {
    document.getElementById('todo-container').innerHTML = "";
  }

  const appendDetails = (todo, clone) => {
    const todoTitle = clone.querySelector("[data-id='todo-title']");
    const todoDate = clone.querySelector("[data-id='todo-date']");
    const toDoCheckBtn = clone.querySelector(".circle")
    checkMarkStyling(todo, toDoCheckBtn)
    todoTitle.textContent = todo.title;
    todoDate.textContent = todo.date;
  }

  const checkMarkStyling = (todo, btn) => {
    if (todo.status === true) {
      btn.classList.add('circle-checked');
      btn.innerText = '✓';
    }
  }

  const removeActiveProject = () => {
    document.querySelectorAll('.btn-project').forEach(project => {
      return project.classList.remove('active-btn');
    })
  }

  const setActiveProject = () => {
    document.querySelectorAll('.btn-project').forEach(project => {
      if (project.textContent === currentProject) {
      return project.classList.add('active-btn');
      }
    })
  }

  const changeOutputTitle = (title) => {
    const outputTitle = document.querySelector("[data-id='current-project-title']");
    outputTitle.textContent = title;
  }

  const addEventListeners = (clone) => {
    clone.querySelector("[data-id='btn-todo-check']").addEventListener('click', editModule.decidePath);
    clone.querySelector("[data-id='btn-todo-delete']").addEventListener('click', editModule.decidePath);
    clone.querySelector("[data-id='btn-todo-expand']").addEventListener('click', editModule.decidePath);
  }

  return {
    toggleNewProjectModal,
    toggleNewTaskModal,
    toggleExpandedModal,
    toggleEditModal,
    clearNewProjectInput,
    clearNewTaskInputs,
    createNewProject,
    appendProjects,
    appendTasks,
    removeActiveProject,
    setActiveProject,
  }
})();

export default uiModule;
