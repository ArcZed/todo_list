const Todo = class {
    constructor(title, descriptions, dueDate, priority, notes, checklist) {
        this.title = title;
        this.descriptions = descriptions;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
    }
}

const me = new Todo("Dwa");
export default me