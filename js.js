const send = document.querySelector('.send');
const name = document.querySelector('.name');
const image = document.querySelector('.image')
const comments = document.querySelector('.comments');
const chatImage = document.querySelector('.chat__image');
const chatName = document.querySelector('.chat__name');
const chatComments = document.querySelector('.chat__comments');

function capitalize(str) {
    return str.replace(/(^|\s)\S/g, (a) => {return a.toUpperCase()})
}

function SEND(){

    chatName.innerText=capitalize(name.value.toLowerCase());
    chatImage.src=image.value;
    chatComments.innerText=comments.value;
    name.value='';
    image.value='';
    comments.value='';

    let text = chatComments.innerText;
    text = text.replace(/viagra/gi, "***");
    text = text.replace(/xxx/gi, "***");
    chatComments.innerText = text;
}

send.addEventListener('click', SEND);



