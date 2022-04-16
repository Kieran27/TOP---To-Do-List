
import {currentProject} from './Base-Variables.js';
import uiModule from './UI-Module.js';

export default class FirstLoad {
  static createHomeProjectMobile() {
    const listItem = document.createElement('li');
    const projectBtn = document.createElement('button');
    projectBtn.classList.add('btn-mobile-project');
    projectBtn.textContent = 'Home';
    projectBtn.onclick = uiModule.changeProjects;

    listItem.appendChild(projectBtn);

    document.querySelector("[data-id='mobile-nav-list']").appendChild(listItem);
  }

  static createHomeProject() {
    const listItem = document.createElement('li');
    const projectBtn = document.createElement('button');
    projectBtn.classList.add('btn-project');
    projectBtn.textContent = 'Home';
    projectBtn.onclick = uiModule.changeProjects;

    listItem.appendChild(projectBtn);

    document.querySelector('[data-id="projects-list"]').appendChild(listItem);
  }

  static setCurrentProject() {
    currentProject = 'Home';
    uiModule.changeProjectsFirstLoad();
  }
}
