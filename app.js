const BASE_URL = "https://classic.wowhead.com/quest="

function generateLinks() {
    const outputDiv = document.getElementById("output")
    const rawString = document.getElementById("questIdInputField").value
    const tokens = rawString.trim().split("\n")
    
    outputDiv.innerHTML = "";
    tokens.forEach((questId) => {
        const questUrl = BASE_URL + questId
        let a = document.createElement("a")
        linkText = document.createTextNode(questUrl)
        a.appendChild(linkText)
        a.title = questUrl
        a.href = questUrl
        outputDiv.appendChild(a)
        outputDiv.appendChild(document.createElement("br"))
    })
}