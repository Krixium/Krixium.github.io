const BASE_URL = "https://classic.wowhead.com/quest="

function stringToA(linkString) {
    let a = document.createElement("a")
    a.appendChild(document.createTextNode(linkString))
    a.title = linkString
    a.href = linkString
    return a;
}

function generateLinks() {
    const outputDiv = document.getElementById("output")
    const rawString = document.getElementById("questIdInputField").value
    const tokens = rawString.trim().split("\n")

    outputDiv.innerHTML = "";
    outputDiv.appendChild(document.createElement("br"))
    outputDiv.appendChild(document.createElement("br"))

    tokens.forEach((questId) => {
        if (questId != "") {
            const questUrl = BASE_URL + questId
            outputDiv.appendChild(stringToA(questUrl))
            outputDiv.appendChild(document.createElement("br"))
        }
    })
}