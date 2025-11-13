
const mainScreen = document.querySelector(".mainScreen");
const subScreen = document.querySelector(".subScreen");

const equalsButton = document.querySelector(".equalsButton");
const clearButton = document.querySelector(".clearButton");
const clearEverythingButton = document.querySelector(".clearEverything");

const numButtons = document.querySelectorAll(".numButton")
const operatorButtons = document.querySelectorAll(".operator");

numberArray = [];
operatorArray = [];
historyArray = [];
const resetScreen = false;


function clearMainScreen(){
    //
}

function clearSubScreen(){
    // clear subScreen div
}

function updateMainScreen(content){
    if(mainScreen.textContent.trim().length <= 6){
        mainScreen.textContent += content;
    }
    else{
        console.log("not firing");
    }

}

function clear(){
    // clear button
}

function clearEverything(){
    // clear everything button
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
