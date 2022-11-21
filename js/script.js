const app = new Vue({
    el: "#container",
    data: {
        title: "To-do-list",
        toDoList: [
            {
                text: "Fare i compiti",
                done: false,
            },
            {
                text: "Fare la spesa",
                done: true,
            },
        ],
        newToDo: "",
    },
    methods: {
        doneOrNot(status) {
            status.done = !status.done;
        },
        addNewToDo() {
            this.toDoList.push({
                text: this.newToDo,
                done: false,
            })
            this.newToDo = ""
        },
        removeToDo(index) {
            this.toDoList.splice(index, 1);
        }
    }
});