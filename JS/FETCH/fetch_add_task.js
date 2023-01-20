import { API_URL_ADD_TASK, HTTP_METHOD_POST_NO_CACHE } from "../global/API_URLs.js";


validate()

function validate(){
    const contentContainerTodoTitle = document.getElementById("contentContainerTodoTitle")
    contentContainerTodoTitle.onclick = function () { toggleModal() }
   
 

    let jsonRequestBody = {}
    jsonRequestBody.title = "some title"
    jsonRequestBody.details = "some details"
    jsonRequestBody.importance = "critical"

    //initFetch(jsonRequestBody)
}

async function initFetch(jsonRequestBody) {

    const response = await fetch(API_URL_ADD_TASK, HTTP_METHOD_POST_NO_CACHE(jsonRequestBody));
   
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const tasks = await response.json();

}


function toggleModal() {
    $(function () {
        $('#idInsertNewContentModal').modal('toggle');
    });
}
