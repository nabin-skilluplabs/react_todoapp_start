const API_ENDPOINT = (location.hostname === 'localhost') ? "http://localhost:3000" : "https://todo-backend-seven-nu.vercel.app";

export async  function  getAllToDos() {
    const response = await fetch(`${API_ENDPOINT}/v1/todos?limit=10`);
    const data = await response.json();
    return data;
}

export async  function  addToDo(todo) {
    const response = await fetch(`${API_ENDPOINT}/v1/todos`, {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data;
}