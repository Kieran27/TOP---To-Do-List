export default class Todo {
  constructor (title, description, date, project, urgency, status) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.project = project;
    this.urgency = urgency;
    this.status = false;
  }

  changeStatus() {
    this.status === false ? this.status = true : this.status = false;
  }

}
