const API_ENDPOINT = "https://todo-backend-seven-nu.vercel.app/v1";

export async  function  getAllToDos() {
    const url = `${API_ENDPOINT}/todos`;
    const response = await fetch(url);
    const result = await response.json();
    return result.data;
}

export async  function  addToDo(todo) {
    const url = `${API_ENDPOINT}/todos`;
    const response = await fetch(url, {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(todo)
    });
    const result = await response.json();
    return result.data;
}

export async function deleteToDo(id) {
    const url = `${API_ENDPOINT}/todos/${id}`;
    const response = await fetch(url, {method: 'delete'});
    const result = await response.json();
    return result;
}   

export async function updateToDo(todo) {
    const url = `${API_ENDPOINT}/todos/${todo.id}`;
    const response = await fetch(url, {
        method: 'put',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(todo)
    });
    const result = await response.json();
    return result.data;
}