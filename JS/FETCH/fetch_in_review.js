import { API_URL_GET_IN_REVIEW, HTTP_METHOD_GET_NO_CACHE } from "../global/API_URLs.js";
import {handleAPIResponseGetInReview} from "../TEMPLATES/template_in_review.js"

fetchReview()

async function fetchReview() {
    const response = await fetch(API_URL_GET_IN_REVIEW, HTTP_METHOD_GET_NO_CACHE);
   
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const tasks = await response.json();

    handleAPIResponseGetInReview(tasks)

}

