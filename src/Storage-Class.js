import formModule from './Form-Module.js'
import {testArray} from './Base-Variables.js'

export default class Storage {

  static saveTasks() {
    localStorage.setItem('toDoArray', JSON.stringify(testArray))
  }

  static getTasks() {
    let myArray = localStorage.getItem('toDoArray');
    let parsedTasksArray = JSON.parse(myArray);
    if (!parsedTasksArray) {
      console.log("Huge W")
    } else  {
      testArray = [...parsedTasksArray];
    }
  }

  static copyTasks() {
    console.log(testArray)
  }

  static saveProjects() {
    localStorage.setItem('projectsArray', JSON.stringify(formModule.projectsArray));
  }

  static getProjects() {
    const myProjectsArray = localStorage.getItem('projectsArray');
    let parsedProjectsArray = JSON.parse(myProjectsArray);
    parsedProjectsArray = formModule.projectsArray;
    // console.log(formModule.projectsArray)
  }

  static createProjectButtons() {
    console.log('Button Created!')
  }
}
//
// export default class Storage {
//
//   static saveTasks() {
//     localStorage.setItem('toDoArray', JSON.stringify(testArray))
//   }
//
//   static getTasks() {
//     let myArray = localStorage.getItem('toDoArray');
//     let parsedTasksArray = JSON.parse(myArray);
//     if parsedTasksArray === null {
//       return true
//     } else  {
//       testArray = [...parsedTasksArray];
//     }
//   }
//
//   static copyTasks() {
//     console.log(testArray)
//   }
//
//   static saveProjects() {
//     localStorage.setItem('projectsArray', JSON.stringify(formModule.projectsArray));
//   }
//
//   static getProjects() {
//     const myProjectsArray = localStorage.getItem('projectsArray');
//     let parsedProjectsArray = JSON.parse(myProjectsArray);
//     parsedProjectsArray = formModule.projectsArray;
//     // console.log(formModule.projectsArray)
//   }
//
//   static createProjectButtons() {
//     console.log('Button Created!')
//   }
// }
