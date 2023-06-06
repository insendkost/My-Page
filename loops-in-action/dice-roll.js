
const rollDiceButtonELement = document.querySelector("#statistics button");

function rollDice() {
    const randomNumber = Math.floor(Math.random()*6)+1; //Math.floor(): 5.64 => 5
    return randomNumber;
}

function deriveNumberOfDiceRolls() {
    const targetNumberElement = document.getElementById("user-target-number");
    const diceRollsListElement = document.getElementById("dice-rolls");
    const enteredNumber = targetNumberElement.value;
    diceRollsListElement.innerHTML = ""; //clear the list

    let isRolledTargetNumber = false;

    let numberOfRolls  = 0;

    while(!isRolledTargetNumber) {
       const rolledNumber =  rollDice();
       if(rolledNumber == enteredNumber){
        isRolledTargetNumber = true;
       }
       numberOfRolls++;
       const newRollElement = document.createElement("li");
       const outputText = "Roll #"+numberOfRolls+": "+rolledNumber;
       newRollElement.textContent = outputText;
       diceRollsListElement.appendChild(newRollElement);

    }

    const outputTotalRollsElement = document.getElementById("output-total-rolls");
    const outputTargetNumberElement = document.getElementById("output-target-number");

    outputTargetNumberElement.textContent = enteredNumber;
    outputTotalRollsElement.textContent = numberOfRolls;

}

rollDiceButtonELement.addEventListener("click", deriveNumberOfDiceRolls);