let casterLevelInput = document.getElementById("casterLevel")
let initResistInput = document.getElementById("initResist")
let fianlResistInput = document.getElementById("finalResist")
let ouptutSpan = document.getElementById("output")

function outputError(msg) {
    console.error(`Error: ${msg}`)
    ouptutSpan.textContent = `Error: ${msg}`
    ouptutSpan.style.color = "red";
}

function outputMsg(msg) {
    console.log(msg)
    ouptutSpan.textContent = msg
    ouptutSpan.style.color = "white"
}

function averageDamageAbsorb(targetResistance, casterLevel) {
    return 1 / (1 - ((targetResistance / (casterLevel * 5)) * 0.75)) - 1
}


function calcButtonClicked() {
    // get values
    const casterLevelValue = parseInt(casterLevelInput.value, 10);
    const initResistValue = parseInt(initResistInput.value, 10);
    const finalResistValue = parseInt(fianlResistInput.value, 10);

    // error handling
    if (isNaN(casterLevelValue) || isNaN(initResistValue) || isNaN(finalResistValue)) {
        outputError("Invalid resist values");
        return
    }

    if (casterLevelValue < 1) {
        outputError("Mobs cannot be lower than level 1")
        return
    }

    if (initResistValue < 1 || initResistValue > 315 ||
        finalResistValue < 1 || finalResistValue > 315) {
        outputError("Invalid amount of resist")
    }

    // calculate
    deltaResist = averageDamageAbsorb(finalResistValue, casterLevelValue) / averageDamageAbsorb(initResistValue, casterLevelValue)
    console.log(deltaResist)
    deltaResistString = `${Number(100 * deltaResist).toFixed()}%`

    // output
    outputMsg(`Change in damage mitigation is ${deltaResistString}`)
}