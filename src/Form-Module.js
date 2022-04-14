import uiModule from './UI-Module.js';
import Todo from './Todo-Class';
import Storage from './Storage-Class.js'
import {currentProject, objectIndex, testArray} from './Base-Variables.js'
import editModule from './Edit-Module.js'

const formModule = (() => {

  const editForm = document.getElementById('edit-task');
  const editedName = document.getElementById('task-edit-title');
  const editedDescription = document.getElementById('task-edit-description');
  const editedDate = document.getElementById('task-edit-date');

  let toDoArray = [];
  let projectsArray = [];

  const newProjectSubmit = (e) => {
    const newProjectName = document.getElementById('new-project-name');
    e.preventDefault();
    projectsArray.push(newProjectName.value);
    Storage.saveProjects();
    console.log(projectsArray);

    createNewOption(newProjectName);
    createNewEditOption(newProjectName);
    uiModule.toggleNewProjectModal();
    uiModule.createNewProject(newProjectName);
    uiModule.clearNewProjectInput(newProjectName);

  }

  const checkForProjectName = (status, title) => {
    document.querySelectorAll('.btn-project').forEach(btn => {
      if (btn.textContent.toLowerCase() === title.value.toLowerCase()) {
        return alert("Projects cannot share the same Name");
      }
    })
    return alert("Hello")
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
    testArray.push(newTodo);
    Storage.saveTasks();
    Storage.getTasks();
    console.log(toDoArray)

    uiModule.toggleNewTaskModal();
    uiModule.clearNewTaskInputs(taskName, taskDescription, taskDate);
    uiModule.appendTasks();
    uiModule.removeActiveProject();
    uiModule.setActiveProject();
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

  const createNewOption = (projectName) => {
    const newOption = new Option(projectName.value)
    document.querySelector('#project').add(newOption, undefined);
  }

  const createNewEditOption = (projectName) => {
    const newOption = new Option(projectName.value)
    document.querySelector('#edit-project').add(newOption, undefined);
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

return { toDoArray, projectsArray, newProjectSubmit, newTaskSubmit, createNewOption, checkForProjectName, checkForTaskName, editTaskSubmit, appendEditDetails }
})();

export default formModule;
