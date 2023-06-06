const highlightButtonElement = document.querySelector('#highlight-links button');


function highlightLinks(){

    const linksElements = document.querySelectorAll('#highlight-links a'); 
    for (const linkItem of linksElements) {
        linkItem.classList.add("highlight");
    }


}

highlightButtonElement.addEventListener('click', highlightLinks);