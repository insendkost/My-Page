//user-number click event

//let resultElement = document.createElement('p');

const calculateSumButtonElement = document.getElementById('sum-button');


function calculateSum(){

    const userNumberElement = document.getElementById("user-number");
    const userNumber = userNumberElement.value;
    let sum = 0;

    for(let i = 0; i< userNumber; i++){
        sum += 1+i;
        console.log("For i: "+i+" - "+sum);
    }

    const outPutELement = document.getElementById("calculated-sum");
    outPutELement.textContent = sum;
    outPutELement.style.display = "block";
}


calculateSumButtonElement.addEventListener('click', calculateSum);



