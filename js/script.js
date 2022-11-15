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
            {
                text: "Porta fuori il cane",
                done: false,
            },
            {
                text: "Vai in palestra",
                done: true,
            },
            {
                text: "Vai in posta",
                done: true,
            },
        ],
        doneItem: "done",
    },
    methods: {
        doneOrNot: function() {
            if (this.toDoList[1].done == true) {
                
            }
        }
    }
});