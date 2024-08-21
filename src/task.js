//Listas de tarea
let tasks = JSON.parse(localStorage.getItem('tasks')) ||[];

//funcion para agregar tareas
export const addTask = (task) => {
    const newTask ={
    id: Date.now(),
    text: task,
    completed: false,
};
tasks.push(newTask);
localStorage.setItem('tasks',JSON.stringify(tasks));
}

//Función para poder traer laa lista de tareas
export const getTasks = () => tasks;
