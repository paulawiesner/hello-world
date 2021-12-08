/* eslint-disable */

const SENTENCE = "Hello World!",
    WRITING_SPEED = 300;
var helloElement,
    timer;

function init() {
    helloElement = document.getElementById("hello_world");
    timer = setInterval(write, WRITING_SPEED);
}

function write() {
    let currentContent = helloElement.innerHTML;
    if(currentContent.length === SENTENCE.length){
        currentContent = "";
    } else {
        currentContent = currentContent + SENTENCE.charAt(currentContent.length);
    }
    helloElement.innerHTML = currentContent;
}

init();