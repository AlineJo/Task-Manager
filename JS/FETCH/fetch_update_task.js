import { API_URL_UPDATE_TASK, HTTP_METHOD_POST_NO_CACHE } from "../global/API_URLs.js";
import { fetchTodo } from "./fetch_todo.js"

initClickables()

function initClickables() {
    const selectImporance = document.getElementById("selectImporance")
    selectImporance.addEventListener("change", function () {
        selectImporance.classList.remove("sgCritical", "sgHigh", "sgNormal", "sgLow")

        switch (selectImporance.value) {
            case "critical": selectImporance.classList.add("sgCritical"); break;
            case "high": selectImporance.classList.add("sgHigh"); break;
            case "normal": selectImporance.classList.add("sgNormal"); break;
            case "low": selectImporance.classList.add("sgLow"); break;
        }
    });

    const contentContainerTodoTitle = document.getElementById("contentContainerTodoTitle")
    contentContainerTodoTitle.onclick = function () { toggleModal() }

    const btnAddContent = document.getElementById("btnAddContent")
    btnAddContent.onclick = function () { validate() }

}


function validate() {
    let isTitleOK = true;
    let isDetailsOK = true;

    const selectImporance = document.getElementById("selectImporance");
    const inputTitle = document.getElementById("inputTitle");
    const inputDetail = document.getElementById("inputDetails");
    const inputTitleError = document.getElementById("inputTitleError");
    const inputDetailError = document.getElementById("inputDetailError");


    if (inputTitle.value == "") {
        isTitleOK = false
        inputTitle.classList.remove("is-valid")
        inputTitle.classList.add("is-invalid")
        inputTitleError.classList.remove("valid-feedback")
        inputTitleError.classList.add("invalid-feedback")
        inputTitleError.innerText = "Please enter Task Title"
    }
    else {
        isTitleOK = true
        inputTitle.classList.add("is-valid")
        inputTitle.classList.remove("is-invalid")
        inputTitleError.classList.add("valid-feedback")
        inputTitleError.classList.remove("invalid-feedback")
        inputTitleError.innerText = ""
    }

    if (inputDetail.value == "") {
        isDetailsOK = false
        inputDetail.classList.remove("is-valid")
        inputDetail.classList.add("is-invalid")
        inputDetailError.classList.remove("valid-feedback")
        inputDetailError.classList.add("invalid-feedback")
        inputDetailError.innerText = "Please enter Task Details"
    }
    else {
        isDetailsOK = true
        inputDetail.classList.add("is-valid")
        inputDetail.classList.remove("is-invalid")
        inputDetailError.classList.add("valid-feedback")
        inputDetailError.classList.remove("invalid-feedback")
        inputDetailError.innerText = ""
    }

    if (isTitleOK && isDetailsOK) {
        let jsonRequestBody = {}
        jsonRequestBody.title = inputTitle.value
        jsonRequestBody.details = inputDetail.value
        jsonRequestBody.importance = selectImporance.value
        initFetch(jsonRequestBody)

        selectImporance.value = "critical";
        inputTitle.innerText = ""
        inputDetail.innerText = ""

    }

}

async function initFetch(jsonRequestBody) {

    const response = await fetch(API_URL_UPDATE_TASK, HTTP_METHOD_POST_NO_CACHE(jsonRequestBody));

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const addTask = await response.json();

    toggleModal();

    if (addTask.is_ok) {
        fetchTodo()
    }

}


function toggleModal() {
    $(function () {
        $('#addTaskModal').modal('toggle');
    });
}
