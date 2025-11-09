

const subScreen = document.querySelector(".subScreen");
const mainScreen = document.querySelector(".mainScreen");
const equalsButton = document.querySelector(".equalsButton");
const numButtons = document.querySelectorAll(".numButton");
const operators = document.querySelectorAll(".operator");

numberArray = [];
operatorArray = [];
historyArray = [];

function calculate(){
    let sum = null;
    switch (operatorArray[0]){
        case "X":
            sum = numberArray[0] * numberArray[1];
            break;
        
        case "/":
            sum = numberArray[0] / numberArray[1];
            break;
        
        case "+":
            sum = numberArray[0] + numberArray[1];
            break;
        
        case "-":
            sum = numberArray[0] - numberArray[1];
            break;
    }
    let historyEntry = `${numberArray[0]} ${operatorArray[0]} ${numberArray[1]} = ${sum}`;
    historyArray.push(historyEntry);
    numberArray.pop();
    numberArray.pop();
    operatorArray.pop();
    mainScreen.textContent = sum;
    subScreen.textContent = calculationHistory.join(" | ");
}


function addToMainScreen(event){
    let currentContent = mainScreen.textContent.trim();
    console.log(currentContent.length);
    if (currentContent.length < 7){
        mainScreen.textContent +=  event.target.textContent;
    }
    else{
        console.log("wrongs");
    }
}

function operateEvent(event){
    let screenContent = mainScreen.textContent.trim();
    if (!screenContent){
        return;
    }
    let parsedContent = Number(screenContent);
    numberArray.push(parsedContent);
    operatorArray.push(event.target.textContent);
    mainScreen.textContent = "";
    console.log(`number array is ${numberArray}`);
    console.log(`operator array is ${operatorArray}`);
}

numButtons.forEach((number) => {
    number.addEventListener(`click`, addToMainScreen);

});

operators.forEach((operator) => {
    operator.addEventListener(`click`, operateEvent);
});
