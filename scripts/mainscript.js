let button = document.querySelector('#mainsubmit');
let textbox = document.querySelector('#mainentry');
let items = [];

button.addEventListener('click',() => {
    let itemvalue = textbox.value;
    items.push(itemvalue);
    textbox.value = "";
    console.log(itemvalue);
    console.log(JSON.stringify(items));
});
textbox.addEventListener('keydown', (event) => {
   if( event.keyCode == 13){
       let itemvalue = textbox.value;
       items.push(itemvalue);
       textbox.value = "";
       console.log(itemvalue);
       console.log(JSON.stringify(items));
   }
});
