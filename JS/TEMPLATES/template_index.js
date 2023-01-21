// todo content container
const contentContainerTodo = document.getElementById('contentContainerTodo')
// new container container
const contentContainerInReview = document.getElementById('contentContainerInReview')
// done content container
const contentContainerDone = document.getElementById('contentContainerDone')

// template ContentCard
const templateContentCard = document.getElementById('templateContentCard')


export function handleAPIResponse(tasks) {

    tasks.forEach(t => {
        populateData(t)
    });
}


function populateData(task) {

    //clone the tamplate inorder to populate the data
    const clone = templateContentCard.content.cloneNode(true)

    const cardImportance = clone.getElementById("cardImportance")
    const cardTitle = clone.getElementById("cardTitle")
    const cardDetails = clone.getElementById("cardDetails")
    const cardLastUpdate = clone.getElementById("cardLastUpdate")

    switch (task.importance) {
        case "critical": cardImportance.classList.add("sgCritical"); break;
        case "high": cardImportance.classList.add("sgHigh"); break;
        case "normal": cardImportance.classList.add("sgNormal"); break;
        case "low": cardImportance.classList.add("sgLow"); break;
    }

    cardTitle.innerText = task.title
    cardDetails.innerText = task.details
    cardLastUpdate.innerText = task.lastUpdate

    switch (task.status) {
        case "todo": contentContainerTodo.append(clone); break;
        case "in_review": contentContainerInReview.append(clone); break;
        case "done": contentContainerDone.append(clone); break;
    }

}
