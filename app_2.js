//console.log(window.document);
console.dir(window.document);
//-> DRILLING TO THE ELEMENT AND CHANGING THE VALUE

// document.body.children[1].children[0].href = "https://www.google.com"; 

// SEARCHING FOR THE ELEMENT AND CHANGING THE VALUE BY ID
//document.getElementById("ext_link_1").href = "https://www.afeka.ac.il/en/";

// ALTERNATIVE APPROACH:
// 1) SEARCHING FOR THE ELEMENT BY ID -> Specific element

let achnorElement = document.getElementById("ext_link_1");
achnorElement.href = "https://www.afeka.ac.il/en/";

// QUERY SELECTOR
//2) SEARCHING FOR THE ELEMENT BY SELECTOR -> GENERAL CSS element
// ALLOW US TO SELECT MULTIPLE ELEMENTS : querySelectorAll()
achnorElement = document.querySelector("#ext_link_1");
achnorElement.href = "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiCip248qb_AhWcgP0HHWhzBioQPAgI";
