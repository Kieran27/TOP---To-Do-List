export default class Todo {
  constructor (title, description, date, project, urgency, status) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.project = project;
    this.urgency = urgency;
    if (!status) {
      this.status = false;
    } else {
      this.status = true;
    }
  }

  changeStatus() {
    this.status === false ? this.status = true : this.status = false;
  }

  set newTitle(updatedTitle) {
    this.title = updatedTitle;
  }

  set newDescription(updatedDescription) {
    this.description = updatedDescription
  }

  set newDate(updatedDate) {
    this.date = updatedDate;
  }

  set newProject(updatedProject) {
    this.project = updatedProject;
  }

  set newUrgency(updatedUrgency) {
    this.urgency = updatedUrgency;
  }

}
