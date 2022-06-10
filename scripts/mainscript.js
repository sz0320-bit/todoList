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
    let arraysize = items.length;
let linebox = document.querySelector("#entrypoint");
linebox.innerHTML += '<div class="textholder"><div class="unline" id="line'+arraysize+'"><p>'+x+'</p></div><div class="buttonholder" id="holder'+arraysize+'"> <input type="button" value="edit" class="editbutton" id="edit'+arraysize+'" onclick="this.parentNode.parentNode.firstChild.firstChild.textContent.replace("bruh");"><input type="button" value="delete" class="deletebutton" id="delete'+arraysize+'" onclick="this.parentNode.parentNode.remove();"></div></div>'
    console.log()
}


