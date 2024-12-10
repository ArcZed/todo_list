function ProjectManager () {

    class Todo {
        constructor(title, descriptions, dueDate, priority, notes, checklist) {
            this.title = title;
            this.descriptions = descriptions;
            this.dueDate = dueDate;
            this.priority = priority;
            this.notes = notes;
            this.checklist = checklist;
        }
    }

    class Project {
        constructor(title, descriptions, todo){
            this.title = title;
            this.descriptions = descriptions
            this.todo = todo;
        }
    }

    const createProject = () => {
        let me = new Todo("Awd", "Awda", "Awdhuw", "vnaiw");
        console.log(me);
    }

    
    return {createProject}
}

ProjectManager().createProject()