const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
    //stop bubbling
    e.stopPropagation();
}

//Capture goes from top down
//Firing the click event -> Bubbling: goes from bottom up
divs.forEach(div => div.addEventListener('click', logText,{      capture: false,
    once: true
}));

//once: 
//listens for a click once and then unbinds itself from //the event listener -> example: stored checkouts, where button can only be clicked once