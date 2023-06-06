const inputChangableElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

console.dir(inputChangableElement);
const maxChars = inputChangableElement.maxLength;
//RGB COLOR
const warningBackground = "rgb(223, 92, 16)";

function updateRemainingChars(event){
    const enteredText = event.target.value;
    const remainingChars = maxChars - enteredText.length;
    const inputField = document.getElementById("product-name");
    
    if(remainingChars <= 45){
        inputField.style.backgroundColor = "white";
        remainingCharsElement.classList.add("warning");
        inputField.classList.add("warning");
    }
    else if(remainingChars < 50){
        inputField.style.backgroundColor = warningBackground;
        remainingCharsElement.classList.remove("warning");
        inputField.classList.remove("warning");
    }    
    else {
        inputField.style.backgroundColor = "rgb(209, 184, 23)";
        remainingCharsElement.classList.remove("warning");
        inputField.classList.remove("warning");
    }
    
    remainingCharsElement.textContent = remainingChars;
}

inputChangableElement.addEventListener("input", updateRemainingChars);
