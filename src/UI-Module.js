import {
  projectsList,
  createNewProjectBtn,
  createNewTaskBtn,
  newTaskModal,
  newProjectModal,
  currentProject,
  expandedModal
} from './Base-Variables.js'

import formModule from './Form-Module.js'

const uiModule = (() => {

  const toggleNewProjectModal = () => {
    return newProjectModal.classList.toggle('toggle-display');
  }

  const toggleNewTaskModal = () => {
    return newTaskModal.classList.toggle('toggle-display');
  }

  const toggleExpandedModal = () => {
    return expandedModal.classList.toggle('toggle-display');
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
    const filteredArray = formModule.toDoArray.filter(todo => todo.project === currentProject);
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
    clone.querySelector("[data-id='btn-todo-check']").addEventListener('click', markStatus);
    clone.querySelector("[data-id='btn-todo-delete']").addEventListener('click', deleteTodo);
    clone.querySelector("[data-id='btn-todo-expand']").addEventListener('click', expandTodo);
  }

  const markStatus = (e) => {
    const target = e.target;
    const article = target.parentElement.parentElement.parentElement;
    const objectTitle = article.querySelector('[data-id="todo-title"]').textContent;
    changeObjectInstance(objectTitle);
  }

  const changeObjectInstance = (title) => {
    formModule.toDoArray.forEach((obj, index) => {
      if (obj.title === title) {
        const object = formModule.toDoArray[index];
        object.changeStatus();
        appendTasks()
      }
    })
  }

  const deleteTodo = (e) => {
    const target = e.target;
    const article = target.parentElement.parentElement.parentElement;
    const objectTitle = article.querySelector('[data-id="todo-title"]').textContent;
    formModule.toDoArray.forEach((obj, index) => {
      if (obj.title === objectTitle) {
        const object = formModule.toDoArray[index];
        formModule.toDoArray.splice(index, 1);
        appendTasks();
      }
    })
  }

  const expandTodo = (e) => {
    const target = e.target;
    const article = target.parentElement.parentElement.parentElement;
    const objectTitle = article.querySelector('[data-id="todo-title"]').textContent;
    appendExpandedDetails(objectTitle);
    toggleExpandedModal();
    addExpandedModalEventListeners()
  }

  const addExpandedModalEventListeners = () => {
    const editBtn = document.querySelector('[data-id="btn-expanded-edit"]');
    const deleteBtn = document.querySelector('[data-id="btn-expanded-dlt"]');
    const closeBtn = document.querySelector('[data-id="btn-expanded-close"]');

    editBtn.addEventListener('click', toggleExpandedModal);
    deleteBtn.addEventListener('click', toggleExpandedModal);
    closeBtn.addEventListener('click', toggleExpandedModal);
  }

  const appendExpandedDetails = (title) => {
    const expandedTitle = document.querySelector('[data-id="expanded-modal-title"]');
    const expandedDate = document.querySelector('[data-id="expanded-modal-date"]');
    const expandedNotes = document.querySelector('[data-id="expanded-modal-notes"]');
    const expandedUrgency = document.querySelector('[data-id="expanded-modal-urgency"]');
    formModule.toDoArray.forEach((obj, index) => {
      if (obj.title === title) {
        expandedTitle.textContent = obj.title;
        expandedDate.textContent = obj.date;
        expandedNotes.textContent = obj.description;
        expandedUrgency.textContent = obj.urgency;
      }
    })
  }

  return {
    toggleNewProjectModal,
    toggleNewTaskModal,
    clearNewProjectInput,
    clearNewTaskInputs,
    createNewProject,
    appendTasks,
    removeActiveProject,
    setActiveProject
  }
})();

export default uiModule;
