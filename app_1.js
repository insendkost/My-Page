    let greeting = "Hi I'am a JavaScript code";
    //alert(greeting);

    let age = 25;
//FUNCTIONS
    function ageValidation(age) {
        if (age >= 18) {
            alert("You are eligible to vote");
        } else {
            alert("You are not eligible to vote");
        }
    }

   // ageValidation(age);


   //METHODS
   let person = {
    name: "John",
    greeting(){
        alert("Hi I'm " + this.name);
    }
   }

   console.log(person.name);

   //