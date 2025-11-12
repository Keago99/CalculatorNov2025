const mainScreen = document.querySelector(".mainScreen");
const subscreen = document.querySelector(".subScreen");
const equalsButton = document.querySelector(".equalsButton");
const clearButton = document.querySelector(".clear");
const clearEverythingButton = document.querySelector(".clearEverything");

const numButtons = document.querySelectorAll(".numButton");
const operatorButtons = document.querySelectorAll(".operator");

numberArray = [];
operatorArray = [];
historyArray = [];
shouldResetDisplay = false;

function clearEverything(){
    numberArray.length = 0;
    operatorArray.length = 0;
    historyArray.length = 0; 
    clearScreen();
}

function clearScreen(){
    mainScreen.textContent = "";
    shouldResetDisplay = false
}

// This will calculate based on operator
function Calculate(){
    let sum = null;

    if (numberArray.length < 2 || operatorArray.length < 1) return;

    switch(operatorArray[0]){
        case "+":
            sum = numberArray[0] + numberArray[1];
            break;
        case "-":
            sum = numberArray[0] - numberArray[1];
            break;
        case "X":
            sum = numberArray[0] * numberArray[1];
            break;
        case "/":
            sum = numberArray[0] / numberArray[1];
            break;
    }
    // Resets so that NumberArray is sum, removes operator (there should only be 1 operator).
    let historyItem = `${numberArray[0]} ${operatorArray[0]} ${numberArray[1]}`;
    historyArray.push(historyItem);
    numberArray = [sum];
    operatorArray.length = 0;
    clearScreen();
    updateMainScreen(sum);
    shouldResetDisplay = true;
    console.table(numberArray);
    console.table(operatorArray);
}

// handles the operator buttons
function handleOperator(e){
    let mainScreenNumbers = mainScreen.textContent.trim();
    if (mainScreenNumbers){
        let parsedNumbers = parseFloat(mainScreenNumbers);
        
        // SIMPLE RULE: Always calculate if we have a pending operation
        if (numberArray.length === 1 && operatorArray.length === 1) {
            // We already have: number [X] and operator [+]
            // Now we're getting the second number from screen
            numberArray.push(parsedNumbers);
            Calculate(); // Do the math!
        } else {
            // Starting fresh operation
            numberArray.push(parsedNumbers);
        }
        
        let clickedOperator = e.target.textContent;
        operatorArray.push(clickedOperator);
        shouldResetDisplay = true;
    }
}

// handles the number Inputs
function handleNumberInput(e){
    if(shouldResetDisplay){
        clearScreen();
        shouldResetDisplay = false;
    }
    const clickedNumber = e.target.textContent;
    let mainScreenContent = mainScreen.textContent.trim();
    if(mainScreenContent.length > 6){
        return;
    }
    else{
        updateMainScreen(clickedNumber);
    }
}

// This is specifically made for equals
function handleEquals(){
    let mainScreenNumbers = mainScreen.textContent.trim();
    if (mainScreenNumbers && numberArray.length === 1 && operatorArray.length === 1){
        let parsedNumbers = parseFloat(mainScreenNumbers);
        numberArray.push(parsedNumbers);
        Calculate();
        shouldResetDisplay = true;
    }
}

//updates the main screen
function updateMainScreen(value){
    mainScreen.textContent = value;
}

//updates the subScreen
function updateSubScreen(){
    subscreen.textContent = "";
    let joinedString = historyArray.join(" ");
    subscreen.textContent = joinedString;
}


numButtons.forEach(number => {
    number.addEventListener(`click`, handleNumberInput);
});

operatorButtons.forEach(operator =>{
    operator.addEventListener(`click`, handleOperator);
});

equalsButton.addEventListener(`click`, handleEquals);
clearButton.addEventListener(`click`, clearScreen);
clearEverythingButton.addEventListener(`click`, clearEverything);