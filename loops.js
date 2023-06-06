//SIMPLE FOR LOOP
console.log("SIMPLE FOR LOOP EXAMPLE")
for (let i= 0 ; i< 10 ; i++){
    console.log(i);
}

//FOR OF LOOP : Similar for each loop in java
console.log("FOR OF LOOP EXAMPLE")
const users = ["John", "Jane", "James", "Joe", "Julia"];

for (const user of users)
{
    console.log(user);
}

//FOR IN LOOP: Gives access to the keys of the object and access to the values
console.log("FOR IN LOOP EXAMPLE")
const user = {
    name: "John",
    age: 30,
    height: 180,
    weight: 80,
    isAdmin: true
};

for (const key in user){
    console.log(key+" :", user[key]);
}

//WHILE LOOP in JS (Similar to java)
console.log("WHILE LOOP EXAMPLE")

let counter = 0;
while(counter < 10){
    console.log(counter);
    counter++;
}

var isFinished = false;

while(!isFinished){
    isFinished = confirm("Are you finished?");
}
console.log("Done");