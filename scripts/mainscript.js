let button = document.querySelector('#mainsubmit');
let textbox = document.querySelector('#mainentry');
let items = [];

button.addEventListener('click',() => {
    let itemvalue = textbox.value;
    items.push(itemvalue);
    textbox.value = "";
    displayList(itemvalue);
    console.log(itemvalue);
    console.log(JSON.stringify(items));
});
textbox.addEventListener('keydown', (event) => {
   if( event.keyCode === 13){
       let itemvalue = textbox.value;
       items.push(itemvalue);
       displayList(itemvalue);
       textbox.value = "";
       console.log(itemvalue);
       console.log(JSON.stringify(items));
   }
});

function displayList(x){
let linebox = document.querySelector("#entrypoint");
linebox.innerHTML += '<li class="unline">'+x+'</li><div class="buttonholder"> <input type="button" value="delete" class="deletebutton"></div>'
}
