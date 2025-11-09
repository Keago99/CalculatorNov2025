

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
    }
    else{
        console.log("wrongs");
    }
}

numButtons.forEach((number) => {
    number.addEventListener(`click`, addToMainScreen);
});
