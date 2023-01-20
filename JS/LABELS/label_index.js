
initPopulateLabel()

function initPopulateLabel() {
    const contentContainerTodoTitle = document.getElementById("contentContainerTodoTitle")
    const contentContainerInReviewTitle = document.getElementById("contentContainerInReviewTitle")
    const contentContainerDoneTitle = document.getElementById("contentContainerDoneTitle")

    contentContainerTodoTitle.innerText = "ToDo"
    contentContainerInReviewTitle.innerText = "InReview"
    contentContainerDoneTitle.innerText = "Done"

}