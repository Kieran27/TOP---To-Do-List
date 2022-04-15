import formModule from './Form-Module.js'
import uiModule from './UI-Module.js'
import {currentProject, toDoArray, projectsArray} from './Base-Variables.js'
import Todo from './Todo-Class.js'

export default class Storage {

  static saveTasks() {
    localStorage.setItem('toDoArray', JSON.stringify(toDoArray))
  }

  static getTasks() {
    let myArray = localStorage.getItem('toDoArray');
    let parsedTasksArray = JSON.parse(myArray);
    if (!parsedTasksArray) {
      console.log("Huge W")
    } else  {
      formModule.instantiateLocalStorage(parsedTasksArray);
    }
  }

  static saveProjects() {
    localStorage.setItem('projectsArray', JSON.stringify(projectsArray));
  }

  static getProjects() {
    const myProjectsArray = localStorage.getItem('projectsArray');
    let parsedProjectsArray = JSON.parse(myProjectsArray);
    if (!parsedProjectsArray) {
      console.log("Ouroboros");
    } else {
      projectsArray = [...parsedProjectsArray];
      uiModule.appendProjects(projectsArray);
      uiModule.appendProjectsMobile(projectsArray);
      formModule.addOptions(projectsArray);
      formModule.addEditOptions(projectsArray);
      console.log(projectsArray);
    }
  }

  static clearStorage() {
    localStorage.clear();
    location.reload();
  }

  static saveCurrentProject() {
    localStorage.setItem('currentProject', JSON.stringify(currentProject))
  }

  static getCurrentProject() {
    currentProject = JSON.parse(localStorage.getItem('currentProject'));
  }


}
