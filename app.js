//GET AN ACCESS TO THE ELEMENT
let paragraph = document.getElementById("paragraph");

function changeText(){
    paragraph.textContent = "Clicked";
    console.log("Clicked");
}
paragraph.addEventListener("click", changeText);

let inputElement = document.getElementById("input");

function retriveUserInput(event){
    let eneteredText = inputElement.value;
    console.log(eneteredText);
    console.log(event);
}

inputElement.addEventListener("input", retriveUserInput);

console.log(paragraph);