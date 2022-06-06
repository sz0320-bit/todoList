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
linebox.innerHTML += '<div class="textholder"><div class="unline" id="line'+arraysize+'">'+x+'</div><div class="buttonholder" id="holder'+arraysize+'"> <input type="button" value="delete" class="deletebutton" id="delete'+arraysize+'"></div></div>'
    console.log()
}
/*
let deleted = document.querySelector(".deletebutton");

document.querySelector(".deletebutton").addEventListener('click', () =>{
    let deleteid = deleted.id-'delete';
    console.log(deleteid);
    //let linebox = document.querySelector("#entrypoint");
    //let bullet = document.querySelector('#line'+deleteid);
   // let box = document.querySelector('#holder'+deleteid);
   // let buttn = document.querySelector('#delete'+deleteid);
    //console.log((buttn+bullet+box));
    //linebox.remove(bullet);
   // linebox.remove(box);
   // linebox.remove(buttn);
});*/