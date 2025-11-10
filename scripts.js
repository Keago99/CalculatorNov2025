const mainScreen = document.querySelector(".mainScreen");
const subscreen = document.querySelector(".subScreen");
const equalsButton = document.querySelector(".equalsButton");

const numButtons = document.querySelectorAll(".numButton");
const operatorButtons = document.querySelectorAll(".operator");


console.log("mainScreen:", mainScreen);
console.log("subscreen:", subscreen); 
console.log("equalsButton:", equalsButton);
console.log("numButtons found:", numButtons.length);
console.log("operatorButtons found:", operatorButtons.length);

numberArray = [];
operatorArray = [];
historyArray = [];
shouldResetDisplay = false;




// This will calculate based on operator
function Calculate(){

}

// handles the operator buttons
function handleOperator(){

}

// handles the number Inputs
function handleNumberInput(e){
    const clickedNumber = e.target.textContent;
    let mainScreenContent = mainScreen.textContent.trim();
    if(mainScreenContent.length > 7){
        return;
    }
    else{
        updateMainScreen(clickedNumber);
        console.log("it worked!");
    }
}

// This is specifically made for equals
function handleEquals(){

}

//updates the main screen
function updateMainScreen(value){
    mainScreen.textContent += value;
}

//updates the subScreen
function updateSubScreen(){

}


numButtons.forEach(number => {
    number.addEventListener(`click`, handleNumberInput);
});

operatorButtons.forEach(operator =>{
    operator.addEventListener(`click`, handleOperator);
});