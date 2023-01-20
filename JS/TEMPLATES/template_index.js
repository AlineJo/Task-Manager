// new container container
const contentContainerTodo = document.getElementById('contentContainerTodo');
// template ContentCard
const templateContentCard = document.getElementById('templateContentCard');

initPopulateData()

function initPopulateData() {
    let c1 = {
        "importance": "critical",
        "title": "Bug Fix",
        "details": "Review the fix with the team leader ASAP",
        "lastUpdate": "10 mins ago"
    }

    let c2 = {
        "importance": "high",
        "title": "Upload code to git",
        "details": "Review the code with the team then upload.",
        "lastUpdate": "5 mins ago"
    }

    let c3 = {
        "importance": "normal",
        "title": "Scrum Meeting",
        "details": "Scrum Meeting 10:30pm",
        "lastUpdate": "30 mins ago"
    }


    let c4 = {
        "importance": "low",
        "title": "Remove unnecessary code",
        "details": "reformat and cleanup the code",
        "lastUpdate": "50 mins ago"
    }


    let cs = [c1, c2, c3, c4]


    for (let i = 0; i < cs.length; i++) {

        populateData(cs[i])

    }

}


function populateData(c) {

    //clone the tamplate inorder to populate the data
    const clone = templateContentCard.content.cloneNode(true)

    const cardImportance = clone.getElementById("cardImportance")
    const cardTitle = clone.getElementById("cardTitle")
    const cardDetails = clone.getElementById("cardDetails")
    const cardLastUpdate = clone.getElementById("cardLastUpdate")

    switch (c.importance) {
        case "critical": cardImportance.classList.add("sgCritical"); break;
        case "high": cardImportance.classList.add("sgHigh"); break;
        case "normal": cardImportance.classList.add("sgNormal"); break;
        case "low": cardImportance.classList.add("sgLow"); break;
    }

    cardTitle.innerText = c.title
    cardDetails.innerText = c.details
    cardLastUpdate.innerText = c.lastUpdate

    contentContainerTodo.append(clone)

}
