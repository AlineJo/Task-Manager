import { API_URL_GET_TODO, HTTP_METHOD_GET_NO_CACHE } from "../global/API_URLs.js";
import {handleAPIResponseGetTodo} from "../TEMPLATES/template_todo.js"

fetchTodo()

async function fetchTodo() {
    const response = await fetch(API_URL_GET_TODO, HTTP_METHOD_GET_NO_CACHE);
   
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const tasks = await response.json();

    handleAPIResponseGetTodo(tasks)

}

