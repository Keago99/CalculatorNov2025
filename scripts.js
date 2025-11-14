
const mainScreen = document.querySelector(".mainScreen");
const subScreen = document.querySelector(".subScreen");

const equalsButton = document.querySelector(".equalsButton");
const clearButton = document.querySelector(".clear");
const clearEverythingButton = document.querySelector(".clearEverything");

const numButtons = document.querySelectorAll(".numButton")
const operatorButtons = document.querySelectorAll(".operator");

numberArray = [];
operatorArray = [];
historyArray = [];
let resetScreen = false;

function parseScreenNumber(content){
        const parsedNumber = parseFloat(content);
        numberArray.push(parsedNumber);
}


function checkReset(){
    if (resetScreen == true){
        mainScreen.textContent = "";
        resetScreen = false;
    }
}

function updateMainScreen(content){
    if(mainScreen.textContent.trim().length <= 6){
        mainScreen.textContent += content;
    }
    else{
        console.log("too many numbers on screen");
    }
}

function updateSubScreen(){
    subScreen.textContent = "";
    const historyString = historyArray.join(" ");
    subScreen.textContent = historyString;
}

function clearButtonHandler(){
    mainScreen.textContent = "";
    resetScreen = false;
}

function clearEverythingButtonHandler(){
    numberArray.length = 0;
    operatorArray.length = 0;
    historyArray.length = 0;
    mainScreen.textContent = "";
    resetScreen = false;
}

function numButtonHandler(e){
    checkReset();
    let number = e.target.textContent;
    updateMainScreen(number);
}

function operatorButtonHandler(e){
    let screenContent = mainScreen.textContent.trim()
    // If there is no screenContent text, exit the method
    if (!screenContent){
        console.log("nothing on screen, returning function")
        return;
    }

    // if the numberArray has one number but zero Operators, then just add the operator and return
    if (numberArray.length === 1 && operatorArray.length === 0){
        parseScreenNumber(screenContent);
        numberArray.shift();
        const parsedOperator = e.target.textContent;
        operatorArray.push(parsedOperator);
        mainScreen.textContent = "";
        return;
    }

    // If we already have an operator, and 1 number, lets calcualte the number
    if(operatorArray.length >= 1 && numberArray.length === 1){
        parseScreenNumber(screenContent);
        calculate();
        return;
    }

    //changes screen to float and then adds to Array
    parseScreenNumber(screenContent);

    //Adds the clicked operator to operatorArray
    const parsedOperator = e.target.textContent;
    operatorArray.push(parsedOperator);
    console.table(operatorArray);
    console.table(numberArray);
    mainScreen.textContent = "";
}

function equalsHandler(){
    // This breaks DRY but refactoring to function with a bool return is too much work for one copy
    let screenContent = mainScreen.textContent.trim()
    // If there is no screenContent text, exit the method
    if (!screenContent){
        console.log("nothing on screen, returning function")
        return;
    }
    // if the operatorArray has one index, and the numberArray has one index, push the number and calculate 
    if (operatorArray.length === 1 && numberArray.length === 1){
        parseScreenNumber(screenContent);
        calculate();
        return;
    }
}

function calculate(){
    console.log("calculate funciton called!");
    console.log(operatorArray);
    console.log(numberArray);
    let sum = 0;

    
    switch(operatorArray[0]){
        case "+":
            sum = numberArray[0] + numberArray[1];
            console.log(sum);
            break;
        case "-":
            sum = numberArray[0] - numberArray[1];
            console.log(sum);
            break;
        case "X":
            sum = numberArray[0] * numberArray[1];
            console.log(sum);
            break;
        case "/":
            sum = numberArray[0] / numberArray[1];
            console.log(sum);
            break;
    }
    const historyData = `${numberArray[0]} ${operatorArray[0]} ${numberArray[1]}`;
    historyArray.push(historyData);
    numberArray.length = 0;
    operatorArray. length = 0;
    numberArray[0] = sum;
    mainScreen.textContent = "";
    updateMainScreen(sum);
    updateSubScreen();
}

numButtons.forEach((button) => {
    button.addEventListener(`click`, numButtonHandler);
});

operatorButtons.forEach((button) => {
    button.addEventListener(`click`, operatorButtonHandler);
});

equalsButton.addEventListener(`click`, equalsHandler);
clearButton.addEventListener(`click`, clearButtonHandler);
clearEverythingButton.addEventListener(`click`, clearEverythingButtonHandler);
