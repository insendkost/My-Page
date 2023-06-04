//ADD A NEW ELEMENT
// 1) CREATE THE ELEMENT
// 2) GET ACCESS TO THE PARENT ELEMENT THAT SHOULD HOLD THE NEW ELEMENT
// 3) INSERT THE NEW ELEEMNT TO THE PARENT ELEMENT CONTENT


var newElement = document.createElement("p");
newElement.textContent = "This is a new paragraph";
var parentElement = document.querySelector("body");
parentElement.appendChild(newElement); // ADDING THE NEW ELEMENT TO THE END OF THE PARENT ELEMENT
var newLink = document.createElement("a");
newLink.textContent = "And this is a new link";
newLink.href = "https://www.google.com";
newElement.appendChild(newLink); // ADDING THE NEW ELEMENT TO THE END OF THE PARENT ELEMENT