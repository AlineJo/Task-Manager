
initPopulateLabel()

function initPopulateLabel() {
    const contentContainerTodoTitle = document.getElementById("contentContainerTodoTitle")
    const contentContainerInReviewTitle = document.getElementById("contentContainerInReviewTitle")
    const contentContainerDoneTitle = document.getElementById("contentContainerDoneTitle")

    const addTaskModalTitle = document.getElementById("addTaskModalTitle")
    const selectImporanceLabel = document.getElementById("selectImporanceLabel")
    const optionChooseImportance = document.getElementById("optionChooseImportance")
    const optionCritical = document.getElementById("optionCritical")
    const optionHigh = document.getElementById("optionHigh")
    const optionNormal = document.getElementById("optionNormal")
    const optionLow = document.getElementById("optionLow")
    
    const inputTitleLabel = document.getElementById("inputTitleLabel")
    const inputDetailsLabel = document.getElementById("inputDetailsLabel")

    const btnClose = document.getElementById("btnClose")
    const btnAddContent = document.getElementById("btnAddContent")
    

    contentContainerTodoTitle.innerText = "ToDo"
    contentContainerInReviewTitle.innerText = "InReview"
    contentContainerDoneTitle.innerText = "Done"

    addTaskModalTitle.innerText = "Add New Task"
    selectImporanceLabel.innerText = "Choose Importance"
    optionChooseImportance.innerText = "Choose Importance"
    optionCritical.innerText = "Critical"
    optionHigh.innerText = "High"
    optionNormal.innerText = "Normal"
    optionLow.innerText = "Low"
    
    inputTitleLabel.innerText = "Task Title"
    inputDetailsLabel.innerText = "Task Details"

    btnClose.innerText = "Close"
    btnAddContent.innerText = "Add Task"


}