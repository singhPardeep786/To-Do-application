
const todoKey = "reactTodo"

export  const getLocalData = () => {
        const rawData = localStorage.getItem(todoKey);
        if(!rawData) return[];
        return JSON.parse(rawData);
    }

export  const setLocalData = (task) => {
        localStorage.setItem(todoKey, JSON.stringify(task));
    }

  