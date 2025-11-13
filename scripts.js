
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




function updateMainScreen(content){
    if(mainScreen.textContent.trim().length <= 6){
        mainScreen.textContent += content;
    }
    else{
        console.log("too many numbers on screen");
    }

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
    let number = e.target.textContent;
    updateMainScreen(number);
}

function operatorButtonHandler(e){

}

function equalsHandler(){
    
}

function calculate(){

}

numButtons.forEach((button) => {
    button.addEventListener(`click`, numButtonHandler);
});

operatorButtons.forEach((button) => {
    button.addEventListener(`click`, operatorButtonHandler);
});

clearButton.addEventListener(`click`, clearButtonHandler);
clearEverythingButton.addEventListener(`click`, clearEverythingButtonHandler);
