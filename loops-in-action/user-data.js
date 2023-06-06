const userData = {
    name: 'John',
    age: 32,
    email: "john@myemail.com", 
    hobbies: ["Running" , "Coding", "Studying"],
    currrentJob: "Network Engineer"
}


const displayUserDataButton = document.querySelector("#user-data button");


function displayData(){
    const mainUserDataElement = document.getElementById("output-user-data");
    mainUserDataElement.innerHTML = "";//clear the list by button click
    for(const property in userData){
        const propertyElement = document.createElement("li");
        const outputText = property.toUpperCase()+ ": " + userData[property];
        propertyElement.textContent = outputText;
        mainUserDataElement.appendChild(propertyElement);
    }
    
}

displayUserDataButton.addEventListener("click", displayData);