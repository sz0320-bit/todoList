let button = document.querySelector('#mainsubmit');
let textbox = document.querySelector('#mainentry');
let items = [];

button.addEventListener('click',() => {
    let itemvalue = textbox.value;
    items.push(itemvalue);
    textbox.value = "";
    displayList();
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

function displayList(){
    let arraysize = items.length;
let linebox = document.querySelector("#entrypoint");

    linebox.innerHTML += '<div class="textholder">' +
        '<div class="unline" id="line' + arraysize + '">' +
        '<input type="text" readonly value="' + items[arraysize-1] + '">' +
        '</div>' +
        '<div class="buttonholder" id="holder' + arraysize + '">' +
        ' <input type="button" value="edit" class="editbutton" id="edit' + arraysize + '" onclick="edits(this)">' +
        '<input type="button" value="delete" class="deletebutton" id="delete' + arraysize + '" onclick="deletes(this);">' +
        '</div>' +
        '</div>'
    console.log()

}

function deletes(x){
    x.parentNode.parentNode.remove();
}

function edits(x){
    x.parentNode.parentNode.firstChild.firstChild.removeAttribute('readonly');
}