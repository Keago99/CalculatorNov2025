

const subScreen = document.querySelector(".subScreen");
const mainScreen = document.querySelector(".mainScreen");
const equalsButton = document.querySelector(".equalsButton");
const numButtons = document.querySelectorAll(".numButton");
const operators = document.querySelectorAll(".operator");

numberArray = [];
operatorArray = [];
historyArray = [];

function equalsEvent(){
    let screenEqualContent = mainScreen.textContent.trim();
    if (!screenEqualContent){
        return;
    }
    else{
        let parsedEqualContent = Number(screenEqualContent);
        numberArray.push(parsedEqualContent);
    }
    if(numberArray.length > 1 && operatorArray.length > 0){
        calculate();
    }
    else{
        console.log("not enough data, will not work!");
        return;
    }
}


function updateSubScreen(){
    //logic for updating the subScreen
}

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
    let historyEntry = `${numberArray[0]} ${operatorArray[0]} ${numberArray[1]} `;
    historyArray.push(historyEntry);
    console.table(historyArray);
    numberArray.pop();
    numberArray.pop();
    operatorArray.pop();
    mainScreen.textContent = sum;
    numberArray.push(sum);
    console.log(numberArray);
    console.log(operatorArray);

}


function addToMainScreen(event){
    let currentContent = mainScreen.textContent.trim();
    if (currentContent.length < 7){
        mainScreen.textContent +=  event.target.textContent;
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
    if(numberArray.length > 1 && operatorArray.length > 0){
        calculate();
    }
    else{
        console.log("calculate did not fire");
    }
}

equalsButton.addEventListener(`click`, equalsEvent);

numButtons.forEach((number) => {
    number.addEventListener(`click`, addToMainScreen);

});

operators.forEach((operator) => {
    operator.addEventListener(`click`, operateEvent);
});


// after sum we need to delete whatever is on the screen
// we need to take this into consideration for operate event too.