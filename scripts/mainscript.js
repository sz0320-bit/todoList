let button = document.querySelector('#mainsubmit');
let textbox = document.querySelector('#mainentry');
let items = JSON.parse(localStorage.getItem('items')) || [];

const load = () => {
    let arraysize = items.length;
    let linebox = document.querySelector("#entrypoint");
for(let i = 0; i < items.length; i++) {
    linebox.innerHTML +=
        '<div class="textholder">' +
        '<div class="unline" id="line' + (i) + '" >' +
        '<input type="text" class="textbox" readonly value="' + items[i] + '" onfocusout="setsData(this);">' +
        '</div>' +
        '<div class="buttonholder" id="holder' + arraysize + '">' +
        ' <input type="button" value="edit" class="editbutton" id="edit' + (arraysize) + '" onclick="edits(this);">' +
        '<input type="button" value="delete" class="deletebutton" id="delete' + (arraysize - 1) + '" onclick="deletes(this);">' +
        '</div>' +
        '</div>'
}
    console.log()
}

window.onload = load();

button.addEventListener('click',() => {
    let itemvalue = textbox.value;
    items.push(itemvalue);
    textbox.value = "";
    displayList();
    console.log(JSON.stringify(items));
    localStorage.setItem('items',JSON.stringify(items));
});
textbox.addEventListener('keydown', (event) => {
   if( event.keyCode === 13){
       let itemvalue = textbox.value;
       items.push(itemvalue);
       displayList(itemvalue);
       textbox.value = "";
       console.log(itemvalue);
       console.log(JSON.stringify(items));
       localStorage.setItem('items',JSON.stringify(items));
   }
});

function displayList(){
    let arraysize = items.length;
let linebox = document.querySelector("#entrypoint");

    linebox.innerHTML +=
        '<div class="textholder">' +
            '<div class="unline" id="line' + (arraysize-1) + '" >' +
                '<input type="text" class="textbox" readonly value="' + items[arraysize-1] + '" onfocusout="setsData(this);">' +
            '</div>' +
            '<div class="buttonholder" id="holder' + arraysize + '">' +
                ' <input type="button" value="edit" class="editbutton" id="edit' + (arraysize) + '" onclick="edits(this);">' +
                '<input type="button" value="delete" class="deletebutton" id="delete' + (arraysize-1) + '" onclick="deletes(this);">' +
            '</div>' +
        '</div>'
    console.log()

}

function deletes(x){
    x.parentNode.parentNode.remove();
    const textval = x.parentNode.parentNode.firstChild.firstChild.value;
    console.log(textval);
    const textindex = items.indexOf(textval);
    items.splice(textindex,1);
    console.log(items.toString());
    localStorage.setItem('items',JSON.stringify(items));
}

function edits(x){
    x.parentNode.parentNode.firstChild.firstChild.removeAttribute('readonly');
    x.parentNode.parentNode.firstChild.firstChild.focus();
    localStorage.setItem('items',JSON.stringify(items));
}

function setsData(x){
    const lineId = x.parentNode.id.replace("line","");
    items[lineId] = "";
    items[lineId] += x.value;
    console.log(items)
    x.setAttribute("readonly",true);
    localStorage.setItem('items',JSON.stringify(items));
}


console.log((localStorage.getItem('items')));