export const HTTP_METHOD_GET_NO_CACHE = {
    method: 'GET', headers: { 'Cache-Control': 'no-cache' }
}


export function HTTP_METHOD_POST_NO_CACHE(jsonRequestObj) {

    const httpObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        },
        // your expected POST request payload goes here
        body: JSON.stringify(jsonRequestObj)
    };
    return httpObj;
}


//Domain
const PROD_DOMAIN = "Task-Manager";

const domain = PROD_DOMAIN;


//api-urls                           
export const API_URL_GET_TODO = 'http://localhost/expprojects/'+domain+'/php/get-todo.php';
export const API_URL_GET_IN_REVIEW = 'http://localhost/expprojects/'+domain+'/php/get-in-review.php';
export const API_URL_GET_DONE = 'http://localhost/expprojects/'+domain+'/php/get-done.php';
export const API_URL_ADD_TASK = 'http://localhost/expprojects/'+domain+'/php/add-task.php';
export const API_URL_UPDATE_TASK = 'http://localhost/expprojects/'+domain+'/php/update-task.php';
