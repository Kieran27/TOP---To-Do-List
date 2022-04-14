import uiModule from './UI-Module.js'
import formModule from './Form-Module.js'
import Todo from './Todo-Class.js'
import {objectIndex, testArray} from './Base-Variables.js'

const editModule = (() => {

  const expandedTitle = document.querySelector('[data-id="expanded-modal-title"]');
  const expandedDate = document.querySelector('[data-id="expanded-modal-date"]');
  const expandedNotes = document.querySelector('[data-id="expanded-modal-notes"]');
  const expandedUrgency = document.querySelector('[data-id="expanded-modal-urgency"]');

  let objectTitle = undefined;

  const decidePath = (e) => {
    const target = e.target;
    const article = target.parentElement.parentElement.parentElement;
    const objectTitle = article.querySelector('[data-id="todo-title"]').textContent;
    if (target.getAttribute('data-id') === 'btn-todo-expand') {
      expandTodo(objectTitle);
    } else if (target.getAttribute('data-id') === 'btn-todo-delete') {
      deleteTodo(objectTitle);
    } else if (target.getAttribute('data-id') === 'btn-todo-check') {
      changeObjectInstance(objectTitle);
    }
  }

  const changeObjectInstance = (title) => {
    testArray.forEach((obj, index) => {
      if (obj.title === title) {
        const object = testArray[index];
        object.changeStatus();
        uiModule.appendTasks();
      }
    })
  }

  const deleteTodo = (title) => {
    testArray.forEach((obj, index) => {
      if (obj.title === title) {
        const object = testArray[index];
        testArray.splice(index, 1);
        uiModule.appendTasks();
      }
    })
  }

  const expandTodo = (title) => {
    uiModule.toggleExpandedModal();
    appendExpandedDetails(title);
    addExpandedModalEventListeners();
  }

  const appendExpandedDetails = (title) => {

    testArray.forEach((obj, index) => {
      if (obj.title === title) {
        expandedTitle.textContent = obj.title;
        objectTitle = expandedTitle.textContent;
        expandedDate.textContent = obj.date;
        expandedNotes.textContent = obj.description;
        expandedUrgency.textContent = obj.urgency;
      }
    })
  }

  const addExpandedModalEventListeners = () => {
    const editBtn = document.querySelector('[data-id="btn-expanded-edit"]');
    const deleteBtn = document.querySelector('[data-id="btn-expanded-dlt"]');
    const closeBtn = document.querySelector('[data-id="btn-expanded-close"]');

    editBtn.addEventListener('click', expandedChoice);
    deleteBtn.addEventListener('click', expandedChoice);
    closeBtn.addEventListener('click', expandedChoice);
  }

  const expandedChoice = (e) => {
    if (e.target.getAttribute('data-id') === 'btn-expanded-dlt') {
      deleteExpandedTodo()
    } else if (e.target.getAttribute('data-id') === 'btn-expanded-edit') {
      getEditIndex(e);
      editExpandedTodo();
    } else if (e.target.getAttribute('data-id') === 'btn-expanded-close') {
      uiModule.toggleExpandedModal();
    }
  }

  const getEditIndex = (e) => {
    const currentTarget = e.currentTarget;
    const taskDetails = currentTarget.parentElement.parentElement.parentElement;
    let taskTitle = document.querySelector('[data-id=expanded-modal-title]').textContent;
    taskTitle = objectTitle;
    testArray.forEach((todo, index) => {
      if (todo.title === taskTitle) {
        objectIndex = index;
      }
    })
  }

  const deleteExpandedTodo = (e) => {
    console.log(objectTitle);
    deleteTodo(objectTitle);
    uiModule.toggleExpandedModal();
  }

  const editExpandedTodo = () => {
    uiModule.toggleEditModal();
    uiModule.toggleExpandedModal();
    formModule.appendEditDetails(expandedTitle, expandedDate, expandedNotes, expandedUrgency);
    document.getElementById('edit-task').addEventListener('submit', formModule.editTaskSubmit);
  }

  return {decidePath, editExpandedTodo, expandedTitle, expandedDate, expandedNotes, expandedUrgency}
})();

export default editModule;
