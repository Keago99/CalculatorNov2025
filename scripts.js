

const subScreen = document.querySelector(".subScreen");
const mainScreen = document.querySelector(".mainScreen");
const equalsButton = document.querySelector(".equalsButton");
const numButtons = document.querySelectorAll(".numButton");
const operators = document.querySelectorAll(".operator");

numberArray = [];
operatorArray = [];

function updateSubScreen(){
    let displayString = ""
    subScreen.textContent = "";
    let i = 0;
    while(i <numberArray.length){
        displayString += numberArray[i];
        if(operators[i]){
            displayString += " " + operatorArray[i] + " ";
        }
        i++;
    }
    subScreen.textContent = displayString;
}

function addToMainScreen(event){
    let currentContent = mainScreen.textContent.trim();
    console.log(currentContent.length);
    if (currentContent.length < 7){
        mainScreen.textContent +=  event.target.textContent;
        updateSubScreen();
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
    updateSubScreen();
    console.log(`number array is ${numberArray}`);
    console.log(`operator array is ${operatorArray}`);
}

numButtons.forEach((number) => {
    number.addEventListener(`click`, addToMainScreen);

});

operators.forEach((operator) => {
    operator.addEventListener(`click`, operateEvent);
});
