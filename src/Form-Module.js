import uiModule from './UI-Module.js';
import Todo from './Todo-Class';
import Storage from './Storage-Class.js'
import {currentProject, objectIndex, projectsArray, toDoArray} from './Base-Variables.js'
import editModule from './Edit-Module.js'

const formModule = (() => {

  const editForm = document.getElementById('edit-task');
  const editedName = document.getElementById('task-edit-title');
  const editedDescription = document.getElementById('task-edit-description');
  const editedDate = document.getElementById('task-edit-date');

  const newProjectSubmit = (e) => {
    const newProjectName = document.getElementById('new-project-name');
    e.preventDefault();
    checkForProjectName(newProjectName)

    projectsArray.push(newProjectName.value);
    Storage.saveProjects();

    createNewOption(newProjectName);
    createNewEditOption(newProjectName);

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

    checkForEqualName(taskName);

    // Instantiate New Todo Item
  const newTodo = new Todo(taskName.value, taskDescription.value, taskDate.value, taskProject.value, taskUrgency.value);
    toDoArray.push(newTodo);
    Storage.saveTasks();
    console.log(toDoArray)

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

  const createNewEditOption = (projectName) => {
    const newOption = new Option(projectName.value)
    document.querySelector('#edit-project').add(newOption, undefined);
  }

  const addOptions = (projectsArray) => {
    projectsArray.forEach(project => {
      const newOption = new Option(project);
      document.querySelector('#project').add(newOption, undefined);
    })
  }

  const addEditOptions = (projectsArray) => {
    projectsArray.forEach(project => {
      const newOption = new Option(project);
      document.querySelector('#edit-project').add(newOption, undefined);
    })
  }

  const checkForProjectName = (newProjectName) => {
  projectsArray.forEach(project => {
    if (project.toLowerCase() === newProjectName.value.toLowerCase()) {
      alert("Tasks Cannot Share the Same Name!")
    } else {
      return true;
    }
  })
}

  const checkForEqualName = (name) => {
    toDoArray.forEach(task => {
      if (task.title.toLowerCase() === name.value.toLowerCase()) {
        alert("Tasks Cannot Share The Same Name!")
      } else {

      }
    })
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

    Storage.saveTasks();
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

  const instantiateLocalStorage = (parsedArray) => {
    parsedArray.forEach(task => {
      const newTodo =  new Todo(task.title, task.description, task.date, task.project, task.urgency, task.status);
      toDoArray.push(newTodo);
    })
  }

  return { toDoArray, newProjectSubmit, newTaskSubmit, createNewOption, addOptions, addEditOptions, editTaskSubmit, appendEditDetails, instantiateLocalStorage }
})();

export default formModule;
