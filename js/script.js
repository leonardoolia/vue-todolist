const { createApp } = Vue;

const app = createApp({
    name: 'ToDo List',
    data() {
        return {
            tasks: [
                { id: 1, done: false, text: 'Fare la spesa' },
                { id: 2, done: true, text: 'Lavare i capelli' },
                { id: 3, done: false, text: 'Comprare una marca da bollo' },
                { id: 4, done: false, text: 'Aggiornare il PC' }
            ],

            updatedTasks: []
        }
    },

    methods: {
        deleteTask(id) {
            const deletedTasks = this.tasks.splice(id, 1);
        }
    }

});

app.mount('#root')
