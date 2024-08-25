// Lista de tareas
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Función para agregar tareas
export const addTask = (task) => {
    const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
    };
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Función para poder traer la lista de tareas
export const getTasks = () => tasks;

//  FUNCION PARA PODER TRAER LA LISTA DE TAREAS
export const deleteTasks = (id) =>{
    tasks = tasks.filter((task) => task.id !== parseInt (id));
    localStorage.setItem('tasks',JSON.stringify(tasks));
};

//FUNCION PARA ACTUALIZAR UNA TAREA
export const updateTask = (id) => {
    tasks = tasks.map ((task) =>{
if(tasks.id === parseInt (id)){
    task.completed = !task.completed;
}
return task;
});
localStorage.setItem('tasks',JSON.stringify(tasks));
};